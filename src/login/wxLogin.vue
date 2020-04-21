<template>

</template>

<script>
    export default {
        name: "wxLogin",
      data: function () {
        return {
          show: true
        }
      },
      created () {
        //沒有token的情況
        if(!this.$cookies.isKey('token')){
          console.log('没有token')
          //路徑裏有code
          if(window.location.href.indexOf('code') != -1){
            console.log('有code')
            var path = window.location.href
            let code = path.substring(path.indexOf('code=')+5,path.indexOf('&'))
            console.log(code)
            this.http({
              method:'post',
              url:'/api/consumer/OAuthLogin',
              data:{
                oauth_type:'wx_h5',
                code:code
              }
            }).then((response)=>{
              console.log('设置token')
              this.$cookies.set('token', response.data.token,60*60*24*30)
              console.log(response.data);
              console.log(response.data.data.openid);

              var wxcode =response.data.code
              if (wxcode == 2){
                this.$router.push({  //传参到绑定手机号码页面
                  path:'/Information',
                  query: {
                    openid:response.data.data.openid,
                    oauth_type:response.data.data.oauth_type
                  }
                })
              }

              //this.load()
            })
          }
          else{
            //獲取
             window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd802df0d4c9fe16e&redirect_uri=http://mobile.rongzw.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
          }
        }else{
          //this.load()
        }
        this.$router.push('/index/my')

        // load(function () {
        //   var _this = this
        //   setTimeout(function() {
        //     this.show = false
        //     _this.$router.push('/index/my')
        //   }, 3000)
        // })

      }

    }
</script>

<style scoped>

</style>
