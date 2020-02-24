<template>
  <div style="width: 100% ; height: 100%;" >
    <div  class="title">
      <img src="../../assets/img/loginUser/back.png" class="titleLeft" @click="back"/>

      <span class="regular titlecenter">{{title}}</span>

    </div>

    <div class="body">
        <i class="icon-user"></i>
        <input    placeholder="手机号"  type="text"   /><br><br>
        <i class="icon-code" ></i>
        <input  placeholder="验证码"   class="codeInput"  type="text" />
        <button  class="text-code"> 获取验证码</button>
        <button class="btn-login">绑定</button>
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
      title: '手机号码绑定'
    }
  },
  methods: {

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
            background-color: #dd1a21 !important;
            height: 13vw;
            width: 82vw;
            color: white;
            font-family: PingFang-SC-Regular !important;
            margin-top: 5vw;
            font-size: 4vw;
          }
</style>
