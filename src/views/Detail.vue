<template>
  <div class="detail">
      <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
      ></detail-banner>
  <detail-header></detail-header>
  <detail-card :cardInfo="cardInfo"></detail-card>
  <detail-recommend :recommendInfo='recommendInfo'>
      <h3 class="border-bottom">去哪儿推荐</h3>
  </detail-recommend>
  <detail-calendar :calendarInfo='calendarInfo'></detail-calendar>
 <detail-comment :commentInfo="commentInfo"></detail-comment>
  </div>
</template>

<script>
import {getDetails} from "@/api";
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'
import DetailCard from '@/components/detail/Card.vue'
import DetailRecommend from '@/components/detail/Recommend.vue'
import DetailCalendar from '@/components/detail/Calendar.vue'
import DetailComment from '@/components/detail/Comment.vue'
export default {

  name: 'detailLink',
  data(){
    return{
          sightName:'',
          bannerImg:'',
          gallaryImgs:[],
          cardInfo:{},
          recommendInfo:[],
          calendarInfo:[],
          commentInfo:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
        async getData(){
            let heaven =  await getDetails(this.$route.params.id)
            let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
            this.bannerImg = bannerImg
            this.sightName = sightName
            this.gallaryImgs = gallaryImgs
          this.cardInfo = cardInfo
          this.recommendInfo = recommendInfo
          this.calendarInfo = calendarInfo
          this.commentInfo = commentInfo
            // console.log(heaven)
        }
      },
  components:{
    DetailBanner,
    DetailHeader,
    DetailCard,
    DetailRecommend,
    DetailCalendar,
    DetailComment,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .detail
    height 2000px
</style>
