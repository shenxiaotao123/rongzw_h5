<template>
    <div class="pageColor" style="height: 100%;">
      <mt :titleC="titleC"/>
      <!--有地址-->
      <div  v-for="(add,index) of adds" :key="index">
        <div class="white user_add">
          <p>
            {{add.name}}
            <span class="gray">{{add.phone}}</span>
            <img src="@/assets/img/close.png" @click="deleteAdd" class="right" style="width: 3vw;margin-top: 2%;"/>
          </p>
          <p>
            {{add.add}}
            <span style="width: 13vw;margin-top: 0" @click="updateAdd(add)">
              <img src="../assets/img/bianji.png" style="width: 4vw;    margin-right: 1vw;"/>编辑
            </span>
          </p>
        </div>
        <button class="red_btn" v-show="index === adds.length-1" @click="$router.push({path:'/addressAdd'})">+&nbsp;&nbsp;添加</button>
      </div>
      <!--有地址-->

      <!--没地址-->
      <div v-if="adds.length===0" style="text-align: center">
        <div style="    width: 60%;  margin: 20% 20% 0;">
          <img src="../assets/img/addNull.png" class="img"/>
        </div>
        <p class="gray" style="height: 25vw;    line-height: 25vw;    font-size: medium;">您还没有收货地址，快去添加吧</p>
        <button class=" white_btn pageColor" @click="$router.push({path:'/addressAdd'})">新增地址</button>
      </div>
      <!--没地址-->

    </div>
</template>

<script>
import mt from '@/public/TextTitle'
export default {
  name: 'Address',
  components: {mt},
  data () {
    return {
      titleC: {
        type: 'text',
        content: '收货地址列表'
      },
      adds: [
        {
          name: '张丽丽',
          phone: 12312312312,
          add: '浙江省丽水市缙云县运河想地址'
        }
      ]
    }
  },
  methods: {
    deleteAdd () {
      alert('删除成功')
    },
    updateAdd (add) {
      this.$router.push({path: '/addressAdd', query: {add: add}})
    }
  }
}
</script>

<style scoped>
  .white_btn{
    padding: 2vw 5vw;
  }
.red_btn{
  width: 90%;
  margin: 5vw;
  height: 12vw;
  font-size: 5vw;
}
</style>
