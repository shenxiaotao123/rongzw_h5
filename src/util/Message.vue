<template>

  <div>
   123
  </div>
</template>

<script>
export default {
  name: 'Message',
  computed: {
    btn_one: function () {
      return this.hasBtn === 1
    },
    btn_two: function () {
      return this.hasBtn === 2
    }
  },
  props: {
    type: {// 信息类型
      type: String,
      default: 'info'
    },
    title: {// 提示标题
      type: String,
      default: ''
    },
    content: {// 提示内容
      type: String,
      default: ''
    },
    isClose: {// 是否显示关闭按钮
      type: Boolean,
      default: false
    },
    hasBtn: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
