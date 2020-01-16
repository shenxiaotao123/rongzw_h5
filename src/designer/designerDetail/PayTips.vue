<template>
  <div>
    <mtitle :name="title.name" :titleCenter="title.titlec"></mtitle>
  <div class="tipContent regular">
    <p> 预约流程如下:</p>
    <p>1.填写房子基本信息</p>
    <p>2.支付500元定金</p>
    <p>3.待设计师确认</p>
    <p>4.预约成功</p>
    <br>
    <p><span class="cinnabar">注：</span>根据平台相关规定,预约设计师,需先支付定金,支付一次定金最多免费预约4次,如果预约了4个设计师都不满意,定金不退,若预约成功,在后期需支付的设计款中会扣除相应的定金金额.</p>
    <br>
    <p>预约成功之后</p>
    <br>
    <div style="width: 84%" >
      <p>1.设计师回电话联系您上门量房的时间</p>
      <p>2.确定完成线下量房和收到布置图,同意协议,支付50%预付款(最终支付金额位扣除已交定金之后的剩余金额)</p>
      <p>3.确认收到全部施工图,支付剩余的50%尾款,完成订单</p>
      <p>4.进入施工准备</p>
    </div>
  </div>
    <div class="btn_payTip">
      <button class="white_btn medium"  @click="back">取消</button>  <button class="red_btn medium" @click="to">去填写</button>
    </div>
  <div style="    background:rgba(247,247,247);
    height: 37.3vw;
    margin-top: 10vw;"></div>
  </div>
</template>

<script>
import mtitle from '@/public/Title'
export default {
  name: 'PayTips',
  components: {
    mtitle
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    to: function () {
      this.$store.commit('upMsgState', true)
      this.$router.push({
        path: 'showDetail',
        name: 'ShowDetail'
      })
    }
  },
  data () {
    return {
      title: {
        name: '温馨提示'
      }
    }
  }
}
</script>

<style scoped>
  .btn_payTip>button:nth-child(1){
    margin-right: 5vw;
  }
  .btn_payTip>button{
    width: 25vw;
    height: 8vw;
    font-size: initial;
    font-weight: 300;
  }
  .btn_payTip{
    text-align: center;
  }
.tipContent{
  margin: 5vw;
  font-size: xx-small;
}
  p{
    line-height: 6vw;
  }
</style>
