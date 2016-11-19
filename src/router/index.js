import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Blog from '../components/pages/Blog/Blog.vue'
import contents from '../components/pages/Blog/BlogContents'
Vue.use(Router)

console.log('contents',contents);
const Foo = { template: '<div>foo</div>' }


export const routes = [
  { path: '/foo1', component: Foo },
  {path: '/', component: Home},
  {path: '/blog', component: Blog}
]

console.log('conents , router , ',contents);
for(let i = 0 ;i<contents.length;i++){
  routes.push({path: '/blog/'+contents[i].title, component: contents[i].component})
}
routes.push({path: '*', redirect: '/'})
console.log('routes',routes);

export const router = new Router({
  mode: 'history',
  routes
})
