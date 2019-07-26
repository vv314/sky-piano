function getUrlParam(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const value = window.location.search.substr(1).match(reg)

  return value === null ? null : decodeURI(value[2])
}

function random(max = 1, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function findEl(x, y, finder) {
  let elm = document.elementFromPoint(x, y)

  while (elm) {
    const item = finder(elm)

    if (item) return item

    elm = elm.parentNode
  }
}

function hasParent(c, p) {
  while (c) {
    if (c == p) return true

    c = c.parentNode
  }

  return false
}

export { getUrlParam, random, findEl, hasParent }
