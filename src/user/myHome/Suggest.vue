<template>
 <div>
   <mtitle :titleC="titleC"/>
   <van-field
     v-model="message"
     rows="10"
     autosize
     type="textarea"
     placeholder="您有任何的投诉与建议,可以在这里畅所欲言,我们一定耐心倾听, 积极改正...."
   />
   <div class="wrapper-md">
     <van-button color="#dd1a21" block>提交</van-button>
   </div>
 </div>
</template>

<script>
  import Vue from 'vue';
  import { Button,Field } from 'vant';
  Vue.use(Button);
  Vue.use(Field);

  export default {
    name: "Suggest",
    components:{
      mtitle:() => import('@/public/TextTitle')
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '投诉建议'
        }
      }
    }
  }
</script>

<style scoped>

</style>
