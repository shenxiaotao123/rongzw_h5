<template>
    <div style="    margin-bottom: 20vw;">
      <!--抬头开始-->
      <mtitle :img="article.img"></mtitle>
      <!--抬头结束-->
      <div class="back_white clear">
        <!--标题开始-->
        <p  class="conterTitle">
         {{article.title}}
        </p>
        <!--标题结束-->
        <!--介绍开始-->
        <div class="clear">
          <van-row class="ws-data">
            <van-col span="6">
              <p name="count">风格</p>
              <p name="t">{{article.style.name}}</p>
            </van-col>
            <van-col span="6">
              <p name="count">户型</p>
              <p name="t">{{article.shape.name}}</p>
            </van-col>
            <van-col span="6">
              <p name="count">面积</p>
              <p name="t">{{article.mianji}}m²</p>
            </van-col>
            <van-col span="6"><p name="count">造价</p>
              <p name="t">{{article.zaojia/10000}}万</p></van-col>
          </van-row>
        </div>
        <!--介绍结束-->
      </div>

      <!--案例说明开始-->
      <div class="case back_white m-t-sm">
        <p class="case_title">案例说明</p>
        <div v-html="article.content" id="aaa"></div>
      </div>
      <!--案例说明结束-->

      <div class="back_white clear m-t-sm">
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
        <div style="width: 100%;" class="all clear">
          <div class="site" v-for="tj of tuijian" @click="tjian(tj.id,tj.designer_id)" v-if="tj.id!==article.id">
            <img :src="tj.img"/>
            <p class="heavy">{{tj.title}}&nbsp;|&nbsp;{{tj.shape.name}}</p>
            <p class="medium gray">{{tj.style.name}}<span class="right"><img src="@/assets/img/eye.png" style="    width: 4vw;"/>{{tj.hits}}</span></p>
          </div>

        </div>
        <p style="clear: both"></p>
        <!--设计师作品推荐结束-->
      </div>
      <!--右下角按钮开始-->
      <right-bottom :rightBottom="tobuy" class="middle_rightBottom" ></right-bottom>
      <right-bottom :rightBottom="consultation" class="top_rightBottom" ></right-bottom>
      <!--右下角按钮结束-->
      <!--最下-->
      <van-goods-action class="menu">
        <input type="text" placeholder="想勾搭，先评论" class="left menu_input">
        <van-goods-action-icon icon="chat-o" text="评论" @click="$router.push({path:'/glReviews',query:{id:bbs.id,authorId:bbs.bbs_user_id}})" info="5" />
        <van-goods-action-icon icon="star-o" text="收藏" />
        <van-goods-action-button type="danger" text="找设计" @click="onClickButton" />
      </van-goods-action>
      <!--最下  -->

      <msg v-show="this.$store.state.showToast" :msgObj="msgObj"  ></msg>
    </div>

</template>

<script>
import mtitle from '@/public/ImgTitle'
import rightBottom from '@/public/RightBottom.vue'
import msg from '@/public/Msg'
import Router from 'vue-router'
//vant Divider 分割线,图标,商品导航
import Vue from 'vue';
import { Divider,Icon,GoodsAction, GoodsActionIcon, GoodsActionButton, Col, Row } from 'vant';
Vue.use(Divider);
Vue.use(Icon);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Col);
Vue.use(Row);

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
  .ws-data { margin: 0 10px 20px 10px; padding: 20px 0; text-align: center; background: #F5F7FA;}
  .ws-data p { font-size: 14px; line-height: 1.8;}
  .ws-data p[name='count'] { color: #333; font-weight: 700;}
  .ws-data p[name='t'] { color: #666;}
  .site p{
    text-align: left;
    margin-top: 2vw;
    font-size: xx-small;
  }
  .site{
    width: 47%;
    margin-bottom: 20px;
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
  .menu_input{
    background-color: #F5F6FA;
    border-radius: 8vw;
    height: 40px;
    padding-left: 5vw;
    margin-left: 5px;
    transform: translateY(33%);
    margin-top: -26px;
  }
  .menu{
    border-top: 1px solid #eee;
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
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
  }

.case{
  padding: 0 10px;

}
  .conterTitle{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 5vw;
    padding:20px 10px;
    font-size:16px; font-weight: 500;
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
    margin: 0vw 10px;
    border-radius: 1vw;
    height: 12vw;
  }
  .designer{
    padding: 15px 0;
    margin-bottom: 1vw;
  }

 </style>
