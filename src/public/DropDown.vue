<template>
    <div class="white">
      <ul>
        <li class="n" :style="classObject" v-for="(type,index) of types">

          <!--就一个-->
          <div v-if="type.mode==='one'" @click="one(type,index)" :class="{goodColor: type.display === 'block'}">
            {{type.name}}
            <span v-show="type.default === 2">↑</span>
            <span v-show="type.default === 3">↓</span>
          </div>
          <!--就一个-->
          <div v-else>
            <input type="checkbox" name="radio" :value="type.default" :id="type.name" @change="show($event,index)" :checked="type.display==='block'">
            <label :for="type.name" >
              {{type.name}}
            </label>
          </div>

          <div class="city all" :style="{display:type.display}">
            <!--所屬城市-->
            <div style="line-height: 15vw" v-if="type.mode==='city'">
              <button class="cityButton cinnabar">
                <img src="../assets/img/designer/position.png" style="width: 3vw;"/>
                {{type.default}}
              </button>
              <button class="cityButton gray right" style="    margin-top: 5vw;    margin-right: 6vw;">
                <img src="../assets/img/designer/reset.png" style="width: 3vw;"/>
                重新定位
              </button>

              <p class="medium gray " style="line-height: 3vw">已开通城市</p>
              <div style=" margin: 2vw ;line-height: 3vw" >
                <button v-for="(li,inde) in type.list" :key="inde" class="cityButton medium" @click="up(type.mode,li.city_id)" >{{li.name}}</button>
              </div>
            </div>
            <!--所屬城市-->

            <!--区域-->
            <div style="line-height: 15vw" v-if="type.mode==='region'">
              <button class="cityButton cinnabar" @click="$emit(type.mode,type.default,'')">
                <img src="../assets/img/designer/position.png" style="width: 3vw;"/>
                {{type.default}}
              </button>
              <button class="red_btn right" style=" padding:.5vw 2vw;   margin-top: 5vw;    margin-right: 6vw;">
                切换城市
              </button>
              <button class="cityButton gray right" style="    margin-top: 5vw;    margin-right: 6vw;">
                <img src="../assets/img/designer/reset.png" style="width: 3vw;"/>
                重新定位
              </button>

              <p class="medium gray " style="line-height: 3vw">{{type.subheading}}</p>
              <div style=" margin: 2vw ;line-height: 3vw" >
                <button v-for="(val,key) in type.list"  class="cityButton medium" @click="$emit(type.mode,val,key)">
                  {{val}}
                </button>
              </div>
            </div>
            <!--区域-->

            <!--选中为红色，未选中灰色-->
            <div style="line-height: 15vw" v-if="type.mode==='style'">
              <div style=" margin: 2vw ;line-height: 3vw" >
                <button @click="style(type.method,li,index)"
                  v-for="(li,inde) in type.list"
                  :class="{red_btn:type.default === li.id, cityButton:type.default !== li.id}"
                  :key="inde"
                  class=" medium"
                  style="width: 30vw;height: 8vw;" >
                    {{li.name}}
                </button>
              </div>
            </div>
            <!--选中为红色，未选中灰色-->

            <!--排序-->
            <div style=" margin: 2vw 2vw 0vw 2vw;" v-if="type.mode==='sort'">
              <p v-for="(order) in type.list" class="medium sort" @click="upSort(order,index)">
                {{order.name}}
                <img v-show="type.default === order.id" src="@/assets/img/true.png" style="float: right;width: 5vw; margin: 5vw;"/>
              </p>
            </div>
            <!--排序-->

            <div style="line-height: 15vw" v-if="type.mode==='jiage'" @click="$emit(type.mode,type.display)"></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: ['types'],
  data () {
    return {

    }
  },
  computed: {
    commit: function () {

    },
    classObject: function () {
      return {
        width: 100 / this.types.length + '%'
      }
    }
  },
  methods: {
    one: function (val, index) {
      this.$emit(val.method, index, val)
    },
    style: function (method, li, index) {
      this.types[index].default = li.id
      this.types[index].display = 'none'
      this.types[index].name = li.name === undefined ? '' : li.name
      if (li.id === 0) {
        this.types[index].name = this.types[index].defaultName
      }
      this.$emit(method, index, li)
    },
    show: function (e, index) {
      this.types.forEach((item) => {
        if (item.mode === 'jiage' && item.display === 'block') {
          item.display = 'block'
        } else {
          item.display = 'none'
        }
      })
      this.types[index].display = e.target.checked === true ? 'block' : 'none'
    },
    upSort (val, index) { // 选择的对象，排序的批次
      this.types[index].default = val.id
      this.types[index].display = 'none'
      this.types[index].name = val.name
      if (val.id === 0) {
        this.types[index].name = this.types[index].defaultName
      }
      this.$emit('sort', index, val)
    }
  }
}
</script>

<style scoped>
  .sort{
    line-height: 15vw;
    border-bottom: .1vw solid #f7f7f7;
  }
  .red_btn{
    border-radius: 1vw;
    margin: 1vw;
  }
  .cityButton{
    width: 20vw;
    height: 6vw;
    background-color: #F1F3F6 !important;
    border-radius: 1vw;
    margin: 1vw;
    font-size: 1vw;
  }

  .city{
    left: 0;
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 1;
    text-align: left;
  }
  .n>.city{
    display: none;
  }
  .n>div>input{
    display: none;
  }
  .n>div>input:checked+label:before{
    background-image:url("../assets/img/upArrow.png");
  }
  .n>div>label:before{
    display: inline-block;
    content: "";
    background-image:url("../assets/img/downArrow.png");
    height: 3vw;
    width: 3vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    right: -5vw;
  }
  .n>div>label{
    position: relative;
  }
  .n{
    text-align: center;
    float: left;
    padding: 3vw 0;
    background-color: white;
  }
</style>
