<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <!-- keep-alive 对页面的数据亲求进行缓存 避免切换组件时 组件反复向后台请求数据 -->
    <!-- 已经缓存了的组件 VUE的生命周期函数是无法调用的 -->
    <!-- 一旦使用了keep-alive 缓存 必然会触发activated(){}周期函数 靠这个函数 在已经进行缓存了的组件 获取新的数据 -->
    <!-- 当切换组件时activated 失去活性  应该使用deactivated函数获取数据 -->
  </div>
</template>

<script>

export default {
 
}
</script>
<style lang="stylus">

</style>
