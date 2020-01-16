<template>
    <div class="backcolor" style="padding-bottom: 20vw;">
      <mtitle :titleC="titleC"/>
      <ul class="zp white">
        <li>
          <img src="@/assets/img/home/baozhang.png" />&nbsp;&nbsp;
          正品保障
        </li>
        <li><img src="@/assets/img/tubiaolunkuo.png" />&nbsp;&nbsp;正规厂家</li>
        <li><img src="@/assets/img/rmb.png"/>&nbsp;先行赔付</li>
        <li><img src="@/assets/img/jiayipeishi.png" />&nbsp;&nbsp;假一赔十</li>
      </ul>
      <div class="white user_add" @click="$router.push({path:'/address'})">
        <p>张珊珊  <span class="gray">13566736699</span></p>
        <p>浙江省杭州市西湖区详细地址 <span><img src="@/assets/img/rightArrow.png" class="img"/></span></p>
      </div>
      <cart style="height: auto;"/>
      <div class="white order_detail">
        <p v-for="detail of orderDetail" :key="detail.id">
          <span class="gray">{{detail.type}}</span>
          <span class="right">
            <i v-if="!detail.input">{{detail.specific}}</i>
            <i v-show="detail.optional"> > </i>
            <i v-show="detail.radio"> <input type="checkbox" class="uiswitch"> </i>
            <i v-show="detail.input"> <input type="text" :placeholder="detail.specific" class="blackInput"> </i>
          </span>
        </p>
        <p class="right">
          <span class="gray">共{{order.amount}}件</span>     合计 <span class="cinnabar">￥{{order.price.toFixed(2)}}</span>
        </p>
        <div style="clear: both"></div>
      </div>
      <bmenu :totalPrice="order.price.toFixed(2)"/>
    </div>
</template>

<script>
import mtitle from '@/public/TextTitle.vue'
import cart from '@/public/ShopCart'
import bmenu from '@/public/ButtomMenu'
export default {
  name: 'MateriaOrderSettlement',
  components: {
    mtitle,
    cart,
    bmenu
  },
  data () {
    return {
      titleC: {
        type: 'text',
        content: '订单结算'
      },
      orderDetail: [
        {
          type: '优惠',
          specific: '省10元:8月收藏店铺送10元',
          optional: true
        },
        {
          type: '运费',
          specific: '商家包邮',
          optional: false
        },
        {
          type: '订单备注',
          specific: '选填,' +
          '请先和商家协商一致',
          input: true
        },
        {
          type: '开具发票',
          specific: '电子发票将在订单收货完成后开具',
          radio: true
        },
        {
          type: '发票类型',
          specific: '电子发票 - 明细',
          optional: true
        }
      ],
      order: {
        price: 580,
        amount: 2
      }
    }
  }
}
</script>

<style scoped>
.order_detail>p{
  margin: 0 5vw;
  border-bottom: .1vw solid #f7f7f7;
  height: 10vw;
  line-height: 10vw;
}
</style>
