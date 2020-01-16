<template>
  <div class="pageColor" style="height: 100%;">
    <mt :titleC="titleC"/>
    <div class="white order_detail">
      <p >
        <span class="gray">收货人</span>
        <input type="text" placeholder="请输入收货人姓名"  v-model="add.name" class="right" style="width: 60vw;height: 100%; "/>
      </p>
      <p >
        <span class="gray">手机号码</span>
        <input class="phone input-style "  v-model="add.phone.val" type="number" :placeholder="add.phone.placeholder" oninput = "value=value.replace(/[^\d]/g,'')" maxlength="11" @blur="add.phone.test()" :class="{'right':true}" style="    width: 60vw;height: 100%; "/>
      </p>
      <p >
        <span class="gray">所在地区</span>
        <span class="right" style="    width: 60vw;height: 100%; ">
          地区
          <i class="right"> > </i>
        </span>
      </p>
      <p >
        <span class="gray">详细地址</span>
        <input type="text" placeholder="请输入详细地址,如街道,楼牌号" v-model="add.address" class="right" style="    width: 60vw;height: 100%; "/>
      </p>

    </div>
    <br>
    <input type="checkbox" id="defulat" class="morendizhi">
    <label for="defulat">
      设置为默认地址
    </label>
    <button class="red_btn" @click="save">保&nbsp;&nbsp;存</button>
  </div>
</template>

<script>import mt from '@/public/TextTitle'
export default {
  name: 'AddressAdd',
  components: {mt},
  data () {
    return {
      titleC: {
        type: 'text',
        content: '收货地址列表'
      },
      add: {
        phone: {
          val: '',
          placeholder: '请输入手机号',
          test: function () {
            // 验证手机号
            let reg = /^1[0-9]{10}$/
            if (this.val === '' || this.val.length <= 10 || !reg.test(this.val)) {
              this.val = ''
              this.placeholder = '请输入正确的手机号'
            }
          }
        },
        name: '',
        address: ''
      }

    }
  },
  mounted: {

  },
  methods: {
    save () {
      if (this.add.phone.val !== '' && this.add.name !== '' && this.add.address !== '') {
        alert('保存成功！')
        this.$router.push({path: '/address'})
      } else {
        alert('请输入完整信息！')
      }
    }
  }
}
</script>

<style scoped>
  .order_detail>p{
    margin: 0 5vw;
    border-bottom: .1vw solid #f7f7f7;
    height: 10vw;
    line-height: 10vw;
  }
  .red_btn{
    width: 90%;
    margin: 5%;
    height: 7%;
    font-size: larger;
    margin-top: 10%;
  }
  .morendizhi{
    display: none;
  }
  label{
    margin:5vw;
  }
  label:before{
    display: inline-block;
    height: 4vw;
    width: 4vw;
    background-color: #f7f7f7;
    content: '';
    border-radius: 5vw;
    border:.2vw solid #929292;
  }
  .morendizhi:checked+label:after{
    display: inline-block;
    content: "";
    position: relative;
    left: -31.5vw;
    top: -1vw;
    border: 1vw solid #766666;
    border-radius: 5vw;
    background-color: #766666;
    width: 0.5vw;
    height: 0.5vw;
  }
</style>
