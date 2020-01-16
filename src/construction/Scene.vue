<template>
  <swiper :options="swiperOption" style="text-align:center;height: 27vw; touch-action: none;margin-top: 2vw">
    <swiper-slide v-for="site of constructionSite" :key="site.id">
      <img :src="site.thumb_img" style="border-radius: 2vw" />
      <div>
        <p class="heavy" style="padding-left: 4.9vw;    font-size: .1vw;    height: 5vw;    position: relative;    right: 2vw;    width: 27vw;    text-align: center;">{{site.quarter_name}}|{{site.shape_name}}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
var _this = null
export default {
  name: 'Scene',
  methods: {
  },
  props: ['type'],
  data: function () {
    return {
      swiperOption: {
        slidesPerView: 3.2,
        spaceBetween: 0,
        observer: true,
        on: {
          click () {
            _this.$router.push({path: '/siteDetail', query: {id: _this.constructionSite[this.clickedIndex].id}})
          }
        }
      },
      constructionSite: []
    }
  },
  created () {
    _this = this
    let path = '/api/construction/site'
    switch (_this.type) {
      case 'handler':
        path = path + '?is_rec=1'
        break
    }
    this.$ajax.get(path).then((response) => {
      this.constructionSite = response.data.data
    })
  }
}
</script>

<style scoped>
img{
  max-width: 100%;
  max-height: 100%;
  width: 90%;
  float: right;
  height: 83%;
  margin-bottom: 1vw;
}
</style>
