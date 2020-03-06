<template>
    <index :gl="gl"/>
</template>

<script>
    export default {
        name: "Publish",
      components:{
          index:()=>import('@/user/myHome/Mygl/index')
      },
      data(){
          return {
            gl:[]
          }
      },
      mounted(){
          this.$ajax.get("/api/consumer/guide",{"user_token":1,'is_reviewed':2}).then((res)=>{
          this.gl = res.data.data
        })
      }
    }
</script>

<style scoped>

</style>
