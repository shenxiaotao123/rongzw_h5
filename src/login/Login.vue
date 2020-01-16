<template>
    <div>

        <img src="@/assets/img/loginUser/back.png" class="back">

      <head-portrait class="head"></head-portrait>
      <information class="loginInformation"></information>
      <div class="other">
        <span class="line"></span>
        <span class="txt">其他登陆方式</span>
        <span class="line"></span>

        <img src="@/assets/img/loginUser/qq.png" class="qq" @click="otherLogin">
        <img src="@/assets/img/loginUser/wx.png" class="vx" @click="otherLogin">

      </div>
    </div>
</template>

<script>
import '@/assets/style/login.css'
import HeadPortrait from './login/HeadPortrait'
import Information from './login/Information'
export default {
  name: 'Login',
  components: {
    HeadPortrait,
    Information
  },
  methods: {
    otherLogin: function () {
      this.$router.push('/otherLogin')
    }
  },
  data: function () {
    return {
      isPhone: false
    }
  }
}
</script>

<style scoped>
  .other{
    position: absolute; left: 22.53%;
    height: 100%;
  }
  .line{
    display: inline-block;
    width: 15vw;
    border-top: 1px solid #ccc ;
  }
  .txt {
    color: #686868;
    vertical-align: middle;
  }
  .qq{
    position: absolute;
    top: 8.99%;
    left: 40%;
  }
  .vx{
    position: absolute;
    top: 8.99%;
    left: 6%;
  }
</style>
