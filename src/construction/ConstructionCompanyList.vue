<template>
  <div class="back_white clear">

    <div class="unitList" v-if="companys.id  === undefined"  @click="$router.push({path:'/company',query:{id:company.id}})" v-for="(company,index) in companys" :key="index">
      <div class="unitImg">
        <img :src="company.avatar" /></div>
      <div class="unitCon">
        <h6>{{company.name}}</h6>
        <p class="Introduction">{{company.brief}}</p>
        <p class="ConstructionSite">
          施工工地  {{company.site_nums}}个
          <!--<span class="right gray">{{jl[index]}}km</span>-->
          <span class="right gray">{{company.distance}}km</span>
        </p>

      </div>
      <!--<bmap :method="bma" :stratLng="company.lng" :stratlat="company.lat" @juli="juli"/>-->
    </div>


    <!--<div class="company" v-if="typeof companys.id  === 'number'" style="height: 25vw;">-->
      <!--<div class="companyImg">-->
        <!--<img :src="companys.avatar" class="img"/></div>-->
      <!--<div class="companyDetail">-->
        <!--<span class="regular companyName">{{companys.name}}</span>-->
        <!--<p class="regular gray" style="width: 72vw;">-->
          <!--<p class="aa" style="width: 45vw;">-->
        <!--{{companys.brief}}-->
          <!--</p>-->
        <!--&lt;!&ndash;<button class="redWhitebtn right" style="position: relative;    bottom: 7vw;    right: 2vw;">&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="    width: 4vw;    margin-top: -0.5vw;    margin-right: 1vw;float: left">&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="@/assets/img/关注 (1).png" class="img"/>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;关注</button>&ndash;&gt;-->
        <!--</p>-->

      <!--</div>-->
    <!--</div>-->

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

<style lang="less">
  .unitList { padding: 15px; display: flex; border-bottom: 1px solid #eee;
    .unitImg { margin-right: 15px; width: 73px; height: 73px; border: 1px solid #eee;
      img { width: 73px; height: 73px;}
    }
    .unitCon { flex: 1;
      h6 { font-size: 16px; color: #333; line-height: 1.4;}
      .Introduction { margin: 8px 0; color: #999; font-size: 12px; line-height: 1.4; overflow: hidden;text-overflow: ellipsis; display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
      .ConstructionSite { font-size: 12px; color: #999;}
    }
  }



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

  }
</style>
