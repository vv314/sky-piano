function getCircleLength(el) {
  const r = el.r.baseVal.value

  return 2 * Math.PI * r
}

function getRectLength(el) {
  const width = el.width.baseVal.value
  const height = el.height.baseVal.value

  return (width + height) * 2
}

function getPathLength(shape, el) {
  const len = el.getTotalLength()

  if (len) return len

  // 对于不支持 SVGGeometryElement.getTotalLength API
  // 的环境手动计算
  if (shape === 'circle') {
    return getCircleLength(el)
  } else if (shape === 'rect') {
    return getRectLength(el)
  } else {
    return 0
  }
}

export default getPathLength
