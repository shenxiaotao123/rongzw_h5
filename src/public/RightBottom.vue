<template>
  <div>
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
        document.documen扫描二维码下载tElement.scrollTop = 0
        document.body.scrollTop = 0
      } else {
        this.$store.state.showToast = true
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
