<template>
  <div  >
    <img :src="rightBottom.imgUrl" @click="toPageIndex" class="img"/>
  </div>
</template>

<script>
export default {
  name: 'TopBottom',
  methods: {
    toPageIndex: function () {
      var _this = this
      var type = _this.rightBottom.type
      if (type === 'top') {
        window.pageYOffse = 0
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      } else if (type === 'tobuy') {
        this.$store.state.showToast = true
      } else if (type === 'consultation') {

      }
    }
  },
  props: ['rightBottom'],
  computed: {
  }
}
</script>

<style scoped>

</style>
