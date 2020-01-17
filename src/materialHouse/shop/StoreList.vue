<template>
    <div style="padding-top: 15vw;">
      <mtitle :titleC="title.titlec"  :titleR="title.titleR" class="top_title"></mtitle>
      <!--类目-->
      <!--<navigation :types="types" :model="selectType" @up="up"/>-->
      <!--类目-->
      <div style="height: 2vw"></div>

      <!--<drop-down :types="dd" @jiage="jiage" @style="brand"/>-->

      <p style="clear: both"></p>

        <div  class="company" v-for="(shop,index) of stores" :key="index">
          <div @click="$router.push({path:'/store',query:{id:shop.shop_id}})">
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

          <p style="clear: both"/>
          <div  style="display: flex;justify-content: space-around; ">
            <div v-for="good of storeGoods[index]" style="position: relative;" @click="$router.push({path: '/materialShopDetail', query: {id: good.spu_id}})">
              <img :src="good.goods_thumb"  style="width: 30vw;height: 15vw;">
              <div style="position: absolute; bottom: 0;text-align: right;width: 100%;background-color: rgba(47,47,47,0.7);    color: white;">{{good.low_price}}</div>
            </div>

          </div>
        </div>

    </div>

</template>

<script>
import mtitle from '@/public/TextTitle'
import dropDown from '@/public/DropDown'
export default {
  name: 'StoreList',
  components: {
    mtitle,
    dropDown,
    navigation: () => import('@/public/NavigationBar')
  },
  mounted () {
    var _this = this
    // 品类列表
    this.$ajax.get('/api/shop/category?is_rec=1').then((response) => {
      _this.types = response.data.data
      _this.types.unshift({category_name: '全部', id: 0})
    })
    this.getStores()
    window.addEventListener('scroll', this.handleFun)
  },
  methods: {
    getStores () {
      // 店铺列表
      let _this = this
      this.$ajax.get('/api/shop/store', {params: this.param}).then((response) => {
        _this.stores = response.data.data
        _this.stores.forEach((item) => {
          _this.$ajax.get('/api/shop/goods', {params: {itemsPerLoad: 3, des_status: 1, shop_id: item.shop_id}}).then((res) => {
            _this.storeGoods.push(res.data.data)
          })
        })
      })
    },
    up () {},
    handleFun () {
      var _this = this
      _this.scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 400
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        _this.param.lastIndex = _this.stores.length
        _this.$ajax.get('/api/shop/store', {params: _this.param}).then((response) => {
          _this.stores = _this.stores.concat(response.data.data)
        })
      }
    }
  },
  data () {
    return {
      param: {
        itemsPerLoad: 10,
        lastIndex: 0
      },
      storeGoods: [],
      stores: [],
      dd: [
        {
          name: '综合',
          default: '综合',
          list: [
            {
              name: '综合'
            }, {
              name: '评分'
            }, {
              name: '销量'
            }],
          display: 'none',
          mode: 'sort'
        },
        {
          name: '销量',
          default: '销量',
          defaultName: '销量',
          list: [],
          display: 'none',
          mode: 'jiage'
        },
        {
          name: '品牌',
          defaultName: '品牌',
          default: '',
          list: [],
          display: 'none',
          mode: 'style'
        }
      ],
      title: {
        titlec: {
          content: '建材城',
          type: 'text'
        },
        titleR: {
          content: [require('@/assets/img/home/jaincai/payCar.png'), require('@/assets/img/home/sousuo.png')],
          type: 'imgArray',
          method: ['paycar', 'search']
        }
      },
      types: [],
      showAllType: false,
      selectType: 0
    }
  }
}
</script>

<style scoped>
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
  .img_price{
  background-color: black;
  color: white;
  text-align: right;
  opacity: 0.5;
  width: -webkit-fill-available;
  position: relative;
  bottom: 4vw;
  border-radius: 0vw 0vw 1vw 1vw;
}
  .onehang{
    display: block;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .company{
    border-bottom: .5vw solid #f7f7f7;
    padding-bottom: 2vw;
  }
  .showTitle{
    overflow: inherit !important;
    height: 18vw !important;
  }
  input[name='type']{
    display:none ;
  }
</style>
