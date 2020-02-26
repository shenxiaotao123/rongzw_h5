<template>

  <div>
    <mtitle :titleC="titleC"/>
    <div class="mar-b-10">
      <van-cell title="户型" is-link  value="一居室"/>
      <van-cell title="所在城市" is-link value="浙江省丽水市缙云县"/>
      <van-cell title="所在地区 " is-link value="夏河路12号夏河路12号夏河路12号夏河路"/>
      <van-cell title="风格喜好" is-link value="" @click="$router.push('/checkStyle')"/>
      <van-cell title="装修阶段" is-link value=""/>
      <van-cell title="装修预算" is-link value="30万"/>
    </div>
    <van-button type="danger" style="    position: fixed;    bottom: 6vw;    left: 5vw;font-size: 4vw;width: 90vw;">保存</van-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  //vant单元格
  import { Cell, CellGroup } from 'vant';
  Vue.use(Cell);
  Vue.use(CellGroup);
  //vant布局
  import { Col, Row } from 'vant';
  Vue.use(Col);
  Vue.use(Row);

  //按钮
  import { Button } from 'vant';

  Vue.use(Button);
    export default {
        name: "index",
      components: {
        mtitle: () => import('@/public/TextTitle')
      },
      data(){
          return{
            titleC: {
              type: 'text',
              content: '完善我的家'
            },
          }
      }
    }
</script>

<style scoped>

</style>
