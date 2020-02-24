<template>
  <div>
    <div class="all comment white" v-for="comment of comments">
      <p>
        <img :src="comment.comment_user_image"/> &nbsp; <span style="font-size: 4.1vw;">{{comment.comment_user_name}}</span>
        <span v-show="comment.com_user_id === authorId" class="cinnabar" style="display: inline-block;    background-color: #FFDEDF;    padding: .5vw;">本人</span>
        &nbsp; <span class="gray">{{comment.created_at}}</span>   <span class="right cinnabar" v-show="$route.path.indexOf('gl')>-1" @click="$emit('ff',comment.comment_user_name,comment.com_user_id)">&nbsp;回复</span>
      </p>
      <p class="all" style="padding-top: 3vw;">{{comment.com_content}} </p>
      <p class="imgComment">
        <img :src="img" v-for="img of comment.imgComment" style="margin-right: 2vw"/>
      </p>
    </div>

  </div>

</template>

<script>
  import bm from '@/public/ButtomMenu'
export default {
  name: 'Comment2',
  components:[bm],
  props:['comments', 'authorId'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  .comment p img{
    width: 7vw;
  }
  .comment{
    clear: both;
    margin-bottom: 0.1vw ;
    padding: 5vw 3vw;
  }
  .imgComment>img{
    width: 15vw !important;
    height: 15vw;
  }
  .imgComment{
    margin-top: 3vw;
  }
</style>
