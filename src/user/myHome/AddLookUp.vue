<template>
  <div>
    <mtitle :titleC="titleC"/>
    <div class="back_white clear">
      <div class="m font-bold">新建发票抬头</div>
      <van-tabs type="card" color="#dd1a21">
        <van-tab title="个人">
          <p class="wrapper size12 gray">电子普通发票与纸质普通发票具有等同的法律效益，支持报销入账。 </p>
          <van-cell-group>
            <van-field v-model="value" label="名称" right-icon="question-o" click-right-icon=""	placeholder="请输入纳税人名称" input-align="right"/>
          </van-cell-group>
        </van-tab>
        <van-tab title="企业">
          <p class="wrapper size12 gray">电子普通发票与纸质普通发票具有等同的法律效益，支持报销入账。 </p>
          <van-cell-group>
            <van-field v-model="value" label="名称" right-icon="question-o" click-right-icon=""	placeholder="请输入纳税人名称" input-align="right"/>
            <van-field v-model="value" label="企业税号" right-icon="question-o" click-right-icon=""	placeholder="请输入企业纳税人识别号" input-align="right"/>
          </van-cell-group>
        </van-tab>
      </van-tabs>


    </div>
    <div class="wrapper"><van-checkbox v-model="checked" checked-color="#dd1a21">设置为默认抬头</van-checkbox></div>
    <div class="wrapper-md">
      <van-button color="#dd1a21" block>确认</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button,Checkbox,CheckboxGroup,Tab,Tabs,Field,Dialog } from 'vant';
  Vue.use(Button);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(Field);
  Vue.use(Dialog);

  export default {
    name: "AddLookUp",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '新建/编辑抬头'
        },
        checked: true,
        active: 2,
        value: ''
      }
    },
    mounted() {
      this.$dialog.alert({
        message: '弹窗内容'
      });
    }
  }
</script>

<style>
.loolUpList { border-bottom: 1px solid #eee;}
.van-tabs__wrap { width: 200px;}
</style>
