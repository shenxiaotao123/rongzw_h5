<template>
<div>

  <div id="tt" :style="{height:store.backgroundImage !=='undefined' ? '92vw' : '45vw'}" style="overflow: hidden;">

    <div :style="{background: 'url(' + (store.backgroundImage) + ')' }" class="bg bg-blur">
    </div>

    <div class="BlackMask"></div>
    <div class="title-content" :class="{color:top}" >
      <img src="../../assets/img/loginUser/whiteBack.png" class="titleLeft"  @click="$router.go(-1)"/>
      <input  class="medium sreachInput" type="text" :placeholder="titleC.content" v-model="search" v-if="titleC.type==='search'">
      <img :src="type"  v-for="(type,index) of titleR.content" @click="titler(titleR.method[index])"  style="width: 5vw;margin-left: 3vw;margin-top: 3vw"/>
      <ul class="gengduo" :style="{display:display}">
        <img src="../../assets/img/upsolid.png"  />
        <li><img src="../../assets/img/msg2.png" />消息</li>
        <li><img src="@/assets/img/home/buttom/home.png" class="imgGray" />首页</li>
        <li><img src="../../assets/img/购物车-23.png" />购物车</li>
      </ul>
    </div>
    <div  class="company">
      <div>
        <div class="avatar"  @click="$router.push({path:'/storeDetail',query:{id:store.shop_id}})">
          <img :src="store.logo_image" class="img"/>
        </div>
        <div class="avatar" style="width: 73%;">
          <p>{{store.shop_name}}</p>
          <p>
              <span class=" onehang">
                主营:{{store.shop_category}}
              </span>
            <button class="white_btn" style=" position: absolute;  right: 0;">关注</button>
          </p>
        </div>
      </div>
      <p style="clear: both"/>
    </div>

    <swiper :options="swiperOption" class="swiper" v-if="store.backgroundImage !=='undefined'">
      <swiper-slide v-for="tt of store.carousel_image" :key="tt.id">
        <img :src="tt" class="img" style="   width: 96%; margin: 0 2vw;"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"/>
    </swiper>
  </div>

  <ul class="fontWhite" :class="{top_dd:top,color:top  }">
    <li>
      <button :class="{red_btn:this.type === 'default',navigation_btn:this.type !=='default'}" @click="checkType('default')">综合</button>
    </li>
    <li>
      <button :class="{red_btn:this.type === 'des_status',navigation_btn:this.type !=='des_status'}" @click="checkType('des_status')">销量</button>
    </li>
    <li>
      <button :class="{red_btn:this.type === 'price',navigation_btn:this.type !=='price'}" @click="checkType('price')">
        价格
        <span v-if="param.des_status === 3">⬇</span>
        <span v-else>⬆</span>
      </button>
    </li>
    <li>
      <button :class="{red_btn:this.type === 'new',navigation_btn:this.type !=='new'}" @click="checkType('new')">新品优先</button>
    </li>
  </ul>

    <div class="hezuo">
      <div class="forYou left" v-for="(commodity,index) of commoditys" v-if="index<101">
        <div  >
          <img class="img" :src="commodity.goods_thumb" style="border-radius: 2vw;" @click="$router.push({path:'/'})"/>
        </div>
        <p style="    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;    ">{{commodity.goods_name}}</p>
        <p>
          <span class="cinnabar">￥{{commodity.low_price}} </span>
          <span class="gray">{{commodity.sales_actual+commodity.sales_initial}}人付款 </span>
          <span class="right"><img  src="../../assets/img/baycart.png"/></span>
        </p>
      </div>

    </div>

</div>
</template>

<script>

import mtitle from '@/public/TextTitle'
import dropDown from '@/public/DropDown'
export default {
  name: 'Store',
  methods: {
    handleFun () {
      var _this = this
      let titleScrollHeight = document.getElementById('tt').scrollHeight - document.getElementsByClassName('fontWhite')[0].scrollHeight * 4
      this.top = ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > titleScrollHeight) ||
        ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) === titleScrollHeight)
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件132
      if (scrollTop + windowHeight === scrollHeight) {
        _this.param.lastIndex = _this.commoditys.length
        if (_this.param.lastIndex > 0) {
          _this.$ajax.get('/api/shop/goods', {params: _this.param}).then((response) => {
            _this.commoditys = _this.commoditys.concat(response.data.data)
          })
        }
      }
    },
    checkType (val) {
      switch (val) {
        case 'default':
          this.param.des_status = 0
          break
        case 'des_status':
          this.param.des_status = 1
          break
        case 'price':
          if (this.param.des_status === 2) {
            this.param.des_status = 3
          } else {
            this.param.des_status = 2
          }
          break
        case 'new':
          this.param.des_status = 4
          break
      }
      this.param.lastIndex = 0 // 测试试试
      this.$ajax.get('/api/shop/goods', {params: this.param}).then((res) => {
        this.commoditys = res.data.data
      })
      this.type = val
    },
    titler: function (val) {
      let _this = this
      switch (val) {
        case 'kefu':
          break
        case 'gengduo':
          if (_this.display === 'none') {
            _this.display = 'block'
          } else {
            _this.display = 'none'
          }
          break
      }
    }
  },
  components: {
    mtitle,
    dropDown
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  mounted () {

    let _this = this
    this.$ajax.get('/api/shop/store/' + this.$route.query.id).then((response) => {
      _this.store = response.data.data
      if (_this.store.carousel_image.length < 1) {
        _this.store.backgroundImage = 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C110%2C650%2C429%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1deeff197dc6a7efad69f266c0ca8360/0df431adcbef7609b1c9c35925dda3cc7dd99e32.jpg'
      } else {
        _this.store.backgroundImage = this.store.carousel_image[0]
      }
    })
    this.$ajax.get('/api/shop/goods', {params: _this.param}).then((response) => {
      _this.commoditys = response.data.data
      _this.param.lastIndex = _this.commoditys.length
      window.addEventListener('scroll', this.handleFun)
    })
  },
  computed: {},
  data () {
    return {
      top: false,
      param: {
        des_status: 0,
        itemsPerLoad: 10,
        lastIndex: 0,
        shop_id: this.$route.query.id
      },
      display: 'none',
      commoditys: [],
      type: 'default',
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
      titleC: {
        type: 'search',
        content: '瓷砖'
      },
      titleR: {
        type: 'imgArray',
        content: [require('@/assets/img/zixun.png'), require('@/assets/img/省略号.png')],
        method: ['kefu', 'gengduo']
      },
      store: {}

    }
  }
}
</script>

<style scoped>
  .BlackMask {position: absolute; width: 100%; height: 92vw; background: rgba(0,0,0,.6);z-index: 1;}
  .avatar>p>.white_btn{
    width: 20vw;
    margin-top: -5vw;

  }
  .avatar>p:nth-child(1){
    font-size: large;
  }
  .avatar>p{
    height: 50%;
  }
  .avatar:nth-child(1){
    border: .1vw solid #f7f7f7;
    margin-right: 3vw;
  }
  .avatar{
    width: 17%;
    height: 14vw;
    float: left;
    position: relative;
    top: 12.5%;
    left: 4.5%;
    margin: 5vw 0 2vw 0;
  }

  .bg{
    width:100%;
    height: 100%;
  }
  .bg-blur{
    float:left;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    -webkit-filter: blur(30px);
    -moz-filter: blur(30px);
    -o-filter: blur(30px);
    -ms-filter: blur(30px);
    filter:blur(30px);

  }

  .forYou>p{
    height: 12%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 1vw;
  }
  .forYou>div{
    height: 65%;
  }
  .forYou{
    height: 35vw;
    width: 45.5%;
    margin-left: 3%;
  }
  .red_btn{
    padding: 1vw 3vw;
    border-radius: 1vw;
  }
  .navigation_btn{
    padding: 1vw 3vw;
    border-radius: 1vw;
    background: none;
    color: white;
  }
  .fontWhite{
    position: relative;
    bottom: 9vw;
    height: 8vw;
    background-size: cover;
    background-position: bottom;
    z-index: 2;
  }
  .fontWhite li{
    float:left;
    width:24vw;
    text-align: center;
  }
  .swiper{
    position: absolute;
    height: 45vw;
    width: 100%;
    top: 35vw;
  }
  .company{
    padding-bottom: 2vw;
    position: absolute;
    top: 12vw;
    color: white;
    width: 100%;
    z-index: 2;
  }
  .sreachInput{
    margin-left: 6vw;
    border-radius: 5vw;
    padding-left: 10vw;
    background-image: url("../../assets/img/home/sousuo.png");
    background-repeat: no-repeat;
    background-position: 4%;
    background-size: 6%;
    height: 8vw;
    width: 60vw;
    margin-top: 3vw;
  }
  .title-content{
    position:fixed;
    width: 100%;
    height: 15vw;
    font-size: 4.4vw;
    text-align: center;
    z-index: 999;
  }
  .gengduo>img{
    position: absolute;
    top: -3vw;
    right: 2vw;
  }
  .gengduo>li{
    border-bottom: .1vw solid #f7f7f7;
    text-align: left;
  }
  .gengduo>li>img{
    width: 5vw;
    float: left;
    margin-top: 2vw;
    margin-left: 4vw;
    margin-right: 3vw;
  }
  .gengduo{
    position: fixed;
    right: 0;
    top: 8vw;
    z-index: 1;
    line-height: 8vw;
    margin-top: 3vw;
    background-color: white;
    width: 30vw;
    margin-right: 2vw;
    border-radius: 1vw;
  }
  .onehang{
    display: block;
    width: 74%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .color{
    background-color: #961818;
  }
</style>
