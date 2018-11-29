
import {AJAXURL} from "../commons/URLSchema"
// import {AJAXURL1} from "../commons/URLSchema"
// import {AJAXURL2} from "../commons/URLSchema"
// import {AJAXURL3} from "../commons/URLSchema"
// import {AJAXURL4} from "../commons/URLSchema"
// import {AJAXURL5} from "../commons/URLSchema"
// import {AJAXURL6} from "../commons/URLSchema"
// import {AJAXURL7} from "../commons/URLSchema"


export default {
  /**
   * 获取首页数据
   * @param cb
   */
  getData(cb) {
    fetch(AJAXURL).then(res => {
      res.json().then(data => {
        cb(data);
        console.log(this.data)
      })
    })
  },

  /**
   * 获取buycar页面数据
   * @param cb
   */
  getbuy(cb) {

    fetch(AJAXURL1).then(res => {
      res.json().then(data => {
        cb(data);
        console.log(this.data)
      })
    })
  },

  /**
   * 获取sale页面数据
   * @param cb
   */
  getSale(cb) {
    fetch(AJAXURL2).then(res => {
      res.json().then(data => {
        cb(data);
        console.log(this.data)
      })
    })
  },

  /**
   * 获取headline页面数据
   * @param cb
   */
  getheadline(cb) {

    fetch(AJAXURL3).then(res => {
      res.json().then(data => {
        cb(data);
        console.log(this.data+"pop")
      })
    })
  },

  // /**
  //  * 获取wiki页面数据
  //  * @param cb
  //  */
  // getwiki(cb) {
  //
  //   fetch(AJAXURL4).then(res => {
  //     res.json().then(data => {
  //       cb(data);
  //       console.log(this.data)
  //     })
  //   })
  // },
  //
  // /**
  //  * 获取shopguide页面数据
  //  * @param cb
  //  */
  // getshopguide(cb) {
  //
  //   fetch(AJAXURL5).then(res => {
  //     res.json().then(data => {
  //       cb(data);
  //       console.log(this.data)
  //     })
  //   })
  // },
  //
  // /**
  //  * 获取usecar页面数据
  //  * @param cb
  //  */
  // getusecar(cb) {
  //
  //   fetch(AJAXURL6).then(res => {
  //     res.json().then(data => {
  //       cb(data);
  //       console.log(this.data)
  //     })
  //   })
  // },
  //
  // /**
  //  * 获取mine页面数据
  //  * @param cb
  //  */
  // getmine(cb) {
  //   fetch(AJAXURL7).then(res => {
  //     res.json().then(data => {
  //       cb(data);
  //       console.log(this.data)
  //     })
  //   })
  // }
};


