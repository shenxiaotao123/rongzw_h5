<template>
    <div>
      <drop-down :types="dd" @style="style" @fg="fg" @money="money" @mianji="mianji" class="top_dd"  />
      <div style="margin: 2vw;">
        <img src="../assets/img/找设计（合并）.png" class="img"/>
      </div>

      <work  :works="work" @pic="scroll" class="all" />

    </div>
</template>

<script>
import work from '../designer/designerDetail/Works'
export default {
  name: 'Case',
  components: {
    work,
    dropDown: () => import('@/public/DropDown')
  },
  methods: {
    style (index, val) {
      this.param.shape_id = val.id

      this.getNew()
    },
    fg (index, val) {
      this.param.style_id = val.id
      this.getNew()
    },
    money (index, val) {
      this.param.budget = val.id
      this.getNew()
    },
    mianji (index, val) {
      this.param.mianji = val.id
      this.getNew()
    },
    getNew(){
      this.param.lastIndex =0
      this.$ajax.get('/api/designer/works', {params: this.param}).then((res) => {
        this.work = res.data.data
      })
    },
    getWorks () {
      this.$ajax.get('/api/designer/works', {params: this.param}).then((res) => {
        this.work = this.work.concat(res.data.data)
      })
    },
    scroll () {
      this.param.lastIndex = this.work.length
      this.getWorks()
    }
  },
  mounted () {
    this.$ajax.get('/api/designer/style').then((res) => {
      this.dd[0].list = res.data.data
      this.dd[0].list.unshift({id: 0, name: '全部', sort: 1})
    })
    this.$ajax.get('/api/shapes').then((res) => {
      this.dd[1].list = res.data.data
      this.dd[1].list.unshift({id: 0, name: '不限', sort: 1})
    })
    this.getWorks()
  },
  data () {
    return {
      work: [],
      dd: [
        {
          name: '风格',
          defaultName:'风格',
          default: 0,
          list: [],
          display: 'none',
          mode: 'style',
          method: 'fg'
        },
        {
          name: '户型',
          defaultName:'户型',
          default: 0,
          list: [],
          display: 'none',
          mode: 'style',
          method: 'style'
        },
        {
          name: '预算',
          default: 0,
          defaultName:'预算',
          list: [
            {id: 0, name: '不限'},
            {id: 1, name: '3-5万'},
            {id: 2, name: '5-8万'},
            {id: 3, name: '8-12万'},
            {id: 4, name: '12-18万'},
            {id: 5, name: '18-30万'},
            {id: 6, name: '30以上'}
          ],
          display: 'none',
          mode: 'style',
          method: 'money'
        },
        {
          name: '面积',
          default: 0,
          defaultName:'面积',
          list: [
            {id: 0, name: '不限'},
            {id: 1, name: '0-60m²'},
            {id: 2, name: '60-100m²'},
            {id: 3, name: '100-150m²'},
            {id: 4, name: '150-200m²'},
            {id: 5, name: '200m²以上'}
          ],
          display: 'none',
          mode: 'style',
          method: 'mianji'
        }
      ],
      param: {
        itemsPerLoad: 3,
        lastIndex: 0,
        budget: 0,
        shape_id: 0,
        style_id: 0,
        mianji:0
      }
    }
  }
}
</script>

<style scoped>
  .navigation{
    margin: 7vw 0;
    text-align: center;
    height: 4vw;
  }
</style>
