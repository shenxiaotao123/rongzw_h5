<template>
<div style="margin-bottom: 15vw">
  <mtitle :img="bbs.bbs_pic" style="height: 65vw;"/>

  <!--文章标识-->
    <div class="article">
      <p>
        <span class="gray">
                <img :src="bbs.bbs_user_image" class="user_portrait"/>{{bbs.bbs_user_name}}
        </span>
        <button class="redWhitebtn right">关注</button>
      </p>
      <p class="articName">
        {{bbs.bbs_title}}
      </p>
      <ul style="margin: 2vw 0; height: 6vw;">
        <li class="left red_red_brn" >#{{bbs.class.name}}</li>
      </ul>
      <p style="clear: both">
        <span class="gray" style="font-size: xx-small;" v-if="bbs.bbs_view>10000">
          浏览  {{bbs.bbs_view/10000}}万+   |   收藏  {{bbs.bbs_collect_num}}
        </span>
        <span class="gray" style="font-size: xx-small;" v-else>
          浏览  {{bbs.bbs_view}}   |   收藏  {{bbs.bbs_collect_num}}
        </span>
        <span class="right gray" style="font-size: xx-small;">
               {{bbs.created_at}}
        </span>

      </p>
    </div>
  <!--文章标识-->

  <!--文章-->
    <div class="article" id="artilcle" v-html="bbs.bbs_content"></div>
  <!--文章-->

  <!--为您推荐-->
  <div class="white">
    <p style="text-align: center;margin: 5vw;">
      <span class="line"></span>&nbsp;&nbsp;&nbsp;
      <span class="introduction-title">为您推荐</span>&nbsp;&nbsp;&nbsp;
      <span class="line"></span>
    </p>
    <div class="forYou left" v-for="(wz,index) in wenzhang" :key="index" @click="to(wz.id)" v-if="index<19">
      <div><img class="img" :src="wz.bbs_pic" style="    border-radius: 3vw;"/></div>
      <p class="yihang">{{wz.bbs_title}}</p>
    </div>
    <div style="clear: both"><br/></div>
  </div>
  <p style="text-align: center;">
    <span class="gray">已经到底啦</span>
  </p>
  <!--为您推荐-->

  <!--底部-->
  <div class="menu">
    <input type="text" placeholder="想勾搭，先评论" class="left">
    <div class="left " @click="$router.push({path:'/glReviews',query:{id:bbs.id,authorId:bbs.bbs_user_id}})">
      <button class="tip_btn right" v-show="bbs.bbs_com_num>0"><i>{{bbs.bbs_com_num}}</i></button>
      <img src="@/assets/img/dialogue.png" class="imgGray"/> <br>
      <span class="left" style="transform: scale(0.7);">评论</span>
    </div>
    <div  class="left">
      <img src="@/assets/img/redStar.png" class="imgGray" /><br>
      <span class="left" style="transform: scale(0.7);">收藏</span>
    </div>
    <button class="red_btn">找设计</button>
  </div>
  <!--底部-->

  <!--下拉顶部-->
  <div class="title" v-if="topTitle">
    <img src="@/assets/img/loginUser/back.png"  class="titleLeft"  @click="$router.go(-1)"/>
    <p class="titleC">
      {{bbs.bbs_title}}

    </p><img src="../assets/img/title/fenxiang.png" style="    width: 4vw;    position: absolute;    top: 5vw;    right: 4vw;"/>
    <right-buttom :rightBottom="rightBottom"  class="top_rightBottom" style="bottom: 20vw;"/>
  </div>
  <!--下拉顶部-->
</div>
</template>

<script>

import rightButtom from '@/public/RightBottom'
import mtitle from '@/public/ImgTitle'
export default {
  name: 'GlDetail',
  components: {
    mtitle,
    rightButtom
  },
  updated () {
    for (var i = 0; i < document.getElementById('artilcle').getElementsByTagName('img').length; i++) {
      document.getElementById('artilcle').getElementsByTagName('img')[i].classList = ['img']
    }
  },
  mounted () {
    window.pageYOffset = 0
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.addEventListener('scroll', this.handleScroll)
    this.$ajax.get('/api/bbs/guide/' + this.$route.query.id + '?no_cached=1').then((res) => {
      this.bbs = res.data.data
    })
    this.$ajax.get('/api/bbs/guide?is_rec=1').then((res) => {
      this.wenzhang = res.data.data
    })
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.topTitle = scrollTop >= 100
    },
    to (wzid) {
      this.$router.push({path: '/glDetail', query: {id: wzid}})
      location.reload()
    }
  },
  data () {
    return {
      topTitle: false,
      bbs: {},
      rightBottom: {
        type: 'top',
        imgUrl: require('@/assets/img/top.png')

      },
      wenzhang: []
    }
  }
}
</script>

<style scoped>
  .tip_btn{
    position: absolute;
    bottom: 7vw;
    left: 5vw;
  }
  .title{
    position: fixed;
    top: 0;
  }
  .titleC{
    line-height: 15vw;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: black;
    width: 80vw;
    padding-left: 7vw;
    float: left;
  }
  .articName{
    font-size: 4.3vw;
    line-height: 5vw;
    font-weight: 900;
  }
  .article>p{
    margin: 3vw 0;
  }
  .article{
    border-bottom: 2vw solid #f7f7f7;
    padding: 2vw 5vw;
  }
  .red_red_brn{
    padding: 1.5vw;
    font-size: 1vw;
    margin-right: 2vw;
    color: #DD1A21;
  }
.redWhitebtn{
  width: 13vw;
  font-size: 1vw;
}
  .forYou{
    height: 35vw;
    width: 45.5%;
    margin-left: 3%;
  }
  .forYou>div{
    height: 60%;
  }

  .red_btn{
    float: left;
    height: 75%;
    width: 26vw;
    text-align: center;
    border-radius: 5vw;
    font-size: large;
    font-weight: 700;
    margin-top: 2vw;
  }

  .menu div{
    margin-top: 2vw;
    margin-right: 2vw;
    position: relative;
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
  .menu{
    background-color: white;
    height: 13vw;
    width: 100%;
    bottom: 0;
    z-index: 100000;
    position: fixed;
  }

</style>
