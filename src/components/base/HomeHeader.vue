<template>
  <div class="header">
    <i class="iconfont icon-fanhui header-back"></i>
      <div class="input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入内容">
      </div>
      <div class="right">
        <router-link tag="span" to="/city">{{this.$store.state.city}}</router-link>
        <i class="iconfont icon-jiantou"></i>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'homeheader',
 mounted(){
  //  console.log($store.state.city)
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .header
    display flex
    height .88rem
    line-height .88rem
    background-color #00bcd4
    color #fff
    .header-back
      width .88rem
      text-align center
    .input
      flex 1
      background-color:#fff
      line-height:.64rem
      height:.64rem
      padding-left:.1rem
      margin-top:.12rem
      border-radius:.1rem
    .icon-sousuo
      color:#ccc
      vertical-align middle
       input
      width:100%
      vertical-align middle
      font-size:.26rem
      color:#eee
    .right
     padding:0 .4rem
     span
      vertical-align top
    .icon-jiantou
      font-size:.24rem
      vertical-align top
</style>
