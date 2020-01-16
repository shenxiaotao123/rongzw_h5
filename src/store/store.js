import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '1025',
    province: '933',
    area: '1026',
    lat: '',
    lng: '',
    designer: {},
    designerOrder: false,
    showToast: false,
    to: '',
    from: '',
    regions: []
  },
  actions: {

  },
  mutations: {
    url: function (state, to) {
      state.to = to[0]
      state.from = to[1]
    }
  }
})
