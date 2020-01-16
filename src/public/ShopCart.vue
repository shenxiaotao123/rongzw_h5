<template>
    <div class="backcolor" >
      <mtitle :titleC="titleC"  :titleR="titleR" v-if="path === '/shopCart'"/>
      <div class="white" v-if="path === '/shopCart'">
        <ul class="mul">
          <li>
            <img src="@/assets/img/home/baozhang.png"  class="imgs"/>&nbsp;&nbsp;
            正品保障
          </li>
          <li><img src="@/assets/img/tubiaolunkuo.png" style="filter: invert(73%);" class="imgs"/>&nbsp;&nbsp;正规厂家</li>
          <li><img src="@/assets/img/rmb.png" style="filter: invert(73%);" class="imgs"/>&nbsp;先行赔付</li>
          <li><img src="@/assets/img/jiayipeishi.png"   class="imgs"/>&nbsp;&nbsp;假一赔十</li>
        </ul>
      </div>
      <div v-for="(store,idx) in stores" :id="idx" class="white"   :class="{store:true}">
        <div>
          <input
            type="checkbox"
            :id="store.title"
            class="gcs-checkbox"
            v-model="store.checked"
            @change="checkSomeAll(store.wares,store.checked)" v-if="path === '/shopCart'">
          <label :for="store.title"></label>
          <span class="store_n" >{{store.title}}</span>
          <a class="right store_a" v-if="path === '/shopCart'">{{store.baoyou}}</a>
        </div>

        <ul>
          <li v-for="ware of store.wares" style="height: 18vw;    display: flex;    margin: 3vw 0;">
            <input type="checkbox" :id="ware.name" class="gcs-checkbox" v-model="ware.checked" :value="ware.price" v-if="path === '/shopCart'">
            <label :for="ware.name" style="margin-top: 6vw;" v-if="path === '/shopCart'"/>

              <div style="width: 30vw;height: 100%;float: left;margin-right: 2vw"><img src="../assets/img/timg.jpg" class="img"/></div>
            <div class="ware_body">
              <span class="ware_name">{{ware.name}}</span>
              <span class="gray">{{ware.guige1}} {{ware.guige2}}</span>
              <span class="cinnabar" >
                ￥{{ware.price}}
                <button @click="addAmount(ware.name)" v-if="path === '/shopCart'">+</button>
                <button v-if="path === '/shopCart'">{{ware.amount}}</button>
                <button @click="subtractAmount(ware.name)" v-if="path === '/shopCart'">-</button>
                <button v-if="path === '/materialSettlement'" class="white gray">x{{ware.amount}}</button>
              </span>
            </div>

          </li>
        </ul>
      </div>
      <bmenu :totalPrice="totalPrice" @checkAll="checkAll" v-if="path === '/shopCart'"/>
    </div>
</template>

<script>
import mtitle from '@/public/TextTitle'
import bmenu from '@/public/ButtomMenu'
export default {
  name: 'ShopCart',
  components: {
    mtitle,
    bmenu
  },
  data () {
    return {
      path: this.$route.path,
      stores: [
        {
          title: '索菲亚全屋定制',
          baoyou: '已包邮',
          wares: [
            {
              name: '现代风格橱柜代风格橱现代风格 ',
              guige1: '10寸银色',
              guige2: '800*800',
              price: 29.9,
              amount: 1,
              checked: false
            },
            {
              name: '现代风格橱柜代风格橱现代风格 ',
              guige1: '10寸银色',
              guige2: '800*800',
              price: 29.9,
              amount: 1,
              checked: false
            }
          ],
          checked: false
        }
      ],
      titleR: {
        type: 'text',
        content: '编辑',
        method: ['to']
      },
      titleC: {
        type: 'text',
        content: '购物车'
      }
    }
  },
  methods: {
    checkAll (bo) {
      this.stores.forEach(item => {
        item.wares.forEach(item2 => {
          item2.checked = bo
        })
      })
    },
    checkSomeAll (arr, bo) {
      arr.forEach(item => {
        item.checked = bo
      })
    },
    addAmount: function (name) {
      for (var j = 0; j < this.stores.length; j++) {
        var s = this.stores[j]
        for (var i = 0; i < s.wares.length; i++) {
          if (s.wares[i].name === name) {
            this.stores[j].wares[i].amount++
          }
        }
      }
    },
    subtractAmount: function (name) {
      for (var j = 0; j < this.stores.length; j++) {
        var s = this.stores[j]
        for (var i = 0; i < s.wares.length; i++) {
          if (s.wares[i].name === name) {
            if (!this.stores[j].wares[i].amount < 1) {
              this.stores[j].wares[i].amount--
            }
          }
        }
      }
    }
  },
  watch: {
    stores: {
      handler: function (val) {
        for (var j = 0; j < val.length; j++) {
          var s = val[j]
          var isAll = true
          for (var i = 0; i < s.wares.length; i++) {
            if (s.wares[i].checked === false) {
              isAll = false
            }
          }
          this.stores[j].checked = isAll
        }
      },
      deep: true
    }
  },
  computed: {
    totalPrice: function () {
      let total = 0
      this.stores.forEach(item => {
        item.wares.forEach(item2 => {
          if (item2.checked) {
            total += (item2.price * item2.amount)
          }
        })
      })
      return total.toFixed(2)
    }
  }
}
</script>

<style scoped>
  .ware_body>span:nth-child(3)>button{
    float: right;
    width: 5vw;
    margin-right: 1vw;
  }
  .ware_body>span{
    height:  33%;
    display: block;
  }
  .ware_body>span:nth-child(3){
    width: 47vw;
    display: block;
  }
  .ware_body{
    width: 47vw;height: 100%;float: left;
  }
  .ware_name{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }
  .store_a{
    color: #000;
    font-size: 3.9vw;
    margin-top: 1vw;
  }
  .store_n{
    font-weight: 600;
    font-size: 3.9vw;
  }
  .store{
    padding: 3vw 6vw 1vw 6vw;
  }

  .gcs-checkbox {
    display: none;
  }

  .gcs-checkbox+label {
    background-color: white;
    border-radius: 5vw;
    border: .2vw solid #d3d3d3;
    width: 5vw;
    height:  5vw;
    display: inline-block;
    text-align: center;
    vertical-align: text-bottom;
    line-height:  2vw;
    margin-right: 1vw;

  }
  .gcs-checkbox:checked+label {
    background-color: #eee;
    background: #DD1A21;
  }

  .gcs-checkbox:checked+label:after {
    content: "\2714";
    color: white;
    position: relative;
    bottom: -1.6vw;
  }

  .mul{
    margin-bottom: 1vw;
    height: 12vw;
  }
  .mul>li{
    float: left;
    line-height: 12vw;
    margin-left: 5vw;
    font-size: xx-small;
    color: #999999;
  }
  .imgs{
    width: 4vw;
  }
</style>
