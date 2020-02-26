<template>
    <div style="    padding-bottom: 25vw;">
      <mtitle :titleC="title.titlec" :titleL="title.titleL" :titleR="title.titleR" @search="search"></mtitle>
      <!--轮播图-->
      <swiper :options="swiperOption" style="height: 40vw;">
        <swiper-slide v-for="tt of indexSwiper">
          <img :src="tt.pic_url" class="img" style="float: none; width: 100%;" @click="$router.push({path:tt.url})"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"/>
      </swiper>

      <!--轮播图-->
      <!--图标-->
      <div class="effect">
          <button class="white" v-for="na of navigation" @click="$router.push({path: '/materialCommodityIndex',query: {pid: na.id}})">
            <img :src="na.img_url" class="imgIcon"/>
            <p>{{na.category_name}}</p>
          </button>
      </div>
      <!--图标-->

      <!--廣告位-->
      <div  class="backcolor">
        <div class="navigationBar">
          <img :src="tt.pic_url"  class="img" v-for="(tt,index) of banner" @click="$router.push({path:tt.url})">
        </div>
      </div>
      <!--廣告位-->
      <!--<div class="backcolor">
        <div class="left" v-for="(tt,index) of banner" v-show="index<2">
          <img :src="tt.pic_url" class="img"/>
        </div>
      </div>-->

      <!--合作对象-->
      <div class="hezuo">
        <p class="all" @click="$router.push({path:'/storeList'})">
          <span class="heavy" style="    font-size: 4vw;    font-weight: 600;">合作伙伴</span>
          <span class="individual-title-right medium">更多</span>
        </p>

        <div  class="company" v-for="(shop,index) of shops" v-if="index<3" @click="$router.push({path:'/store',query:{id:shop.shop_id}})">
          <div class="avatar">
            <img :src="shop.logo_image" class="img"/>
          </div>
          <div class="avatar" style="width: 73%;">
            <p>{{shop.shop_name}}</p>
            <p>
              <span class="gray onehang">
                主营:{{shop.shop_category}}
              </span>
              <button class="white_btn right">进店</button>
            </p>
          </div>
        </div>
      </div>
      <!--合作对象-->
      <!--为您推荐-->
      <div class="hezuo">
        <p class="all" style="margin-bottom: 5vw;">
          <span class="heavy" style="    font-size: 4vw;    font-weight: 600;">为您推荐</span>
        </p>
        <div class="forYou left" v-for="(commodity,index) of commoditys" v-if="index<101" @click="$router.push({path: '/materialShopDetail', query: {id: commodity.spu_id}})">
          <div>
            <img class="img" :src="commodity.goods_thumb" style="border-radius: 2vw;"/></div>
          <p style="    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;    ">{{commodity.goods_name}}</p>
          <p>
            <span class="right gray">{{commodity.sales_actual+commodity.sales_initial}}人付款 </span>
            <span class="cinnabar">￥{{commodity.low_price}} </span>
          </p>
        </div>

      </div>
      <!--为您推荐-->
      <div style="clear: both"></div>
    </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
export default {
  name: 'MaterialHouse',
  components: {
    mtitle
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  mounted () {
    this.$ajax.get('/api/shop/goods?is_rec=1&itemsPerLoad=20').then((response) => {
      this.commoditys = response.data.data
    })
    this.$ajax.get('/api/shop/ads').then((response) => {
      this.indexSwiper = response.data.data.app_shop_navi
      this.banner = response.data.data.app_shop_banner
    })
    this.$ajax.get('/api/shop/store?is_rec=1').then((response) => {
      this.shops = response.data.data
    })
    this.$ajax.get('/api/shop/category?is_rec=1').then((response) => {
      this.navigation = response.data.data
    })
    window.addEventListener('scroll', this.handleFun)
  },
  data () {
    return {
      banner: [],
      indexSwiper: [],
      navigation: '',
      shops: [],
      commoditys: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          // type: 'fraction',
          // type : 'progressbar',
          // type : 'custom',
          progressbarOpposite: true, // 使进度条分页器与Swiper的direction参数相反
          bulletElement: 'li', // 设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, // 动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 2, // 动态分页器的主指示点的数量
          hideOnClick: true, // 默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      },
      title: {
        titlec: {
          content: '建材城',
          type: 'text'
        },
        titleL: {
          content: require('@/assets/img/home/sousuo.png'),
          type: 'img',
          method: 'search'
        },
        titleR: {
          type: 'img',
          content: require('@/assets/img/home/jaincai/payCar.png'),
          method: 'gouwuche'
        }
      }

    }
  },
  methods: {
    search: function () {
      alert()
    },
    handleFun () {
      var _this = this
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
          let path = '/api/shop/goods?is_rec=1&itemsPerLoad=20&lastIndex=' +_this.commoditys.length
          _this.$ajax.get(path).then((response) => {
            _this.commoditys = _this.commoditys.concat(response.data.data)
          })
        }
      }
    }

  }
}
</script>

<style scoped>
  .forYou>p{
    height: 3.5vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 2vw;
  }
  .forYou>p .cinnabar { float: left; font-size:3vw;}
  .forYou>p .right { font-size: 2.5vw;}
  .forYou>div{
    height: 65%;
  }
  .forYou{
    height: 35vw;
    width: 45.5%;
    margin-left: 3%;
  }

  .avatar>p>.white_btn{
    width: 20vw;
    margin-top: -5vw;
  }
  .avatar>p:nth-child(1){
    margin-top: 2vw;
    font-size: 4vw;
  }
  .avatar>p{
    height: 40%;
  }
  .company>.avatar:nth-child(1){
    border: .1vw solid #f7f7f7;
    margin-right: 3vw;
  }
  .company>.avatar{
    width: 17%;
    height: 75%;
    float: left;
    position: relative;
    top: 12.5%;
    left: 4.5%;
  }
  .company{
    height: 20vw;
    border-bottom: .5vw solid #f7f7f7;
  }
  .hezuo{
    margin-top: 5vw;
  }
  .backcolor>div>img{
    margin-right: 2.5vw;
  }
  .backcolor>div{
    height: 80%;
    width: 46vw;
    margin-top: 2.5%;
    margin-left: 2.5%;
  }
.backcolor{
  clear: both;
  white-space: nowrap;
  overflow-x: auto;
  height: 25vw;
}

  .effect button{
    width: 15%;
    height: 100%;
    margin-left: 4vw;
    margin-bottom: 3vw;
    font-size:3.5vw;
  }
  .onehang{
    display: block;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .imgIcon{ width: 70%; height: 100%;
    max-width: 100%;
    max-height: 100%;}
</style>
