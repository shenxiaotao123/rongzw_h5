<template>
  <swiper :options="swiperOption" style="text-align:center; touch-action: none;margin-top: 2vw">
    <swiper-slide v-for="site of constructionSite" :key="site.id">
      <img :src="site.thumb_img" style="height: 22vw; border-radius: 2vw" />

        <p class="heavy" style="padding:1vw 0 0 1vw;  text-align: center; line-height: 1.2;">{{site.quarter_name}}|{{site.shape_name}}</p>

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
  height: 83%;
  margin-bottom: 1vw;
}
</style>
