<template>
<div class="backcolor">
  <mt :titleC="titleC" :titleR="titleR"/>
  <div class="shop white all">
    <div>
      <img :src="goods.goods_thumb">
    </div>
      <div>
        <p style="    overflow: hidden;
    width: 53vw;
    white-space: nowrap;
    text-overflow: ellipsis;    margin-left: 3vw;">
          {{goods.goods_name}}
          <span style="position: absolute;right: 5vw;" class="cinnabar">
          ￥{{goods.low_price}}
        </span>
        </p>
      </div>
  </div>

  <comment :comments="commnets" v-if="commnets.length>0"/>
  <div class=" gray  noComment" v-else>

    <img src="../../assets/img/zanwu.png" />
    <p>
      没有相应的评价
    </p>
    <p style="font-size: xx-small;">
    看看其他的~
    </p>
  </div>
  <bmenu @shop="shop()"/>
</div>
</template>

<script>
import mt from '@/public/TextTitle'
import comment from '@/public/Comment2'
import bmenu from '@/public/ButtomMenu'
export default {
  name: 'Reviews',
  components: {mt, comment, bmenu},
  mounted () {
    this.$ajax.get('/api/shop/goods/' + this.$route.query.id).then((res) => {
      this.goods = res.data.data
    })
    this.$ajax.get('/api/shop/goodsComment?spu_id=' + this.$route.query.id).then((res) => {
      this.comments = res.data.data
    })
  },
  data () {
    return {
      goods: {},
      commnets: [],
      titleC: {
        type: 'text',
        content: '评价'
      },
      titleR: {
        type: 'imgArray',
        content: [require('@/assets/img/title/商城.png'), require('@/assets/img/title/fenxiang.png')],
        method: ['to', 'fx']
      }
    }
  }
}
</script>

<style scoped>

  .shop>div:nth-child(1)>img{
    height: 9vw;
    width: 11vw;
  }
  .shop>div{
    float: left;
  }
.shop{
  height: 15vw;
  line-height: 15vw;
  margin-bottom: 1vw;
}
</style>
