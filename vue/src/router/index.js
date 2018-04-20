import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import game from '@/components/game'
import hot from '@/components/hot'
import hotlist from '@/components/hot/hotlist'
// import me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/:type',
      component: index
    },
    {
      path: '/game',
      component: game
    },
    {
      path: '/hot',
      component: hot,
      children: [
        {
          path: '/hot/:type/:id',
          component: hotlist
        }
      ]
    },
    {
      path: '/*',
      redirect: '/index/all',
      component: index
    }
  ]
})
