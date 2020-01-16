<template>
    <div class="pageColor" style="    height: -webkit-fill-available;">
      <div class="title">
        <img src="@/assets/img/loginUser/back.png"  class="titleLeft"  @click="$router.go(-1)"/>
        <p class="titleC">
          {{zx.bbs_title}}
        </p>
      </div>

      <div class="wenti white">
          <div class="zuo">
            <img src="@/assets/img/ziyuan.png" style="width: 4vw;"/>
          </div>
          <div  class="you">
            <p>{{zx.bbs_title}}
            </p>
            <p class="gray" style="line-height: 5vw;">
              {{zx.bbs_content}}
            </p>
          </div>
        <p style="margin: 4vw 0;">
          <button  class="red_red_brn">#{{zx.class.name}}</button>
        </p>
          <p>
            <span class="gray">
              <img v-if="zx.bbs_user_image === ''" src="@/assets/img/loginUser/grilPortrait.png" style="width: 5vw;border-radius: 5vw;margin-right: 2vw"/>
              <img v-else :src="zx.bbs_user_image" style="width: 5vw;border-radius: 5vw;margin-right: 2vw"/>

              {{zx.bbs_user_name}}
            </span>
            <span class="right gray">提问于 {{zx.created_at}}  </span>
          </p>
        </div>

      <div style="padding: 0 3vw;" class="white">
        <p style="line-height: 10vw;">
          全部 <span class="cinnabar">{{comment.length}}</span>个回答
        </p>
        <div style="border-bottom: .5vw solid #f7f7f7;margin-top: 3vw" v-for="com of comment">
          <p>
             <span class="gray">
              <img :src="com.comment_user_image" class="user_portrait"/>{{com.comment_user_name}}
               <button  class="red_red_brn" v-show="com.id === zx.bbs_user_id">本人</button>
               {{com.created_at}}
            </span>
            <span class="right cinnabar">回复</span>
          </p>
          <p style="margin: 3vw 2vw 5vw 2vw;">
            回复 <span class="cinnabar">{{com.to_user_name}}</span>: {{com.com_content}}
          </p>
          <p style="margin: 3vw 2vw 5vw 2vw;" class="cinnabar" v-show="com.id === zx.bbs_user_id">
            删除
          </p>
        </div>
      </div>
      <p style="text-align: center;margin-top: 3vw;" class="gray">
        <span class="line"></span>你看到我的底线了<span class="line"></span>
      </p>

      <div class="bottom white">

          <input type="text" placeholder="我也想回复">

        <img src="@/assets/img/collection.png" class="right"  style="
       position: absolute;
    right: 5.9vw;
    width: 6vw;
    top: 1vw;"/>
          <span style="     position: absolute;
    bottom: 0vw;
    right: 5vw;
    transform: scale(0.8);">关注</span>

      </div>

    </div>

</template>

<script>
export default {
  name: 'Zxdetail',
  data () {
    return {
      zx: [],
      lastIndex: 0,
      comment:[],
      gril:require('@/assets/img/loginUser/headPortrait.png'),
      boy:require('@/assets/img/loginUser/grilPortrait.png')
    }
  },
  mounted () {
    this.$ajax.get('/api/bbs/guide/' + this.$route.query.id).then((res) => {
      this.zx = res.data.data
    })
    this.$ajax.get('/api/bbs/comment?bbs_id=' + this.$route.query.id).then((res) => {
      this.comment = res.data.data
    })
  }
}
</script>

<style scoped>
  .bottom>input{
    width: 75%;
    background-color: #f7f7f7;
    border-radius: 5vw;
    height: 62%;
    padding-left: 3vw;
    font-size: 2vw;
    position: absolute;
    top: 2vw;
    left: 3vw;
  }
  .bottom{

    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vw;

  }
  .red_red_brn{
    padding: 0 2vw;
    font-size: 1vw;
  }
.titleC{
  line-height: 15vw;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: black;
  width: 80vw;
  padding-left: 7vw;
}
  .wenti{
    padding: 5vw;
    margin-bottom: 3vw;
  }
  .wenti>.zuo{

    float: left;
    width: 5vw;
    height: 80%;
  }
  .wenti>.you{

    width: 94%;
    float: left;
  }
  .you>p{
    margin-bottom: 3vw;
  }
</style>
