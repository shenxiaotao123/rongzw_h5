<template>
  <div class="title">
    <!--左边-->
    <img src="@/assets/img/loginUser/back.png" v-if="titleL.method === 'back'" class="titleLeft"  @click="leftClick"/>
    <img :src="titleL.content" v-else class="titleLeft"  @click="leftClick"/>
    <!--左边-->

    <!--中间-->
    <span class="regular titlecenter" v-if="titleC.type==='text'">{{titleC.content}}</span>
    <input class="medium" type="text" :placeholder="titleC.content" v-model="search" v-if="titleC.type==='input'">
    <input  class="medium sreachInput" type="text" :placeholder="titleC.content" v-model="search" v-if="titleC.type==='search'">
    <!--中间-->
    <!--右边-->
    <img :src="titleR.content" v-if="titleR.type === 'img'" class="titleRight" @click="rightClick" style="width: 5vw;"/>
    <span class="titleRight" v-if="titleR.type === 'text'" @click="rightClick">{{titleR.content}}</span>

      <span
        class="regular centerT"
        v-if="titleC.type==='textArray'"
        v-for="(type,index) of titleC.content"
        @click="emit(titleC.method[index],index)">
        {{type}}
      </span>

    <div class="titleR" v-if="titleR.type === 'imgArray'">
      <img :src="type"  v-for="(type,index) of titleR.content" class="" @click="rightClick(titleR.method[index])" style="width: 4.3vw;"/>
    </div>

    <!--右边-->
  </div>
</template>

<script>
export default {
  name: 'TextTitle',
  props: {
    titleR: {
      type: Object,
      default: function () {
        return {
          type: 'text', // 放的是图片||文字
          content: '', // 图片放url  文字放内容
          method: ''// 点击后的方法
        }
      }
    },
    titleC: {
      type: Object,
      default: function () {
        return {
          type: 'text', // 放的是输入框||文字
          content: '', // 输入框放html  文字放内容
          method: ''// 点击后的方法
        }
      }
    },
    titleL: {
      type: Object,
      default: function () {
        return {
          type: 'img', // 放的是图片||文字
          content: '', // 图片放url  文字放内容
          method: 'back'// 点击后的方法  默认返回上一级
        }
      }
    }
  },
  computed: {

  },
  created: function () {

  },
  methods: {
    emit(method,params){
      this.$emit(method,params)
    },
    leftClick: function () {
      let titleL = this.titleL
      if (titleL.method === 'back') { // 返回上一级，默认方法
        this.$router.go(-1)
      } else { // 父组件处理
        this.$emit(titleL.method)
      }
    },
    rightClick: function (data) {
      this.$emit(data)
    }
  },
  data: function () {
    return {
      search: ''

    }
  }
}
</script>

<style scoped>
  .sreachInput{
    border-radius: 5vw;
    padding-left: 10vw;
    background-image: url(../assets/img/home/sousuo.png);
    background-repeat: no-repeat;
    background-position: 4%;
    background-size: 6%;
    background-color: #F5F6FA;
    height: 8vw;
    width: 65vw;

  }
  .titleR{
    position: absolute;
    top: 0;
    right: 2%;
  }
  .titleR>img{
    margin-right: 2vw;
  }
.centerT{
  position: relative;
  top: 31%;
  font-size: larger;
}
  .centerT>span{
    margin-right: 3vw;
  }
</style>
