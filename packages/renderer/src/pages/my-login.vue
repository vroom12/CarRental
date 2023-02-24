<script setup lang="ts">
import LoginIndex from '/@/components/Login/LoginIndex.vue';
</script>

<template>
  <div class="my-login">
    <div class="my-login-form">
      <div class="title"> 登陆注册 </div>
      <login-index class="login"></login-index>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  border: 1px solid #e8e8e8;
  .title {
    text-align: center;
    font-size: 20px;
    padding: 20px;
  }
  .login {
    border: 1px solid #e8e8e8;
    padding: 20px;
  }
}
</style>
