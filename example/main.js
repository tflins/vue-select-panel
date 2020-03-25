import Vue from 'vue'
import App from './App.vue'
import VueSelectPanle from '../packages/main.js'

Vue.config.productionTip = false

Vue.use(VueSelectPanle)

new Vue({
  render: h => h(App),
}).$mount('#app')
