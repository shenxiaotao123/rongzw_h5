<template>
    <div>
      <mtitle :titleC="titleC"/>
      <van-row type="flex" justify="space-around">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>


    </div>
</template>

<script>
  import Vue from 'vue';
  import { Col, Row } from 'vant';
  import { Image } from 'vant';
  Vue.use(Image);
  Vue.use(Col);
  Vue.use(Row);
    export default {
        name: "checkStyle",
      components:{
          mtitle:() => import('@/public/TextTitle')
      },
      data(){
        return{
          titleC: {
            type: 'text',
            content: '风格喜好'
          }
        }
      }
    }
</script>

<style scoped>

</style>
