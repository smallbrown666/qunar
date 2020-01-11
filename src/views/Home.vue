<template>
  <div class="home">
   <home-header></home-header>
   <div class='contaniner' ref="wrapper">
  <div>
   <home-swiper :swiperList="swiperList"></home-swiper>
   <home-nav :iconList='iconList'></home-nav>
   <home-fav :recommendLis='recommendList'></home-fav>
   <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//将数据引入到home组件
  import {getHome} from '@/api'
  import HomeHeader from '@/components/base/HomeHeader.vue'
  import HomeSwiper from '@/components/base/Swiper.vue'
  import HomeNav from '@/components/base/Nav.vue'
  import HomeFav from '@/components/base/Favourite.vue'
  import HomeWeekend from '@/components/base/Weekend.vue'
  import BScroll from 'better-scroll'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeFav,
    HomeWeekend,
  },
  data(){
    return{
     iconList:[],
     recommendList:[],
     swiperList:[],
     weekendList:[]
   }
  },
  mounted(){
    this.getData()
     this.scroll = new BScroll(this.$refs.wrapper,{
       click:true
     })
     //在整体组件中显示 需要将组件头部的高度隔离出来 如下CSS代码张的top:0.88rem 这样滚动就不会影响头部输入框了
  },
   methods:{
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await getHome()
            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
          }
      },
       activated(){//当组件被展示的时候触发
        this.getData()
        // console.log('home activated')
      },
      deactivated(){//当组件没有展示的时候触发
        // console.log('home deactivated')
      }
  }
</script>

<style scoped lang="stylus">

// 固定于离页面顶部0.88rem的距离
  .contaniner
    position:fixed
    overflow:hidden  //需要超出隐藏 不然会覆盖头部组件
    right:0
    left:0
    bottom:0
    top:.88rem
</style>