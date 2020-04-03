<template>
  <div>
    <mtitle :titleC="titleC"/>
    <div class="servicebanner">
      <img src="@/assets/img/applets/calculator/banner.png" alt="广告位" />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-area :area-list="areaList" />
    </van-popup>
    <van-form @submit="onSubmit">
      <van-field v-model="city" name="城市" label="城市" placeholder="请选择您的所在城市" @click="showPopup" />
      <van-field v-model="username" name="小区名称" label="小区名称" placeholder="您需要装修的小区名称" :rules="[{ required: true, message: '请填写小区名称' }]"/>
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" placeholder="报价结果将发送到您的手机" :rules="[{ required: true, message: '请填写您的手机号码' }]" />
      <!-- 允许输入数字，调起全键盘 -->
      <van-field v-model="number" type="number" label="面积" placeholder="平米" :rules="[{ required: true, message: '请填写您房子的面积' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" color="#dd1a21" native-type="submit">
          立即计算
        </van-button>
      </div>
    </van-form>

    <!-- 结果弹出框 -->
    <div class="popup popup-about" style="display: none;">
      <div class="content-block result">
        <h2>总造价</h2>
        <p class="Price"><span class="size14">￥</span><span class="price_num"></span></p>
        <p class="acreage"><span class="taocan_name"></span></p>
        <p class="acreage"><span class="mj_num"></span>㎡</p>
        <p class="m-t-md m-b-md text-l">专属设计师将会尽快回电您，免费提供更为详尽的装修咨询服务。</p>
        <p class="m-t-md m-b-md text-l">如有疑问，欢迎致电400-008-6657</p>
        <p><a href="#" class="close-popup button color-red">知道了</a></p>
      </div>
    </div>

    <div class="servicebanner pos-rlt">
      <p class="people-number">今日已有多人获取在线报价</p>
      <img src="@/assets/img/applets/calculator/bottom-bg.png" alt="广告位" />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Form,Field,Button,Popup,Area } from 'vant';
  Vue.use(Form);
  Vue.use(Field);
  Vue.use(Button);
  Vue.use(Popup);
  Vue.use(Area);

    export default {
      name: "calculator",
      components: {
        mtitle: () => import('@/public/TextTitle')
      },
      data(){
        return{
          titleC: {
            type: 'text',
            content: '算报价'
          },
          username: '',
          tel:'',
          number:'',
          show: false
        }
      },
      methods: {
        onSubmit(values) {
          console.log('submit', values);
        },
        showPopup() {
          this.show = true;
        }
      },
    }
</script>

<style lang="less">
  .servicebanner {
    img { width: 100%;}
  }
  .calculator-item { padding: 15px 5px 5px 5px;
    .label-radio { padding: 0 5px; min-height: 0; height:40px; line-height: 40px;
      .item-inner { padding:0 0 0 10px; min-height: 0; display:block; background:#fff; border: 1px solid #c8c7cc; border-radius: 5px;
      &:after { height:0;}
      .item-title { text-align: center;}
      }
    }
  }
  .people-number { position:absolute; top:180px; left:50%; margin-left: -100px; width:200px; text-align:center;
    span { margin:0 5px; font-weight: 700; color:#ed0000;}
  }
  .result { text-align:center;
    h2 { font-size:18px; font-weight:bold;}
    .Price { font-size:40px; font-weight:bold; color:#ff2d55;}
    .acreage { font-size:24px; font-weight:bold;}
  }
</style>
