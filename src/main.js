// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from 'components/App.vue'
import 'normalize.css'
import './assets/reset.scss'
import 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from 'store/index.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    msg(message, type) {
      if(!message){
        message = '通知'
      }
      if(!type){
        type = 'success'
      }
      this.$message({
        message,
        type
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App },
  store, //注入子组件
})
