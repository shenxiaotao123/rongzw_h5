<template>
  <transition name="fade">
<div v-if="show" style="height: 100%; width: 100%;">
  <img src="../assets/img/startPage/backimg.png" />
    <img src="../assets/img/startPage/index.png" style="    position: absolute;
    top: 56vw;
    width: 30vw;
    left: 35vw;"/>
<div style="margin: 150vw 0 0 0;">
  <p class="regular" style="color: #333; letter-spacing:1vw;font-size: 4vw;">全国领先互联网家装平台</p>
  <p class="regular" style="color: #999; font-size: 1vw;margin-top: 5vw;">浙江联合创展科技股份有限公司</p>
</div>

</div>
  </transition>
</template>

<script>
export default {
  name: 'Strat',
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
            oauth_type:'wx',
            code:code
          }
        }).then((res)=>{
          console.log('设置token')
          this.$cookies.set('token', res.data.token,60*60*24*30)
          this.load()
        })
        alert(code)
      }else{
        //獲取
        window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2ee338e15d915705&redirect_uri=http://mobile.rongzw.com&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect'
      }
    }else{
      this.load()
    }

  },
  methods: {
    load: function () {
      var _this = this
      setTimeout(function () {
        this.show = false
        _this.$router.push('/index/home')
      }, 3000)
    }
  }
}
</script>

<style scoped>
  img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    border-radius: 1vw;
    position: absolute;
    top:20vw
  }
  p{
    text-align: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
