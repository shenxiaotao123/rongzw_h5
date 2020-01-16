<template>
    <div style="height: -webkit-fill-available;background-color: #F7F7F7;">
      <div style="height: 90vw;">
        <div :style="{backgroundImage: 'url(' + (store.backgroundImage) + ')' }" class="bg bg-blur"/>
        <div class="title-content">
          <img src="@/assets/img/loginUser/whiteBack.png" class="titleLeft"  @click="$router.go(-1)"/>
          <span class="regular titlecenter fontWhite" >{{titleC.content}}</span>
        </div>
        <div  class="company">
          <div>
            <div class="avatar">
              <img :src="store.logo_image" class="img"/>
            </div>
            <div class="avatar" style="width: 73%;margin-left: 2vw">
              <p>{{store.shop_name}}</p>
              <p>
              <span class=" onehang">
               {{store.address}} {{store.shop_address}}
              </span>
              </p>
            </div>
          </div>
          <p style="clear: both"/>
        </div>
        <div class="evaluate">
          <p>
            商品描述
            <span v-if="store.description_score>=4" class="goodColor right">{{store.description_score}}分&nbsp;高</span>
            <span v-else-if="store.description_score<=2" class="badColor right">{{store.description_score}}分&nbsp;低</span>
            <span v-else class="mediumColor right">{{store.description_score}}分&nbsp;中</span>
          </p>
          <p>
            卖家服务
            <span v-if="store.service_score>=4" class="goodColor right">{{store.service_score}}分&nbsp;高</span>
            <span v-else-if="store.service_score<=2" class="badColor right">{{store.service_score}}分&nbsp;低</span>
            <span v-else class="mediumColor right">{{store.service_score}}分&nbsp;中</span>
          </p>
          <p>
            物流服务
            <span v-if="store.logistics_score>=4" class="goodColor right">{{store.logistics_score}}分&nbsp;高</span>
            <span v-else-if="store.logistics_score<=2" class=" badColor right">{{store.logistics_score}}分&nbsp;低</span>
            <span v-else class="mediumColor right">{{store.logistics_score}}分&nbsp;中</span>
          </p>
        </div>
        <div class="detail">
          <p>主盈业务&nbsp;&nbsp;&nbsp;<span class="gray">{{store.shop_category}}</span></p>
          <p>开店时间&nbsp;&nbsp;&nbsp;<span class="gray">{{store.created_at}}</span></p>
          <p>销售品牌&nbsp;&nbsp;&nbsp;<span class="gray">{{store.brand}}</span></p>
          <p>店铺简介&nbsp;&nbsp;&nbsp;<div class="gray" style="line-height: 5vw">{{store.brief}}</div></p>
        </div>
      </div>
      <button class="red_btn" @click="$router.push({path:'/store',query:{id:store.shop_id}})">去看看全部商品 ></button>
    </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
export default {
  name: 'StoreDetail',
  components: {mtitle},
  mounted () {
    let _this = this
    this.$ajax.get('/api/shop/store/' + this.$route.query.id).then((response) => {
      _this.store = response.data.data
      if (_this.store.carousel_image.length < 1) {
        _this.store.backgroundImage = 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C110%2C650%2C429%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=1deeff197dc6a7efad69f266c0ca8360/0df431adcbef7609b1c9c35925dda3cc7dd99e32.jpg'
      } else {
        _this.store.backgroundImage = this.store.carousel_image[0]
      }
    })
  },
  data () {
    return {
      titleL: {
        type: 'img',
        content: require('@/assets/img/loginUser/whiteBack.png')
      },
      titleC: {
        type: 'text',
        content: '店铺详情'
      },
      store: {}

    }
  }
}
</script>

<style scoped>
  .avatar>p>.white_btn{
    width: 20vw;
    margin-top: -5vw;

  }
  .avatar>p:nth-child(1){
    font-size: large;
  }
  .avatar>p{
    height: 50%;
  }
  .avatar:nth-child(1){
    border: .1vw solid #f7f7f7;
    margin-right: 3vw;
  }
  .avatar{
    width: 17%;
    height: 14vw;
    float: left;
    position: relative;
    top: 12.5%;
    left: 4.5%;
    margin: 5vw 0 2vw 0;
  }

  .bg{
    width:100%;
    height: 100%;
  }
  .bg-blur{
    float:left;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    -webkit-filter: blur(9px);
    -moz-filter: blur(9px);
    -o-filter: blur(9px);
    -ms-filter: blur(9px);
    filter:blur(9px);

  }

  .red_btn{
    margin: 5vw;
    width: 90%;
    height: 10vw;
    border-radius: 5vw;
    position: fixed;
    bottom: 0;
  }
  .detail>p{
    margin: 2vw 0;
    line-height: 6vw;
  }
  .detail{
    position: absolute;
    top: 71vw;
    margin: 0 2vw;
    background-color: white;
    padding: 2vw;
  }
  .evaluate>p{
    height: 33%;
    line-height: 8vw;
  }
  .evaluate{
    background: white;
    height: 25vw;
    position: absolute;
    top: 37vw;
    margin: 0 3vw;
    width: -webkit-fill-available;
    padding: 3vw;
  }

  .avatar{
    margin: 2vw 0 2vw 0;
  }
  .title-content{
    position:absolute;
    width: 100%;
    height: 15vw;
    font-size: 4.4vw;
    text-align: center;

  }
  .company{
    position: absolute;
    top: 16vw;
    background: white;
    margin: 0 3vw;
    width: -webkit-fill-available;
  }
</style>
