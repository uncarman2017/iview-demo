// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 应用程序入口
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Router from './router'
import iView from 'iview'
// import '../my-theme/dist/iview.css'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

// The routing configuration
// const RouterConfig = {
//   routes: Router
// }
// const router = new VueRouter(RouterConfig)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router: router,
//   render: h => h(App)
//   // components: { App },
//   // template: '<App/>'
// })
/* eslint-disable */
const app = new Vue({
  router: Router,
  render: h => h(App)
})

app.$mount('#app')
