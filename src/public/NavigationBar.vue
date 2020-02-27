<template>
  <div class="navigationBar" v-if="path.indexOf('strategy')>-1">
    <span v-for="(type,ind) of types" >
          <input type="radio"  v-model="model" :value="type" :id="type.id" :checked="ind===0" name="guide">
          <label :for="type.id">
            {{type.name}}
          </label>
    </span>
  </div>
  <div class="navigationBar" v-else>
    <span v-for="(type,ind) of types" >
         <input type="radio"  v-model="model" :value="type.id" :id="type.id" :checked="ind===0" name="guide">
          <label :for="type.id">
            {{type.category_name}}
          </label>
    </span>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: ['types', 'model'],
  data () {
    return {
      tt: '0',
      path: window.location.href
    }
  },
  watch: {
    model: function (val) {
      this.$emit('up', val)
    }
  }
}
</script>

<style scoped>

  .navigationBar>span{
    padding-right: 5vw;
  }
  .navigationBar{
    white-space: nowrap;
    overflow-x: auto;
    text-align: center;
    padding: 0 15px;
    height: 44px;
    line-height:44px;
    font-size: 14px;
    background-color: white;
  }
  .navigationBar input:checked+label{
    color: red;
  }
  .navigationBar input{
    display: none;
  }
</style>
