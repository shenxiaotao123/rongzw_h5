<template>
  <div class="accountWrap">
    <div class="myTop">
      <div v-on:click="wxlogin">
        <img src="../assets/img/loginUser/headPortrait.png" class="avatarImg" alt="头像"/>
        <p class="user-name"><span id="loginName">使用微信登录</span>{{ $route.query.real_name }}</p>
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
      <van-grid-item icon="records" text="投诉建议" v-on:click="greet"/>
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
      },
      created (){
        let real_name = this.$route.query.real_name; //拿到上一个页面的real_name
        let token = this.$route.query.token; //拿到上一个页面的token


      },
      mounted () {
        //用户token存在时，隐藏“点击登录”文字
        var url = window.location.href;
        if(url.indexOf("token") >= 0 ) { //判断url地址中是否包含token字符串
          console.log("已登录")
          var child = document.getElementById("loginName");
          child.style.display = 'none';
        }
        if(url.indexOf("code") >= 0 && url.indexOf("token") >= -1) { //判断url地址中包含code并且不包含token
          this.wxlogin(); //执行方法

        }
        var cooo = document.cookie
        var coo = this.$cookies.get("token")
        console.log(coo)
        console.log(cooo)
      },
      methods:{

        greet: function (event){
          //var username = this.$route.query.token;
          //if( username != null){
            this.$router.push({  //传参到投诉建议
              path:'/Suggest',
              query: {
                token:this.$route.query.token,
              }
            })
          //}
         // else {
            //alert("投诉建议需要用户先登录")
          //}






        },

        wxlogin: function (event){
          //沒有token的情況
          if(!this.$cookies.isKey('token')){
            //路徑裏有code
            if(window.location.href.indexOf('code') != -1){
              console.log('有code')
              var path = window.location.href
              let code = path.substring(path.indexOf('code=')+5,path.indexOf('&'))
              console.log(code)
              this.http({
                method:'post',
                url:'/api/consumer/OAuthLogin',
                data:{
                  oauth_type:'wx_h5',
                  code:code
                }
              }).then((response)=>{
                //console.log('设置token')
                this.$cookies.set('token', response.data.data.token,60*60*24*30)
                console.log(response.data.data.token)
                var wxcode =response.data.code
                if (wxcode == 2){
                  this.$router.push({  //传参到绑定手机号码页面
                    path:'/Information',
                    query: {
                      openid:response.data.data.openid,
                      oauth_type:response.data.data.oauth_type
                    }
                  })
                }
                if (wxcode == 0){
                  this.$router.push({  //传参到我的页面
                    path:'/index/my',
                    query: {
                      real_name:response.data.data.real_name,
                      token:response.data.data.token,
                    }
                  })
                }

                //this.load()
              })
            }
            else{
              //獲取
              window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd802df0d4c9fe16e&redirect_uri=http://mobile.rongzw.com/%23/index/my&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
            }
          }
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
