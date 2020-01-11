<template>
  <div class="alphabet">
    <ul>
      <li v-for="(item,key) in cities" :key="key"
      @click="changeHeader(key)">
          {{key}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['cities'],
    name:'CityAlphabet',
    methods:{
      //将数据发送到vuex store仓库  letter 是key值
      changeHeader(letter){
        // alert(1)  通过commit vuex中的函数  值
        this.$store.commit('changeAlp',letter)
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .alphabet
    position:fixed
    display:flex
    flex-direction:column
    justify-content:center
    right:0
    top:0
    bottom:0
    width:.4rem
    li
      line-height: .5rem
      text-align: center
      color: red
      font-weight:600
</style>
