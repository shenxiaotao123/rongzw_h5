<template>
  <div style="margin:14vw 0">
    <div class="title top_title">
      <img src="@/assets/img/loginUser/back.png" class="titleLeft"  @click="leftClick"/>
      <router-link to="/myInteraction/comment" class="S_titlecenter regular" >
          <span >
            评论
          </span>
      </router-link>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <router-link to="/myInteraction/consult" class="S_titlecenter regular">
          <span>
            咨询
          </span>
      </router-link>

    </div>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "myInteraction",
      methods:{
        leftClick:function () {
          this.$router.push('/index/my')
        }
      }
    }
</script>

<style scoped>

  a {
    color:black;
  }
  .S_titlecenter { line-height: 14vw; font-size: 4.4vw;}
  .router-link-active {
    border-bottom: .4vw solid red;
    height: 12.60vw;
    display: inline-block;
  }
  .tuijian>.right{
    height: 48%;
    width: 47%;
    padding: 2vw 2vw 0vw 0vw;
  }
  .tuijian>.left{
    height: 35%;
    width: 47%;
    padding: 2vw 0vw 0vw 2vw;
  }
  .tuijian{
    height: 45vw;
  }
  .navigationBar>span{
    padding-right: 5vw;
  }
  .navigationBar{
    white-space: nowrap;
    overflow-x: auto;
    text-align: center;
    padding: 5vw;
    font-size: 4vw;
    background-color: white;
  }
  .navigationBar input:checked+label{
    color: red;
  }
  .navigationBar input{
    display: none;
  }
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
  .wz{
    width: 55%;
    height: 100%;
    position: relative;
  }
  .red_btn{
    margin: 5vw;
    width: 90%;
    height: 10vw;
    border-radius: 5vw;
  }
</style>
