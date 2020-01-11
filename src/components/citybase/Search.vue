<template>
  <div class="search">
       <input
      type="text"
      class='header-input'
      placeholder='请输入城市名和拼音'
      v-model="keyword">
      <div class="search-content"  v-show="keyword">
        <ul>
          <li class='search-item border-bottom'
            v-for="city in filterCities" :key='city.id'
            @click="fn(city.name)"
          >{{city.name}}</li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  props:['cities'],
  data(){
    return{
      keyword:'',
    }
  },
  mounted(){
    // console.log(this.cities)
  },
  methods:{
      fn(city){
        this.$router.push('/')
        this.$store.state.city = city
      }
  },
  computed:{
      filterCities(){
          const result = []
         for(let key in this.cities ){  //遍历对象 key 是A-Z 字母
           this.cities[key].forEach((city,index)=>{  //遍历出所有A-Z城市中的每一项
           //如果城市名字或者拼音包含输入框的keyword 则匹配成 将对应的city push到restul数组中
              if( city.name.includes(this.keyword)||city.spell.includes(this.keyword)){
                   result.push(city)
              }
           })
         }
         return result
                
      } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.border-bottom::before
  border-color:#aaa
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#ccc
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>

//  1.实现搜索框input为空的时候  搜索内容li不显示
//        利用 model 是input 和 li 关联
//        input 绑定v-model="keyword"
//        li 绑定 v-show='keyword' 
//        keywor有内容为真 显示li
//        keywor无内容为假 隐藏li