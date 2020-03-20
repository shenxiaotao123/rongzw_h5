<template>
    <div style="margin-top: 15vw">
      <mtitle :titleC="titleC" :titleR="titleR" :titleL="titleL" @to="$router.push({path:'/index/home'})" class="top_title"></mtitle>
      <div style="height: 49vw;width: 100%"><img src="../assets/img/construction/bj.png" style="height: 100%;width: 100%"/></div>
      <div class="constructionYD all" >
        <button>先施工在支付</button>
        <button>工地全程记录</button>
        <button>施工过程透明</button>
      </div>
      <ul class="stage medium all">
        <li><div>水电阶段</div></li>
        <li><div>泥工阶段 </div> </li>
        <li><div>木工阶段 </div> </li>
        <li><div>油漆阶段</div> </li>
        <li><div>保洁修补 </div>  </li>
      </ul>
      <drop-down :types="types" @region="region" @style="upstyle" @sort="sort" :class="{top_dd:this.top}" style="top: 15vw;"/>
      <site :ss="sites" @up="concatSites" />
    </div>
</template>

<script>
export default {
  name: 'SiteList',
  components: {
    mtitle: () => import('@/public/TextTitle'),
    site: () => import('@/construction/companyDetail/Site'),
    dropDown: () => import('@/public/DropDown')
  },
  methods: {
    region (val, key) {
      this.types[0].display = 'none'
      this.param.area_id = key
      this.getSites()
    },
    upstyle (index, val) {
      this.param.shape_id = val.id
      this.getSites()
    },
    sort (index, val) {
      this.param.stage_id = val.id
      this.getSites()
    },
    concatSites () {
      this.param.lastIndex = this.sites.length
      this.$ajax.get('/api/construction/site', {params: this.param}).then((res) => {
        this.sites = this.sites.concat(res.data.data)
      })
    },
    getSites () {
      this.param.lastIndex = 0
      this.$ajax.get('/api/construction/site', {params: this.param}).then((res) => {
        this.sites = res.data.data
      })
    },
    topdd () {
      this.top = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 262
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.topdd)
  },
  mounted () {
    this.getSites()
    this.$ajax.get('/api/shapes').then((res) => {
      this.types[2].list = res.data.data
      this.types[2].list.unshift({id: 0, name: '不限', sort: 1})
    })
    this.$ajax.get('/api/construction/stage').then((res) => {
      this.types[1].list = res.data.data
      this.types[1].list.unshift({id: 0, name: '不限', sort: 1})
    })
    window.addEventListener('scroll', this.topdd)
  },
  data () {
    return {
      top: false,
      sites: [],
      param: {
        itemsPerLoad: 10,
        lastIndex: 0,
        shape_id: 0, // 户型
        stage_id: 0, // 施工阶段
        area_id: 0// 区域
      },
      types: [
        {
          name: '区域选择',
          default: this.regions[sessionStorage.getItem('province')][sessionStorage.getItem('city')],
          list: this.regions[sessionStorage.getItem('city')],
          display: 'none',
          mode: 'region',
          subheading: '下属区县市'
        },
        {
          name: '施工阶段',
          defaultName: '施工阶段',
          default: 0,
          list: [],
          display: 'none',
          mode: 'sort'
        },
        {
          name: '筛选',
          defaultName: '筛选',
          default: 0,
          display: 'none',
          mode: 'style',
          method: 'style'
        }
      ],
      titleC: {
        type: 'search',
        content: '找施工'
      },
      titleL: {
        content: require('@/assets/img/loginUser/back.png'),
        method: 'to'
      }
      // ,
      // titleR: {
      //   type: 'img',
      //   content: require('@/assets/img/msg.png')
      // }
    }
  }
}
</script>

<style scoped>

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
    padding: 5px 0;
    font-size: 12px;
  }
  .constructionYD {
    height: 7vw;
    padding: 5vw 2vw;
  }
</style>
