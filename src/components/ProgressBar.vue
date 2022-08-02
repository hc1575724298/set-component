<!--
 * @Descripttion: 
 * @version: 
 * @Author: suiyue
 * @email: 1373842098@qq.com
 * @Date: 2022-08-01 14:25:06
 * @LastEditors: sj
 * @LastEditTime: 2022-08-01 15:53:41
-->
<template>
  <div class="box" :class="[size,type]" >
    <div 
    class="progress" 
    :class="[type]"
    :style="{backgroundColor:color, width: process+'%'}">
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color:{
      type: String,
      default: 'aquamarine'
    },
    size:{
      type: String,
      default: ''
    },
    process:{
      type: [String,Number],
      default: '50'
    },
    type:{
      type: String,
      default: ''
    }
  },
  watch:{
    process:{
      immediate: true,
      handler(){
       if (this.process == '100'){
        // 进度条完成100% 才可以执行 finished 事件
        this.$emit('finished')
      }
     }
    }
  },
  data() {
    return {
    };
  } ,
  methods:{
  }
};
</script>
<style  scoped>
  .box {
    width: 300px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 15px;
  }
  .progress{
    width: 50%;
    height: 100%;
    background-color: aquamarine;
     border-radius: 25px;
     display: flex;
     justify-content: center;
     align-items: center;
  }
/* 大小 */
  .large {
    width: 800px;
    height: 50px;
   border-radius: 25px;
  }
  .middle {
    width: 600px;
    height: 35px;
    border-radius: 18px;
  }
  .small {
    width: 400px;
    height: 30px;
    border-radius: 15px;
  }
  .mini {
    width: 200px;
    height: 25px;
    border-radius: 12px;
  }
  /* 类型 */
   /* 默认外圆里圆 */
   /* 里外都是方形 */
  .square {
    border-radius: 0;
  }
   /*  */
</style>