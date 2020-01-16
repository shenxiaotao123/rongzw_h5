<template>
<div  style="margin:26vw 0  30vw 0">
  <div class="title top_title">
    <ul>
      <li>
        <router-link to="/index/picture/effect">
          效果图
        </router-link>
      </li>
      <!--<li>
        <router-link to="/index/picture/local">
          局部图
        </router-link>
      </li>-->
      <li>
        <router-link to="/index/picture/case">
          装修案例
        </router-link>
      </li>
    </ul>
    <img src="@/assets/img/msg.png" class="titleRight"  style="width: 5vw;"/>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'picture'
}
</script>

<style scoped>
  .router-link-active {
    border-bottom: .1vw solid red;
    height: 14.5vw;
    display: inline-block;
  }
  a{
    color: black;
  }
ul{
  width: 70%;
  height: 100%;
  margin-left: 15%;
}
  li{
    float: left;
    width: 50%;
    line-height: 15vw;
    text-align: left;
  }
</style>
