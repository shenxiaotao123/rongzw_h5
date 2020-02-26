<template>
    <div>
      <mtitle :titleC="titleC"/>
      <div class="mar-b-10" style="margin-top: 1vw ">
        <van-cell title="荣装官网" is-link  value="www.rongzw.com"/>
        <van-cell title="联合创展" is-link value="www.zjlhcz.com" />
        <van-cell title="服务热线 " is-link value="400-622-1988" />
      </div>

      <p style="    margin: 5vw 5vw 2vw;    font-weight: 600;">
        公司地址
      </p>

      <div class="white" style="padding: 2vw 5vw">
        <p style="line-height: 8vw">
          浙江省丽水市莲都区厦河路107号二楼
        </p>
        <img src="../../assets/img/my/contactUs.png" width="100%"/>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue'
  //vant单元格
  import { Cell } from 'vant';
  Vue.use(Cell);
    export default {
        name: "contactUs",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '联系我们'
        }
      }
    }
    }
</script>

<style scoped>

</style>
