<template>
<input :value="val" @change="change"/>
</template>

<script>
export default {
  name: 'Paging',
  props: ['paging'],
  methods: {
    scroll (_this,path, params) {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        _this.$ajax.get(path,{params:params}).then((res) => {
          _this.val = _this.val.concat(res.data.data)
        })
      }
    },
    change (e) {
      this.$emit('paging', e.target.value)
    }
  },
  mounted () {
    let _this = this
    window.addEventListener('scroll',this.scroll(_this,_this.paging.path,_this.paging.params),true)
  },
  watch: {

  },
  data () {
    return {
      val: ''
    }
  }
}
</script>

<style scoped>

</style>
