<template>
    <div style="background-color: black;height: 100%;">
      <img src="../assets/img/fanhui.png" class="img_tt" @click="$router.go(-1)"/>
      <swiper :options="swiperOption1"  style="height: 70vw;    position: fixed;    top: 25%;">
        <swiper-slide v-for="img of site.work_images" >
          <img :src="img"  class="img">
        </swiper-slide>
      </swiper>
      <div class="content">
        <p class="content_title">
          {{site.style.name}}&nbsp;&nbsp;|&nbsp;&nbsp;
          {{site.shape.name}}&nbsp;&nbsp;|&nbsp;&nbsp;
          {{site.mianji}}m²&nbsp;&nbsp;|&nbsp;&nbsp;
          {{site.zaojia>1000 ? site.zaojia/10000+'万':site.zaojia}}
          <span class="right" style="font-size: 5vw">{{activeIndex}}/{{site.work_images.length}}</span>
        </p>
        <p class="content_title" style="font-size: 4.5vw">
          {{site.designer_name}}
        </p>
        <p class="content_title" style="font-size: 3vw">
          <span @click="$router.push({path:'/worksShow',query:{workid:site.id,designerid:site.designer_id}})">
            作品来源：{{site.title}}
          </span>
        </p>
      </div>
      <div class="content_bottom">
        <p class="content_title">
          <span @click="$router.push({path:'/worksShow',query:{workid:site.id,designerid:site.designer_id}})">了解更多</span>
          <span class="right">
            <button>收藏</button>
            <button @click="$router.push({path:'/showDetail',query:{id:site.designer_id}})">找他设计</button>
          </span>
        </p>
      </div>
    </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
export default {
  name: 'Pic',
  components: {mtitle},
  data () {
    return {
      site: {},
      activeIndex: 1,
      swiperOption1: {}
    }
  },
  created () {

    let _this = this
    this.swiperOption1 = {
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: false,
      width: 380,
      on: {
        slideChangeTransitionEnd: function () {
          _this.activeIndex = this.activeIndex + 1
        }
      }
    }
    this.$ajax.get('/api/designer/works/' + this.$route.query.id).then((res) => {
      this.site = res.data.data
    })
  }
}
</script>

<style scoped>
  .content_bottom button{
    background: black;
    color: white;
    border: .1vw solid rgb(82,94,114);
    padding: 0 3vw;
    margin: 2vw;
  }
  .content_bottom{
    position: fixed;
    bottom: 0;
    color: white;
    width: -webkit-fill-available;
  }
.img_tt{
  width: 1.7vw;
  margin: 4vw;
}
  .content{
    color: white;
    position: fixed;
    top: 66%;
    margin: 0 3vw;
    width: -webkit-fill-available;
  }
  .content_title{
    text-align: left;
    font-size: 3.9vw;
    line-height: 7vw;
  }
</style>
