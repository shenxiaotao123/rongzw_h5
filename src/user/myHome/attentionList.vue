<template>
    <div>
      <mtitle :titleC="titleC"/>
      <van-tabs v-model="active">
        <van-tab title="设计师 ">
          <!--设计师列表开始-->
          <div class="wrapper back_white" style="height: auto;padding-top: 86px;clear: both">
            <list :designers=designers class="back_white"></list>
          </div>
          <!--设计师列表结束-->
        </van-tab>
        <van-tab title="施工公司">内容 2</van-tab>
        <van-tab title="店铺">内容 3</van-tab>
        <van-tab title="分享达人">内容 4</van-tab>
        <van-tab title="咨询">内容 5</van-tab>
      </van-tabs>

    </div>
</template>

<script>
  import list from '@/designer/list/List'
  import Vue from 'vue';
  import { Tab, Tabs,CouponCell,CouponList } from 'vant';
  Vue.use(Tab);
  Vue.use(Tabs);
  Vue.use(CouponCell);
  Vue.use(CouponList);


  export default {
    name: "lookUpM",
    components:{
      mtitle:() => import('@/public/TextTitle'),
      list
    },
    data(){
      return{
        designers: [],
        titleC: {
          type: 'text',
          content: '我的关注'
        }
      }
    },

    mounted () {
      let _this = this
      window.addEventListener('scroll', this.handleFun)
      _this.getDesigner()
      this.$ajax.get('/api/designer/style?no_cached=1').then((response) => {
        _this.types[1].list = response.data.data
        _this.types[1].list.unshift({id: 0, name: '全部', sort: '1'})
      })
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleFun)
    },
    methods: {
      getnew () {
        this.param.lastIndex = 0
        this.$ajax.get('/api/designer/designer', {
          params: this.param
        }).then((response) => {
          this.designers = response.data.data
        })
      },
      getDesigner () {
        if (this.param.style_id === 0) {
          delete this.param.style_id
        }
        this.$ajax.get('/api/designer/designer', {
          params: this.param
        }).then((response) => {
          this.designers = this.designers.concat(response.data.data)
        })
      },
      back: function () {
        this.$router.go(-1)
      },
      style: function (index, val) {
        this.param.style_id = val.id
        this.param.lastIndex = 0
        this.getnew()
      },
      sort: function (index, val) {
        this.param.des_status = val.id
        this.param.lastIndex = 0
        this.getnew()
      },
      city: function (val) {

      }
    },
    watch: {
      designers (newVal, oldVal) {
        this.param.lastIndex = newVal.length
      }
    }
  }
</script>

<style scoped>

</style>
