<template>
  <div style="width: 100% ; height: 100%;" >

    <div  class="title">
      <img src="../../assets/img/loginUser/back.png" class="titleLeft" @click="back"/>

      <span class="regular titlecenter">第三方登陆</span>

    </div>

    <div class="body">
      <span class="font">XXX , 开启您美好生活的第一步</span>
      <button class="btn-login">新用户直接进入</button>
      <p class="font">或</p>
      <button class="btn-login old-user">已有账号，立即绑定</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'OtherLogin',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .font{
    font-weight: 400;
    font-size: 5vw;
  }
  .back{
    position: absolute;top: 2%;left: 4.4%;
  }
  .btn-login{
      background-color: #108EE9 !important;
      height: 13vw;
      width: 82vw;
      color: white;
      font-family: PingFang-SC-Regular !important;
      margin: 8vw 0 8vw 0;
      font-size: 4vw;

    }
  .body{
    position: absolute;
    top:30vw;
    text-align: center;
  }
  .old-user{
    border:0.1vw solid #cacaca;
    color: #999999 !important;
    background-color: white !important;
  }

</style>
