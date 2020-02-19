<template>
    <div style="    margin-bottom: 20vw;">
      <!--抬头开始-->
      <mtitle :img="article.img"></mtitle>
      <!--抬头结束-->
      <!--标题开始-->
      <p  class="conterTitle">
       {{article.title}}
      </p>
      <!--标题结束-->
      <!--介绍开始-->
      <div>
        <div class="subscription" style="margin-left: 4%;">
          <p name="count">风格</p>
          <p name="t">{{article.style.name}}</p>
        </div>
        <div class="subscription">
          <p name="count">户型</p>
          <p name="t">{{article.shape.name}}</p>
        </div>
        <div class="subscription">
          <p name="count">面积</p>
          <p name="t">{{article.mianji}}m²</p>
        </div>
        <div class="subscription">
          <p name="count">造价</p>
          <p name="t">{{article.zaojia/10000}}万</p>
        </div>
      </div>
      <!--介绍结束-->

      <div style=" height: 2vw;    clear: both;    margin-top: 25vw; margin-bottom: 5vw;" class="backcolor"></div>

      <!--案例说明开始-->
      <div class="case">
        <p class="case_title">案例说明</p>

        <div v-html="article.content" id="aaa"></div>
      </div>
      <!--案例说明结束-->

      <div style=" height: 2vw;  margin-top: 5vw; margin-bottom: 5vw;" class="backcolor"></div>

      <!--设计师信息开始-->
      <div class="designer ">
        <div class="designerPhoto">
          <img :src= designer.avatar class="img" style="border-radius: 1vw"/>
        </div>
        <div>
          <span class="heavy designerName">
            {{designer.name}}
          </span>
          <span  class="designerLife">{{designer.years}}年经验
           </span>

          <p class="regular gray">
            <span class="fontcolor">{{designer.works_num}}</span>套作品&nbsp;
            <span class="fontcolor">{{designer.comment_num}}</span>次评价&nbsp;
            <span class="fontcolor"> {{designer.appointment_num}}</span>人预约</p>
        </div>
      </div>
      <!--设计师信息结束-->
      <!--设计师作品推荐开始-->
      <p class="case_title all">同设计师其他案例</p>
      <div style="width: 100%;" class="all">

        <div class="site" v-for="tj of tuijian" @click="tjian(tj.id,tj.designer_id)" v-if="tj.id!==article.id">
          <img :src="tj.img"/>
          <p class="heavy">{{tj.title}}&nbsp;|&nbsp;{{tj.shape.name}}</p>
          <p class="medium gray">{{tj.style.name}}<span class="right"><img src="@/assets/img/eye.png" style="    width: 4vw;"/>{{tj.hits}}</span></p>
        </div>

      </div>
      <p style="clear: both"></p>
      <!--设计师作品推荐结束-->
      <!--右下角按钮开始-->
      <right-bottom :rightBottom="tobuy" class="middle_rightBottom" ></right-bottom>
      <right-bottom :rightBottom="consultation" class="top_rightBottom" ></right-bottom>
      <!--右下角按钮结束-->
      <!--最下-->
      <div class="menu">
        <input type="text" placeholder="想勾搭，先评论" class="left">
        <div class="left ">
          <button class="tip_btn right"><i>1</i></button>
           <img src="../../assets/img/dialogue.png" class="imgGray"/> <br>
          <span class="left" style="transform: scale(0.7);">评论</span>
        </div>
        <div  class="left">
          <button class="tip_btn right"><i>2</i></button>
          <img src="@/assets/img/redStar.png" class="imgGray" /><br>
          <span class="left" style="transform: scale(0.7);">收藏</span>
        </div>
        <button class="red_btn">找设计</button>
      </div>
      <!--最下  -->

      <msg v-show="this.$store.state.showToast" :msgObj="msgObj"  ></msg>
    </div>

</template>

<script>
import mtitle from '@/public/ImgTitle'
import rightBottom from '@/public/RightBottom.vue'
import msg from '@/public/Msg'
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default {
  name: 'WorksShow',
  components: {
    mtitle,
    rightBottom,
    msg
  },
  updated () {
    let b = document.getElementById('aaa').getElementsByTagName('img')
    for (var i = 0; i < b.length; i++) {
      b[i].classList = ['img']
    }
  },
  data () {
    return {
      article: '',
      designer: {},
      msgObj: {
        left: false,
        position: 'middle',
        from: 'down'
      },
      tobuy: {
        imgUrl: require('@/assets/img/buy.png')
      },
      consultation: {
        imgUrl: require('@/assets/img/consultation.png')
      },
      tuijian: {}
    }
  },
  mounted () {
    this.$ajax({
      url: '/api/designer/works/' + this.$route.query.workid,
      method: 'get'
    }).then((res) => {
      this.article = res.data.data
    })
    this.$ajax({
      url: '/api/designer/designer/' + this.$route.query.designerid,
      method: 'get'
    }).then((res) => {
      this.designer = res.data.data
    })
    this.$ajax({
      url: '/api/designer/works?designer_id=' + this.$route.query.designerid,
      method: 'get'
    }).then((res) => {
      this.tuijian = res.data.data
    })
  },
  methods: {
    tjian: function (id, deid) {
      this.$router.push({path: '/worksShow', query: {workid: id, designerid: deid}})
      window.location.reload()
    }
  }
}
</script>

<style scoped>
  .site p{
    text-align: left;
    margin-top: 2vw;
    font-size: xx-small;
  }
  .site{
    width: 47%;
    margin-top: 4vw;
    float: left;
    margin-right: 2vw;
    height: 34vw;
  }
  .site img{
    width: 100%;
    height: 71%;
  }
  .red_btn{
    float: left;
    height: 75%;
    width: 20vw;
    text-align: center;
    border-radius: 5vw;
    font-size: large;
    font-weight: 700;
    margin-top: 2vw;
  }
.tip_btn{
  position: relative;
  right: 2vw;
  background-color: #DD1A21;
}
.tip_btn i{
  position: relative;
  top: -1vw;
}
  .menu div{
    margin-top: 2vw;
  }
  .menu img{
    width: 7vw;
  }
  .menu>input{
    background-color: #F5F6FA;
    border-radius: 8vw;
    height: 8vw;
    padding-left: 5vw;
    margin-left: 3vw ;
    transform: translateY(33%);
  }
  .middle_rightBottom{
    bottom: 54vw;
  }
  .top_rightBottom{
    bottom: 40vw;
  }
  .case_content img{
    width: 100%;
    padding: 3vw 0;
  }
  .case_content{
    line-height: 6vw;
    margin-top: 3vw;
  }
  .case_title{
    font-size: 4.5vw;
    font-weight: 600;
  }
  p[name='t']{
    font-size: 4.5vw;
  }
  p[name='count']{
    font-size: 4.5vw;
  }
.case{
  padding: 0 5vw;

}
.subscription{
  width: 23%  ;
}
  .conterTitle{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 5vw;
    padding: 5vw;
    font-size:unset;
  }

  .designerName{
    font-size: large;
    font-weight: 600;
  }
  .designerLife{
    margin-top: -4vw;
    color: rgb(221, 26, 33);
    font-size: 10px;
    background-color: #FDE8EF;
    padding: .6vw;
  }
  .designer p{
    line-height: 6vw;
  }
  .designerPhoto{
    width: 12vw;
    float: left;
    margin: 0vw 5vw;
    border-radius: 1vw;
    height: 12vw;
  }
  .designer{
    height: 13vw;
    padding: 3vw 0vw;
    margin-bottom: 1vw;
  }
  .menu{
    background-color: white;
    height: 13vw;
    width: 100%;
    bottom: 0;
    z-index: 100000;
    position: fixed;
  }
 </style>
