import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogList: [],
    comments: null,
    blogContent: null
  },
  getters,
  actions,
  mutations
})
