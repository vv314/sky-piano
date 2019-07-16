function getUrlParam(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const value = window.location.search.substr(1).match(reg)

  return value === null ? null : decodeURI(value[2])
}

function random(max = 1, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { getUrlParam, random }
