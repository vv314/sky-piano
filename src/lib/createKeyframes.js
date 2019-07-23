const ID = 'keyframes'
let stylesheet = document.getElementById(ID)
const ruleMap = {}

function createKeyframes(name, rules) {
  // keyframes 命名不能包含小数点
  name = name.replace('.', '_')

  if (ruleMap[name]) return name

  const content = `@keyframes ${name} {
    ${rules}
  }`

  if (stylesheet) {
    const sheet = stylesheet.sheet

    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
    sheet.insertRule(content, sheet.cssRules.length)
  } else {
    stylesheet = document.createElement('style')
    stylesheet.id = ID
    stylesheet.textContent = content
    document.head.appendChild(stylesheet)
  }

  // 加入记录
  ruleMap[name] = content

  return name
}

export default createKeyframes
