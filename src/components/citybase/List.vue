<template>
  <div class="list" ref="wrapper">
      <div>
     <div class="list-current">
        <h3 class='list-title border-topbottom'>当前城市</h3>
        <div class="city">
          <span>{{this.$store.state.city}}</span>
        </div>
      </div>

    <div class="list-hot">
        <h3 class='list-title border-topbottom'>热门城市</h3>
        <div class="city">
         <span v-for="(item,index) in hotCities" :key="index" @click="handerClick(item.name)">{{item.name}}</span>
        </div>
      </div>

    <div class="list-item"  v-for="(city,key) in cities" :key="key">
        <h3 class='list-title border-topbottom' :ref="key" > {{key}}</h3>
        <ul>
          <li class='city-item border-bottom'
            v-for="item in city" :key="item.id"
            @click="handerClick(item.name)"
            >
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>

    </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:['hotCities','cities'],
  name: 'CityList',
  mounted(){
   //better-scroll 默认静止了点击事件 如果要启用点击事件 需要如下配置
       this.scroll = new BScroll(this.$refs.wrapper,{
         click:true
       })
       
  },
  //通过computed属性  拿到$store.state仓库里面的数据  一旦仓库数据发生变化 触发letter函数 作为watc的实参传入函数 
  computed:{
      letter(){
        return this.$store.state.letter
      }
  },
  watch:{
    //value 就是 仓库传来的a-z
    letter(value){
      // console.log(arguments)
      //跳到指定的dom节点 这是better-scroll 提供的方法 
      //这里的:ref=key 是动态帮助 在v-fon的循环下 key是A-Z的一个数组 value是指定要跳转的字母 [0] 是arguments的第0项 是我们需要的字母
      //这里的this.$refs是当前页面h3标签的数组a-z
      this.scroll.scrollToElement(this.$refs[value][0])
    }
  },
  methods:{
    //点击城市名字 跳转到首页并且更该首页地址
    handerClick(city){
      //将被点击的城市名字储存到state仓库
      this.$store.commit('citySkip',city)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
     .border-bottom:before
      border-color:#aaa
  .list
    position:fixed
    overflow: hidden
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
  .list-title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .city
    padding-left:.15rem
    span
      display:inline-block
      width:28%
      padding:.15rem .2rem
      margin:.1rem
      border:.01rem solid #ccc
      text-align:center
      box-sizing:border-box
      border-radius:.05rem
  .city-item
    line-height:.8rem
    padding-left:.2rem
</style>
