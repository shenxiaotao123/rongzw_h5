<template>
    <div>
      <mtitle :titleC="titleC"/>
      <van-tabs v-model="active">
        <van-tab title="全部 12 ">
          <div class="back_white padder-v">
            <!-- 优惠券列表 -->
            <div class="yhj">
              <button class="red_red_brn yhjL">
                ￥<i style="font-size: xx-large;">80</i><br/>满499元可用
              </button>
              <div class="left yhjR">
                <p>
                  <button class="red_red_brn">店铺卷</button>
                  仅可购买海尔冰箱官方旗舰店商品
                </p>
                <p style=" font-size: xx-small; position: absolute;    bottom: 6vw;" class="gray">不包含特价商品</p>
                <p style="font-size: xx-small;    position: absolute;    bottom: 0vw; width: 100%">
                  2019.08.28-2019.09.28
                  <button class="red_red_brn right" style="margin-right: 3vw;width: 20vw">立即领取</button>
                </p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="未使用 1">内容 2</van-tab>
        <van-tab title="已使用 3">内容 3</van-tab>
        <van-tab title="已失效 8">内容 4</van-tab>
      </van-tabs>

    </div>
</template>

<script>
  import Vue from 'vue';
  import { Tab, Tabs,CouponCell,CouponList } from 'vant';
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(CouponCell);
  Vue.use(CouponList);


  const coupon = {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元'
  };


  export default {
    name: "lookUpM",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '我的优惠券',
          chosenCoupon: -1,
          coupons: [coupon],
          disabledCoupons: [coupon]
        }
      }
    },
    methods: {
      onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
      },
      onExchange(code) {
        this.coupons.push(coupon);
      }
    }
  }
</script>

<style scoped>
  .yhjR>p>button{
    padding: .1vw 3vw;
    border-radius: 5vw;
    font-size: 12px;
  }
  .yhjR>p{
    line-height: 6vw;
    height: 33%;
  }
  .yhjR{
    width: 71%;
    padding: 1vw 0 0 2vw;
    height: 100%;
    position: relative;
  }
  .yhjL{
    text-align: center;
    height: 100%;
    float: left;
    width: 26%;
  }
  .yhj{
    height: 25vw;
    text-align: left;
    clear: both;
    margin: 0 10px;
    border: 1px solid #FFDEDF;
  }
</style>
