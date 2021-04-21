import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'
import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

Vue.use(vueParticles)
Vue.use(Vcomp)

Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。避免无用的体积

Vue.prototype.$Toast = Toast

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
