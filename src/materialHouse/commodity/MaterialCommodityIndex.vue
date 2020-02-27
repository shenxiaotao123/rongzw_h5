<template>
    <div class="backcolor" style="padding-top:46px; height:100%;">
      <mtitle :titleC="title.titlec"  :titleR="title.titleR" class="top_title"></mtitle>
      <!--类目-->
      <div class="white" :class="{showTitle:showAllType}" id="tt" style="margin-bottom:10px;">
        <navigation :types="types" :model="selectType" @up="up"/>

        <div v-show="childrens.length > 0" class="backcolor" style="    clear: both;     height: 8.5vw;">
          <div  v-for="(type,index) in childrens" :key="index" class="left" style="margin-left: 4vw;
    margin-top: 3vw;">
            <input type="radio" name="type" :id="type.id" v-model="selectType" :value="type.id" />
            <label :for="type.id" :class="{cinnabar:type.id === selectType}">{{type.category_name}}</label>
          </div>
        </div>
      </div>
      <!--类目-->

      <drop-down :types="dd" @sort="sort" :class="{top_dd:top}"/>
      <!--筛选类目-->
      <!--商品-->
      <div class="white" style="padding: 0 10px;">
        <van-row gutter="15">
          <van-col span="12" v-for="(shop,index) in shops" :key="index" @click="$router.push({path: '/materialShopDetail', query: {id: shop.spu_id}})" class="forYou">
            <div style=" height: 20vw; "><img class="img bor-r-5" :src="shop.goods_thumb"/></div>
            <p class="van-ellipsis">{{shop.goods_name}}</p>
            <p>
              <span class="cinnabar">￥{{shop.low_price}} </span>
              <span class="right gray">{{shop.sales_actual+shop.sales_initial}}人付款 </span>
            </p>
          </van-col>
        </van-row>



        <div style="clear: both"><br/></div>
      </div>
      <!--商品-->
      <div class="overburden2" :class="{hide:!showAllType}" @click="showAllType = !showAllType"></div>

    </div>
</template>

<script>
  //vant布局
  import Vue from 'vue';
  import { Col, Row } from 'vant';
  Vue.use(Col);
  Vue.use(Row);


import mtitle from '@/public/TextTitle'
import dropDown from '@/public/DropDown'
export default {
  name: 'materialCommodityIndex',
  components: {
    mtitle,
    dropDown,
    navigation: () => import('@/public/NavigationBar')
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  mounted () {
    this.$ajax.get('/api/shop/category').then((response) => {
      this.types = response.data.data
      this.types.unshift({category_name: '全部', id: 0})
    })
    this.param.category_id = this.$route.query.pid
    this.getGoods()
    window.addEventListener('scroll', this.handleFun)
  },
  data () {
    return {
      top: false,
      dd: [
        {
          name: '默认',
          default: 0,
          display: 'none',
          mode: 'one',
          method: 'sort'
        },
        {
          name: '价格',
          default: 2,
          display: 'none',
          mode: 'one',
          method: 'sort'
        },
        {
          name: '销量',
          default: 1,
          display: 'none',
          mode: 'one',
          method: 'sort'
        }
      ],
      navagation: [],
      title: {
        titlec: {
          content: '建材城',
          type: 'text'
        },
        titleR: {
          content: [require('@/assets/img/home/sousuo.png'), require('@/assets/img/home/jaincai/payCar.png')],
          type: 'imgArray',
          method: ['search', 'paycar']
        }
      },
      selectType: parseInt(this.$route.query.pid),
      showAllType: false,
      childrens: [],
      types: [],
      shops: [],
      param: {
        des_status: 0,
        no_cached: 1,
        itemsPerLoad: 20,
        lastIndex: 0,
        category_id: this.selectType
      }
    }
  },
  methods: {
    handleFun () {
      var _this = this
      let titleScrollHeight = document.getElementById('tt').scrollHeight
      this.top = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= (titleScrollHeight - 1)
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        _this.param.lastIndex = _this.shops.length
        _this.$ajax.get('/api/shop/goods', {params: _this.param}).then((response) => {
          _this.shops = _this.shops.concat(response.data.data)
        })
      }
    },
    sort (index, val) {
      this.param.des_status = val.default
      if (index === 1 && val.default === this.dd[index].default) { // 如果是价格的的话
        switch (val.default) {
          case 2:
            this.param.des_status = 3
            this.dd[index].default = 3
            break
          case 3:
            this.param.des_status = 2
            this.dd[index].default = 2
            break
        }
      }

      this.dd.forEach((item) => {
        item.display = 'none'
      })
      this.dd[index].display = 'block'
      this.getGoods()
    },
    getGoods () {
      let _this = this
      _this.$ajax.get('/api/shop/goods', {params: _this.param}).then((res) => {
        _this.shops = res.data.data
      })
    },
    up: function (val) {
      this.param.category_id = val
      this.selectType = val
      this.getGoods()
    }
  }
}
</script>

<style scoped>
  .showTitle{
    overflow: inherit !important;
    height: 18vw !important;
  }
  input[name='type']{
    display: none;
  }
.otherType>li{
  width: 24%;
  padding-left: 5%;
}
  .forYou>p{
    line-height: 1.5;
    font-size: 12px;
  }
  .van-ellipsis { margin-top: 5px; font-size: 14px;}
  .forYou{
    margin-bottom: 20px;
  }
  li{
    float: left;
    margin-left: 4vw;
    margin-top: 3vw;
  }
  .navigationBar{
    white-space: nowrap;
    overflow-x: auto;
    text-align: center;
    padding: 5vw;
    font-size: 4vw;
    background-color: white;
  }
</style>
