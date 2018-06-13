import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import wx from 'wx'

Vue.use(Router)

if (!wx) {
  routes.unshift({
    path: '/',
    name: 'Main',
    redirect: '/pages/main/test',
    component: () => require('@/webApp')
  })
}

export default new Router({
  routes: routes.map(route => {
    if (route.path === '/') return route
    const paths = route.path.replace(/^\//, '').split('/')
    route.component = () => import(`@/${paths[0]}/${paths[1]}/${paths[2]}`)
    return route
  })
})
