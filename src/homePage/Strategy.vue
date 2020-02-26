<template>
    <div style="margin:90px 0 30vw 0 ">
      <div class="title top_title">

        <router-link to="/index/strategy/gl" class="S_titlecenter regular" >
          <span >
            攻略
          </span>
        </router-link>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <router-link to="/index/strategy/zx" class="S_titlecenter regular">
          <span>
            咨询
          </span>
        </router-link>

        <img src="@/assets/img/msg.png" class="titleRight" @click="rightClick" style="width: 5vw;"/>
      </div>
      <router-view/>
    </div>
</template>

<script>
import mt from '@/public/TextTitle.vue'
export default {
  name: 'Strategyindex',
  components: {
    mt
  },
  methods: {
    rightClick () {
      alert()
    }
  },
  data () {
    return {
      tt: '全部',
      titleL: {
        type: 'none',
        method: ''
      },
      titleC: {
        type: 'textArray',
        content: ['攻略 ', '咨询'],
        method: ['gl', 'zx']
      },
      titleR: {
        type: 'img',
        content: require('@/assets/img/msg.png')
      },
      types: [
        {
          type: '准备阶段',
          content: ['全部', '装修设计', '预算报价', '建材购买', '验房收房', '其他']
        },
        {
          type: '施工阶段',
          content: ['全部', '拆改', '施工合同', '水电', '泥工', '木工', '油漆', '保洁修补', '竣工验收', '其他']
        },
        {
          type: '软装阶段',
          content: ['全部', '风格搭配', '软装购买', '入住注意', '其他']
        }
      ]
    }
  }
}
</script>

<style scoped>
  a {
    color:black;
  }
  .S_titlecenter { line-height: 46px; font-size: 16px; font-family: PingFang SC, 'Helvetica Neue', Arial, sans-serif;}
  .router-link-active {
    border-bottom: 2px solid red;
    height: 44px;
    display: inline-block;
  }
  .tuijian>.right{
    height: 48%;
    width: 47%;
    padding: 2vw 2vw 0vw 0vw;
  }
  .tuijian>.left{
    height: 35%;
    width: 47%;
    padding: 2vw 0vw 0vw 2vw;
  }
  .tuijian{
    height: 45vw;
  }
  .navigationBar>span{
    padding-right: 5vw;
  }
.navigationBar{
  white-space: nowrap;
  overflow-x: auto;
  text-align: center;
  padding: 5vw;
  font-size: 4vw;
  background-color: white;
}
 .navigationBar input:checked+label{
    color: red;
  }
  .navigationBar input{
    display: none;
  }
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
  .wz{
    width: 55%;
    height: 100%;
    position: relative;
  }
  .red_btn{
    margin: 5vw;
    width: 90%;
    height: 10vw;
    border-radius: 5vw;
  }
</style>
