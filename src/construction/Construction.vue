<template>
    <div style="height: auto;width:100%;margin-top: 13.5vw">
      <!--抬头-->
      <mtitle :titleC="titleC" :titleR="titleR" :titleL="titleL" @to="$router.push({path:'/index/home'})" class="top_title"></mtitle>
      <!--抬头-->

      <!--图片-->
      <div style="width: 100%"><img src="../assets/img/construction/bj.png" class="img"/></div>
      <!--图片-->

      <!--介绍-->
      <div class="constructionYD all" >
        <button>先施工在支付</button>
        <button>工地全程记录  </button>
        <button>施工过程透明  </button>
      </div>
      <!--介绍-->

      <!--轮播图-->
      <scene class="lbt"></scene>
      <!--轮播图-->

      <!--介绍-->
      <ul class="stage medium all">
        <li><div>水电阶段</div></li>
        <li><div>泥工阶段 </div> </li>
        <li><div>木工阶段 </div> </li>
        <li><div>油漆阶段</div> </li>
        <li><div>保洁修补 </div>  </li>
      </ul>
      <!--介绍-->
<p></p>
      <!--导航-->
      <drop-down :types="types" @region="region" @style="upstyle" @sort="sort" :class="{top_dd:this.top}" style="top: 15vw;"/>
      <!--导航-->
      <!--施工公司-->
      <company  :companys="companys"></company>
      <!--施工公司-->
    </div>
</template>

<script>
import company from '@/construction/ConstructionCompanyList'
import scene from '@/construction/Scene'
import mtitle from '@/public/TextTitle'
import DropDown from '@/public/DropDown'
export default {
  name: 'Construction',
  components: {
    mtitle,
    scene,
    company,
    DropDown
  },
  methods: {
    getCompany () {
      let _this =this
      _this.$ajax.get(this.path, {params: this.req}).then((res) => {
        _this.companys = res.data.data
      })
    },
    region (val, key) {
      this.types[0].display = 'none'
      this.req.area_id = key
      this.getCompany()
    },
    upstyle (index, val) {
      if (val.id === '不限') {
        this.req.shapes = undefined
      } else {
        this.req.shapes = val.id
      }
      this.getCompany()
    },
    sort (index, val) {
      this.req.des_status = val.id
      this.getCompany()
    },
    topdd () {
      let _this = this
      let titleScrollHeight = document.getElementsByClassName('top_title')[0].scrollHeight
      let picScrollHeight = document.getElementsByClassName('img')[0].scrollHeight
      let stagecrollHeight = document.getElementsByClassName('medium')[0].scrollHeight
      let lbtScrollHeight = document.getElementsByClassName('lbt')[0].scrollHeight
      this.top = ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >
        titleScrollHeight + picScrollHeight + stagecrollHeight + lbtScrollHeight) ||
        ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) ===
          titleScrollHeight + picScrollHeight + stagecrollHeight + lbtScrollHeight)

      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        _this.req.lastIndex = _this.companys.length === null ? 0 : _this.companys.length
        _this.$ajax.get(this.path, {params: _this.req}).then((res) => {
          _this.companys = _this.companys.concat(res.data.data)
        })
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.topdd)
  },
  created () {
    this.getCompany()
    this.$ajax.get('/api/shapes').then((res) => {
      this.types[2].list = res.data.data
      this.types[2].list.unshift({id: 0, name: '不限', sort: 1})
    })
  },
  mounted () {
    window.addEventListener('scroll', this.topdd)
  },
  data: function () {
    return {
      top: false,
      req: {
        des_status: 0,
        lng: sessionStorage.getItem('lng'),
        lat: sessionStorage.getItem('lat'),
        area_id: '',
        city_id: sessionStorage.getItem('city'),
        no_cached: 1,
        lastIndex: 0
        /* shapes: '不限' */
      },
      path: '/api/construction/company',
      titleC: {
        type: 'search',
        content: '找施工'
      },
      titleL: {
        content: require('@/assets/img/loginUser/back.png'),
        method: 'to'
      },
      titleR: {
        type: 'img',
        content: require('@/assets/img/msg.png')
      },
      tt: [],
      types: [
        {
          name: '区域选择',
          defaultName: '区域选择',
          default: this.regions[sessionStorage.getItem('province')][sessionStorage.getItem('city')],
          list: this.regions[sessionStorage.getItem('city')],
          display: 'none',
          mode: 'region',
          subheading: '下属区县市'
        },
        {
          name: '综合',
          default: 0,
          list: [
            {
              id: 0,
              name: '综合排序'
            }, {
              id: 3,
              name: '点评最多'
            }, {
              id: 4,
              name: '距离优先'
            }],
          display: 'none',
          mode: 'sort'
        },
        {
          name: '筛选',
          defaultName: '筛选',
          default: '不限',
          list: [],
          display: 'none',
          mode: 'style',
          subheading: '装修户型',
          method: 'style'
        }
      ],
      companys: [],
      sortIndex: 10
    }
  }
}
</script>

<style scoped>
.lbt{}
.medium { margin-top: 2vw;}
.all:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
  .details p:nth-child(2){
    padding-top: 2vw;
  }
   .photo {
    background-color: rgb(207, 207, 207);
    height: 25vw;
    width: 25vw;
    margin-left: 5vw;
    margin-top: 3.5vw;
    float: left;
  }
   .details {
     margin-left: 25vw;
     padding-top: 3vw
  }

  .select li{
    float: left;
    width: 25vw;
    font-size: 4.1vw;
    position: relative;
  }
  .select{
    height: 13vw;
    border: 1px solid;
    clear:both;
  }
  .stage li:nth-child(1){
     background-color: #F5DDDE;
     color: #DD1A21;
   }
  .stage li:nth-child(2){
    background-color: #DFF6E0;
    color: #00B408;
  }
  .stage li:nth-child(3){
    background-color:#DCF3F8;
    color: #009BBD
  }
  .stage li:nth-child(4){
    background-color:#EAEFC9;
    color: #B0B200
  }
  .stage li:nth-child(5){
    background-color: #EFD5C9;
    color: #C93F00
  }
  .stage li div {
    transform: scale(0.8);
  }
  .stage li{
    float: left;
    width: 13vw;
    margin-right: 0.5vw;
    text-align: center;
    height: 4vw;
    border-radius: 1vw;
    font-size: xx-small;
  }
  il{
    float: left;
  }
  .constructionYD button{
    width: 31vw;
    background-color: #FCE8E8;
    color: #D96A6E;
    border-radius: 5vw;
    height: 7vw;
    font-size: 3vw;
  }
.constructionYD {
  height: 7vw;
  padding: 3vw 2vw 1vw 2vw;
}
</style>
