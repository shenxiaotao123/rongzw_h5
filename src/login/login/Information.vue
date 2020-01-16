<template>
  <div>
    <button class="user back_white" :class="{'color':isPhone}" @click="change">账号登陆</button>
    <button class="code back_white" :class="{'color':!isPhone}" @click="change">验证码登陆</button><br><br><br>
    <div>
      <i class="icon-user"></i>
      <input    placeholder="手机号码"  type="text"   /><br><br>
      <i class="icon-pass" v-show="isPhone"></i>
      <i class="icon-code"  v-show="!isPhone"></i>
        <input  placeholder="密码" v-show="isPhone"   type="password" />
        <input  placeholder="验证码" v-show="!isPhone"  class="codeInput"  type="text" />
      <button v-show="!isPhone" class="text-code"> 获取验证码</button>
    </div><br>
    <button class="btn-login">登 陆</button>
    <br><br>
    <button style="color:#999999;" class="back_white" @click="forgetPass">忘记密码</button>
    <button style="position: absolute;right: 16vw;color:#C82126;" class="back_white" @click="register">立即注册</button>
  </div>
</template>

<script>
export default {
  name: 'Imformation',
  data: function () {
    return {
      isPhone: true
    }
  },
  methods: {
    change (el) {
      if (el.target.innerHTML === '验证码登陆') {
        this.isPhone = false
      } else {
        this.isPhone = true
      }
    },
    forgetPass: function () {
      console.log(this)
      this.$router.push('/pass')
    },
    register: function () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
  .text-code{
    position: absolute;
    left: 60vw;
    z-index: 5;
    background-size: 30%;
    top: 31vw;
    color: #333333;
    background-color: #f7f7f7 !important;
  }
  .codeInput{
    padding-right:20vw;
    width: 50vw;
  }
  .color{
    color: #108EE9;
  }
  input{
    padding-left: 12vw;
    background-color: #f7f7f7;
    height: 13vw;
    width: 70vw;
    color: #999999;
    font-size: 4vw;
  }
  .btn-login{
    background-color: #108EE9 !important;
    height: 13vw;
    width: 82vw;
    color: white;
    font-family: PingFang-SC-Regular !important;
  }
  .icon-user{
    position: absolute;left: 0;
    z-index:5;
    background-image: url("../../assets/img/loginUser/phone.png");
    background-repeat: no-repeat; /*设置图片不重复*/
    background-position:90% 55%; /*图片显示的位置*/
    width: 8vw; /*设置图片显示的宽*/
    height: 13vw; /*图片显示的高*/
    background-size:50%;
  }
  .icon-pass{
    position: absolute;left: 0;
    z-index:5;
    background-image: url("../../assets/img/loginUser/password.png");
    background-repeat: no-repeat; /*设置图片不重复*/
    background-position:90% 55%; /*图片显示的位置*/
    width: 8vw; /*设置图片显示的宽*/
    height: 13vw; /*图片显示的高*/
    background-size:50%;
  }
  .icon-code{
    position: absolute;left: 0;
    z-index:5;
    background-image: url("../../assets/img/loginUser/code.png");
    background-repeat: no-repeat; /*设置图片不重复*/
    background-position:100% 55%; /*图片显示的位置*/
    width: 8vw; /*设置图片显示的宽*/
    height: 13vw; /*图片显示的高*/
    background-size:65%;
  }
  .user{
    position: absolute;
    left: 12vw;
    font-size: 4.5vw;
  }
  .code{
    position: absolute;
    right: 26vw;
    font-size: 4.5vw;
  }
</style>
