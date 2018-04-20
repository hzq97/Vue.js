// 设置动态修改html的fontSize的函数
function setHtmlFontSize () {
  var htmlFontSize = 16
  var cW = 375
  var newCW = document.documentElement.clientWidth || document.body.clientWidth
  var newHtmlFontSize = newCW * htmlFontSize / cW
  document.documentElement.style.fontSize = newHtmlFontSize + 'px'
}
window.onload = function () {
  setHtmlFontSize()
}
window.onresize = function () {
  setHtmlFontSize()
}
