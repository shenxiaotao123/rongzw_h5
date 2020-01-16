import Vue from 'vue'
import axios from 'axios'

const HTTP = axios.create({
  baseURL: 'http://admintest.rongzw.com', // 这是基础url
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})

Vue.prototype.http = HTTP

export default {}
