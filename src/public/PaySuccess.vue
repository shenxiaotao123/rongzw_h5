<template>
<div style="height: 100%; background-color: #f7f7f7">
  <mtitle :name="title.name" :titleRight="title.titleRight"></mtitle>
  <div class="payResult white">
   <p class="payTitle" v-if="!iscash">
     <img src="../assets/img/pay/success.png" /> &nbsp;支付成功
   </p>
    <p class="payTitle" v-if="iscash">
      <img src="../assets/img/pay/success.png" /> &nbsp;操作成功
    </p>
    <!--设计师定金-->
    <p class="payContent" v-if="fromShowDesigner">
      待设计师确认后，会联系您确定方便上门量房的时间。一般会在一两个 工作日内确认并联系您，请保持手机畅通。
    </p>
    <p class="payContent" v-if="iscash" style="text-align: center">
      完成线下支付后,<br>需要在我的-设计订单中 上传银行回单,<br>平台确认无误后,才算支付成功,<br> 可在订单详情中查看具体进度
    </p>
   <p v-if="fromShowDesigner||iscash">
      <button class="white_btn">查看订单</button>
    </p>
    <!--设计师定金-->

    <!--图纸定金-->
    <p class="payContent" v-if="fromWorksShow&&!iscash" style="text-align: center;">
      恭喜您订单已完成,离梦想的家又近了一步!
    </p>
    <p v-if="fromWorksShow&&!iscash">
      <button class="white_btn">去评价</button><button class="white_btn">找施工</button>
    </p>
    <!--图纸定金-->
  </div>
  <div class="white payDetails">
    <p >
      <span class="left">实付</span>
      <span class="right">￥500.00  </span>
    </p>
    <p >
      <span class="left">订单编号</span>
      <span class="right">89230957432891075</span>
    </p>
    <!--定金流程-->
    <p v-if="fromShowDesigner">
      <span class="left black">进度</span>

      <span class="black">预约定金支付成功</span><br/><br/>

      <img src="../assets/img/pay/xiangxia.png" height="26" width="30"/><br/><br/>
      <span>设计师确定 </span><br/><br/>

      <img src="../assets/img/pay/xiangxia.png" height="26" width="30"/><br/><br/>
      <span>上门量房</span><br/><br/>

      <img src="../assets/img/pay/xiangxia.png" height="26" width="30"/><br/><br/>
      <span>确认量房和布置图，同意协议，支付50%预付款  </span><br/><br/>

      <img src="../assets/img/pay/xiangxia.png" height="26" width="30"/><br/><br/>
      <span>确认收到全部施工图，支付剩余50%尾款，完成订单  </span><br/><br/>

      <img src="../assets/img/pay/xiangxia.png" height="26" width="30"/><br/><br/>
      <span>进入施工准备</span><br/><br/>
    </p>
    <!--定金流程-->
  </div>
</div>
</template>

<script>
import mtitle from '@/public/Title'
export default {
  name: 'PaySuccess',
  components: {
    mtitle
  },
  data () {
    return {
      from: '', // 从哪来
      title: {
        name: '支付结果',
        titleRight: ''
      },
      fromShowDesigner: false,
      fromWorksShow: false,
      iscash: false
    }
  },
  created () {
    this.from = this.$route.query.from
    this.fromWorksShow = this.from.indexOf('worksShow') > -1
    this.fromShowDesigner = this.from.indexOf('showDetail') > -1
    this.iscash = this.$route.query.paymode === 'cash'
  }
}
</script>

<style scoped>
  .payDetails p:nth-child(3) span{
    color: #999999;
  }
  .payDetails p:nth-child(3) img{
    height: 3vw;
    width: 3vw;
  }
  .payDetails p:nth-child(3){
    border-bottom:none;
    height: auto;
    padding-top: 2vw;
    text-align: center;
  }
  .payDetails p{
    border-bottom: #f7f7f7 solid 4px;
    height: 6vw;
    padding-top: 2vw;
  }
  .payDetails{
    padding: 8vw 7vw 0vw 7vw;
  }
  .white_btn{
    font-size: 3vw;
    padding: 1vw 4vw;
    margin: 0 4vw;
  }
  .payContent{
    padding:  5vw;
    line-height: 5vw;
    font-size: xx-small;
    text-align: left;
  }
  .payTitle{
    font-size: 6vw;
    font-weight: 600;
  }
  .payResult p img{
    width: 7vw;
    height: 7vw;
  }
.payResult{
  text-align: center;
  padding-top: 9vw;
  padding-bottom: 6vw;
  margin-bottom: 2vw;
}
</style>
