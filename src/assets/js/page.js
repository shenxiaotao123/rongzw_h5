
import Vue from 'vue'

var page = function (_this, shux, path, itemsPerLoad, lastIndex) {
  _this.$ajax.get(path, {
    params: {
      itemsPerLoad: itemsPerLoad,
      lastIndex: lastIndex
    }
  }).then(function (response) {
    return response.data.data
  })
}
Vue.prototype.page = page
export {
  page
}
