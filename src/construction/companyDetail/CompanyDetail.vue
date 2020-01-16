<template>
  <div class="all" >
    <div class="bb">
      <p class="genre medium">公司简介</p>
      <p>{{company.brief}}</p>
    </div>
    <div class="bb">
      <p class="genre medium">承接户型 </p>
      <p>{{company.shapes}}</p>
    </div>
    <div class="bb">
      <p class="genre medium">服务区域 </p>
      <p>{{company.address}}</p>
    </div>
    <div class="bb">
      <p class="genre medium">公司规模</p>
      <p>{{company.scale}}</p>
    </div>
    <div class="bb">
      <p class="genre medium">营业执照</p>
      <img :src="company.business_license_pic"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyDetail',
  data () {
    return {
      company: {}
    }
  },
  created () {
    var path = '/api/construction/company/' + this.$route.query.id + '?no_cached=1'
    this.$ajax.get(path).then((response) => {
      this.company = response.data.data
    })
  }
}
</script>

<style scoped>

  .bb img{
    width: 30vw;
  }
  .bb{
    margin: 0 5vw 3vw 5vw;
  }
  .genre{
    font-weight: 600;
    font-size: 4vw;
    margin-bottom: 2vw;
  }
  .aa{
    height: 12%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 1vw;
  }
</style>
