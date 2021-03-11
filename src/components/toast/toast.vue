
<template>
   <!-- 全局提示框 -->
   <div v-show="visible" class="dialog-tips dialog-center">
     <div>{{message}}</div>
   </div>
</template>

<script>
export default {
  data() {
      return {
        visible: false,
        message: ""
      };
  }
};
</script>
<style lang="less">
  .dialog-tips{
      position: fixed;
      z-index: 100;
      min-width: 220px;
      padding: 30px 20px;
      white-space: nowrap;
      background: rgba(0, 0, 0, 1);
      box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
      text-align: center;
      border-radius: 20px;
      color: #ffffff;
      font-size:24px;
      .dialog-tips-icon{
        width: 54px;
        height: 54px;
        display: inline-block;
        margin-bottom: 13px;
      }
  }
  .dialog-center {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
  }
</style> 