<template>
  <div>
    <mtitle :titleC="titleC"/>
    <div class="wrapper-sm m-t-sm">
      <van-row class="inv-title">
        <van-col span="12" @click="$router.push({path:'/lookUpM'})" >
          <img src="../../assets/img/my/fapiao@2x.png" height="27" alt="">
          <p class="m-t-sm">抬头管理</p>
        </van-col>
        <van-col span="12" @click="$router.push({path:'/invoice'})" >
          <img src="../../assets/img/my/dingdanguanli-@2x.png" height="27" alt="">
          <p class="m-t-sm">所有订单</p>
        </van-col>
      </van-row>
    </div>
    <div class="wrapper-sm">
      <van-cell-group class="clear bor-r-5" @click="$router.push({path:'/invoice'})" >
        <van-cell>
          <template slot="title">
            <span class="custom-title">发票抬头</span>
            <span class="m-l-md gray v-middle">个人</span>
          </template>
        </van-cell>
        <van-cell>
          <template slot="title">
            <span class="custom-title">开票金额</span>
            <span class="m-l-md gray v-middle">￥500.00</span>
          </template>
        </van-cell>
        <van-cell>
          <template slot="title">
            <span class="custom-title">发票内容</span>
            <span class="m-l-md gray v-middle">美的中央空调3匹美的中央空调发给回复回复坏</span>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="back_white wrapper-sm gray dd-Details">
        订单详情<van-icon name="arrow" class="v-middle" />
        <span class="fr">2019-08-28</span>
      </div>
    </div>
    <div class="wrapper-sm">
      <van-cell-group class="clear bor-r-5" @click="$router.push({path:'/invoice'})" >
        <van-cell>
          <template slot="title">
            <span class="custom-title">发票抬头</span>
            <span class="m-l-md gray v-middle">个人</span>
          </template>
        </van-cell>
        <van-cell>
          <template slot="title">
            <span class="custom-title">开票金额</span>
            <span class="m-l-md gray v-middle">￥500.00</span>
          </template>
        </van-cell>
        <van-cell>
          <template slot="title">
            <span class="custom-title">发票内容</span>
            <span class="m-l-md gray v-middle">美的中央空调3匹美的中央空调发给回复回复坏</span>
          </template>
        </van-cell>
      </van-cell-group>
      <div class="back_white wrapper-sm gray dd-Details">
        订单详情<van-icon name="arrow" class="v-middle" />
        <span class="fr">2019-08-28</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "invoice",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '我的发票'
        }
      }
    }
  }
</script>

<style scoped>
  .inv-title { text-align: center;}
  .van-cell { padding: 6px 16px;}
  .dd-Details { padding: 10px 16px;}
  .m-l-md { display: inline-block; width: 200px;overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;}
</style>
