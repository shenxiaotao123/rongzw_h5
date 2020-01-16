<template>
  <div>
    <div v-for="designer in  designers" class="designerList back_white" :key="designer.id" @click="$router.push({path:'/showDetail',query:{id:designer.id}})">
      <div class="photo">
        <img :src=designer.avatar />
      </div>
      <div class="details">
        <p>
          <span class="regular name">{{designer.name}}</span>
          <span   class="cinnabar right">{{designer.min_money}}-{{designer.max_money}}元/m²</span><br>
        </p>
        <p class="regular gray aa">{{designer.styles_text}}</p>
        <p class="regular gray">{{designer.years}}年以上&nbsp;&nbsp;|&nbsp;&nbsp;{{designer.works_num}}套作品</p>
        <p class="regular gray ">
          签单<span style="color: #333333">{{designer.order_num}}</span>人
          <span style="margin-right: 13vw"></span>
          预约<span style="color: #333333">{{designer.appointment_num}}</span>人</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['designers'],
  methods: {
    showDesigner: function (designer) {
      this.$store.commit('upDesigner', designer)
      this.$router.push({path: 'showDetail', name: 'ShowDetail'})
    }
  }
}
</script>

<style scoped>
.aa{
  height: 12%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 1vw;
}
</style>
