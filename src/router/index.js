import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Blog from '../components/pages/Blog.vue'
Vue.use(Router)

export const routes = [
  {path: '/', component: Home},
  {path: '/blog', component: Blog},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
