<template>
  <div style="height: 100%; background-color: #f7f7f7">
    <mtitle :name="title.name" :titleRight="title.titleRight"></mtitle>
    <div class="designer white">
      <div class="designerPhoto">
        <img :src= designer.avatar />
      </div>
      <div>
          <span class="heavy designerName">
            {{designer.name}}
          </span>
        <span  class="designerLife">{{designer.years}}年经验
           </span>

        <p class="regular gray">擅长风格:{{designer.styles}}</p>
      </div>
    </div>
    <div style="padding:  5vw ;font-size: medium;margin-bottom: 1vw;" class="white">
      <p style="line-height: 6vw;font-size: xx-small;">
        根据平台相关规定,预约设计师,需先支付定金,支付一次定金最多免费预约4次,如果预约了4个设计师都不满意,定金不退,若预约成功,在后期需支付的设计款中会扣除相应的定金金额.
      </p>
    </div>

    <div class="pay white">
      <p>支付金额 <span class="right cinnabar">￥500.00 </span></p>
      <br>
      <p class="left" style="height: 50vw;width: 27vw;">支付方式</p>
        <div class="mode">
          <input type="radio" name="pay" id="alipay" checked="checked">
          <label for="alipay"><img src="../../assets/img/pay/zhifubao.png" /></label>
          <br><br>
        </div>
        <div class="mode">
          <input type="radio" name="pay" id="wechatpay">
          <label for="wechatpay" ><img src="../../assets/img/pay/weixinzhifu.png"/></label>
          <br><br>
        </div>
      <div class="mode">
        <input type="radio" name="pay" id="cash">
        <label for="cash" style="font-weight: bold;">线下支付</label>
        <br><br>
        <p style="font-size: x-small;line-height: 5vw" class="gray">
          户名: 某某某 <br> 开户行: 丽水中国工商银行莲都支行 <br>卡号: 2423143214214214321
        </p>
      </div>
    </div>
    <button class="red_btn all" @click="to('/successPay')">确认支付</button>
  </div>
</template>

<script>
import mtitle from '@/public/Title'
export default {
  name: 'DesignerPayment',
  components: {
    mtitle
  },
  data () {
    return {
      title: {
        name: '支付定金',
        titleRight: '',
        designer: {}
      },
      pay: {
        title: '',
        tips: ['根据平台相关规定,预约设计师,需先支付定金,支付一次定金最多免费预约4次,如果预约了4个设计师都不满意,定金不退,若预约成功,在后期需支付的设计款中会扣除相应的定金金额.\n', '施工图来自: 案例标题案例标题案例标题案例标题案例例标题案例标题 案例标题标题'],
        payMode: ['weichat', 'alipay', 'cash']
      }
    }
  },
  created () {
    this.getRouterData()
  },
  methods: {
    getRouterData: function () { // 获取设计师信息
      this.designer = this.$store.state.designer
    },
    to: function (url) {
      this.$router.push(url)
      // 传递参数的方式
      // this.$router.push({path: url, name: 'successPay', query: {page: 'designer'}})
    }
  }
}
</script>

<style scoped>
  .red_btn{
    height: 11vw;
    width: 88%;
    position: fixed;
    bottom: 5vw;
    left: 3.9vw;
    font-size: larger;
  }
  .mode img{
    width: 26vw;
    height: 9vw;
  }
  .mode>input:checked+label::after{
    display: inline-block;
    content: "";
    position: absolute;
    left: 1.5vw;
    bottom: 1.2vw;
    width: 1.5vw;
    height: 2vw;
    border-color: white;
    border-style: solid;
    border-width: 0 .5vw .5vw 0;
    transform: rotate(45deg);
  }
  .mode>input:checked+label::before{
    background-color: rgb(239, 66, 56);
  }
  .mode>label:before{/*在label前面加上东西*/
    display: inline-block;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid rgb(219, 219, 219);
    margin-right: 6px;
    vertical-align: middle;
  }
  .mode>label{
    position: relative;
  }
  .mode>input{/*隐藏原来的点*/
    display: none;
  }
  .pay{
    padding: 7vw 11vw 0 6vw;
    font-size: medium
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
  .designerPhoto img{
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 1vw;
  }
  .designerPhoto{
    width: 12vw;
    float: left;
    margin: 0vw 5vw;
    border-radius: 1vw;
  }
 .designer{
   height: 13vw;
   padding: 3vw 0vw;
   margin-bottom: 1vw;
 }
</style>
