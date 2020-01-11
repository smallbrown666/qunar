import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    letter:'',
    city:localStorage.getItem('key') || '深圳',
    // cityName:''
  },
  mutations: {
    changeAlp(state,letter){
      state.letter = letter
      // console.log(letter)
    },
    //A-Z 城市跳转
    citySkip(state,city){
      state.city = city
      console.log(city)
      localStorage.setItem('key',city)
      // console.log(city)
    },
    //搜索框城市跳转
    // cityClose(state,cityName){
    //   state.cityName = cityName
    // }
  },
  actions: {
  },
  modules: {
  }
})
