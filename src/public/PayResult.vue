<template>
<div class="backcolor">
  <mt :titleC="titleC"/>
  <div class="payResult white" v-if="payreturn">
    <p class="payTitle" >
      <img src="@/assets/img/pay/success.png" /> &nbsp;操作成功
    </p>
    <p class="payContent"  >
      完成线下支付后,<br>需要在我的-设计订单中 上传银行回单,<br>平台确认无误后,才算支付成功,<br> 可在订单详情中查看具体进度
    </p>
    <p>
      <button class="white_btn">查看订单</button>
    </p>
  </div>
  <div class="payResult white" v-if="!payreturn">
    <p class="payTitle" >
      <img src="@/assets/img/pay/fail.png" /> &nbsp;支付失败
    </p>
    <p class="payContent"  >
      请在30分钟内支付订单 <br>否则订单将被自动取消
    </p>
    <p>
      <button class="white_btn" @click="$router.push({path:'/materialSettlement'})">查看订单</button>&nbsp;&nbsp;
      <button class="red_btn" @click="back">重新付款</button>
    </p>
  </div>
  <div class="white address ">
    <p>张珊珊  <span class="gray">13566736699</span></p>
    <p style="border-bottom: .1vw solid #f7f7f7;">浙江省杭州市西湖区详细地址</p>
  </div>
    <p class="white address " style="    height: 9vw;">
     实付
      <i class="right">￥500.00  </i>
    </p>

  <div class="white" style="padding: 12vw 0 3vw 14vw;">
      <span class="line"></span>
      大家都在买
      <span class="line"></span>
  </div>

  <div class="white">
    <div class="forYou left" v-for="(shop,index) in shops" :key="index" @click="showDetail(shop.id)">
      <div style="    height: 20vw;    width: 40vw;"><img class="img" style="border-radius: 2vw" :src="shop.avatar"/></div>
      <p>{{shop.name}}</p>
      <p>
        <span class="cinnabar">￥{{shop.price}} </span>
        <span class="right gray">{{shop.payPeople}}人付款 </span>
      </p>
    </div>
    <div style="clear: both"><br/></div>
  </div>
</div>
</template>

<script>
import mt from '@/public/TextTitle'
export default {
  name: 'PayResult',
  components: {
    mt
  },
  data () {
    return {
      titleC: {
        type: 'text',
        content: '支付结果'
      },
      shops: [
        {
          id: 1,
          name: '菲林格尔多层实木地板',
          avatar: require('@/assets/img/home/jaincai/tuijian.jpg'),
          price: 500,
          payPeople: 122
        },
        {
          id: 2,
          name: '菲林格尔多层实木地板',
          avatar: require('@/assets/img/home/jaincai/tuijian.jpg'),
          price: 500,
          payPeople: 122
        },
        {
          id: 3,
          name: '菲林格尔多层实木地板',
          avatar: require('@/assets/img/home/jaincai/tuijian.jpg'),
          price: 200,
          payPeople: 122
        }
      ],
      from: this.$route.query.from
    }
  },
  computed: {
    payreturn () {
      return false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .white_btn{
    padding:1vw 2vw;
  }
  .red_btn{
    padding:1vw 2vw;
  }
  .line{
    display: inline-block;
    width: 25vw;
    border-top: 0.1vw solid #ccc;
    padding-top: 1.5vw;
  }
  .payContent{
    padding:  5vw;
    line-height: 5vw;
    font-size: xx-small;
  }
  .payResult{
    text-align: center;
    padding-top: 9vw;
    padding-bottom: 6vw;
    margin-bottom: 2vw;
  }
  .payTitle{
    font-size: 6vw;
    font-weight: 600;
  }
  .payResult p img{
    width: 7vw;
    height: 7vw;
  }

  .address>p:nth-child(1){
    font-size: large;
  }
  .address>p:nth-child(1)>span{
    color: #999999;
    font-size: initial;
    margin-left: 3vw;
  }
  .address{
    height: 20vw;
    margin-bottom: 1vw;
    line-height: 10vw;
    padding: 0 6vw;
  }

  .forYou>p{
    height: 12%;
    line-height: 10vw;
  }
  .forYou>div{
    height: 65%;
  }
  .forYou{
    height: 35vw;
    width: 40.5%;
    margin-left: 6vw;
  }
</style>
