<template>
  <div class="back_white clear">
    <mtitle :titleC="titleC" :titleR="titleR" :titleL="titleL" @to="to"/>
    <company :companys="company" ></company>
    <div class="address">
      <p class="all">
        <span class="left">{{company.address}}</span>
        <span class="right">
        <img src="../assets/img/dialogue.png"/>

          <a :href="'tel:'+company.phone"><img src="../assets/img/dianhua.png" /></a>
        </span></p>
    </div>
      <ul class="companyDetail">
        <li class="li_bottom">
          <router-link :to="{path:'/company/constructionSite',query:{id:company.id}}" >施工工地({{company.site_nums}})</router-link>
        </li>
        <li>
          <router-link :to="{path:'/company/comment',query:{id:company.id,type:'construction'}}"  >用户评价</router-link>
        </li>
        <li> <router-link :to="{path:'/company/companyDetail',query:{id:company.id}}"  >公司信息</router-link>   </li>
      </ul>
    <router-view class="`all"></router-view>

    <right-bottom :rightBottom="rightBottom" class="top_rightBottom"/>
  </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
import company from '@/construction/ConstructionCompanyList'
import rightBottom from '@/public/RightBottom.vue'
export default {
  name: 'Company',
  components: {
    mtitle,
    company,
    rightBottom
  },
  created () {
    this.getRouterData()
  },
  methods: {
    getRouterData: function () {
      var path = '/api/construction/company/' + this.$route.query.id + '?no_cached=1'
      this.$ajax.get(path).then((response) => {
        this.company = response.data.data
      })
    },
    to () {
      this.$router.push({path: '/construction'})
    }
  },
  data: function () {
    return {
      titleL: {
        content: require('@/assets/img/loginUser/back.png'),
        method: 'to'
      },
      titleC: {
        type: 'text',
        content: '找施工'
      },
      titleR: {
        type: 'img',
        content: require('@/assets/img/msg.png')
      },
      company: {},
      rightBottom: {
        type: 'top',
        imgUrl: require('@/assets/img/top.png')
      }
    }
  }
}
</script>
<style scoped>
  a{
    color: black;
  }
  .router-link-active {
    color:#DD1A21;
    border-bottom: 1vw solid #DD1A21;
  }
  .companyDetail li{
    float: left;
    width: 25%;
    text-align: center;
    margin-top: 3vw;
    font-weight: 600;
    font-size: 4vw;
    font-family: PingFang-SC-Medium;
    padding-bottom: 2vw;
    margin-left: 6.5vw;

  }

  .companyDetail{
    height: 15vw;
  }
  .address p span:nth-child(2) img{
    height: 3vw;
    width: 3vw;
    margin-right: 2vw;
  }
  .address p span:nth-child(1){
    padding-left: 5vw;
    background-image: url("../assets/img/position.png");
    background-repeat: no-repeat;
    background-size: 8%;
    margin-left: 2vw;
  }
  .address p span{
    transform: translateY(70%);
  }
  .address{
    height: 10vw;
    border-bottom: 2vw solid #F7F7F7;
    margin-bottom: 3vw;
  }
</style>
