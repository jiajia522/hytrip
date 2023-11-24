import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: () => import('@/views/home/home.vue')
  },{
    path: '/favor',
    component: () => import('@/views/favor/favor.vue')
  },{
    path: '/message',
    component: () => import('@/views/message/message.vue')
  },{
    path: '/order',
    component: () => import('@/views/order/order.vue')
  },{
    path: '/city',
    component: () => import('@/views/city/city.vue'),
    meta: {
      hideTabBar: true //隐藏tarbar
    }
  },{
    path: '/search',
    component: () => import('@/views/search/search.vue'),
    meta: {
      hideTabBar: true //隐藏tarbar
    }
  },{
    // 动态路由方式传递参数
    path: '/detail/:houseId',
    component: () => import('@/views/detail/detail.vue'),
    meta: {
      hideTabBar: true //隐藏tarbar
    }
  }
  ]
})

export default router
