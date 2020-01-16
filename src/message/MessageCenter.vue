<template>
<div class="all">
 <mtitle :name="title.name" :titleCenter="title.titleCenter"></mtitle>

  <div class="msg" v-for="(msg,index) in messages" :key="index" @click="to(msg.title)">
    <div class="msgImg">
      <img :src=msg.url height="80" width="80"/>
    </div>
    <p class="medium" style="font-size: 5vw;    font-weight: 600;  margin-top: 3vw;   padding-top: 2vw;">{{msg.title}} <span class="gray right" style="font-size: xx-small;
    font-weight: 500;">{{msg.time}}</span></p>
    <p class="regular gray" style="padding-top: 2vw;">{{msg.content}}<button class="tip_btn right">{{msg.count}}</button></p>
  </div>
</div>
</template>

<script>
import mtitle from '@/public/Title'
export default {
  name: 'MessageCenter',
  data: function () {
    return {
      title: {
        name: '消息中心',
        titleCenter: 'name'
      },
      messages: [
        {title: '交易提醒', content: '交易/付款/发货提醒 拷贝', count: 1, time: '8-19', url: require('@/assets/img/msg/jiaoyi.png')},
        {title: '互动消息', content: '和你有关的点赞/评论/互动', count: 2, time: '8-12', url: require('@/assets/img/msg/hudong.png')},
        {title: '优惠促销', content: '优惠活动/打折促销', count: 3, time: '8-13', url: require('@/assets/img/msg/youhui.png')},
        {title: '系统通知', content: '各种重要通知和服务提示', count: 4, time: '8-11', url: require('@/assets/img/msg/xitong.png')}
      ]
    }
  },
  components: {
    mtitle
  },
  methods: {
    to: function (title) {
      if (title.indexOf('交易') > -1) {
        this.$router.push('/msgjiaoyi')
      } else if (title.indexOf('互动') > -1) {
        this.$router.push('/msghudong')
      } else if (title.indexOf('优惠') > -1) {
        this.$router.push('/msgyouhui')
      } else if (title.indexOf('系统') > -1) {
        this.$router.push('/msgxitong')
      }
    }
  }
}
</script>

<style scoped>
  .msg>p:nth-child(1){
    font-weight: bold;
    font-size: 3vw;
  }
  .msg{
    border-bottom: .1vw solid #cfcfcf;height: 20vw;
  }
.msgImg{
  width: 12vw;
  height: 12vw;
  float: left;
  margin: 2vw;
}
  .msgImg img{
    width: 100%;
    height: 100%;
  }
  </style>
