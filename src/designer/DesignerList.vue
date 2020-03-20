<template>
  <div class="pageColor">
    <mtitle :name="title.name" :titleRight="title.titleR" :titleCenter="title.titlec" :backUrl="title.backUrl" class="top_title"></mtitle>

    <drop-down :types="types" @fg="style" @city="city" @sort="sort" class="top_dd"/>

    <!--设计师列表开始-->
    <div class="wrapper back_white" style="height: auto;padding-top: 86px;clear: both">
     <list :designers=designers class="back_white"></list>
    </div>
    <!--设计师列表结束-->

   </div>
</template>

<script>
import '@/assets/style/app.css'
import list from '@/designer/list/List'
import mtitle from '@/public/Title'
import DropDown from '@/public/DropDown'
export default {
  name: 'DesignerList',
  components: {
    list,
    mtitle,
    DropDown
  },
  data: function () {
    return {
      designers: [],
      title: {
        name: '设计师',
        // titleR: '我是设计师',
        titlec: 'name',
        backUrl: '/index/home'
      },
      param: {
        style_id: 0,
        des_status: 0,
        no_cached: 1,
        itemsPerLoad: 6,
        lastIndex: 0
      },
      types: [
        {
          name: '区域选择',
          default: '丽水',
          defaultName: '区域选择',
          list: [
            {
              city_id: 1025,
              name: '丽水'
            }, {
              city_id: 1025,
              name: '温州'
            }, {
              city_id: 1025,
              name: '丽水'
            }, {
              city_id: 1025,
              name: '丽水'
            }, {
              city_id: 1025,
              name: '丽水'
            }, {
              city_id: 1025,
              name: '丽水'
            }
          ],
          display: 'none',
          mode: 'city',
          subheading: ''
        },
        {
          name: '擅长风格',
          defaultName: '擅长风格',
          default: 0,
          list: [],
          display: 'none',
          mode: 'style',
          method: 'fg'
        },
        {
          name: '综合排序',
          default: 0,
          defaultName:'综合排序',
          list: [
            {
              name: '综合排序',
              id: 0
            }, {
              name: '预约最多',
              id: 1
            }, {
              name: '签单最多',
              id: 2
            }, {
              name: '评价最多',
              id: 3
            }],
          display: 'none',
          mode: 'sort'
        }
      ]
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
    handleFun () {
      let _this = this
      _this.scroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= 400
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        _this.getDesigner()
      }
    },
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

<style>
  .titleRight { top:0;}
  .bounce-enter-active {
    animation: bounce-in .4s;
  }
  .bounce-leave-active {
    animation: bounce-in .4s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

</style>
