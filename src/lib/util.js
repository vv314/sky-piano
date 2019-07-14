function getUrlParam(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const value = window.location.search.substr(1).match(reg)

  return value === null ? null : decodeURI(value[2])
}

export { getUrlParam }
