<template>
    <div class="pageColor" >
      <navigation :types="types" :model="tt" @up="up" class="top_dd" style="top: 14vw;"/>
      <!--推荐-->
      <div class="tuijian">
        <div class="left" @click="$router.push({path:'/construction'})">
          <img src="../assets/img/home/shigong.png" class="img"/>
        </div>
        <div class="left" @click="$router.push({path:'/designerList'})">
          <img src="../assets/img/home/designer.png" class="img"/>
        </div>
        <div class="right" v-for="ad of ads.app_hot">
          <img :src="ad.pic_url" class="img" @click="$router.push({path:ad.url})"/>
        </div>
      </div>
      <!--推荐-->

      <!--文章-->
      <ul class="wenzhang white">
        <li @click="$router.push({path:'/glDetail',query:{id:guide.id}})" v-for="guide of gl">
          <div class="left wz" >
            <p>{{guide.bbs_title}}</p>
            <p class="gray" style="position: absolute;    bottom: 0;">阅读{{guide.bbs_view}} | 评论{{guide.bbs_com_num}} |  {{guide.bbs_user_name}}  </p>
          </div>
          <div class="left gl-pic">
            <img :src="guide.bbs_pic" class="img" style="border-radius: 2vw;"/>
          </div>
        </li>
      </ul>
      <!--文章-->

      <button class="red_btn">我要写攻略</button>
    </div>
</template>

<script>
export default {
  name: 'Gl',
  methods: {
    handleFun () {
      var _this = this
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        // 写后台加载数据的函数
        let path = '/api/bbs/guide?itemsPerLoad=6&no_cached=1&lastIndex=' + _this.gl.length
        if (_this.tt.id !== 0) {
          path = path + '&class_id=' + _this.tt.id
        }
        _this.$ajax.get(path).then((res) => {
          _this.gl = _this.gl.concat(res.data.data)
        })
      }
    },
    up (val) {
      let path = '/api/bbs/guide'
      this.tt = val
      if (val.name !== '全部') {
        path = path + '?class_id=' + val.id
      }
      this.$ajax.get(path).then((res) => {
        this.gl = res.data.data
      })
    }
  },
  components: {
    navigation: () => import('@/public/NavigationBar')
  },
  data () {
    return {
      tt: '',
      yiji: '',
      zx: {
        type: 'zx',
        content: ['旧房拆改,新房设计,预算报价', '验房收房', '合同', '施工', '其他']
      },
      types: [],
      gl: [],
      ads: []
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleFun)
  },
  mounted () {
    window.addEventListener('scroll', this.handleFun)

    this.$ajax.get('/api/bbs/guide?itemsPerLoad=6&no_cached=1&lastIndex=0').then((res) => {
      this.gl = res.data.data
    })
    this.$ajax.get('/api/bbs/class').then((res) => {
      this.types = res.data.data
      this.types.unshift({id: 0, name: '全部', sort: 0})
      this.tt = this.types[0]
    })
    this.$ajax.get('/api/bbs/ads').then((res) => {
      this.ads = res.data.data
    })
  }
}

</script>

<style scoped>
  .wenzhang{
    margin-bottom: 35vw;
  }
  .tuijian>.right{
    height: 48%;
    width: 47%;
    padding: 2vw 2vw 0vw 0vw;
  }
  .tuijian>.left{
    height: 35%;
    width: 47%;
    padding: 2vw 0vw 0vw 2vw;
  }
  .tuijian{
    height: 45vw;
  }
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
  .wz{
    width: 65%;
    height: 100%;
    position: relative;
  }
  .wz p {
    padding-right: 5vw;
  }
  .gl-pic{
    width: 35%; height: 100%;
  }
  .red_btn{
    margin: 5vw;
    width: 90%;
    height: 10vw;
    border-radius: 5vw;
    position: fixed;
    bottom: 15vw;
  }
  .navigationBar>span{
    padding-right: 5vw;
  }
  .navigationBar{
    white-space: nowrap;
    overflow-x: auto;
    text-align: center;
    padding: 5vw;
    font-size: 4vw;
    background-color: white;
  }
  .navigationBar input:checked+label{
    color: red;
  }
  .navigationBar input{
    display: none;
  }
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
</style>
