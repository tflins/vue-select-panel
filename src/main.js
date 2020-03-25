import Vue from 'vue'
import App from './App.vue'
import VueSelectPanle from '@/components/VueSelectPanle'

Vue.config.productionTip = false

Vue.use(VueSelectPanle)

new Vue({
  render: h => h(App),
}).$mount('#app')
