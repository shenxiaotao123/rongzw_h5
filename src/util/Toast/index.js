/**
 * 自定义提示框组件
 *
 * **/
var Toast = []
var showToast = false, // 提示框显示状态
  showLoad = false, // load显示状态
  toastVM = null, // vm
  loadNode = null
Toast.install = function (Vue, options) {
  // 默认参数
  var opt = {
    defaultType: 'bottom', // 位置
    duration: '2500', // 持续时间
    wordWarp: false
  }
  for (var property in options) {
    opt[property] = options[property]
  }

  Vue.property.$toast = function (tips, type) {
    var curType = type || opt.defaultType
    var wordWarp = opt.wordWrap ? 'lx-word-wrap' : ''
    var style = opt.width ? 'style :" width :' + opt.width + '"' : ''
    var tmp = '<div v-show="show" :class="type" class="lx-toast ' + wordWarp + '" ' + style + '>{{tip}}</div>'

    // 有显示，就返回，没有就显示，保证只有一个提示在页面上
    if (showToast) {
      return;
    }
  }
}
