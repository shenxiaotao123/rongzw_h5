<template>
<div style="height: auto;width: 100%;margin-bottom: 25vw" class="all">
  <div class="site" v-for="site of sites" @click="$router.push({path:'/pic',query:{id:site.id}})">
    <img :src="site.img"/>
    <div>
      <p class="heavy yihang" style="text-align: left">{{site.style.name}}&nbsp;{{site.shape.name}}&nbsp;{{site.mianji}}m²&nbsp;{{site.zaojia/10000}}万</p>
      <p class="medium gray" style="text-align: left">{{site.designer_name}} <span class="right">{{site.work_images.length}}张</span></p>
    </div>
  </div>
<p style="clear: both"></p>
</div>

</template>

<script>
export default {
  name: 'Site',
  props: ['sites'],
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  methods: {
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
          _this.$emit('up')
        }
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleFun)
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
