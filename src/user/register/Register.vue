<template>
  <div style="width: 100% ; height: 100%;" >
    <div  class="title">
      <img src="../../assets/img/loginUser/back.png" class="titleLeft" @click="back"/>

      <span class="regular titlecenter">{{title}}</span>

    </div>

    <div class="body">
      <div v-show="!code">
        <i class="icon-user"></i>
        <input    placeholder="手机号"  type="text"   /><br><br>
        <i class="icon-code" ></i>
        <input  placeholder="验证码"   class="codeInput"  type="text" />
        <button  class="text-code"> 获取验证码</button>
        <button class="btn-login" @click="next">下一步</button>
      </div>

      <div v-show="code">
        <i class="icon-lock"></i>
        <input    placeholder="新密码（8-16位数字或字母）"  type="password" v-model="password"/><br><br>
        <i class="icon-lock" ></i>
        <input  placeholder="再次输入"     type="password" v-model="passagain" />
        <p>{{reStr}}</p>
        <button class="btn-login" @click="verification">完成</button>
      </div>

    </div>

  </div>
</template>

<script>
/* eslint-disable eqeqeq */

export default {
  name: 'Register',
  data: function () {
    return {
      password: '',
      passagain: '',
      reStr: '',
      code: false,
      title: '注册 （1/2）'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    verification: function () {
      if (this.password.length < 8 || this.password.length > 16) {
        this.reStr = '密码长度应在8-16位之间'
      } else if (!(this.password === this.passagain)) {
        this.reStr = '两次输入的密码不一致'
      } else {
        this.$router.push('/')
      }
    },
    next: function () {
      this.code = true
      this.title = '注册 （2/2）'
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
    top: 20vw;
    color: #333333;
    background-color: #f7f7f7 !important;
    font-size: 4vw;
  }
  .body{
    position: absolute;
    top:20vw;
    left: 10vw;
  }
  input{
    padding-left: 12vw;
    background-color: #f7f7f7;
    height: 13vw;
    width: 70vw;
    color: #999999;
    font-size: 4vw;

  }.icon-user{
     position: absolute;left: 0;
     z-index:5;
     background-image: url("../../assets/img/loginUser/phone.png");
     background-repeat: no-repeat; /*设置图片不重复*/
     background-position:90% 55%; /*图片显示的位置*/
     width: 8vw; /*设置图片显示的宽*/
     height: 13vw; /*图片显示的高*/
     background-size:50%;
   } .icon-lock{
       position: absolute;left: 0;
       z-index:5;
       background-image: url("../../assets/img/loginUser/lock.png");
       background-repeat: no-repeat; /*设置图片不重复*/
       background-position:90% 55%; /*图片显示的位置*/
       width: 8vw; /*设置图片显示的宽*/
       height: 13vw; /*图片显示的高*/
       background-size:50%;
     } .icon-code{
         position: absolute;left: 0;
         z-index:5;
         background-repeat: no-repeat; /*设置图片不重复*/
         background-position:70% 55%; /*图片显示的位置*/
         width: 10vw; /*设置图片显示的宽*/
         height: 13vw; /*图片显示的高*/
         background-size:50%;
         background-image: url("../../assets/img/loginUser/code.png");
       }  .btn-login{
            background-color: #108EE9 !important;
            height: 13vw;
            width: 82vw;
            color: white;
            font-family: PingFang-SC-Regular !important;
            margin-top: 5vw;
            font-size: 4vw;
          }
</style>
