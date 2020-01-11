<template>
    <swiper :options="swiperOption">
        <!-- 将组件做成轮播图 用轮播标签swiper 作为组件的跟节点 并将写好的div 插入swiper -->
    <!-- slides -->
    <!-- 下面这句代码 表示分为2页  1组8条数据  1组2条数据 注意这里的imgs -->
    <swiper-slide v-for="(imgs,index) in filterImgs" :key=index>
        <!-- 这句代码表示一次遍历8条数据 -->
        <div class="item" v-for="item in imgs" :key=item.id>
          <img class="item-img" :src="item.imgUrl">
          <span class="item-desc">{{item.desc}}</span>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
       <!-- <div class="item" v-for="item in iconList" :key=item.id>
          <img class="item-img" :src="item.imgUrl">
          <span>{{item.desc}}</span>
      </div> -->
</template>

<script>
export default {
  name: 'HmoeNav',
  /*
    难点1：将10个数据分为2组 1组8个 1组2个  通过filterImgs自定义函数实现
    难点2：将图标做成轮播图
  */ 
  props:['iconList'],
  data(){
    return{
        swiperOption:{
              pagination: {
                el: '.swiper-pagination'
              }
        },
    }
    },
  computed:{
          filterImgs(){
              let imgs = []
              //作用 将1个数组中的10个数据 分为2个数组
              this.iconList.forEach((item,index)=>{
                  let page = ~~(index/8)  //向上取整数 可以拿到index 0-7 8组数据

                  if(!imgs[page]){
                      //imgs[page] 因为第一个page为0 是flase  所以取反 可以拿到第一组的数据
                      imgs[page] = []
                  }
                  //最后将遍历的数据item push到imgs[page]数组中
                  imgs[page].push(item)
              })
              return imgs   //记住要return 不然每数据
                     console.log(1)
            }
        
         }
        }
</script>


<style scoped lang="stylus">
    .swiper-slide
        display flex
        flex-wrap wrap
        // background-color #096
        height 3.7rem
        .item
            display flex
            flex-direction column
            /* 改变主轴方向 由水平变为竖直 再让辅轴 水平方向居中*/ 
            align-items center
            width 25%
            height 50%
            // background-color skyblue
            .item-img
                width:1.1rem
                margin-top .2rem
</style>
