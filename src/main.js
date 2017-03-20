
import Vue from 'vue/dist/vue.js'
import VueResource from 'vue-resource'
import 'materialize-css/sass/materialize.scss'
import 'materialize-css/bin/materialize.js'
import './styles/global.scss'
import utils from './utils'

// Import Routes
import router from './router'

// Import components
import Base from './Base.vue'

// Import store
import store from './store'

Vue.use(VueResource)

$( document ).ready(function() {
  utils.manageSideNav()
})

var app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    'app-root': Base
  },
  data: {}
})