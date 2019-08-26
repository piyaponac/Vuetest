import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users/:userId',
      name: 'users',
      component: Users
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Comment
    }
  ]
})
