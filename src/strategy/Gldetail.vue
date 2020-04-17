<template>
<div style="margin-bottom: 15vw">
  <mtitle :img="bbs.bbs_pic" style="height: 65vw;"/>

  <!--文章标识-->
    <div class="article back_white">
      <p>
        <span class="gray">
                <img :src="bbs.bbs_user_image" class="user_portrait"/>{{bbs.bbs_user_name}}
        </span>
        <!--<button class="redWhitebtn right">关注</button>-->
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
  <div class="article back_white">
    <!--<div class="padder-v" id="artilcle" v-html="bbs.bbs_content"></div>-->
    <div class="padder-v" id="artilcle" v-html="bbs.bbs_content"></div>

    <div v-for="item in tmp1">
      <div v-if="item.wordItem">
        {{ item.wordItem.content }}
      </div>
      <div v-if="item.imageItem">
        {{ item.imageItem.imgDesc }}
        <img class="img" :src="item.imageItem.imgUrl" />
      </div>
    </div>

  </div>
  <!--文章-->

  <!--为您推荐-->
  <div class="white clear">
    <p style="text-align: center;margin: 5vw;">
      <van-divider :style="{ color: '#333', borderColor: '#ccc', padding: '0 16px',}">
        为您推荐
      </van-divider>
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
  <!--<div class="menu">-->
    <!--<input type="text" placeholder="想勾搭，先评论" class="left">-->
    <!--<div class="left m-l-sm m-t-xs" @click="$router.push({path:'/glReviews',query:{id:bbs.id,authorId:bbs.bbs_user_id}})">-->
      <!--<button class="tip_btn right" v-show="bbs.bbs_com_num>0"><i>{{bbs.bbs_com_num}}</i></button>-->
      <!--<p><van-icon name="chat-o" size="25" info="99+" /></p>-->
      <!--<span class="left" style="transform: scale(0.7);">评论</span>-->
    <!--</div>-->
    <!--<div class="left m-l-sm m-t-xs">-->
      <!--<p><van-icon name="star-o" size="25" /></p>-->
      <!--<span class="left" style="transform: scale(0.7);">收藏</span>-->
    <!--</div>-->
    <!--<button class="red_btn fr m-t-xs m-r-sm">找设计</button>-->
  <!--</div>-->

  <!--<van-goods-action class="menu">-->
    <!--<input type="text" placeholder="想勾搭，先评论" class="left menu_input">-->
    <!--<van-goods-action-icon icon="chat-o" text="评论" @click="$router.push({path:'/glReviews',query:{id:bbs.id,authorId:bbs.bbs_user_id}})" info="5" />-->
    <!--<van-goods-action-icon icon="star-o" text="收藏" />-->
    <!--<van-goods-action-button type="danger" text="找设计" @click="onClickButton" />-->
  <!--</van-goods-action>-->
  <!--底部-->

  <!--下拉顶部-->
  <div class="title" v-if="topTitle">
    <img src="@/assets/img/loginUser/back.png"  class="titleLeft"  @click="$router.go(-1)"/>
    <p class="titleC">
      {{bbs.bbs_title}}

    </p><img src="../assets/img/title/fenxiang.png" style="width: 4vw; position: absolute; top: 33%; right: 4vw;"/>
    <right-buttom :rightBottom="rightBottom"  class="top_rightBottom" style="bottom: 20vw;"/>
  </div>
  <!--下拉顶部-->
</div>
</template>

<script>

import rightButtom from '@/public/RightBottom'
import mtitle from '@/public/ImgTitle'
//vant Divider 分割线,图标,商品导航
import Vue from 'vue';
import { Divider,Icon,GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(Divider);
Vue.use(Icon);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.prototype.highlight= function (sTitle) {
  // to do
};
Vue.prototype.msg= function (msg) {

  return msg.replace("\n", "<br>")

};
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

    // var str = this.$refs.name.innerHTML
    // let hqsj = JSON.parse(str)
    // this.tmp1 = hqsj

    //
    // console.log(hqsj);
    //console.log(this.$refs.name.innerHTML)


  },
  mounted () {
    window.pageYOffset = 0
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.addEventListener('scroll', this.handleScroll)
    this.$ajax.get('/api/bbs/guide/' + this.$route.query.id + '?no_cached=1').then((res) => {
      this.bbs = res.data.data
      var str = this.bbsC = res.data.data.bbs_content
      let hqsj = JSON.parse(str)
      this.tmp1 = hqsj

      //console.log(hqsj)

      this.$nextTick(()=>{
        if(hqsj.length == 0) {
        }
        else {
          var child = document.getElementById("artilcle");
          child.style.display = 'none';
        }
      });


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
      tmp1:[],
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
    padding:5px 20px;
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
    height: 75%;
    width: 26vw;
    text-align: center;
    border-radius: 5vw;
    font-size: large;
    font-weight: 700;
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

</style>
