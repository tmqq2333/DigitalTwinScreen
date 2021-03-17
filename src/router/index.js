import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'xxx污水厂数字处理平台'
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: () => import('@/views/Brand.vue'),
    meta: {
      title: 'xxx污水厂数字处理平台'
    }
  },
  {
    path: '/Tem2',
    name: 'Tem2',
    component: () => import('@/views/Tem2.vue'),
    meta: {
      title: 'xxx污水厂数字处理平台'
    }
  },
  {
    path: '/Tem3',
    name: 'Tem2',
    component: () => import('@/views/Tem3.vue'),
    meta: {
      title: 'xxx污水厂数字处理平台'
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
