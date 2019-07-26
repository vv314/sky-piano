/**
 * 触发广播
 * @function
 * @param {String} event 事件名称
 * @param {Array} args 事件回调时的arguments参数
 */
function emit(event, args) {
  const cbs = this._evtMap[event]

  if (cbs) {
    // 务必使用 slice 创建副本遍历
    // 防止调用 off 时影响调用循环
    cbs.slice().forEach(fn => {
      fn.apply(null, [].concat(args))
    })
  }
}

/**
 * 订阅广播
 * @function
 * @param {String} evennt 事件名称
 * @param {Function} fn 事件回调函数
 */
function on(event, fn) {
  if (this._evtMap[event]) {
    this._evtMap[event].push(fn)
  } else {
    this._evtMap[event] = [fn]
  }
}

/**
 * 取消订阅
 *
 * @function
 * @param {String} name 事件名称
 * @param {Function} cb 事件回调函数
 */
function off(name, cb) {
  if (this._evtMap[name] && cb) {
    const index = this._evtMap[name].indexOf(cb)

    if (index > -1) {
      return this._evtMap[name].splice(index, 1)[0]
    }
  }

  // @FIXME 危险区域
  if (!cb) {
    if (this._evtMap[name]) {
      this._evtMap[name] = []
    }
  }
}

function Events() {
  this._evtMap = {}
}

Events.prototype.emit = emit
Events.prototype.off = off
Events.prototype.on = on

export default {
  _evtMap: {},
  emit,
  off,
  on
}

export { Events }
