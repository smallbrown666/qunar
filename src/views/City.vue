<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities='hotCities' :cities='cities'></city-list>
    <city-alphabet :cities='cities'></city-alphabet>
  </div>
</template>

<script>
import {getCity} from '@/api'
// 引入需要的数据函数
import CityHeader from '@/components/citybase/Header.vue'
import CitySearch from '@/components/citybase/Search.vue'
import CityList from '@/components/citybase/List.vue'
import CityAlphabet from '@/components/citybase/Alphabet.vue'
export default {
  name: 'City',
  data(){
    return {
      hotCities:[],
      cities:[]
    }
  },
  created(){
    this.getData()
    // console.log(this.cities)
  },
  methods:{
   async getData(){
      let {hotCities,cities} = await getCity()
        this.hotCities = hotCities
        this.cities = cities
        // console.log(this.cities)
    }
  },
  components:{
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
