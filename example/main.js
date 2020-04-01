import Vue from 'vue'
import App from './App.vue'
import VueSelectPanel from '../packages/main.js'

Vue.config.productionTip = false

Vue.use(VueSelectPanel)

new Vue({
  render: h => h(App),
}).$mount('#app')
