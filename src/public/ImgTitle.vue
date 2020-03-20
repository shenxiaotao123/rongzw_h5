<template>
  <div class="imgTitle" >
    <img :src="img" class="img"/>
    <img src="@/assets/img/loginUser/back.png" class="titleLeft"  @click="back"/>
    <!--<img src="@/assets/img/title/fx.png" class="titleRight" style="width: 5vw"/>-->
  </div>
</template>

<script>
export default {
  name: 'ImgTitle',
  props: {
    backUrl: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  methods: {
    back: function () {
      this.backUrl === '' ? this.$router.go(-1) : this.$router.push(this.backUrl)
    }
  }
}
</script>

<style scoped>
  .imgTitle{
    height: 55vw;
  }
  .titleLeft{
    position: absolute;
    left: 3vw;
    top: 2%;
    width: 3vw;
  }
  .titleRight{
    position: absolute;
    top: 2%;
    right: 3vw;
    font-weight: 400;
    font-size: 3vw;
  }
</style>
