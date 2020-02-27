<template>
  <div class="accountWrap">
    <div class="myTop">
      <div class="">
        <img src="../assets/img/loginUser/headPortrait.png" class="avatarImg" alt="头像"/>
        <p class="user-name">昵称</p>
      </div>
      <van-row class="myTop-data">
        <van-col span="8">
          17
          <p>收藏</p>
        </van-col>
        <van-col span="8">
          18
          <p>关注</p>
        </van-col>
        <van-col span="8">
          23
          <p>优惠券</p>
        </van-col>
      </van-row>
    </div>
    <div class="mar-b-10">
      <van-cell title="完善我的家" is-link icon="wap-home-o" @click="to('/myhome')"/>
    </div>
    <div class="mar-b-10">
      <van-cell title="我的互动" is-link icon="friends-o"  @click="to('/myInteraction')"/>
      <van-cell title="我的攻略" is-link icon="send-gift-o" @click="to('/myGl')"/>
      <van-cell title="我的发票 " is-link icon="coupon-o" />
      <van-cell title="成为设计师" is-link icon="manager-o" />
      <van-cell title="招商入口" is-link icon="medal-o" />
      <van-cell title="联系我们" is-link icon="service-o" @click="to('/contactUs')"/>
      <van-cell title="关于我们" is-link icon="info-o"  @click="to('/aboutUs')"/>
      <van-cell title="投诉建议" is-link icon="records" />
    </div>

</div>
</template>

<script>
import Vue from 'vue'
  //vant单元格
  import { Cell, CellGroup } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);
  //vant布局
  import { Col, Row } from 'vant';
  Vue.use(Col);
  Vue.use(Row);

    export default {
        name: "account",
      data(){
          return{
            user:{}
          }
      },methods:{
          to(url){
            this.$router.push({path:url})
          }
      }
    }
</script>

<style scoped>
  .myTop {
    position: relative;
    padding-top: 15px;
    height:186px;
    background: url("../assets/img/my/titleBg.png")no-repeat;
    background-size: 100%;
  }
  .avatarImg { margin: 0 auto; display: block; width: 75px;height: 75px;}
  .user-name { padding: 15px 0; color: #fff;text-align: center; font-size: 18px; font-weight: 500;}
  .myTop-data { position: absolute; bottom: 10px; width: 100%; color: #fff; text-align: center; line-height: 1.8;}
  .mar-b-10 { margin-bottom: 10px;}
</style>
