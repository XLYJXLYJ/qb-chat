webpackJsonp([0],{"8tHC":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAACC0lEQVQ4jY2U3WvTUBiHn6RZnV+o2zo6wdYPxkQQEUG86NRtV4IgeCUMhcH+K/HKgd2Fg4IMh6KizFXYzVhFHRU2Yd2Sdl2nkqZJeuZFT7rTNmpfCMn5vb/zJO97zomWXdwnJMaAB8A4kJDaD+ANkAbetk/Q2kAXgMcS9K94B0wD3wNBV5Ip4FMXEIDb0psKBEPeh4EXwAnVXanUya1UcRxB8myU4ZFeNd0v51wH1oLS3gOjqsvc9nj2tIzrHpR++cph7txteRfAB+CmDky0QwBevfzZAgFYXalS2PTaraPAhA5MtmcALNMPk7HMDhDApA7cCMuc6ouEgvr6jTA5pQOnwzK3xo+jaa3aufOHSCSjYfaEll3cd4GesOzWpkdutcrvX3XOJKNcvXaESEQLs3oGUACSqioEfPvqkF9zqOzWG9CCx9FjNUYu9qLrHaCCAWRVUKnok5mrsFNqbfZWwePLZ4ePAwb37p9kINbSq6wOzAajym6d9Ey5A6LGTsknPVNufqmMWR3IADmAhfk9bFv8FRKEbQsW5veCYQ7I6IAApkpF395Yd/8LCWJj3aVU9G1gChBB25Yt03sI1LomQc0yvUfAMiinXwjmaJz8fBeQPDAmBM8DoQmSq7AEXKLxr3kNqLW6UpuWniV15ZpP8aEeYoMGRcv3gCfyMoC4tGwDzeWMDRrEhw728R8Z1rkYZ6kfygAAAABJRU5ErkJggg=="},hWf9:function(t,e){},i5qY:function(t,e,s){"use strict";var a={data:function(){return{qtTrasversion:"",cancelTask:"",cookie:"",company:""}},mounted:function(){var t=window.location.href;document.title=t;var e=this.getCookie("user");this.cookie=e.split("&&")},methods:{quit:function(){this.axios.delete("/merchant/v1.0/session").then(function(t){"OK"==t.errmsg&&(delCookie("user"),window.location.href="/login.html")})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[a("div",{staticClass:"head-content"},[t._m(0),t._v(" "),a("ul",{staticClass:"navigation"},[a("router-link",{attrs:{to:"/Qt"}},[a("li",[t._v("我的任务")])]),t._v(" "),a("router-link",{attrs:{to:"/Task"}},[a("li",[t._v("创建任务")])])],1),t._v(" "),a("ul",{staticClass:"user"},[a("li",[a("img",{attrs:{src:s("8tHC")}}),t._v(" "+t._s(t.cookie[0])+" "+t._s(this.cookie[1]))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("p",{staticClass:"name"},[this._v("企保科技")]),this._v(" "),e("p",{staticClass:"slogan"},[this._v("科技连接保险未来")])])}]};var n=s("VU/8")(a,i,!1,function(t){s("hWf9")},"data-v-6f0de52a",null);e.a=n.exports}});
//# sourceMappingURL=0.24d49029680846ca406f.js.map