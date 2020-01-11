<template>
  <div>
    <transition name="heaven">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'FadeAnimation',
  }
</script>

    // 在需要的组件中 实现淡入淡出的效果 具体可以参考VUE官网的transition
    // v-enter v-leave-to 官网的写法 如果不想用v- 就使用name 标记
    // 怎么用 参考轮播组件
<style lang='stylus' scoped>
.heaven-enter,.heaven-leave-to
    opacity:0
.heaven-enter-active,.heaven-leave-active
    transition:opacity 1s

</style>
