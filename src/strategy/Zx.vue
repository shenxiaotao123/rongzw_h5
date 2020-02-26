<template>
  <div class="pageColor" style="margin-bottom: 18vw">
  <div class="navigationBar top_dd" style="top: 14vw;">
        <span v-for="(type,ind) of types">
          <input type="radio"  v-model="tt" :value="type" :id="type.id" :checked="ind===0" name="guide">
          <label :for="type.id">
            {{type.name}}
          </label>
        </span>
  </div>
  <div class="tuijian">
    <div class="left">
      <img src="@/assets/img/home/shigong.png" class="img" @click="$router.push({path:'/construction'})"/></div>
    <div class="left">
      <img src="@/assets/img/home/designer.png" class="img" @click="$router.push({path:'/designerList'})"/></div>
  </div>

  <div  class="white wenda" @click="$router.push({path:'/ZxDetail',query:{id:z.id}})" v-for="z of zx">

    <p class="problem">
      <img src="../assets/img/ziyuan.png" />&nbsp;&nbsp;&nbsp;{{z.bbs_title}}
    </p>
    <p class="answer">
    <img src="../assets/img/da.png" />
      {{z.last_comment}}
    </p>
    <p style="line-height: 8vw;position: absolute;bottom: 0;">
      共有  <span class="cinnabar">{{z.bbs_com_num}}</span> 个回答
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Zx',
  mounted () {

    var _this = this
    window.onscroll = function () {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        // 写后台加载数据的函数
        _this.lastIndex++
        let path = '/api/bbs/advisory?itemsPerLoad=6&no_cached=1&lastIndex=' + _this.zx.length
        if (_this.tt.id !== 0) {
          path = path + '&class_id=' + _this.tt.id
        }
        _this.$ajax.get(path).then((res) => {
          _this.zx = _this.zx.concat(res.data.data)
        })
      }
    }

    this.$ajax.get('/api/bbs/class').then((res) => {
      this.types = res.data.data
      this.types.unshift({id: 0, name: '全部', sort: 0})
      this.tt = this.types[0]
    })
    this.$ajax.get('/api/bbs/advisory?itemsPerLoad=6&lastIndex=0&no_cached=1').then((res) => {
      this.zx = res.data.data
    })
  },
  data () {
    return {
      tt: '全部',
      types: [],
      zx: []
    }
  },
  watch: {
    tt: function (val) {
      let path = '/api/bbs/advisory?no_cached=1'
      if (val !== '全部') {
        path = path + '&class_id=' + this.tt.id
      }
      this.$ajax.get(path).then((res) => {
        this.zx = res.data.data
      })
    }
  }
}
</script>

<style scoped>
  .tuijian>.left{
    height: 80%;
    width: 47%;
    padding: 2vw 0vw 0vw 2vw;
  }
  .tuijian{
    height: 20vw;
  }
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
  .wz{
    width: 55%;
    height: 100%;
    position: relative;
  }
  .red_btn{
    margin: 5vw;
    width: 90%;
    height: 10vw;
    border-radius: 5vw;
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
  .wenda{
    height: 30vw;padding: 3vw;margin-bottom: 3vw;position: relative;
  }
  .wenda>.problem{
    line-height: 10vw;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .answer{
    line-height: 5vw;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
