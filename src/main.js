/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-31 19:05:38
 * @LastEditors: sj
 * @LastEditTime: 2022-07-31 19:10:36
 */
import Vue from 'vue'
import App from './App.vue'

import hcUi from '@/components'
Vue.use(hcUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
