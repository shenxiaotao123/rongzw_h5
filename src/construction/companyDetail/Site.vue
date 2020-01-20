<template>
<div style="height: auto;width: 100%;" class="all">
  <div class="site" v-for="site of sites" @click="$router.push({path:'/siteDetail',query:{id:site.id}})">
    <img :src="site.thumb_img"/>
    <div>
      <p class="heavy" >{{site.quarter_name}} | {{site.shape_name}}</p>
      <p class="medium gray">{{site.stage_name}}</p>
    </div>
  </div>
<p style="clear: both"></p>
</div>

</template>

<script>
export default {
  name: 'Site',
  props: ['ss'],
  data () {
    return {
      pa: this.$route.fullPath,
      param: {
        company_id: this.$route.query.id,
        itemsPerLoad: 10,
        lastIndex: 0
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  methods: {
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
        if (_this.pa.indexOf('constructionSite') > 0) {
          _this.param.lastIndex = _this.sites === undefined ? 0 : _this.sites.length
          if (this.param.lastIndex > 0) {
            this.$ajax.get('/api/construction/site', {params: _this.param}).then((res) => {
              _this.ss = _this.ss.concat(res.data.data)
            })
          }
        } else {
          _this.$emit('up')
        }
      }
    }
  },
  mounted () {
    let _this = this
    window.scroll(0, 0)
    window.addEventListener('scroll', this.handleFun)
    if (_this.sites === undefined) {
      _this.$ajax.get('/api/construction/site?company_id= ' + this.$route.query.id + '& itemsPerLoad: 10&lastIndex: 0').then((res) => {
        _this.ss = res.data.data
      })
    }
  },
  computed: {
    sites: function () {
      return this.ss
    }
  }
}
</script>

<style scoped>
  .site p{
    text-align: center;
    margin-top: 2vw;
    font-size: xx-small;
  }
.site{
  width: 47%;
  margin-top: 4vw;
  float: left;
  margin-right: 2vw;
  height: 34vw;
  text-align: center;
}
.site img{
  width: 100%;
  height: 71%;
  border-radius: 1vw;
}
</style>
