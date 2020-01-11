<template>
  <div class="week">
    <week-header></week-header>
    <week-list :weekInfo="weekInfo"></week-list>
  </div>
</template>

<script>

  import {getWeeks} from '@/api'
  import  WeekHeader from　'@/components/week/Header.vue'
  import  WeekList from　'@/components/week/List.vue'
 

  export default {
    name:'Week',
    components:{
      WeekHeader,
      WeekList
    },
    data(){
      return {
        weekInfo:[]
      }
    },
    activated(){
        this.getData()
    },
    methods:{
      async getData(){
        let {weekInfo} = await getWeeks(this.$route.params.id)
        this.weekInfo = weekInfo
      }
    }
  }
</script>

<style lang='stylus' scoped>

</style>
