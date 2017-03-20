import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import routes from './routes2'

Vue.use(VueRouter);

const base = (location.pathname.indexOf('rdj')) ? location.pathname : '/';

const router = new VueRouter({
  base: location.pathname,
  routes
});
router.beforeEach((to, from, next) => {
	next()
})

export default router;