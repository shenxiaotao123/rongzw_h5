<template>
 <div>
   <mtitle :titleC="titleC"/>
   <van-field id="data" v-model.trim="data" rows="10" autosize type="textarea" placeholder="您有任何的投诉与建议,可以在这里畅所欲言,我们一定耐心倾听, 积极改正...."/>
   <div class="wrapper-md">
     <van-button color="#dd1a21" block v-on:click="submit">提交</van-button>
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
    mounted() {
      axios
        .post('/api/consumer/feedback')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    },
    methods:{
      submit: function() {
        var params=new Object();
        params.data=this.data;
        alert("formdata："+JSON.stringify(params));

        axios.post('/api/consumer/feedback', {
          data: '',
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })

      }
    },
    data(){
      return{
        titleC: {
          type: 'text',
          content: '投诉建议'
        },
        code: 0,
        msg: '反馈成功',
        data: [],
        url: ''
      }
    }
  }
</script>

<style scoped>

</style>
