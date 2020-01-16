<template>
  <div class="title">
    <img src="../assets/img/loginUser/back.png" class="titleLeft"  @click="back"/>
    <span class="regular titlecenter" v-if="titleCenter==='name'">{{name}}</span>
    <input class="medium" type="text" :placeholder="inputText" v-model="search" v-if="titleCenter==='input'">
    <img src="../assets/img/msg.png"  class="titleRight" v-if="ismsg" />
    <span class="titleRight" v-if="!ismsg && !isFx">{{titleRight}}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: Object,
      default: function () {
        return {titleR: 'msg', titleC: 'text', titleL: 'text', titleLeftMethod: 'back'}
      },
      validator: function (title) {
        return title.titleR instanceof Number && title.name instanceof String
      }
    },
    'name': {
      type: String
    },
    'titleRight': {
      type: String,
      default: 'msg'
    },
    'titleCenter': {
      type: String,
      default: 'name'
    },
    'inputText': {
      type: String
    },
    'backUrl': {
      type: String,
      default: ''
    },
    'type': {
      type: String,
      default: 'text'
    }
  },
  methods: {
    back: function () {
      this.backUrl === '' ? this.$router.go(-1) : this.$router.push(this.backUrl)
    }
  },
  computed: {
    isFx: function () {
      return this.titleRight === 'fx'
    },
    ismsg: function () {
      return this.titleRight === 'msg'
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

  input{
    border-radius: 5vw;
    padding-left: 7vw;
    background-image: url(../assets/img/home/sousuo.png);
    background-repeat: no-repeat;
    background-position: 4%;
    background-size: 6%;
    background-color: #F5F6FA;
    height: 6vw;
    width: 51vw;
    margin-top: 4vw;
  }

</style>
