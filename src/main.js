import Vue from 'vue'
import GitFlow from "@/GitFlow";

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(GitFlow) },
}).$mount('#gitflow')
