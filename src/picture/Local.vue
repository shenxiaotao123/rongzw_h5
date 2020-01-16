<template>
    <div>
      <drop-down :types="dd" @fg="fg" @style="style"></drop-down>
      <div style="margin: 2vw;">
        <img src="../assets/img/找设计（合并）.png" class="img"/>
      </div>
      <site :ss="sites" @up="concatSite"/>
    </div>
</template>

<script>
import site from '@/public/Site'
export default {
  name: 'Local',
  components: {
    site,
    dropDown: () => import('@/public/DropDown')
  },
  methods: {
    fg (index, val) {
      this.param.shape_id = val.id
      this.getNewSites()
    },
    style (index, val) {
      this.param.style_id = val.id
      this.getNewSites()
    },
    concatSite () {
      let _this = this
      _this.$ajax.get('/api/construction/works', {
        params: this.params
      }).then(function (response) {
        _this.sites = _this.sites.concat(response.data.data)
      })
    },
    getNewSites () {
      let _this = this
      this.param.lastIndex = 0
      _this.$ajax.get('/api/construction/works', {
        params: this.params
      }).then(function (response) {
        _this.sites = response.data.data
      })
    }
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
    this.getSites()
  },
  data () {
    return {
      sites: [],
      dd: [
        {
          name: '风格',
          default: 0,
          list: [],
          display: 'none',
          mode: 'style',
          method: 'fg'
        },
        {
          name: '户型',
          default: 0,
          list: [],
          display: 'none',
          mode: 'style',
          method: 'style'
        },
        {
          name: '空间',
          default: 0,
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
      params: {
        itemsPerLoad: 10,
        lastIndex: 0,
        shape_id: 0,
        style_id: 0
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
