function average(arr, fix) {
  const total = arr.reduce((sum, c) => (sum += c), 0)

  if (total === 0) return 0

  const avg = total / arr.length

  return fix ? Number(avg.toFixed(fix)) : avg
}

function now() {
  return (performance || Date).now()
}

class Stopwatch {
  constructor() {
    this.beginTime = 0
    this.prevTime = 0
    this._cursor = 0
    this._history = {
      ms: [],
      fps: []
    }
    this.maxRecords = 10
    this.frames = 0
  }

  start() {
    this.prevTime = this.beginTime = now()

    return this.beginTime
  }

  check() {
    return now() - this.beginTime
  }

  _record(name, val) {
    const records = this._history[name]

    records.unshift(Math.round(val))
    // 限制队列长度，避免过长影响计算性能
    records.length = Math.min(records.length, this.maxRecords)
  }

  tick() {
    const time = now()

    // 帧数打点
    this._frameMark()

    this._record('ms', time - this.beginTime)
    this.beginTime = time

    // 距离上次打点超过 1s
    if (time >= this.prevTime + 1000) {
      this._record('fps', this._getFrameRate(time))
    }

    return this
  }

  emptyFrame() {
    const time = now()

    // 帧数打点
    if (this.frames > 0) this.frames--

    // 距离上次打点超过 1s
    if (time >= this.prevTime + 1000) {
      this._record('fps', this._getFrameRate(time))
    }

    return this
  }

  _frameMark() {
    // 帧数打点
    this.frames++
  }

  _clearMark(time) {
    this.prevTime = time
    this.frames = 0
  }

  // 计算帧率
  _getFrameRate(time) {
    const rate = (this.frames * 1000) / (time - this.prevTime)

    this._clearMark(time)

    return rate
  }

  checkBeats(name = 'ms', count = 10, fix) {
    const records = this._history[name]
    const values = records.slice(0, Math.min(records.length, count))

    // console.log(name, 'records:', records)
    return average(values, fix)
  }
}

export default Stopwatch
