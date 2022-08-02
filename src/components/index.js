/*
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-31 19:07:43
 * @LastEditors: sj
 * @LastEditTime: 2022-08-01 14:38:56
 */
import hcButton from './Button.vue'
import hcProgressBar from './ProgressBar.vue'

export default {
  install (Vue) {
    Vue.component('hc-button', hcButton)
    Vue.component('hc-progressBar', hcProgressBar)
  }
}