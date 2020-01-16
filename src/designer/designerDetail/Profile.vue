<template>
    <div v-html="designer.content.content"></div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
      designer: {}
    }
  },
  mounted () {
    this.$ajax.get('/api/designer/designer/' + this.$route.query.id + '?no_cached=1').then((response) => {
      this.designer = response.data.data
    })
  }
}
</script>

<style scoped>

</style>
