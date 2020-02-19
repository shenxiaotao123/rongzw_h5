<template>
  <div style="clear: both;">
    <div v-for="designer in designers" class="works" :key="designer.id" v-if="path.indexOf('showDetail')>-1" >

      <swiper :options="swiperOption1" style="height: 25vw; touch-action: none;margin-top: 2vw">
        <swiper-slide v-for="gg of designer.work_images">
          <img :src="gg" @click="$router.push({path:'/worksShow',query:{workid:designer.id,designerid:designer.designer_id}})" class="img"/>
        </swiper-slide>
      </swiper>

      <div class="works_avatar_detail " >
          <span class="fontWhite">{{designer.work_images.length}}张</span>
      </div>
      <div class="introduce">
        <p class="medium p2">{{designer.title}}</p>
        <ul  >
          <li class="gray" >{{designer.style.name}}</li>
          <li class="gray"  >{{designer.shape.name}}</li>
          <li  class="gray" >{{designer.mianji}}m²</li>
        </ul>
        <button class="bule_white_btn right" @click="$store.state.showToast = true">立刻咨询</button>
      </div>
    </div>
    <div v-for="(designer) in works" class="works" :key="designer.id" v-if="path.indexOf('home')>-1||path.indexOf('picture')>-1">
      <div class="works-info">
        <div v-show="path.indexOf('home')>-1" style="padding:2vw; border-radius: 0 0 2vw 0; height: 5vw; color: white; font-size: 3vw;  ">
        <div class="works_avatar">
        <img :src=designer.designer_image />
        <span>{{designer.designer_name}}</span>
      </div>
        <span style="float: right; margin-top: 1vw;">阅读{{designer.hits>10000 ?designer.hits/10000+'万':designer.hits}}</span>
      </div>
      </div>
      <div class="works_img">
        <img :src=designer.img @click="$router.push({path:'/worksShow',query:{workid:designer.id,designerid:designer.designer_id}})"/>
      </div>
      <div class="introduce">
        <p class="medium p1">{{designer.title}}</p>
        <ul  >
          <li class="gray" >{{designer.style.name}}</li>
          <li class="gray"  >{{designer.shape.name}}</li>
          <li  class="gray" >{{designer.mianji}}m²</li>
        </ul>
        <span class="right gray" v-show="path.indexOf('picture')>-1">
          收藏{{designer.coll_nums}}&nbsp;|&nbsp;阅读{{designer.hits>10000 ?designer.hits/10000+'万':designer.hits}}
        </span>
        <div  class="right introduce_fx hide" :class="{display : path.indexOf('home')>-1}">
          <button class="white introduce_fx_sc"></button>
          <button class="white introduce_fx_fx "></button>
        </div>
      </div>
    </div>

    <msg v-show="this.$store.state.showToast" :msgObj="msgObj"></msg>
  </div>

</template>

<script>
export default {
  name: 'works',
  props: ['works'],
  data () {
    return {
      msgObj: {
        left: false,
        position: 'middle',
        from: 'down'
      },
      designers: [],
      path: window.location.href,
      swiperOption1: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    to: function (url) {
      this.$router.push(url)
    },
    handleFun: function () {
      let _this = this
      _this.scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 400
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        let path = '/api/designer/works?no_cached=1&lastIndex=' + _this.designers.length
        if (_this.$route.query.id) {
          path = path + '&designer_id=' + _this.$route.query.id
          _this.$ajax.get(path).then((response) => {
            _this.designers = _this.designers.concat(response.data.data)
          })
        } else {
          _this.$emit('pic')
        }
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  mounted () {
    window.addEventListener('scroll', this.handleFun)
    if (this.path.indexOf('home') > -1) {
      window.removeEventListener('scroll', this.handleFun)
    }

    let path = '/api/designer/works'
    if (this.$route.query.id) {
      path = path + '?designer_id=' + this.$route.query.id
    } else if (this.path.indexOf('home') > -1) {
      path = path + '?is_rec=1&itemsPerLoad=3'
    } else if (this.path.indexOf('pic') > -1) {
    }
    this.$ajax.get(path).then((response) => {
      this.designers = response.data.data
    })
  }
}
</script>

<style scoped>
  .introduce {
    margin-top: 1.5vw;
  }
  .introduce ul { margin-bottom:3vw; float: left; font-size: 3vw;}
  .works_avatar_detail{
    background-color: black;
    width: 15vw;
    height: 5vw;
    opacity: .5;
    position: relative;
    bottom: 7vw;
    border-radius: 0 0 0 2vw;
    text-align: center;
    font-size: unset;
    padding-top: 2vw;
    z-index: 1;
  }
  .introduce_fx_fx{
    background-image: url("../../assets/img/home/recommend/fenxiang.png");
    height:4vw;
    width:4vw;
    background-size: 100%;
  }
  .introduce_fx_sc{
    background-image: url("../../assets/img/home/recommend/collection.png");
    height: 4vw;
    width: 4vw;
    background-size: 100%;
    margin-right: 2vw
  }
  .introduce_fx{
    margin-bottom:3vw;
    width: 20vw;
    height: 5vw;
    text-align: -webkit-center;
  }
  .works_avatar span{
    position: absolute;
    bottom: 3vw;
    left: 8vw;
    width: 13vw;
    color: white;
    font-size: 3vw;
  }
.works_avatar{
  float: left;
  width: 5vw;
  height: 5vw;
}
  .works{
    width: 100%;
    position: relative;
    clear: both;
  }
  .works-info { position: absolute; top:31vw; background: linear-gradient(rgba(0,0,0,0),gray); width: 100%; border-radius:0 0 3vw 3vw;}
  .works li{
    float: left;
    padding: 1vw 0vw 1vw 1vw;
    text-align: center;
  }
  .works_img {
    overflow: hidden;
    height:40vw;
    border-radius: 3vw;
  }
  .works img{
    width:100%;
    max-width:100%;
    border-radius: 2vw;
  }
  .p1{
    margin-top: 1vw;
    margin-left: 1vw;
    font-size: 3.5vw;
    color: #000033;
    font-weight: 600;
    line-height: 1.5;
  }
  .p2{
    margin-top: 3vw;
    margin-left: 1vw;
    font-size: 4vw;
    color: #000033;
    font-weight: 600;
  }
</style>
