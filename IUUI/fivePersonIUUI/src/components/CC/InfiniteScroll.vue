<template>
<div class="cc">
  <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

    <yd-list theme="1" slot="list">
      <yd-list-item v-for="item, key in list" :key="key">
        <img slot="img" :src="item.img">
        <span slot="title" class="title">{{item.title}}</span>
        <yd-list-other slot="other">
          <div>
            <span class="list-price"><em>¥</em>{{item.marketprice}}</span>
            <span class="list-del-price">¥{{item.productprice}}</span>
          </div>
          <div>content</div>
        </yd-list-other>
      </yd-list-item>
    </yd-list>

    <!-- 数据全部加载完毕显示 -->
    <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

    <!-- 加载中提示，不指定，将显示默认加载中图标 -->
    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

  </yd-infinitescroll>
  <code-editor :code="selfCode"></code-editor>
</div>
</template>

<script>
  import  Public from "../../assets/css/public.css";
  import CodeEditor from "../ZDS/codeEditor";
    export default {
        name: "InfiniteScroll",
      components: {CodeEditor, Public},
      data() {
        return {
          selfCode:'<template>\n' +
            '<div>\n' +
            '  <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">\n' +
            '\n' +
            '    <yd-list theme="1" slot="list">\n' +
            '      <yd-list-item v-for="item, key in list" :key="key">\n' +
            '        <img slot="img" :src="item.img">\n' +
            '        <span slot="title" class="title">{{item.title}}</span>\n' +
            '        <yd-list-other slot="other">\n' +
            '          <div>\n' +
            '            <span class="list-price"><em>¥</em>{{item.marketprice}}</span>\n' +
            '            <span class="list-del-price">¥{{item.productprice}}</span>\n' +
            '          </div>\n' +
            '          <div>content</div>\n' +
            '        </yd-list-other>\n' +
            '      </yd-list-item>\n' +
            '    </yd-list>\n' +
            '\n' +
            '    <!-- 数据全部加载完毕显示 -->\n' +
            '    <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>\n' +
            '\n' +
            '    <!-- 加载中提示，不指定，将显示默认加载中图标 -->\n' +
            '    <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>\n' +
            '\n' +
            '  </yd-infinitescroll>\n' +
            '</div>\n' +
            '</template>',
          page: 1,
          pageSize: 10,
          list: [
            {
              img: "../../../static/images/p1.jpeg",
              title: "有机农家乐",
              marketprice: 56.23,
              productprice: 89.36
            },
            {
              img: "../../../static/images/AB5471CCF1ChRkRlvScKuAfh3DAAmeQ8tVYQU264.png",
              title: "纯天然无污染的小猪肉",
              marketprice: 56.23,
              productprice: 89.36
            },
            {
              img: "../../../static/images/110CDAHDB7ChRkRlvScHuAKv0VAAkBehgjeS4300.png",
              title: "皮薄肉多果实大",
              marketprice: 56.23,
              productprice: 89.36
            },
            {
              img: "../../../static/images/1718EES12CChRkRlvScQeADsLZAAjPFqPAijs855.png",
              title: "新鲜水嫩的好果子",
              marketprice: 56.23,
              productprice: 89.36
            },
            {
              img: "../../../static/images/79453a2dbea242c486075f00122ec9f2.png",
              title: "清脆可口的水果",
              marketprice: 56.23,
              productprice: 89.36
            },
            {
              img: "../../../static/images/3845f6549eb6497a9a7a88c6f7dd33ef.jpeg",
              title: "如果你辛苦了 就来我们的店",
              marketprice: 56.23,
              productprice: 89.36
            }
          ]
        }
      },
      methods: {
        loadList() {
          this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
            params: {
              page: this.page,
              pagesize: this.pageSize
            }
          }).then(function (response) {
            const _list = response.body;

            this.list = [...this.list, ..._list];

            if (_list.length < this.pageSize || this.page == 3) {
              /* 所有数据加载完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return;
            }

            /* 单次请求数据完毕 */
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

            this.page++;
          });
        }
      }
    }
</script>

<style scoped>

</style>
<style>
  .cc/deep/.yd-list-themel .yd-list-item{
    width:200px;
  }
</style>
