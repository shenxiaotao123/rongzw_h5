<template>
  <div class="backcolor">
    <mt :titleC="titleC" />

    <comment :comments="comments" :authorId="$route.query.authorId" @ff="ff"/>
    <div class="bottom white">
      <input type="text" placeholder="聊两句再走呗" id="t" @blur="bl">
        <span style="margin-right: 3vw; color: red;">发送</span>
    </div>
  </div>
</template>

<script>
import mt from '@/public/TextTitle'

import comment from '@/public/Comment2'
export default {
  name: 'GlReviews',
  components: {mt, comment},
  methods: {
    ff: function (name, id) {
      document.getElementById('t').placeholder = '回复:' + name
      document.getElementById('t').focus()
    },
    bl: function () {
      document.getElementById('t').placeholder = '聊两句再走呗'
    }
  },
  mounted () {
    this.$ajax.get('/api/bbs/comment?bbs_id=' + this.$route.query.id).then((res) => {
      this.comments = res.data.data
      this.titleC.content = '全部评论(' + this.comments.length + ')'
    })
  },
  data () {
    return {
      comments: '',
      titleC: {
        type: 'text',
        content: ''
      }
    }
  }
}
</script>

<style scoped>
  .bottom>span{
    position: absolute;
    top: 3vw;
    right: 3vw;
  }
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
</style>
