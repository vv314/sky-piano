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

function fixOrientation() {
  const orientation =
    screen.msOrientation ||
    screen.mozOrientation ||
    (screen.orientation || {}).type
  const clientSize = getSize()

  if (
    orientation === 'portrait-secondary' ||
    orientation === 'portrait-primary'
  ) {
    return forceLandscape(clientSize)
  } else {
    return autoOrientation(clientSize)
  }
}

function forceLandscape(clientSize) {
  const info = { height: clientSize.width, width: clientSize.height }

  console.log('force landscape:', 'height', info.height, 'width', info.width)
  wintip.$('screen')('force,', 'height', info.height, 'width', info.width)

  return info
}

function autoOrientation(clientSize) {
  const size = [clientSize.height, clientSize.width].sort((a, b) => a - b)
  const info = { height: size[0], width: size[1] }

  console.log('auto orientation:', 'height', info.height, 'width', info.width)
  wintip.$('screen')('auto,', 'height', info.height, 'width', info.width)

  return info
}

export { getSize as default, screenInfo, fixOrientation }
