<template>
  <div>
    <mtitle :titleC="titleC"/>
    <div class="back_white clear">
      <div class="m font-bold">发票抬头列表</div>
      <div class="m-l m-r loolUpList">
        <div class="m-b-sm m-t-sm">
          <div class="fr">个人</div>
          十一<van-tag color="#ffe1e1" text-color="#ad0000">默认</van-tag>
        </div>
        <div class="m-b-sm text-r gray">
          <a href="#" class="gray">编辑</a>
          <span class="m-l-xs m-r-xs">|</span>
          <a href="#" class="gray">删除</a>
        </div>
      </div>
      <div class="m-l m-r loolUpList">
        <div class="m-b-sm m-t-sm">
          <div class="fr">个人</div>
          十一<van-tag color="#ffe1e1" text-color="#ad0000">默认</van-tag>
        </div>
        <div class="m-b-sm text-r gray">
          <a href="#" class="gray">编辑</a>
          <span class="m-l-xs m-r-xs">|</span>
          <a href="#" class="gray">删除</a>
        </div>
      </div>
    </div>
    <div class="wrapper-md">
      <van-button color="#dd1a21" block url="#/AddLookUp">添加新抬头</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Button,Tag } from 'vant';
  Vue.use(Button);
  Vue.use(Tag);

  export default {
    name: "lookUpM",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '选择抬头'
        }
      }
    }
  }
</script>

<style scoped>
.loolUpList { border-bottom: 1px solid #eee;}
</style>
