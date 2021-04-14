<template>
 <div>
   <mtitle :titleC="titleC"/>
   <van-form @submit="onSubmit">
     <van-field v-model="content" rows="10" autosize type="textarea" placeholder="您有任何的投诉与建议,可以在这里畅所欲言,我们一定耐心倾听, 积极改正...."/>
     <div class="wrapper-md">
       <van-button color="#dd1a21" block type="info" native-type="submit">提交</van-button>
     </div>
   </van-form>


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
    created(){
      //let token = this.$route.query.token; //拿到上一个页面的token

      document.cookie
      var token = this.$cookies.get("token")
      //console.log(token)

    },
    methods:{
      onSubmit() {
        var params= {
          'content' : this.content,
          'user_token' : this.$cookies.get("token"),
        };
        var formData = params; // 这里才是你的表单数据
        this.$ajax.post('/api/consumer/feedback', formData).then((response) => {
          // success callback
          alert(response.data.msg)//接口返回信息
        }, (response) => {
          // error callback
          console.log(error);
        });

      }
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
