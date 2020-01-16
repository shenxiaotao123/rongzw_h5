<template>
<div style="height: 100%;" class="pageColor">
<!--
  <div class="mytitle" style="position: relative">
    <div style="height:20vw;position: absolute;top: 10vw;width: 100%">

      <img src="../assets/img/loginUser/headPortrait.png" />
      <span class="medium fontWhite" style="margin-left: 3vw;font-size: 5vw;font-weight: 600;">昵称</span>

      <img src="../assets/img/rightWhite.png" class="right" style="    height: 35%;margin-top: 5vw;"/>
    </div>
  </div>
  &lt;!&ndash;图标开始&ndash;&gt;
  <div class="effect" style="margin: 0;height: 53vw;">
    <div >
      <button class="white">
        <img src="../assets/img/my/shigong.png" /><br>
        施工订单
      </button>
      <button class="white">
        <img src="../assets/img/my/sheji.png" /><br>

        设计订单
      </button>
      <button class="white">
        <img src="../assets/img/my/jiancai.png" /><br>
        主材订单
      </button>
      <button class="white" style="position: relative">
        <img src="../assets/img/my/jindu.png" /><br>
        工程进度
        <button class="tip_btn"  style="    position: absolute;
right: 3vw;
    top: 9px;
    ">1</button>
      </button>
    </div>
    <div>
      <button class="white">

        <img src="../assets/img/my/zhibo.png"/><br>
       工地直播
      </button>
      <button class="white">
        <img src="../assets/img/my/baoxiu.png"/><br>
       我的保修
      </button>
      <button class="white">
        <img src="../assets/img/my/quan.png" /><br>
       抵金卷
      </button>
      <button class="white">
        <img src="../assets/img/my/kefu.png"/><br>
        电话客服
      </button>
    </div>

  </div>
  &lt;!&ndash;图标结束&ndash;&gt;
&lt;!&ndash;设置我的家&ndash;&gt;
  <div class="white" style="    height: 9vw;
    font-size: 4vw;
    padding: 2vw 5vw 0;
    margin-bottom: 3vw;">
    <p class="regular" style="height: 100%;">
      <img src="../assets/img/my/yugang.png" style="margin-right: 3vw"/>
      设置我的家 开启个性化定制
      <img src="../assets/img/rightArrow.png" class="right" style="height: 5vw;"/>
      </p>
  </div>
  &lt;!&ndash;设置我的家&ndash;&gt;

  &lt;!&ndash;更多工具&ndash;&gt;
  <div class="white">
  <p style="height: 6vw;
    padding: 3vw 5vw 0px;
    font-weight: 600;
    font-size: 5vw;">更多工具</p>
    <div class="effect" style="margin: 0; ">
      <div >
        <button class="white">
          <img src="../assets/img/my/jisuan.png" /><br>
          算报价
        </button>
        <button class="white">
          <img src="../assets/img/my/baojia.png" /><br>
          问报价
        </button>
        <button class="white">
          <img src="../assets/img/my/celiang.png"/><br>
         量房屋
        </button>
        <button class="white">
          <img src="../assets/img/my/guanyu.png" /><br>
          关于荣装
        </button>
      </div>
    </div>
  </div>
  &lt;!&ndash;更多工具&ndash;&gt;-->
</div>
</template>

<script>
export default {
  name: 'my'
}
</script>

<style scoped>
.mytitle img{
  height: 100%;
  margin-left: 10vw;
}

  .mytitle{
    background-image: url(" ../assets/img/my/titleBack.png");
    width: 100%;
    height: 42vw;
    background-repeat: no-repeat;
    background-size: 120% 100%;
  }
  button{
    width: 24%;
  }
  .effect img{
    height: 36% !important;
  }
</style>
