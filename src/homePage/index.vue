<template>
  <div  style="height: 100%;width: 100%">
    <router-view/>
    <div class="all menu">
      <router-link to="/index/home" >
        <div><img src="@/assets/img/home/aa/jiaj11u.png" :class="{imgGray:!home}" /></div>        首页
      </router-link>
      <router-link to="/index/picture">
        <div><img src="@/assets/img/home/aa/picture.png" :class="{imgGray:!tupian}"/></div>效果图
      </router-link>
      <router-link to="/index/materialHouse" >
        <div><img src="@/assets/img/home/aa/jiaju-kongtiao.png" :class="{imgGray:!material}"/></div>建材库
      </router-link>
      <router-link to="/index/strategy" >
        <div><img src="@/assets/img/home/aa/jiaju-dengpao.png" :class="{imgGray:!strategy}"/></div>找攻略
      </router-link>
      <router-link to="/index/my" >
        <div><img src="@/assets/img/home/aa/jiaju.png" :class="{imgGray:!my}"/></div>我的
      </router-link>

    </div>
  </div>

</template>

<script>
import '@/assets/style/app.css'
export default {
  name: 'index',
  computed: {
    home () {
      return this.$route.fullPath.indexOf('home') > -1
    },
    tupian () {
      return this.$route.fullPath.indexOf('picture') > -1
    },
    material () {
      return this.$route.fullPath.indexOf('material') > -1
    },
    strategy () {
      return this.$route.fullPath.indexOf('strategy') > -1
    },
    my () {
      return this.$route.fullPath.indexOf('my') > -1
    }
  }
}
</script>

<style scoped>
  .menu>a>div>img{
    margin-bottom:2vw;
    height: 5vw;
  }
  .router-link-exact-active { color: #333 !important;}
  .menu>a{
    float: left;
    text-align: center;
    width: 19.5vw;
    height: 7.5vw;
    margin-top: 3vw;
    color: #999;
    font-size: 3vw;
  }
  .menu{
    background-color: white;
    height: 14vw;
    width: 100%;
    bottom: 0;
    z-index: 100000;
    position: fixed;
    padding-bottom: 1vw;
    margin: 0;
  }
</style>
