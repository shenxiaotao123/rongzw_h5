<template>
    <div>
        <drop-down :types="dd" @fg="fg" @style="style" @money="money" class="top_dd" />
        <div style="margin: 0 10px 0px 10px;">
          <img src="../assets/img/找设计（合并）.png" class="img"/>
        </div>
      <site @up="concatSites" :sites="work"/>
    </div>
</template>

<script>
import site from '@/public/Site'
export default {
  name: 'Effect',
  methods: {
    getNewSites () {
      this.param.lastIndex = 0
      this.$ajax.get('/api/designer/works', {params: this.param}).then((res) => {
        this.work = res.data.data
      })
    },
    concatSites () {
      this.param.lastIndex = this.work.length
      this.$ajax.get('/api/designer/works', {params: this.param}).then((res) => {
        this.work = this.work.concat(res.data.data)
      })
    },
    style (index, val) {
      this.param.shape_id = val.id
      this.getNewSites()
    },
    fg (index, val) {
      this.param.style_id = val.id
      this.getNewSites()
    },
    money (index, val) {
      this.param.budget = val.id
      this.getNewSites()
    }
  },
  components: {
    site,
    dropDown: () => import('@/public/DropDown')
  },
  mounted () {
    this.$ajax.get('/api/designer/style').then((res) => { // 风格
      this.dd[0].list = res.data.data
      this.dd[0].list.unshift({id: 0, name: '全部', sort: 1})
    })
    this.$ajax.get('/api/shapes').then((res) => { // 户型
      this.dd[1].list = res.data.data
      this.dd[1].list.unshift({id: 0, name: '不限', sort: 1})
    })
    this.getNewSites()
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
          defaultName:'预算',
          default: 0,
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
        }
      ],
      param: {
        itemsPerLoad: 10,
        lastIndex: 0,
        budget: 0,
        shape_id: 0,
        style_id: 0
      }
    }
  }
}
</script>

<style scoped>

</style>
