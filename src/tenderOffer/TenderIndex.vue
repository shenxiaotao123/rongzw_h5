<template>
<div>
  <ttitle :titleC="titleC"/>
  <div></div>
</div>
</template>

<script>
export default {
  name: 'TenderIndex',
  components: {
    ttitle: () => import('@/public/TextTitle')
  },
  data () {
    return {
      titleC: {
        type: 'text',
        content: '算报价'
      }
    }
  }
}
</script>

<style scoped>

</style>
