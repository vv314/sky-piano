import { Player } from 'midi-player-js'
// const { Player } = require('midi-player-js')
// var fs = require('fs')
// const { parseMidi } = require('midi-file')

// const file = process.cwd() + '/src/assets/star.mid'
// const input = fs.readFileSync(file)

const player = new Player()
const _cacheMap = { __sort__: [] }
// 是否全曲播放结束
let isEnd = true
let currentName = ''

player.on('endOfFile', () => {
  isEnd = true
})

function setCache(name, val) {
  if (_cacheMap.__sort__.length > 5) {
    const outdateName = _cacheMap.__sort__.shift(0)

    delete _cacheMap[outdateName]
  }

  const now = Date.now()

  _cacheMap[name] = {
    time: now,
    val: val
  }

  const index = _cacheMap.__sort__.map(d => d.name).indexOf(name)

  if (index < 0) {
    _cacheMap.__sort__.push({ name, time: now })
  } else {
    _cacheMap.__sort__[index] = { name, time: now }
  }

  // 按时间顺序递增
  _cacheMap.__sort__.sort((a, b) => a.time - b.time)
}

function getCache(name) {
  return _cacheMap[name]
}

async function getMid(name, preset) {
  const baseUrl = process.env.PUBLIC_URL + '/static/midi/'
  const url = preset ? baseUrl + name : name
  const response = await fetch(url)

  if (response.ok) {
    const arrayBuffer = await response.arrayBuffer()

    return arrayBuffer
  } else {
    throw new Error(`could not load ${url}`)
  }
}

function load(dataUri, name) {
  const cacheName = `B64_${name}`

  if (getCache(cacheName)) return this

  // Load a MIDI file
  player.loadDataUri(dataUri)
  setCache(cacheName, dataUri)

  console.log('[player]', 'load', 'tracks', player.tracks.length)
  isEnd = false
  currentName = name

  return this
}

async function loadUrl(name = 'star.mid', preset = true) {
  const cacheName = 'BUFF_' + name
  if (getCache(cacheName)) return this

  return getMid(name, preset).then(arrayBuffer => {
    // Load a MIDI file
    player.loadArrayBuffer(arrayBuffer)
    setCache(cacheName, arrayBuffer)

    console.log('[player]', 'load', `${name},`, 'tracks', player.tracks.length)
    isEnd = false
    currentName = name

    return this
  })
}

function setEventProxy(eventEmitter) {
  const events = ['play', 'fileLoaded', 'midiEvent']
  const sleepEvents = ['pause', 'stop', 'endOfFile']

  events.concat(sleepEvents).forEach(name => {
    player.on(name, (...args) => {
      eventEmitter.emit(`player:${name}`, args)
    })

    if (sleepEvents.indexOf(name) > -1)
      player.on(name, () => {
        eventEmitter.emit(`player:sleep`)
      })
  })

  return this
}

export default {
  load,
  loadUrl,
  setEventProxy,
  isPlaying() {
    return player.isPlaying()
  },
  getState() {
    return {
      isEnd: isEnd,
      name: currentName
    }
  },
  play() {
    player.triggerPlayerEvent('play')
    player.play()
  },
  toggle() {
    if (player.isPlaying()) {
      player.pause()
    } else {
      player.play()
    }
  },
  pause() {
    // 自定义暂停事件
    player.triggerPlayerEvent('pause')
    player.pause()
  },
  on(name, cb) {
    player.on(name, cb)
  },
  stop() {
    isEnd = true
    player.triggerPlayerEvent('stop')
    player.stop()
  }
}

// fs.writeFileSync('startBuffer.json', input.toString('base64'), {
//   encoding: 'utf-8'
// })
// console.log(parseMidi(input))
