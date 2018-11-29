

import {AJAXURLLIST} from "../commons/cars"

export default{
  getListData(cb){
    fetch(AJAXURLLIST).then(res=>{
      res.json().then(data=>{
        cb(data)
      })
    })
  }
}
