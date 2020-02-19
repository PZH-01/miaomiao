<template>

    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="data in hotList" :key="data.id">{{data.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for="data in cityList" :key="data.index">
                    <h2>{{data.index}}</h2>
                    <ul>
                        <li v-for="dataList in data.list" :key="dataList.id">{{dataList.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="(data,index) in cityList" :key="data.index" @touchstart="handleToIndex(index)">{{data.index}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted () {
    this.axios.get('/api/cityList').then((res) => {
      console.log(res.data)
      if (res.data.msg === 'ok') {
        const cities = res.data.data.cities
        const { cityList, hotList } = this.formatCityList(cities)
        this.cityList = cityList
        this.hotList = hotList
      }
    })
  },
  methods: {
    formatCityList (cities) {
      const cityList = []
      const hotList = []

      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i])
        }
      }

      for (let i = 0; i < cities.length; i++) {
        const firstLetter = cities[i].py.substring(0, 1).toUpperCase()
        if (toCom(firstLetter)) {
          cityList.push({ index: firstLetter, list: [{ nm: cities[i].nm, id: cities[i].id }] })
        } else {
          for (let j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id })
            }
          }
        }
      }

      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1
        } else if (n1.index < n2.index) {
          return -1
        } else {
          return 0
        }
      })

      function toCom (firstLetter) {
        for (let i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false
          }
        }
        return true
      }
      console.log(cityList)
      console.log(hotList)

      return {
        cityList,
        hotList
      }
    },
    handleToIndex (index) {
      const h2 = this.$refs.city_sort.getElementsByTagName('h2')
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
    }
  }
}
</script>

<style scoped>
.city_body{display: flex; width:100%; }
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;width: 95%;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort{padding-top: 150px;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width: 20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
.city_body .city_index ul{width: 100%;height: 100%;display: flex;flex-direction: column;align-items: center}
.city_body .city_index ul li{width: 100%;height: 20px;}
</style>
