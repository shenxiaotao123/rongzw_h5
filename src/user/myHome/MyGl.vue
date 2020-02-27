<template>
<div>
  <mtitle :titleC="titleC" :titleL="titleL" @toMy="to()"/>

  <van-row class="myTop-data white">
    <van-col span="8">
      <router-link to='/myGl/audit' class="S_titlecenter regular" >
        审核中
      </router-link>
    </van-col>
    <van-col span="8">
      <router-link to="/myGl/publish" class="S_titlecenter regular" >
        已发表
      </router-link>
    </van-col>
    <van-col span="8">
      <router-link to="/myGl/draft" class="S_titlecenter regular" >
        草稿箱
      </router-link>
    </van-col>
  </van-row>
  <router-view/>
</div>
</template>

<script>
  import Vue from 'vue'
  import { Col, Row } from 'vant';
  Vue.use(Col);
  Vue.use(Row);
    export default {
        name: "MyGl",
      components:{
        mtitle:() => import('@/public/TextTitle')
      },
      methods:{
          to:function() {
              this.$router.push('/index/my')
          }
      },
      data(){
        return{
          titleC: {
            type: 'text',
            content: '我的攻略'
          },
          titleL: {
                type: 'img', // 放的是图片||文字
                content: require('@/assets/img/loginUser/back.png'), // 图片放url  文字放内容
                method: 'toMy'// 点击后的方法  默认返回上一级
              }
          }
        }
    }
</script>

<style scoped>
  a {
    color:black;
  }
  .S_titlecenter { line-height: 14vw; font-size: 4.4vw;}
  .router-link-active {
    border-bottom: .4vw solid #DD1A21;
    height: 13.60vw;
    display: inline-block;
    color: #DD1A21;
  }
  .myTop-data {
    text-align: center;
    line-height: 1.8;
  }
</style>
