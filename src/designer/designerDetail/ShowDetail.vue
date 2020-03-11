<template>
<div style="padding-top: 46px;">
  <mtitle :name="title.name" :titleRight="title.titleR" :titleCenter="title.titlec" :backUrl="title.backUrl" class="top_title"></mtitle>

    <div  class="designerList back_white wrapper p-l-none clear">


      <div class="details">
        <div class="photo">
          <img :src=designer.avatar />
        </div>
        <div class="fl">
          <p>
            <span class="regular name">{{designer.name}}</span>
            <span class="workLife regular">{{designer.years}}年经验</span>
          </p>
          <p class="regular gray" style="width: 45vw;">{{designer.styles_text}}</p>
          <p class="regular gray ">
            <span   class="cinnabar">{{designer.min_money}}-{{designer.max_money}}元/m²</span><br>
          </p>
        </div>
      </div>
      <div class="m-t-lg">
        <button class="red_btn" @click="appointment">预约TA</button>
      </div>

    </div>
    <div class="back_white clear wrapper">
      <div class="subscription">
        <p name="count">{{designer.order_num}}</p>
        <p name="t">签单</p>
      </div>
      <div class="subscription">
        <p name="count">{{designer.comment_num}}</p>
        <p name="t">点评</p>
      </div>
      <div class="subscription">
        <p name="count">{{designer.appointment_num}}</p>
        <p name="t">预约</p>
      </div>
    </div>

    <van-row class="jieShao back_white clear m-t-sm">
      <van-col span="8"><router-link :to="{path:'/showDetail/works',query:{id:$route.query.id}}">作品({{designer.works_num}})</router-link></van-col>
      <van-col span="8"><router-link :to="{path:'/showDetail/profile',query:{id:$route.query.id}}" >个人简介</router-link></van-col>
      <van-col span="8"><router-link :to="{path:'/showDetail/comment',query:{type:'designer',id:$route.query.id}}">评价({{designer.comment_num}})</router-link></van-col>
    </van-row>
    <div class="wrapper back_white p-t-none"><router-view/></div>

  <msg v-show="this.$store.state.showToast" :msgObj="msgObj"></msg>
  <right-bottom :rightBottom="rightBottom" class="top_rightBottom"></right-bottom>
</div>
</template>

<script>
  import Vue from 'vue';
  import { Col, Row } from 'vant';

  Vue.use(Col);
  Vue.use(Row);

import mtitle from '@/public/Title'
import '@/assets/style/app.css'

import msg from '@/public/Msg'
import rightBottom from '@/public/RightBottom.vue'
export default {
  name: 'ShowDetail',
  components: {
    mtitle,
    msg,
    rightBottom
  },
  data () {
    return {
      title: {
        name: '设计师',
        backUrl: '/designerList'
      },
      designers: [],
      designer: {},
      count: 0,
      msgObj: {
        left: false,
        position: 'middle',
        from: 'down'
      },
      showToast: false,
      order: {
        phone: '',
        style: '',
        city: '',
        position: ''
      },
      rightBottom: {
        type: 'top',
        imgUrl: require('@/assets/img/top.png')
      }
    }
  },
  created () {
    this.getRouterData()
  },
  methods: {
    yesMsg: function (v) {
      if (v === 'pay') {
        if (!(new RegExp('[1][3578]\\d{9}').test(this.order.phone))) {
          alert('请填写正确的手机号码')
        } else if (this.order.city === '') {
          alert('请输入地区')
        } else if (this.order.position === '') {
          alert('请输入详细地址')
        } else {
          this.$router.push({path: 'showDetail', name: 'ShowDetail'})
        }
      }
    },
    getRouterData: function () {
      let path = '/api/designer/designer/' + this.$route.query.id + '?no_cached=1'
      this.$ajax.get(path).then((response) => {
        this.designers[0] = response.data.data
        this.designer = response.data.data
      })
      this.count++
    },
    appointment: function () {
      this.$store.state.showToast = !this.$store.state.showToast
    }
  },
  mounted () {

  },
  watch: {

  }
}
</script>

<style scoped>
  .designerList { border-bottom: 0; display: flex;}
  .red_btn{
    flex:1;
    padding: 5px 20px;
    border-radius: 1vw;
  }
  a{
    color: black;
  }
  .router-link-active {
    color: #DD1A21;
  }

  .deDetail {
    height: 17vw;
    margin: 10vw 0vw;
  }
  .deDetail .photo {
    background-color: rgb(207, 207, 207);
    height: 22vw;
    width: 22vw;
    float: left;
    margin-right: 1vw;
    border-radius: 1vw;
  }

  .deDetail p{
    margin: 0 0 2vw 0;
  }
  .deDetail .style{
    color: #cfcfcf;
    width: 70%;
  }
  .deDetail .price{
    color: #C82126;
    font-size: 4.6vw;
    font-weight: 600;
  }
</style>
