<template>
    <div style="margin-bottom: 13vw">
      <mtitle :img="goods.goods_thumb" style="height: 65vw;" id="maodian0"/>

      <toptitle v-show="navigation" class="topmenu" :titleC="titleC" :titleR="titleR" @position="position"/>
      <!--头信息-->
      <div style="margin: 0 5vw;">
        <p  class="biaoti" >
          {{goods.goods_name}}
        </p>
        <p  class="gray">
          {{goods.goods_name}}
        </p>
        <br>
        <p>
          <span class="cinnabar" style="font-size: large;">￥<i style="font-size: xx-large">{{goods.low_price}}</i></span>
          <span class="gray"  style="text-decoration: line-through;" v-if="goods.line_price!== '0.00'">￥{{goods.line_price}}</span>
          <span class="gray right">已售{{goods.sales_actual+goods.sales_initial}}</span>
        </p>
        <p>
          <button class="white_btn" v-for="tip of goods.infos.spu_tips">{{tip}}</button>
          <label class="right"><img src="../../assets/img/shoucang.png"  class="imgs"/>&nbsp;收藏</label>
        </p>
      </div>
      <div style="height: 1.5vw; margin-top: 5vw;" class="backcolor"></div>
      <!--头信息-->

      <!---商品详情-->
      <div class="details">
        <p @click="youhuijuan">
          <span>优惠劵</span>
          <i class="right">
            <button class="red_red_brn">收藏省10元</button>
            <button class="red_red_brn">满299减10</button>
            <button class="red_red_brn">满399减20</button>
            <img src="../../assets/img/rightArrow.png" style="width: 4vw;"/>
          </i>
        </p>
        <p>
          <span>发货</span>
          <img src="../../assets/img/position.png" style="width: 4vw;"/>
          {{store.address}} |     快递: 0.00
        </p>
        <p @click="chooseNum">
          <span>选择</span>
          规格数量
        </p>
      </div>
      <div style="height: 1.5vw;" class="backcolor"></div>
      <ul class="zp">
        <li>
          <img src="@/assets/img/home/baozhang.png"  />&nbsp;&nbsp;
          正品保障
         </li>
        <li><img src="@/assets/img/tubiaolunkuo.png"/>&nbsp;&nbsp;正规厂家</li>
        <li><img src="@/assets/img/rmb.png" />&nbsp;先行赔付</li>
        <li><img src="@/assets/img/jiayipeishi.png"  />&nbsp;&nbsp;假一赔十</li>
      </ul>
      <!---商品详情-->
      <!---商品评价-->
      <div style="margin:0 5vw 4vw 5vw" id="maodian1" @click="$router.push({path: '/materialReviews',query:{id:goods.spu_id}})" v-if="comment.length>0">
        <p style="line-height: 12vw">
          <i style="font-weight: 600">商品评价({{comment.length}})</i>
          <i class="right gray">更多>  </i>
        </p>
        <div class="all comment">
          <p>
            <img :src="comment[0].user_infos.user_image" class="imgs"/> &nbsp; <span style="font-size: 4.1vw;">{{comment[0].user_infos.real_name}}</span> &nbsp;&nbsp; <span class="gray">{{comment[0].created_at}}</span>
          </p>
          <p class="all" style="padding-top: 3vw;">{{comment[0].content}}</p>
        </div>
      </div>
      <div style="margin:0 5vw 4vw 5vw" id="maodian1" @click="$router.push({path: '/materialReviews',query:{id:goods.spu_id}})" v-else>
        <p style="line-height: 12vw">
          <i style="font-weight: 600">暂无评价</i>
          <i class="right gray">更多>  </i>
        </p>
        <div class="all comment gray" style="padding: 3vw 22vw">

          <img src="../../assets/img/zanwu.png" style="    width: 12.9vw;"/>
          <p style="    margin-top: -11vw;    margin-left: 19vw;">
            没有相应的评价<br>
            看看其他的~
          </p>
        </div>
      </div>
      <div style="height: 1.5vw;" class="backcolor"></div>
      <!---商品评价-->

      <!---公司-->
        <div  class="company">
          <div class="avatar">
            <img :src="store.logo_image" class="img"/>
          </div>
          <div class="avatar" style="width: 73%;">
            <p>
              {{store.shop_name}}
              <button class="white_btn right" @click="$router.push({path:'/store',query:{id:store.shop_id}})">进店逛逛</button>
            </p>
            <p class="gray" style="font-size: xx-small;">
              主营业务:{{store.shop_category}}
            </p>
          </div>
        </div>
        <ul class="gray zp">
          <li>商品描述 <span :class="cl(store.description_score)">{{store.description_score}} </span></li>
          <li>卖家服务 <span :class="cl(store.service_score)">{{store.service_score}} </span></li>
          <li>物流服务 <span :class="cl(store.logistics_score)">{{store.logistics_score}} </span></li>
        </ul>
      <div style="height: .5vw;" class="backcolor"></div>
      <!---公司-->

      <!---商品介绍-->
      <div class="introduction" id="maodian2">
        <p>
          <span class="line"></span>&nbsp;&nbsp;&nbsp;
          <span class="introduction-title">商品详情</span>&nbsp;&nbsp;&nbsp;
          <span class="line"></span>
        </p>
        <div class="infos_content"  id="aaa" v-html="content" @load="upImgWidth"></div>

      </div>
      <!---商品介绍-->

<!--为您推荐-->
      <div class="white" id="maodian3">
        <p style="text-align: center;">
          <span class="line"></span>&nbsp;&nbsp;&nbsp;
          <span class="introduction-title">为您推荐</span>&nbsp;&nbsp;&nbsp;
          <span class="line"></span>
        </p>
        <div class="forYou left" v-for="(shop,index) in shops" :key="index" @click="showDetail(shop.spu_id)">
          <div><img class="img" :src="shop.goods_thumb" style="    border-radius: 3vw;"/></div>
          <p>{{shop.goods_name}}</p>
          <p>
            <span class="cinnabar">￥{{shop.low_price}} </span>
            <span class="right gray">{{shop.sales_actual+shop.sales_initial}}人付款 </span>
          </p>
        </div>
        <div style="clear: both"><br/></div>
      </div>
      <p style="text-align: center;">
        <span class="gray">已经到底啦</span>
      </p>
<!--为您推荐-->
      <msg v-if="this.$store.state.showToast" :msgObj="msgObj" :order="order"  @to="to"></msg>
      <bmenu @cart="shop('cart')" @bay="shop('bay')"/>
</div>
</template>

<script>
import mtitle from '@/public/ImgTitle'
import toptitle from '@/public/TextTitle.vue'
import msg from '@/public/Msg'
import bmenu from '@/public/ButtomMenu'
export default {
  name: 'ShopDetail',
  components: {
    mtitle,
    toptitle,
    msg,
    bmenu
  },
  updated () {
    for (var i = 0; i < document.getElementById('aaa').getElementsByTagName('img').length; i++) {
      document.getElementById('aaa').getElementsByTagName('img')[i].classList = ['img']
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.$ajax.get('/api/shop/goods/' + this.$route.query.id).then((res) => {
      this.goods = res.data.data
      this.content = this.goods.infos.content
      this.$ajax.get('/api/shop/store/' + this.goods.shop_id).then((res) => {
        this.store = res.data.data
      })
    })
    this.$ajax.get('/api/shop/goods?is_rec=1').then((res) => {
      this.shops = res.data.data
    })
    this.$ajax.get('/api/shop/goodsComment?spu_id=' + this.$route.query.id).then((res) => {
      this.comment = res.data.data
    })
  },
  data () {
    return {
      content: [],
      store: {},
      comment: [],
      goods: [],
      msgObj: {
        title: '优惠卷',
        left: true,
        position: 'bottom',
        from: 'yhj',
        btns: [],
        detial: {}
      },
      navigation: false,
      titleR: {
        type: 'imgArray',
        content: [require('@/assets/img/title/商城.png'), require('@/assets/img/title/fenxiang.png')],
        method: ['to', 'fx']
      },
      titleC: {
        type: 'textArray',
        content: ['商品', '评价', '详情', '推荐'],
        method: ['position', 'position', 'position', 'position']
      },
      shops: [],
      order: {
        shopSpece: [
        ],
        shopNum: [
        ],
        other: [
          {id: '7', text: '三年保修'}
        ],
        type: 'bay'
      }
    }
  },
  methods: {
    position(val){
      var a = '#maodian'+val
      const returnEle = document.querySelector(a)
      if (returnEle) {
        returnEle.scrollIntoView(true)
      }
    },

    upImgWidth () {
      alert(1)
    },
    to () {
      let type = this.order.type
      switch (type) {
        case 'cart':
          alert('已加入购物车')
          break
        case 'bay' :
          this.$router.push('/materialSettlement')
          break
      }
      this.$store.state.showToast = false
    },
    shop: function (val) {
      this.msgObj.from = 'shopNum'
      this.msgObj.title = ''
      this.$store.state.showToast = true
      this.msgObj.btns = ['yes']
      this.order.type = val
      this.msgObj.detail = this.goods
    },
    chooseNum: function () {
      this.msgObj.from = 'shopNum'
      this.msgObj.title = ''
      this.$store.state.showToast = true
      this.msgObj.btns = []
      this.msgObj.detail = this.goods
    },
    showDetail: function (id) {
      this.$router.push({path: '/materialShopDetail', query: {id: id}})
      location.reload()
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 100) {
        if (!this.navigation) { this.navigation = !this.navigation }
      } else if (scrollTop < 100) {
        if (this.navigation) { this.navigation = !this.navigation }
      }
    },
    youhuijuan: function () {
      this.$store.state.showToast = true
      document.getElementById('pj').scrollIntoView()
    }
  },
  computed: {
    cl: function () {
      return (id) => {
        if (id >= 4) {
          return {
            cinnabar: true
          }
        } else if (id <= 2) {
          return {
            commentbad: true
          }
        } else {
          return {
            commentMedium: true
          }
        }
      }
    }
  }

}
</script>

<style scoped>

  .infos_content{
    width: -webkit-fill-available;
  }
  .forYou>p{
    height: 12%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 1vw;
  }
  .commentbad{
    color: #17CC1D
  }
  .commentMedium{
    color: #FEB53D;
  }
  .topmenu{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    z-index: 999;
  }
  .forYou{
    height: 35vw;
    width: 45.5%;
    margin-left: 3%;
  }

  .forYou>div{
    height: 60%;
  }
  .introduction{
    margin: 0 5vw;
    text-align: center;
  }
  .line{
    display: inline-block;
    width: 25vw;
    border-top: 1px solid #ccc ;
  }
  .introduction-title{
    height: 20vw;
    line-height: 20vw;
    font-size: large;
    text-align: center;
    vertical-align: sub;
  }
  .gray>li{
   margin-left: 9vw;
  }
  .company{
    height: 20vw;
  }
  .avatar>p>.white_btn{
    width: 20vw;
    border: .2vw solid;
  }
  .avatar>p:nth-child(1){
    font-size: large;
  }
  .avatar>p{
    height: 50%;
  }
  .avatar>img{
    width: 20vw;
    border: .3vw solid #f7f7f7;
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
  .imgs{
    width: 4vw;
  }
  .red_red_brn{
    padding: 1vw;
    font-size: x-small;
  }
  .details p span{
    color: #999999;
    margin-right: 10vw;
  }
  .details p{
    height: 12vw;
    line-height: 12vw;
    border-bottom: .5vw solid #F7F7F7;
    padding: 0 5vw;
  }
  .details{
    height: 36vw;
  }
.biaoti{
  font-size: initial;
  padding:3vw 0vw;
}
  p{
    line-height: 5vw;
  }
  .white_btn{
    padding: 0 2vw;
    font-size: x-small;
    border: .3vw solid;
    border-radius: 1vw;
    margin-right: 2vw;
  }
</style>
