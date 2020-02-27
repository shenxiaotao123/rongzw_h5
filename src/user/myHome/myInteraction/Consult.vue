<template>
<div>
  <div class="white" style="padding: 3vw 0">
    <button class="graybtn" :class="{red_btn:isGl}" @click="isGl=true">提问</button>
    <button class="graybtn" :class="{red_btn:!isGl}" @click="isGl=false">回答</button>
  </div>
  <div class="white" v-for="bbs of bbsUserCommentList">
    <div class="content">
      <p>{{bbs.com_content}}</p>
      <p class="gray">我评论了 <span v-show="isGl">攻略</span> <span v-show="!isGl">案例</span>:</p>
      <p class="gray">
        {{bbs.bbs_title}}
      </p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "Consult",
      data(){
        return{
          bbsUserCommentList:[
            {
              bbs_title:'1',
              com_content:'123'
            }
          ],
          isGl:true,
          params:{
            user_token:'53e29a6800d040cf83ee576b20f186db',
            itemsPerLoad:10,
            lastIndex:0,
            bbs_type:1,
            action_type:2
          }
        }
      },
      watch:{
        isGl:function(oldval,newval){
          if(newval){
            this.params.bbs_type = 1

          }else{
            this.params.bbs_type = 2
          }
          this.params.lastIndex = 0
          this.get()
        }
      },
      methods:{
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
            _this.params.lastIndex = this.bbsUserCommentList.length
            _this.http({
              method: 'post',
              url: '/api/consumer/bbsUserCommentList',
              data: this.params
            }).then((res) => {
              _this.bbsUserCommentList = _this.bbsUserCommentList.concat(res.data.data)
            })
          }
        },
        get(){
          this.http({
            method: 'post',
            url: '/api/consumer/bbsUserCommentList',
            data: this.params
          }).then((res) => {
            this.bbsUserCommentList = res.data.data
            console.log('res=>',res);
          })
        }
      },
      beforeDestroy(){
        window.removeEventListener('scroll', this.handleFun)
      },
      mounted(){
        window.addEventListener('scroll', this.handleFun)
        this.get()
      }
    }
</script>

<style scoped>
  button{
    padding: 0.5vw 5vw;
    border-radius: 4vw;
    font-size: xx-small;
    margin-left: 3vw;
  }
  .graybtn{
    color: white;
    background-color: #CACACA;
  }
</style>
