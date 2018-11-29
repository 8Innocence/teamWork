

import {AJAXURLSHOP} from "../commons/cars"

export default{
  getShopsData(cb){
    fetch(AJAXURLSHOP).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
