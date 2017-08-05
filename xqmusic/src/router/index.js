import Vue from 'vue'
import Router from 'vue-router'
import Xqmusic from '@/components/Xqmusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Xqmusic',
      component: Xqmusic
    }
  ]
})
