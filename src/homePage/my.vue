<template>
<div style="height: 100%;" class="pageColor">
  <div class="mytitle" >
</div>
</div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      user: {}
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

  .mytitle{
    background-image: url("../assets/img/loginUser/headPortrait2.png");
    width: 100%;
    height: 42vw;
    background-repeat: no-repeat;
    background-size: 120% 100%;
    position: relative
  }
</style>
