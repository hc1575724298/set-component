<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-07-31 19:07:06
 * @LastEditors: sj
 * @LastEditTime: 2022-07-31 19:29:52
-->
<template>
   <div :class="[type,size]" @click="$emit('click')">
    <slot>按钮</slot>
   </div>
</template>

<script>
export default {
props:{
  type:{
    type:String,
    default: 'default'
  },
  size:{
    type: String,
    default:'middle'
  }
}
}
</script>

<style scoped>
  div {
  width: 50px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  background-color: #fff;
   border-radius: 4px;
  cursor: pointer;
 }
 .large {
  width: 240px;
  height: 50px;
  font-size: 18px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}
.dangers {
  border-color: #000;
  color: #000;
  background: red;
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>

