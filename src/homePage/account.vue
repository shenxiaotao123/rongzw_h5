<template>
  <div class="accountWrap">
    <div class="myTop">
      <div class="">
        <img src="../assets/img/loginUser/headPortrait.png" class="avatarImg" alt="头像"/>
        <p class="user-name">昵称</p>
      </div>
      <!--<van-row class="myTop-data">-->
        <!--<van-col span="8">-->
          <!--17-->
          <!--<p @click="$router.push({path:'/favorite'})">收藏</p>-->
        <!--</van-col>-->
        <!--<van-col span="8">-->
          <!--18-->
          <!--<p @click="$router.push({path:'/attentionList'})">关注</p>-->
        <!--</van-col>-->
        <!--<van-col span="8">-->
          <!--23-->
          <!--<p @click="$router.push({path:'/icoupon'})">优惠券</p>-->
        <!--</van-col>-->
      <!--</van-row>-->
    </div>
    <!--<div class="mar-b-10">-->
      <!--<van-cell title="完善我的家" is-link icon="wap-home-o" @click="to('/myhome')"/>-->
    <!--</div>-->
    <van-grid :column-num="3">
      <van-grid-item icon="service-o" text="联系我们" @click="$router.push({path:'/contactUs'})"/>
      <van-grid-item icon="info-o" text="关于我们" @click="$router.push({path:'/aboutUs'})"/>
      <van-grid-item icon="records" text="投诉建议" @click="$router.push({path:'/Suggest'})"/>
    </van-grid>
    <div class="m-t-sm">
      <a href="https://www.rongzw.com/appdownload.html"><img src="../assets/img/my/downloadApp.jpg" class="downloadAppImg" alt="手机下载APP 实时接受订单信息  功能更全，体验更佳！"/></a>
    </div>
    <div class="mar-b-10">
      <!--<van-cell title="我的互动" is-link icon="friends-o" @click="to('/myInteraction')" />-->
      <!--<van-cell title="我的攻略" is-link icon="send-gift-o" @click="to('/myGl')"/>-->
      <!--<van-cell title="我的发票 " is-link icon="coupon-o" @click="$router.push({path:'/invoice'})"/>-->
      <!--<van-cell title="成为设计师" is-link icon="manager-o" @click="$router.push({path:'/BecomeDesigner'})"/>-->
      <!--<van-cell title="招商入口" is-link icon="medal-o" @click="$router.push({path:'/Merchants'})"/>-->
      <!--<van-cell title="联系我们" is-link icon="service-o" @click="$router.push({path:'/contactUs'})"/>-->
      <!--<van-cell title="关于我们" is-link icon="info-o" @click="$router.push({path:'/aboutUs'})"/>-->
      <!--<van-cell title="投诉建议" is-link icon="records" @click="$router.push({path:'/Suggest'})" />-->

      <!--<van-cell title="我的互动" is-link icon="friends-o"  @click="to('/myInteraction')"/>-->
      <!--<van-cell title="我的攻略" is-link icon="send-gift-o" @click="to('/myGl')"/>-->
      <!--<van-cell title="我的发票 " is-link icon="coupon-o" />-->
      <!--<van-cell title="成为设计师" is-link icon="manager-o" />-->
      <!--<van-cell title="招商入口" is-link icon="medal-o" />-->
      <!--<van-cell title="联系我们" is-link icon="service-o" @click="to('/contactUs')"/>-->
      <!--<van-cell title="关于我们" is-link icon="info-o"  @click="to('/aboutUs')"/>-->
      <!--<van-cell title="投诉建议" is-link icon="records" />-->
    </div>

</div>
</template>

<script>
import Vue from 'vue'
  //vant单元格
  import { Cell, CellGroup,Grid,GridItem } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);
  Vue.use(Grid);
  Vue.use(GridItem);
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
    padding-top: 25px;
    /*height:186px;*/
    height:130px;
    background: url("../assets/img/my/titleBg.png")no-repeat;
    background-size: 100%;
  }
  .avatarImg { margin: 0 auto; display: block; width: 75px;height: 75px;}
  .user-name { padding: 15px 0; color: #fff;text-align: center; font-size: 18px; font-weight: 500;}
  .myTop-data { position: absolute; bottom: 10px; width: 100%; color: #fff; text-align: center; line-height: 1.8;}
  .mar-b-10 { margin-bottom: 10px;}
  .downloadAppImg { width: 100%;}
</style>
