<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler"></baidu-map>
</template>

<script>
export default {
  name: 'Bmap',
  props: ['method', 'stratlng', 'stratlat'],
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    getCity (Bmap, map, _this) {
      var geolocation = new BMap.Geolocation()
      var gc = new BMap.Geocoder()
      geolocation.getCurrentPosition(function (r) { // 定位结果对象会传递给r变量
        if (this.getStatus() === BMAP_STATUS_SUCCESS) { // 通过Geolocation类的getStatus()可以判断是否成功定位。
          var pt = r.point
          sessionStorage.setItem('lng', pt.lng)
          sessionStorage.setItem('lat', pt.lat)
          gc.getLocation(pt, function (rs) {
            var addComp = rs.addressComponents
            // 获取地址
            // var a = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber
            for (let key in _this.regions[0]) {
              if (addComp.province === _this.regions[0][key]) {
                sessionStorage.setItem('province', key)
                for (let cityKey in _this.regions[key]) {
                  if (addComp.city === _this.regions[key][cityKey]) {
                    sessionStorage.setItem('city', cityKey)
                    for (let districtKey in _this.regions[cityKey]) {
                      if (addComp.district === _this.regions[cityKey][districtKey]) {
                        sessionStorage.setItem('area', districtKey)
                      }
                    }
                  }
                }
              }
            }
          })
          _this.$emit('citys')
        } else {
          // 关于状态码
          // BMAP_STATUS_SUCCESS   检索成功。对应数值“0”。
          // BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。
          // BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。
          // BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。
          // BMAP_STATUS_INVALID_KEY   非法密钥。对应数值“4”。
          // BMAP_STATUS_INVALID_REQUEST   非法请求。对应数值“5”。
          // BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)
          // BMAP_STATUS_SERVICE_UNAVAILABLE   服务不可用。对应数值“7”。(自 1.1 新增)
          // BMAP_STATUS_TIMEOUT   超时。对应数值“8”。(自 1.1 新增)
          switch (this.getStatus()) {
            case 2:
              alert('位置结果未知 获取位置失败.')
              break
            case 3:
              alert('导航结果未知 获取位置失败..')
              break
            case 4:
              alert('非法密钥 获取位置失败.')
              break
            case 5:
              alert('对不起,非法请求位置  获取位置失败.')
              break
            case 6:
              alert('对不起,当前 没有权限 获取位置失败.')
              break
            case 7:
              alert('对不起,服务不可用 获取位置失败.')
              break
            case 8:
              alert('对不起,请求超时 获取位置失败.')
              break
          }
        }
      },
      {enableHighAccuracy: true}
      )
    },
    dist (Bmap, map, _this) {
      var geolocation = new BMap.Geolocation()
      geolocation.getCurrentPosition(function (r) {
        var a = map.getDistance(r.point, new BMap.Point(this.stratlng, this.stratlat))
        _this.$emit('juli', (Math.round(a, 1000) / 1000).toFixed(1))
      })
    },
    handler ({BMap, map}) {
      var _this = this
      switch (this.method) {
        case 'handler':
          _this.getCity(BMap, map, _this)
          break
        case 'dist':
          _this.dist(BMap, map, _this)
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
