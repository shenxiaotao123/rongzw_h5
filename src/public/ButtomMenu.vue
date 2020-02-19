<template>
  <div class="buttom_menu">
    <p class="mode" v-if="route ==='/shopCart'">
      <input type="checkbox" name="pay" id="all" @change="emit" value="checkAll" >
      <label for="all" >全选</label>
      &nbsp;
      合计<span class="cinnabar" style="font-size: 6vw">￥{{totalPrice}}</span>
      <button class="red_btn jiesuan">结算</button>
    </p>

    <p class="mode" v-if="route.indexOf('materialSettlement')>-1">
      实付&nbsp;<span class="cinnabar" style="font-size: 6vw">￥{{totalPrice}}</span>&nbsp;&nbsp;&nbsp;
      <span class="gray" style="font-size: 4vw;width: 30%;text-align: center">共2件</span>
      <button class="red_btn jiesuan" @click="$router.push({path: '/payment',query:{from:$route.path}})">提交订单</button>
    </p>
    <p v-if="route.indexOf('materialShopDetail')>-1 ||route.indexOf('materialReviews')>-1" class="">

      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="to('/store?id='+$route.query.id)"/>
        <van-goods-action-icon icon="chat-o" text="客服" @click="$emit('al')"/>
        <van-goods-action-icon icon="cart-o" text="购物车" @click="$emit('al')" info="12" />
        <van-goods-action-button type="warning" text="加入购物车" @click="$emit('al')" />
        <van-goods-action-button type="danger" text="立即购买" @click="$emit('al')" />
      </van-goods-action>

    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant'

Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)

export default {
  name: 'ButtomMenu',
  props: ['totalPrice'],
  data () {
    return {
      msgObj: {
        left: false,
        position: 'middle',
        from: 'down'
      },
      route: this.$route.path
    }
  },
  methods: {
    to: function (url) {
      this.$router.push({path: url})
    }
  }
}
</script>

<style scoped>
  .fr { float:right;}
  .menu .btn{
    padding: 2vw 5vw;
    border-radius: 6vw;
    font-size: medium;
    margin:1vw 2vw 0 2vw;
  }
  .menu>img{
    width: 5vw;
    height: 5vw;
    margin-left: 4vw;
  }
  .menu{
    line-height: 13vw;
    border-top: 1px solid #eee;
  }
  .jiesuan{
    padding: 2vw 8vw;
    border-radius: 4vw;
    float: right;
    margin-top: 1vw;
  }

  .mode>input:checked+label::after{
    display: inline-block;
    content: "";
    position: absolute;
    left: 1.5vw;
    bottom: 1.2vw;
    width: 1.5vw;
    height: 2vw;
    border-color: white;
    border-style: solid;
    border-width: 0 .5vw .5vw 0;
    transform: rotate(45deg);
  }
  .mode>input:checked+label::before{
    background-color: rgb(239, 66, 56);
  }
  .mode>label:before{/*在label前面加上东西*/
    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgb(219, 219, 219);
    margin-right: 6px;
    vertical-align: middle;
  }
  .mode>label{
    position: relative;
  }
  .mode>input{/*隐藏原来的点*/
    display: none;
  }
  .mode{
    padding: 0 6vw;line-height: 13vw;font-size: large;
  }
  .buttom_menu{
    background-color: white;
    height: 13vw;
    width: 100%;
    bottom: 0;
    z-index: 100000;
    position: fixed;
  }
</style>
