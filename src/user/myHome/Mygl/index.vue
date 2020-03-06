<template>
    <div>
      <ul class="wenzhang white">
        <li @click="$router.push({path:'/glDetail',query:{id:guide.id}})" v-for="guide of gl">
          <div class="left wz" >
            <p>{{guide.bbs_title}}</p>
            <p class="gray" style="position: absolute;    bottom: 0;">所属分类：{{guide.class.name}}</p>
          </div>
          <div class="left gl-pic">
            <img :src="guide.bbs_pic" class="img" style="border-radius: 2vw;"/>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "audit",
     props:['gl']
    }
</script>

<style scoped>
  .wenzhang{
    margin-bottom: 35vw;
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
  .wenzhang>li{
    height: 18vw;
    border-bottom: .1vw solid #f7f7f7;
    padding: 5vw 2vw 2vw 5vw;
  }
</style>
