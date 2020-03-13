<template>
    <div>
      <mtitle :titleC="titleC" :titleR="titleR"/>

      <div class="tt">
        <img :src="site.thumb_img" class="img">
        <div class="tf"/>
        <div class="content">
          <p>{{site.title}}</p>
          <p>
            <span class="tf_btn">{{site.shape_name}}</span>
            <span class="tf_btn">{{site.zaojia>10000 ? site.zaojia/10000+'万' : site.zaojia}}</span>
            <span class="tf_btn">{{site.mianji}}m²</span>
          </p>
        </div>

      </div>
      <div class="back_white wrapper-md m-b-sm">
        <p style="margin-bottom: 2vw">施工公司：
          <span class="cinnabar"
                @click="$router.push({path:'/company/constructionSite',query:{id:site.company_id}})">
            {{site.company_name}}</span></p>
        <p>施工负责人：{{site.manager}}</p>
      </div>

      <div class="schedule back_white">
        <p class="schedule_title">
          工程进度
        </p>
        <br>
        <div class="schedule_detail" v-for="(siteStageInfo) of siteStageInfos">
          <div style="height: 100%;">
            <button class="schedule_check_state" v-show="site.stage_name === siteStageInfo.stage_name"/>
            <button class="schedule_uncheck_state" v-show="site.stage_name !== siteStageInfo.stage_name"/>
            <p style="    position: absolute;    top: -3.7vw;left: 4vw;" :class="{cinnabar:site.stage_name === siteStageInfo.stage_name}">{{siteStageInfo.stage_name}}</p>
            <div  style="padding:10px 0 20px 20px; height: 100%;">
              <div class="navigationBar">
                  <img :src="pic"  class="img"  v-for="pic of siteStageInfo.pic_json">
              </div>
              <p style="line-height: 1.5;" class="gray m-t-xs">{{siteStageInfo.note}}</p>
              <p style="clear: both" class="gray size12 m-t-xs">
                {{siteStageInfo.updated_at}}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
export default {
  name: 'Sitedetail',
  components: {
    mtitle
  },
  data () {
    return {
      site: {},
      stage: {},
      siteStageInfos: {},
      titleC: {
        type: 'text',
        content: '工地详情'
      }
    }
  },
  mounted () {
    //获取指定ID 施工工地 详情
    this.$ajax.get('/api/construction/site/' + this.$route.query.id).then((response) => {
      this.site = response.data.data
    })
    //施工阶段列表
    this.$ajax.get('/api/construction/stage').then((response) => {
      this.stage = response.data.data
    })
    //工地阶段详情列表
    this.$ajax.get('/api/construction/siteStageInfos?site_id=' + this.$route.query.id).then((response) => {
      this.siteStageInfos = response.data.data
    })
  },
  computed: {
    // 计算属性的 getter
    tt: function () {
      return {
        'background-image': this.site.thumb_img + ''
      }
    }
  }

}
</script>

<style scoped>

  .schedule_detail{
    margin-top: 5vw;
    position: relative;
    border-left: .5vw solid #F7F7F7;
  }
  .schedule_uncheck_state{
    background-color: #DDDDDD;
    width: 15px;
    height: 15px;
    border-radius: 5vw;
    position: absolute;
    top: -15px;
    left: -7.5px;
  }
  .schedule_check_state{
    background-color: #DD1A21;
    width: 6vw;
    height: 6vw;
    border-radius: 5vw;
    box-shadow: 0vw 0vw 2vw 0vw red;
    position: absolute;
    top: -5vw;
    left: -3vw;
  }
  .schedule{
    padding: 4vw;
  }
  .schedule_title{
    font-weight: 600;
    font-size: 4vw;
  }

  .tf_btn{
    background: rgba(0, 0, 0, .71);
    padding: 1vw;
  }
.content{
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  height: 100%;
  color: white;
  text-align: center;
}
    .tt{
    position: relative;
    height: 50vw;
    width: -webkit-fill-available;
  }
    .content>p:nth-child(2){
      font-size: 3vw;
      padding-top: 2vw;
    }
    .content>p:nth-child(1){
      font-size: 6vw;
      padding-top: 20vw;
    }
    .tf>p{
    }
  .tf{
    background-color: black;
    opacity: 0.5;
    height: 100%;
    position: absolute;
    top: 0;
    width: -webkit-fill-available;
  }
.navigationBar>img{
  width: 30vw;
  margin-right: 5vw;
}
.navigationBar{
  white-space: nowrap;
  overflow-x: auto;
  text-align: left;
  font-size: 4vw;
}
</style>
