import wintip from './wintip'

function screenInfo() {
  wintip.$('inner')('inH', window.innerHeight, 'inW', window.innerWidth)
  wintip.$('doc')(
    'dCH',
    document.documentElement.clientHeight,
    'dCW',
    document.documentElement.clientWidth
  )
  wintip.$('body')(
    'bCH',
    document.body.clientHeight,
    'bCW',
    document.body.clientWidth
  )
}

// window.innerHeight 在微信下存在 bug
// 因此使用 documentElement.clientWidth
function getSize() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
}

export { getSize as default, screenInfo }
