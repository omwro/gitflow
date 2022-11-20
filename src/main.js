import Vue from 'vue'
import App from '@/App'
import GitFlow from "@/GitFlow";

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
