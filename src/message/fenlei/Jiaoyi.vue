<template>
    <div class="pageColor" style="height: 100%;">
      <mtitle :name="title"></mtitle>
      <div class="all white msgbody"  v-for="(msg,index) in msgs" :key="index">
        <p>{{msg.title}} <a>[查看]</a> </p>
        <p>{{msg.time}} </p>
      </div>
    </div>
</template>

<script>
import mtitle from '@/public/Title'
export default {
  name: 'Jiaoyi',
  components: {
    mtitle
  },
  data: function () {
    return {
      title: '交易提醒',
      msgs: [
        {title: '您的设计订单已预约成功,快去查看详情吧!', time: '2019-08-19'},
        {title: '您的设计订单已完成线下量房,快去查看详情吧!', time: '2019-08-19'}
      ]
    }
  }
}
</script>

<style scoped>
  .msgbody>p{
    padding-top: 2vw;
    padding-left: 5vw;
  }
  .msgbody>p:nth-child(1){
    font-size: 3vw;
  }
  .msgbody>p:nth-child(2){
    color: #999999;
    transform: scale(0.8);
    float: left;
  }
 .msgbody{
   height: 15vw;
   border-radius: 3vw;
   margin-top: 5vw;
 }
</style>
