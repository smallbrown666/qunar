import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//配置webpack config 可以设置任意字符 来替代./assets/style 路径 如$/reset.css
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

