import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
})
