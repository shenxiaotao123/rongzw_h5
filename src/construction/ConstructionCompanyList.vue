<template>
  <div class="back_white clear">
    <div class="company" v-if="companys.id  === undefined"  @click="$router.push({path:'/company',query:{id:company.id}})" v-for="(company,index) in companys" :key="index">
      <div class="companyImg">
        <img :src="company.avatar" class="img"/></div>
      <div class="companyDetail">
        <p class="regular companyName">{{company.name}}</p>
        <p class="regular gray aa size12">
         {{company.brief}}
        </p>
        <p class="regular gray size12" style="width: 65vw">
          施工工地  {{company.site_nums}}个
          <!--<span class="right gray">{{jl[index]}}km</span>-->
          <span class="right gray">{{company.distance}}km</span>
        </p>

      </div>
      <!--<bmap :method="bma" :stratLng="company.lng"  :stratlat="company.lat" @juli="juli"/>-->
    </div>
    <div class=" company"  v-if="typeof companys.id  === 'number'" style="height: 25vw;">
      <div class="companyImg">
        <img :src="companys.avatar" class="img"/></div>
      <div class="companyDetail">
        <span class="regular companyName">{{companys.name}}</span>
        <p class="regular gray" style="width: 72vw;">
          <p class="aa" style="width: 45vw;">
        {{companys.brief}}

          </p>
        <button class="redWhitebtn right" style="position: relative;    bottom: 7vw;    right: 2vw;">
          <div style="    width: 4vw;    margin-top: -0.5vw;    margin-right: 1vw;float: left">
            <img src="@/assets/img/关注 (1).png" class="img"/>
          </div>
          关注</button>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
/*
import bmap from '@/public/Bmap' */
export default {
  name: 'ConstructionCompanyList',
  props: ['companys'],
  data () {
    return {
      bma: 'dist'
    }
  }
}
</script>

<style scoped>
  .aa{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 50vw;
  }
  .redWhitebtn{
    padding: .5vw 5vw;
  }
  .companyName{
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
.company{
  clear: both;
  border-bottom: .5vw solid rgb(247, 247, 247);
  padding-bottom: 2vw;
}
  .company:after { content:"."; display:block; height:0; clear:both; visibility:hidden;}
  .companyImg{
    margin: 3.5vw 0px 0px 3vw;
    height: 17vw;
    width: 17vw;
    border: 1px solid #cfcfcf;
    background-color: rgb(207, 207, 207);
    margin-left: 5vw;
    float: left;
  }
  .companyDetail{
    margin-left: 4vw;
    padding-top: 3vw;
    float: left;
    line-height: 6vw;
  }
</style>
