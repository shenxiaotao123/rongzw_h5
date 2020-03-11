<template>
  <div>
    <mtitle :titleC="titleC"/>
    <van-field v-model="text" label="称呼" placeholder="请输入称呼" input-align="right" />
    <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号码" input-align="right" />
    <van-field
      readonly
      clickable
      name="area"
      :value="value"
      label="所在城市"
      placeholder="点击选择省市区"
      @click="showArea = true"
      input-align="right"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="onConfirm"
        @cancel="showArea = false"
      />
    </van-popup>

    <van-field name="uploader" label="上传身份证正反面">
      <template #input>
        <van-uploader v-model="uploader" />
      </template>
    </van-field>
    <div class="wrapper-md">
      <van-button color="#dd1a21" block>提交</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Field,Form,Area,Popup,Button,Uploader } from 'vant';
  Vue.use(Field);
  Vue.use(Form);
  Vue.use(Area);
  Vue.use(Popup);
  Vue.use(Button);
  Vue.use(Uploader);

  export default {
    name: "BecomeDesigner",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '成为设计师',
          value: '',
          showArea: false,
          areaList: {}, // 数据格式见 Area 组件文档
        },
        uploader: []
      }
    },
    methods: {
      onConfirm(values) {
        this.value = values.map(item => item.name).join('/');
        this.showArea = false;
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
      }
    },
  }
</script>

<style scoped>

</style>
