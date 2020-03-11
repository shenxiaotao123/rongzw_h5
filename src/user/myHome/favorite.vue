<template>
    <div>
      <mtitle :titleC="titleC"/>
      <van-tabs v-model="active">
        <van-tab title="商品">

        </van-tab>
        <van-tab title="攻略">内容 2</van-tab>
        <van-tab title="案例">内容 3</van-tab>
        <van-tab title="效果图">内容 4</van-tab>
        <van-tab title="局部图">内容 5</van-tab>
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


  export default {
    name: "lookUpM",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        designers: [],
        titleC: {
          type: 'text',
          content: '我的收藏'
        }
      }
    }
  }
</script>

<style scoped>

</style>
