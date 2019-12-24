import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // 动态路由
  // 难点企业权限管理
  routes: [
    // {
    //   path: '/',
    //   component: () => import('@/views/Main.vue'),
    //   children: [
    //     {
    //       path: '/',
    //       name: 'home',
    //       component: () => import('@/views/Home/Home')
    //     },
    //     {
    //       path: '/video',
    //       name: 'video',
    //       component: () => import('@/views/VideoManage/VideoManage')
    //     },
    //     {
    //       path: '/user',
    //       name: 'user',
    //       component: () => import('@/views/UserManage/UserManage')
    //     },
    //     {
    //       path: '/page1',
    //       name: 'page1',
    //       component: () => import('@/views/Other/PageOne')
    //     },
    //     {
    //       path: '/page2',
    //       name: 'page2',
    //       component: () => import('@/views/Other/PageTwo')
    //     }
    //   ]
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login')
    }
  ]
})

export default router
