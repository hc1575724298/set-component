<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-31 19:05:38
 * @LastEditors: sj
 * @LastEditTime: 2022-08-01 15:43:23
-->
<template>
  <div>
    <hc-button></hc-button>
    <hc-button type='primary' size="mini" @click="clickBtn">
      <span style="color: pink;">登</span>
      <span style="color: skyblue;">陆</span>
      </hc-button>

      <hc-progressBar size="large" color="red" process="100" @finished="fn"></hc-progressBar>
      <hc-progressBar size="middle" type="square" @finished="fun"></hc-progressBar>
      <hc-progressBar size="small"></hc-progressBar>
      <hc-progressBar size="mini"></hc-progressBar>
      <hc-progressBar></hc-progressBar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  methods: {
   clickBtn(){
    console.log(111);
   },
   fn(){
    console.log('100%');
   },
   fun(){
    console.log(112);
   }
  }
}
</script>

<style scoped>

</style>
