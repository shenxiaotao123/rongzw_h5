<template>
  <div >
    <div  class="overburden2" @click="closeMsg"></div>
    <!--中间的-->
    <div v-if="msgObj.position==='middle'" class="toast all">
      <img src="../assets/img/close.png" @click="closeMsg"/>
      <p  class="titlemsg">{{msgObj.title}}</p>
      <span v-html="msgObj.msgs" :class="{msg_text_left:msgObj.left}"></span><br>
      <p>
        <button class="msg_red_white_btn" v-show="no" @click="closeMsg">取消</button>
        <button class="msg_white_red_btn" v-show="yes" @click="to(msgObj.url)">确定</button>
      </p>
    </div>
    <!--中间的-->

    <!--设计师订单-->
    <div v-if="msgObj.position==='bottom'&&msgObj.from === 'designerPay'" class=" toast bottommsg">
      <img src="../assets/img/close.png" @click="closeMsg"/>
      <p  class="titlemsg">{{msgObj.title}}</p>
      <span :class="{msg_text_left:msgObj.left}">
        <p class="bottomP">手机号码&nbsp;&nbsp;<input type="text" placeholder="请输入手机号码" v-model="order.phone"></p>
        <p class="bottomP">装修风格&nbsp;&nbsp;<input type="text" placeholder="请选择您家的户型"  v-model="order.style"></p>
        <p class="bottomP">所在地区&nbsp;&nbsp;<input type="text" placeholder="请选择地区" v-model="order.city"></p>
        <p class="bottomP">详细地址&nbsp;&nbsp;<input type="text" placeholder="请输入详细地址,如街道,楼牌号" v-model="order.position"></p>
      </span>
      <button class="red_btn pay regular" v-show="pay" @click="to(msgObj.url)">去支付</button>
    </div>
    <!--设计师订单-->
    <!--优惠卷-->
    <div v-if="msgObj.position==='bottom'&&msgObj.from === 'yhj'" class=" toast bottommsg">
      <img src="../assets/img/close.png" @click="closeMsg"/>
      <p  class="titlemsg">{{msgObj.title}}</p>
      <span :class="{msg_text_left:msgObj.left}" style="margin-bottom: 0;margin: 2vw 0;">
        可领取优惠卷
      </span>
      <div  class="yhj">
        <button  class="red_red_brn yhjL">
          ￥<i style="font-size: xx-large;">80</i><br/>满499元可用
        </button>
        <div class="left yhjR">
          <p>
            <button class="red_red_brn">店铺卷</button>
            仅可购买海尔冰箱官方旗舰店商品
          </p>
          <p style=" font-size: xx-small; position: absolute;    bottom: 6vw;" class="gray">不包含特价商品</p>
          <p style="font-size: xx-small;    position: absolute;    bottom: 0vw; width: 100%">
            2019.08.28-2019.09.28
            <button class="red_red_brn right" style="margin-right: 3vw;width: 20vw">立即领取</button>
          </p>
        </div>

      </div>
      <div  class="yhj">
        <button  class="red_red_brn yhjL">
          ￥<i style="font-size: xx-large;">80</i><br/>满499元可用
        </button>
        <div class="left yhjR">
          <p>
            <button class="red_red_brn">店铺卷</button>
            仅可购买海尔冰箱官方旗舰店商品
          </p>
          <p style=" font-size: xx-small; position: absolute;    bottom: 6vw;" class="gray">不包含特价商品</p>
          <p style="font-size: xx-small;    position: absolute;    bottom: 0vw; width: 100%">
            2019.08.28-2019.09.28
            <button class="red_red_brn right" style="margin-right: 3vw">立即领取</button>
          </p>
        </div>

      </div>
      <span :class="{msg_text_left:msgObj.left}" style="margin-bottom: 0;margin: 2vw 0;">
        已领取优惠券<i class="gray">(满足条件后即可用于当前商品)</i>
      </span>
      <div  class="yhj">
        <button  class="red_red_brn yhjL">
          ￥<i style="font-size: xx-large;">80</i><br/>满499元可用
        </button>
        <div class="left yhjR">
          <p>
            <button class="red_red_brn">店铺卷</button>
            仅可购买海尔冰箱
          </p>
          <p style=" font-size: xx-small; position: absolute;    bottom: 6vw;" class="gray">不包含特价商品</p>
          <p style="font-size: xx-small;    position: absolute;    bottom: 0vw; width: 100%">
            2019.08.28-2019.09.28
            <button class="gray_btn right" style="margin-right: 3vw;width: 20vw;">已领取</button>
          </p>
        </div>

      </div>
    </div>
    <!--优惠卷-->

    <!--规格数量-->
    <div v-if="msgObj.position==='bottom'&&msgObj.from === 'shopNum'" class="toast bottommsg" style="top: 34% !important;">
      <img src="../assets/img/close.png" @click="closeMsg"/>
      <!--图片-->
      <div class="showNum_img">
        <img :src="msgObj.detail.goods_thumb" class="img"/>
      </div>
      <!--图片-->
      <span style="   font-size: 5vw;    color: red;    margin: 3vw ;">￥{{msgObj.detail.low_price}}</span>
      <span style="    margin-left: 6vw;">请选择规格数量</span>

      <div :class="{msg_text_left:msgObj.left}" >
        <div v-for="(spec,index) of msgObj.detail.spec" style="clear: both;padding-top:3vw">
          <p>
            {{spec.spec_name}}
          </p>
          <!--:class="{showNum_btn_none:classObj(),showNum_btn_have:type.have,showNum_btn_checked:type.id === selectSpecs}"-->
          <div v-for="(type) in spec.child"  class="left showNum_btn" :class="cl(type.spec_value_id,index)"
               style="margin-left: 4vw;
    margin-top: 3vw;">
            <input type="radio"
                   name="spece"
                   :id="type.spec_value_id"
                   v-model="selectSpecs.spec[index]"
                   :value="type.spec_value_id"
                   style="display: none" />
            <label :for="type.spec_value_id" >{{type.spec_value}}</label>
          </div>
        </div>
        <!--购买数量-->
        <p class="payNum">
          购买数量
          <button>＋</button>
          <button>1</button>
          <button>一</button>
        </p>
        <!--购买数量-->
        <br>
        <div v-if=" order.other.length>0">
          <p>特色服务</p>
          <div v-for="(type,index) in order.other" :key="index" class="left showNum_btn showNum_btn_checked"
               style="margin-left: 4vw;
    margin-top: 3vw;">
            <input type="radio"
                   name="other"
                   :id="type.id"
                   :value="type.id"
                   style="display: none" />
            <label :for="type.id" >{{type.text}}</label>
          </div>
        </div>
      </div>
      <br><br><br>
      <div class="btn_showNum">
        <button class="red_btn" v-if="yesBtn" style="width: 85%" @click="emit('to')">确定</button>
        <button class="red_btn" v-if="!yesBtn">加入购物车</button>
        &nbsp;&nbsp;
        <button class="yellow_white_btn" v-if="!yesBtn">立即购买</button>

      </div>

    </div>
    <!--规格数量-->
  </div>
</template>

<script>
export default {
  props: ['msgObj', 'order'],
  name: 'Msg',
  data () {
    return {
      yes: this.msgObj.btns.indexOf('yes') > -1,
      no: this.msgObj.btns.indexOf('no') > -1,
      pay: this.msgObj.btns.indexOf('pay') > -1,
      selectSpecs: {
        spec: []
      },
      sku: '',
      skuAll: ''
    }
  },
  beforeMount () {
    this.show()
  },
  watch: {
    newSpec (val) {
      let _this = this
      if (this.selectSpecs.spec.length === this.msgObj.detail.spec.length) {
        this.msgObj.detail.sku.forEach((item) => {
          var a = []
          var b = []
          for (var j = 0; j < item.spec_value_id.length; j++) {
            a.push(item.spec_value_id[j])
          }
          for (var i = 0; i < _this.selectSpecs.spec.length; i++) {
            b.push(_this.selectSpecs.spec[i] + '')
          }
          if (a.toString() === b.toString() && item.stock > 0 ) {
            _this.msgObj.detail.low_price = item.price
          }
        })
      }
    }
  },
  methods: {
    closeMsg: function () {
      this.$emit('closeMsg', false)
      this.$store.commit('upMsgState', false)
    },
    to: function (url) {
      if (Object.keys(this.msgObj.query).length > 0) {
        this.$router.push({path: url, query: this.msgObj.query})
      } else {
        url.indexOf('/') > -1 ? this.$router.push(url) : this.$emit('yesMsg', url)
      }
    },
    emit: function (method) {
      this.$emit(method)
    },
    show: function () {
      if (this.msgObj.detail !== undefined) {
        var sku = this.msgObj.detail.sku
        let set = new Set()
        sku.forEach((item) => {
          if (item.stock > 1) {
            set.add(item.spec_value_id[0])
            set.add(item.spec_value_id[1])
          }
        })
        this.skuAll = set
      }
    }
  },
  computed: {
    newSpec: function () {
      return this.selectSpecs.spec
    },
    yesBtn: function () {
      return this.msgObj.btns.indexOf('yes') > -1
    },
    cl: function () {
      return (id, index) => {
        let _this = this
        if (_this.selectSpecs.spec[index] === id && _this.skuAll.has(id + '')) {
          return {
            showNum_btn_checked: true
          }
        } else {
          // 如果这个东西没有的话，把它删掉
          if (_this.selectSpecs.spec[index] === id && !_this.skuAll.has(id + '')) {
            _this.selectSpecs.spec[index] = undefined
          }
          return {
            showNum_btn_have: _this.skuAll.has(id + ''),
            showNum_btn_none: !_this.skuAll.has(id + '')
          }
        }
      }
    }
  }
}
</script>

<style scoped>

  .btn_showNum>button{
    width: 46%;
    height: 12vw;
    border-radius: 8vw;
    font-size: 5vw;
  }
  .btn_showNum{
    clear: both;
    margin-top: 3vw;
  }
  .payNum>button:nth-child(1){
    margin-right: 3vw;
  }
  .payNum>button{
    width: 7vw;
    height: 8vw;
    float: right;
    margin-right: .3vw;
  }
  .payNum{
    clear: both;margin-top: 22vw;
    height: 8vw;
    line-height: 8vw;
  }
  .showNum_btn{
    padding: 1vw 3vw;
    margin: 1vw;
    border-radius: 1vw;
    font-size: smaller;
  }
  .showNum_btn_checked{
    background-color: #FFDEDF !important;
    color: #DD1A21 !important;
  }
  .showNum_btn_have{
    background-color: #f7f7f7;
    color: #000;
  }
  .showNum_btn_none{
    background-color: #f7f7f7;
    color: #cccccc;
  }
  .showNum_img{
    height: 35vw;
    width: 35vw;
    background-color: aliceblue;
    position: fixed;
    top: 23%;
    left: 5%;
    border: .5vw solid white;
  }
  .yhjR>p>button{
    padding: .1vw 3vw;
    border-radius: 5vw;
  }
  .yhjR>p{
    line-height: 6vw;
    height: 33%;
  }
  .yhjR{
    width: 71%;
    padding: 1vw 0 0 2vw;
    height: 100%;
    position: relative;
  }
  .yhjL{
    text-align: center;
    height: 100%;
    float: left;
    width: 26%;
  }
  .yhj{
    height: 25vw;
    text-align: left;
    clear: both;
    margin: 0 3vw 0 5vw;
    border: .1vw solid #FFDEDF
  }

  .bottommsg>.titlemsg{
    height:8vw;
  }
  .pay{
    width: 94%;
    height: 11vw;
    font-size: large;
  }
  .bottommsg{
    width: 100% !important;
    bottom: 0vw;
    top: 55% !important;
    left: 0 !important;
    border-radius: 2vw 2vw 0vw 0vw !important;
  }
  .toast>img{
    width: 2.1vw;
    height: 2.1vw;
    position: absolute;
    top: 3vw;
    right: 4vw;
  }
  .titlemsg{
    height: 16vw;
    font-weight: 600;
    font-size: medium;
    line-height: 16vw;
  }
  .toast{
    width: 92%;
    background-color: white;
    border-radius: 2vw;
    z-index: 999999999999999999999;
    position: fixed;
    top: 39%;
    text-align: center;
    padding-bottom: 5vw;
    left: 2vw;
    overflow: scroll;
  }
  .toast span{
    line-height: 5vw;
    float: left;
    width: 100%;
    margin-bottom: 5vw;
  }
  .msg_red_white_btn{
    border: .1vw solid #DD1A21;
    color: #DD1A21;
    background-color: white;
    width: 18vw;
    height: 6vw;
    transform: translateX(-40%) ;
  }

  .msg_white_red_btn{
    color: white;
    background-color: #DD1A21;
    width: 18vw;
    height: 6vw;
    transform: translateX(50%) ;
  }
</style>
