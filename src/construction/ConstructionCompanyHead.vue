<template>
  <div class="back_white clear">

    <div class="unitList" v-if="typeof companys.id  === 'number'">
      <div class="unitImg">
        <img :src="companys.avatar" />
      </div>
      <div class="unitCon">
        <h6>{{companys.name}}</h6>
        <p class="Introduction">{{companys.brief}}</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
      name: "ConstructionCompanyHead",
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
</style>
