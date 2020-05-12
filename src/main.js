import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('uppercase',(value)=>{
  if(!value) return ''
  return value.toUpperCase()
})

Vue.filter('prettyTime',(timeStemp)=>{
  if(!timeStemp) return ''
  return moment(timeStemp).format('LLL')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
