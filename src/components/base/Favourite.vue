<template>
    <div class="favourite">
      <h3 class="title">猜你喜欢</h3>
      <ul>
        <router-link 
        class="item border-bottom" 
        v-for="(item,index) in recommendLis" 
        :key="index"
        :to='{name:"detailLink",params:{id:item.id}}'
        > 
          <img class='item-img' :src="item.imgUrl" alt="">
          <div class="item-info">
              <h4>{{item.title}}</h4>
            <div class='item-fav-info clearfix'>
              <p class='item-fav-text'>
                <i v-for='(i,index) in 5' class='iconfont icon-star' :key="index"></i>

                <!-- 在span标签上绑定style 用过滤的方法 来决定黄色星星的宽度 --> 
                                                    <!-- 实参 | 函数 -->
                <span class='item-fav-star'  :style='4|star'>
                    <i v-for='(i,index) in 5' class='iconfont icon-star' :key="index"></i>
                 </span>
              </p>
              <p class='item-text-right'>
                <span>{{item.comment}}条评论</span>
              </p>
            </div>
            <p class='item-price'>￥{{item.price}}元</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
      name:'HomeFavourite',
      props:['recommendLis'],
     filters:{
         star(num){
             //num 是用来接收实参的 函数返回出去的是黄色星星的宽度
             return  {
               width:num*100/5 + '%'
         } 
         }
     },
     methods:{
     
     }
    }
</script>

<style lang='stylus' scoped>
  .border-bottom:before
      border-color:#777
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #ddd
    text-indent: .2rem
    font-size: .32rem
  .item
    display:flex
    height: 2.2rem
    padding:.2rem
    .item-img
      width:2rem
      height:2rem
    .item-info
      flex:1
      padding: .1rem
      margin-left:.1rem
      min-width: 0rem;
      h4
        line-height:.6rem
        font-size:.3rem
      .item-price
        color:#ff8300
        font-size:.3rem
        line-height:.4rem
      .item-fav-info
        line-height:.6rem
        .item-fav-text
          position:relative
          display:inline-block
          float:left
          color:#ccc
          margin-right:.5rem
          .item-fav-star
            overflow:hidden
            position:absolute
            left:0
            top:0
            color:#ffb436
        .item-text-right
          float:left
</style>
