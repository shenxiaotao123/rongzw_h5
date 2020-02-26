<template>
    <div style="margin-bottom: 17vw;background-color: white">
      <bmap :method="bma" @city="citys()"/>
      <div class="ti">
        <div class="hometitle">
          <span style="float: left;width: 12vw">{{city}}</span>
          <div class="downArrow"></div>
          <input type="text" placeholder="找施工，设计师，主材" v-model="search"/>
          <img src="../assets/img/msg.png" height="15" width="18"/>
        </div>
        <swiper :options="titleSwiperOption">
          <swiper-slide v-for="tt of titleHome" style="height: 41vw;" >
            <div style=" margin: 0 2vw;">
              <img :src="tt.pic_url" class="img bannerimgheight" style="float: none; width: 100%;" @click="$router.push({path:tt.url})"/>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"/>
        </swiper>

      </div>
      <!--图标开始-->
      <div class="effect all">
          <button class="white" v-for="na of navigations" @click="$router.push({path:na.url})" style="width: 19%;">
            <img :src="na.pic_url" class="imgIcon"/>
            <p>{{na.name}}</p>
          </button>
      </div>
      <!--图标结束-->
      <!--保障开始-->
      <div class="all baozhang">
        <span class="left">
          <img src="../assets/img/home/noorder.png" height="10vw" width="10vw"/>没有中间商(装修公司)</span>
        <span class="border-left">
<img src="../assets/img/home/lirun-xin.png" height="10vw" width="10vw"/>装修资金平台托管</span>
        <span class="right">
           <img src="../assets/img/home/baozhang.png" height="10vw" width="10vw"/>平台质检质保
      </span>
      </div>
      <!--保障结束-->

      <!--轮播图开始-->
      <swiper :options="swiperOption1" style="height: 25vw; touch-action: none;margin-top: 2vw">
          <swiper-slide v-for="gg of advertisement">
            <div style=" margin: 0 0 0 2vw;">
             <img :src="gg.pic_url"  @click="$router.push({path:gg.url})"/>
            </div>
          </swiper-slide>
        </swiper>
      <!--轮播图结束-->

      <!--推荐案例开始-->
      <div class="individual all">
        <p class="individual-title">
          <span class="individual-title-left heavy">推荐案例</span>
          <span class="individual-title-right medium"  @click="$router.push({path:'/index/picture/case'})">更多</span>
        </p>
        <p class="gray futitle">40000+业主的装修案例，100%所见即所得 </p>
        <work :works=works class="individual_body"></work>
      </div>
      <!--推荐案例结束-->

      <!--施工工地开始-->
      <div class="individual all" >
        <p class="individual-title" @click="to('/siteList')">
          <span class="individual-title-left heavy">施工工地</span>
          <span class="individual-title-right medium">更多</span>
        </p>
        <scene :type="bma"></scene>
      </div>
      <!--施工工地结束-->

      <!--推荐设计师开始-->
      <div class="individual all">
      <p class="individual-title" @click="toDesigner">
        <span class="individual-title-left heavy">推荐设计师</span>
        <span class="individual-title-right medium">更多</span>
      </p>
      <p class="gray futitle">40000+业主的装修案例，100%所见即所得 </p>
      <list :designers=designers></list>
    </div>
      <!--推荐设计师结束-->

      <!--热门攻略开始-->
      <div class="individual all" style="margin-bottom: 0;">
        <p class="individual-title">
          <span class="individual-title-left heavy">热门攻略</span>
        </p>
        <div style=" height: 64vw">
          <div class="strategy-row">
          <div class="strategy" v-for="ss of strategys">

              <div class="strategy-com-50">
                <div class="strategy-img">
                  <img :src="ss.pic_url" class="img"  @click="$router.push({path:ss.url})">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!--热门攻略结束-->

      <!--推荐文章开始-->
      <div class="individual all">
        <div class=" recommended" v-for="guide of gl" @click="$router.push({path:'/glDetail',query:{id:guide.id}})">
          <div class="recommendedImg">
            <img :src="guide.bbs_pic" class="img">
          </div>
          <div class="recommendedBody">
            <div class="recommended_title" >
              {{guide.bbs_title}}
            </div>
            <div class="regular gray" style="    position: absolute;
    bottom: 0.1vw;
    font-size: 0.1%;">
              <ul>
                <li>阅读{{guide.bbs_view}}</li>
                <li>|</li>
                <li> 评论{{guide.bbs_com_num}} </li>
                <li>|</li>
                <li> {{guide.bbs_user_name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--推荐文章结束-->

      <!--顶部导航栏开始-->
      <div class="all daohang hide" :class={display:this.scroll}>
        <input type="text" placeholder="找施工，设计师"  v-model="search">
        <button class="white" v-for="(na) of navigations" v-if="na.name=='找设计'||na.name=='找施工'||na.name=='算报价'||na.name=='想咨询'||na.name=='要监理'" @click="$router.push({path:na.url})">
          <img :src="na.pic_url"/>
        </button>
        <span @click="up()" >
          <img src="../assets/img/home/up.png" class="right" style="             margin-right: 1.5vw;
    margin-top: 2vw;
    width: 4vw;"/>
          <span style="     float: right;
    font-weight: 400;
    color: rgb(221, 26, 33);
    transform: scale(0.5);
    font-size: 16px;
    position: relative;
    bottom: 6vw;
    left: 2.7vw;">回顶部</span>
        </span>

      </div>
      <!--顶部导航栏结束-->
      <msg v-show="showToast"  :msgObj="msgObj"  @closeMsg="closeMsg" ></msg>
    </div>
</template>
<script>
import scene from '@/construction/Scene'
import work from '@/designer/designerDetail/Works'
import list from '@/designer/list/List'
import bmap from '@/public/Bmap'
import msg from '@/public/Msg'
export default {
  name: 'Home',
  data () {
    return {
      gl: [],
      bma: 'handler',
      scroll: false,
      navigations: [],
      works: [],
      strategys: [],
      titleHome: [],
      advertisement: [],
      designers: [],
      swiperOption1: {
        slidesPerView: 1.2,
        spaceBetween: 0
      },
      titleSwiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      showPage: 'strat',
      search: '',
      city: '',
      msgObj: {
        msgs: '您的设计订单有新动态,快去查看详情吧!',
        btns: ['yes', 'no'],
        title: '',
        url: '/messageCenter',
        position: 'middle'
      },
      showToast: false
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  components: {
    work,
    list,
    scene,
    bmap,
    msg
  },
  computed: {

  },
  mounted () {
    let _this = this
    window.onscroll = function () {
      _this.scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 400
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        // 写后台加载数据的函数
        let path = '/api/bbs/guide?is_rec=1&itemsPerLoad=6&no_cached=1&lastIndex=' + _this.gl.length
        _this.$ajax.get(path).then((res) => {
          _this.gl = _this.gl.concat(res.data.data)
        })
      }
    }
    this.$ajax.get('/api/bbs/guide?is_rec=1').then((res) => {
      this.gl = res.data.data
    })
    this.setLocation()
    this.$ajax.get('/api/index/getNav?no_cached=1').then((response) => {
      this.navigations = response.data.data
    })
    this.$ajax.get('/api/index/ads?is_rec=1&&no_cached=1').then((response) => {
      this.strategys = response.data.data['app_hot']
      this.advertisement = response.data.data['app_banner']
      this.titleHome = response.data.data['app_navi']
    })
    this.$ajax.get('/api/designer/designer?no_cached=1&is_rec=1&itemsPerLoad=3').then((response) => {
      this.designers = response.data.data
    })
    this.$ajax.get('/api/designer/works?is_rec=1&itemsPerLoad=3').then((res) => {
      this.works = res.data.data
    })
  },
  methods: {
    citys: function () {
      this.city = this.regions[sessionStorage.getItem('province')][sessionStorage.getItem('city')]
    },
    closeMsg: function (v) {
      this.showToast = v
    },
    setLocation: function () {
    },
    up: function () {
      window.pageYOffse = 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    toDesigner: function () {
      this.$router.push('/designerList')
    },
    messageCenter: function () {
      this.$router.push('/messageCenter')
    },
    to: function (url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
  .toast div span{
   line-height: 6vw;
  }
  .toast>div:nth-child(1){
    padding-top: 13%;
  }
  .toast>div:nth-child(2){
    padding-top: 8%;
  }
  .toast>div:nth-child(3){
    padding-top: 10%;
  }
  .toast{
    width: 96%;
    height: 37vw;
    background-color: white;
    border-radius: 2vw;
    z-index: 999999999999999999999;
    position: fixed;
    top: 39%;
    text-align: center;

  }

  .daohang button img{
    width: 100%;
    height: 100%;
  }
  .daohang button{
    height: 9vw;
    width: 9vw;
    line-height: 9vw;
  }
  .daohang>input{
    border-radius: 5vw;
    padding-left: 7vw;
    background-image: url(../assets/img/home/sousuo.png);
    background-repeat: no-repeat;
    background-position: 4%;
    background-size: 9%;
    background-color: #F5F6FA;
    height: 8vw;
    width: 34vw;
    margin-top: 2vw;
  }
  .daohang{
    background-color: white;
    height: 11vw;
    top: 0;
    z-index: 999;
    position: fixed;
  }
 .menu>div>img{
   margin-bottom: 1vw;
 }
  .menu>div{
    float: left;
    text-align: center;
    width: 19.5vw;
    height: 7.5vw;
    margin-top: 4vw;
  }
  .menu{
    background-color: white;
    height: 15vw;
    width: 100%;
    bottom: 0;
    z-index: 100000;
    position: fixed;
    padding-bottom: 3vw;
  }
  .recommended_title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 5vw;
  }

  .recommendedBody li{
    float: left;
    margin-right: 3vw;
  }
  .recommendedBody{
    width: 62%;
    float: left;
    height: 20vw;
    margin-left: 2.5vw;
    position: relative;
  }
  .recommendedImg{
    width: 34%;
    height: 20vw;
     float: left;
  }
  .recommendedImg img{
    width: 100%;
    height: 100%;
    border-radius: 3vw;
  }
  .recommended{
    margin-top: -9vw;
    height: 19vw;
    padding: 6vw 0 6vw 0;
    border-bottom: .1vw solid #cccccc;
    margin-bottom: 5vw;

  }

.strategy img{
  border-radius: 2vw;
}
  .strategy{
    display: inline;
    height: 40%;
  }
  .individual_body{
    margin-top: 3vw;
  }
  .individual-title-right{
    float: right;
    padding-right: 5vw;
    background-image: url("../assets/img/rightArrow.png");
    background-position: 92%;
    background-size: 3.5vw;
    background-repeat: no-repeat;
    color: #999999;
  }
  .individual-title-left{
    font-size: 5vw;
    font-weight: 600;

  }
  .individual-title{
    margin-top: 5vw;
    line-height: 8vw;
    clear: both;
  }
  .individual{
    margin-bottom: 8vw;
  }
  .slide-content p{
    margin-bottom: 1vw;
  }
  .swiper-slide img{
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    float: right;
    border-radius: 2vw;
  }
  .bannerimgheight { height: 41vw;}
  .baozhang{
    margin: 2vw 2vw 3vw 2vw;
    font-size: 2.5vw;
    text-align: center;
    color: #333333;
    font-weight: 100;
  }
  .baozhang img { vertical-align: top; margin-right: 1vw;}
  .hometitle img{
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-left: 7vw;
  }
  .ti{
    background-image:url("../assets/img/home/tou.png");
    background-repeat: no-repeat;
    background-position: top 80%;
    background-size: 100%;
    position: relative;
  }
  .hometitle{
    padding: 3vw 3vw 2.5vw 3vw;
    display: flex;
    align-items: center;
  }

  .hometitle input{
    border-radius: 5vw;
    width: 53vw;
    height: 7vw;
    margin-left: 6vw;
    padding-left: 8vw;
    font-size: 3vw;
    background-image: url(../assets/img/home/sousuo.png);
    background-repeat: no-repeat;
    background-position: 4%;
    background-size: 6%;
  }
  .futitle{
    transform: scale(0.9);
    margin-left: -5vw;
  }
  .strategy-row { margin: 0 -1vw;}
  .strategy-row&:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
  .strategy-com-50 { display: inline-block; width: 50%;}
  .strategy-img { margin: 0 1vw 2vw 1vw;}
  .imgIcon{ width: 65%;}
</style>
