<template>
  <div class="swiper">
      <!-- 使用轮播插件从github上引入vue-awesome-swiper -->
       <swiper :options="swiperOption" v-if="isShow">
    <!-- slides -->
    <swiper-slide v-for="item in swiperList" :key=item.id>
        <img class='swiper-img' :src="item.imgUrl" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper>
    
   
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:['swiperList'],
 data(){
     return{
        swiperOption: {
             pagination: {
            el: '.swiper-pagination'
          },
            loop:true,  //配置无缝轮播
            autoplay:true, //配置自动播放
      },
      }
 },
 computed:{
          isShow(){
            //实现无缝轮播
            return this.swiperList.length>0
          }
        }
}
// 重点！！！由于scoped属性 只对每个页面的CSS属性起作用 而通过swiper框架引入的标签节点不在当前页面 所以想要操作swipe的节点 需要用到VUE提供的深入控制 >>> 具体代码看CSS怎么操作
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 控制swiper下的swiper-pagination-bullet-active 要通过>>>符号  实现了轮播图小圆点颜色的改变-->
<style scoped lang="stylus">
    .swiper >>> .swiper-pagination-bullet-active
         background-color:#fff
    //   .swiper >>> .swiper-container
    //      height  100%
    .swiper
        height 2.19rem
         .swiper-container
            height:100%
        .swiper-img
             width:100%  
             
</style>
