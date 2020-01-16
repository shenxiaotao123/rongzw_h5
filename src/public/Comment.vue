<!--评价-->
<template>
<div class="all medium">
  <ul>
    <li @click="up(comments)" class="fontcolor">全部 {{comments.length}}</li>
    <li @click="up(good)">好评 {{good.length}}</li>
    <li @click="up(medium)">中评 {{medium.length}}</li>
    <li @click="up(bad)">差评 {{bad.length}}</li>
    <li class="gray">好评率 {{comments.length===0 ? 100:good.length/comments.length*100}}%</li>
  </ul>

  <div class="all comment" v-for="comment of show">
    <p>
      <img src="../assets/img/loginUser/headPortrait.png" /> &nbsp; <span style="font-size: 4.1vw;">{{comment.user_name}}</span> &nbsp;&nbsp; <span class="gray">{{comment.created_at}}</span>   <span class="right commentGood" v-show="comment.score>=4">&nbsp;好评</span><span class="right commentMedium" v-show="comment.score === 3">&nbsp;中评</span><span class="right commentbad" v-show="comment.score<=2">&nbsp;差评</span>
    </p>
    <p class="all" style="padding-top: 3vw;">{{comment.content}} </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Comment',
  data: function () {
    return {
      comments: [],
      good: [],
      medium: [],
      bad: [],
      show: []
    }
  },
  methods: {
    up: function (arr) {
      this.show = arr
    }
  },
  mounted () {
    let path = ''
    switch (this.$route.query.type) {
      case 'designer':
        path = '/api/' + this.$route.query.type + '/comments?designer_id=' + this.$route.query.id
        break
      case 'construction':
        path = '/api/' + this.$route.query.type + '/comments?company_id=' + this.$route.query.id
        break
    }
    this.$ajax.get(path).then((response) => {
      this.comments = response.data.data
      this.show = response.data.data
      this.comments.forEach((item) => {
        if (item.score === 3) {
          this.medium.push(item)
        } else if (item.score >= 4) {
          this.good.push(item)
        } else if (item.score <= 2) {
          this.bad.push(item)
        }
      })
    })
  }
}
</script>

<style scoped>
  .commentbad{
    width: 12.5vw;
    text-align: right;
    background-repeat: no-repeat;
    background-image: url("../assets/img/comment/bad.png");
    background-size: contain;
    color: #666666;
  }
  .commentMedium{
    width: 12.5vw;
    text-align: right;
    background-repeat: no-repeat;
    background-image: url("../assets/img/comment/medium.png");
    background-size: 34%;
    color: #FF7E00;
  }
  .commentGood{
    width: 12.5vw;
    text-align: right;
    background-repeat: no-repeat;
    background-image: url("../assets/img/comment/good.png");
    background-size: contain;
    color: #DD1A21;
  }
  .comment p img{
    width: 7vw;
  }
  .comment{
    clear: both;
    border-bottom: 0.1vw solid #999999;
    padding: 5vw 0;
  }
  ul li:nth-child(5){
    background-color: white;
    width: 21%;
    margin-right: 0;

  }
  ul li:nth-child(4){
    margin-right: 2%;
  }
  li{
    float: left;
    width: 17%;
    text-align: center;
    border-radius: 3vw;
    background-color: #FFEFEF;
    height: 4vw;
    font-size: xx-small;
    padding-top: 0.3vw;
    margin-right: 3%;
  }
</style>
