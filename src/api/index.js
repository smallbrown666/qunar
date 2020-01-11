//专门用来储存请求数据的
import axios from 'axios'

//设置返回数据Persionme 的返回格式
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data.data;
  });

  //请求home组件的数据
  export let getHome = ()=>{
    return axios.get('/mock/index.json')
  }

   //请求city组件的数据
   export let getCity = ()=>{
    return axios.get('/mock/city.json')
  }

   //请求detail组件的数据
   export let getDetails = (id)=>{
    return axios.get('/mock/detail/'+id+'.json')
  }

  //请求week组件的数据接口
export let getWeeks = (id)=>{
  return axios.get('/mock/week/'+id+'.json')
}
