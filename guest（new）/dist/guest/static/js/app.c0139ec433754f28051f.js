webpackJsonp([2],{"08kl":function(t,e){},"2bHb":function(t,e){},"5se7":function(t,e){},AxBg:function(t,e){},Chzn:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("xLaL")}function s(t){i("5se7")}function o(t){i("08kl")}function a(t){i("wJPB")}function r(t){i("vsE3")}function l(t){i("Chzn"),i("AxBg")}Object.defineProperty(e,"__esModule",{value:!0});var u=i("xd7I"),h=i("iDdd"),c=i.n(h),d=i("3XdE");u.a.use(d.a);var p=new d.a({routes:[{path:"/",name:"chat",component:function(t){return i.e(0).then(function(){var e=[i("IICU")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"*",redirect:"/"}]}),w=i("rVsN"),_=i.n(w),v=i("CtzY"),m=i.n(v),g={name:"app",created:function(){var t=window.location.href;console.log(t);var e=new RegExp("(?<=insurebotaimi/)[a-zA-Z0-9-]+"),i=e.exec(t),n=i[0];console.log(i);new _.a(function(t,e){var i=m.a.stringify({name:n});u.a.axios.post("http://test.open.qb-tech.net/api/v1/chat/index",i).then(function(t){window.rusultData=t.data.data,window.show_claims_consultation=window.rusultData.show_claims_consultation,window.slogon=window.rusultData.slogon,window.avatar_big="http://test.open.qb-tech.net/img/aimi-big.png",window.qas=0==window.rusultData.qas.length?[]:window.rusultData.qas,window.extendList=window.rusultData.extends,window.key=window.rusultData.key,window.skey="{{$skey}}",window.aimi_name=window.rusultData.display_name,window.avatar_small="http://test.open.qb-tech.net/img/aimi-big.png",window.wait_response=window.rusultData.wait,window.greet_msg=window.rusultData.greet,window.timeout_msg=window.rusultData.timeout,window.url="http://test.open.qb-tech.net/api/v1/",window.send_url="http://test.open.qb-tech.net/api/v1/chat/send",window.feedback_url="http://test.open.qb-tech.net/api/v1/chat/feedback",$(document).attr("title",window.rusultData.title),null==localStorage.getItem("uuid")&&localStorage.setItem("uuid",window.rusultData.dialog_id)}).catch(function(t){e(t.data)})})},mounted:function(){}},f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},x=[],b={render:f,staticRenderFns:x},C=b,y=i("C7Lr"),k=n,S=y(g,C,!1,k,null,null),I=S.exports,B=i("HVJf");u.a.use(B.a);var T={robotBaseUrl:"http://open.qb-tech.net",humanBaseUrl:"https://chat.qb-tech.net"},N={},D={},L=new B.a.Store({state:T,actions:N,mutations:D}),E=(i("D0oh"),i("v4/V")),V=(E.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[E.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},R=[],q={render:O,staticRenderFns:R},z=q,P=i("C7Lr"),j=s,F=P(V,z,!1,j,null,null),H=F.exports,M=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:H},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")},"on-show":function(e){return t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},A=[],X={render:U,staticRenderFns:A},Z=X,J=i("C7Lr"),W=o,Q=J(M,Z,!1,W,null,null),G=Q.exports,Y=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},tt=[],et={render:K,staticRenderFns:tt},it=et,nt=i("C7Lr"),st=a,ot=nt(Y,it,!1,st,null,null),at=ot.exports,rt=i("3cXf"),lt=i.n(rt),ut=i("9Q05"),ht=i("adVT"),ct=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(ht.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(lt()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new ut.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){lt()(t)!==lt()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}),0)])},pt=[],wt={render:dt,staticRenderFns:pt},_t=wt,vt=i("C7Lr"),mt=r,gt=vt(ct,_t,!1,mt,null,null),ft=gt.exports,xt={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},bt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},Ct=[],yt={render:bt,staticRenderFns:Ct},kt=yt,St=i("C7Lr"),$t=St(xt,kt,!1,null,null,null),It=$t.exports,Bt=i("bYuJ"),Tt=i.n(Bt),Nt=i("bQ3Q"),Dt=i.n(Nt),Lt=i("+Up5"),Et=i.n(Lt),Vt=(Array,Number,Object,{name:"previewer",computed:{imgs:function(){return this.list.map(function(t){return t.msrc||(t.msrc=t.src),void 0===t.w&&(t.w=0,t.h=0),t})}},watch:{imgs:function(t,e){if(this.photoswipe)if(t.length&&t.length-e.length==-1){var i=this.photoswipe.getCurrentIndex();this.photoswipe.invalidateCurrItems(),this.photoswipe.items.splice(i,1);var n=i;n>this.photoswipe.items.length-1&&(n=0),this.photoswipe.goTo(n),this.photoswipe.updateSize(!0),this.photoswipe.ui.update()}else t.length||this.close()}},methods:{init:function(t){var e=this,i=this.imgs[t];if(!i.w||!i.h||i.w<5||i.h<5){var n=new Image;n.onload=function(){i.w=this.width,i.h=this.height,e.doInit(t)},n.src=i.src}else this.doInit(t)},doInit:function(t){var e=this,i=this,n=Et()({history:!1,shareEl:!1,tapToClose:!0,index:t},this.options);this.photoswipe=new Tt.a(this.$el,Dt.a,this.imgs,n),this.photoswipe.listen("gettingData",function(t,e){if(!e.w||!e.h||e.w<1||e.h<1){var n=new Image;n.onload=function(){e.w=this.width,e.h=this.height,i.photoswipe.updateSize(!0)},n.src=e.src}}),this.photoswipe.init(),this.photoswipe.listen("close",function(){e.$emit("on-close")}),this.photoswipe.listen("afterChange",function(t,i){e.$emit("on-index-change",{currentIndex:e.photoswipe.getCurrentIndex()})})},show:function(t){this.init(t)},getCurrentIndex:function(){if(this.photoswipe)return this.photoswipe.getCurrentIndex()},close:function(){this.photoswipe&&this.photoswipe.close()},goTo:function(t){this.photoswipe&&this.photoswipe.goTo(t)},prev:function(){this.photoswipe&&this.photoswipe.prev()},next:function(){this.photoswipe&&this.photoswipe.next()}},props:{list:{type:Array,required:!0},index:{type:Number,default:0},options:{type:Object,default:function(){return{}}}}}),Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp vux-previewer",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"pswp__bg"}),t._v(" "),i("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter"}),t._v(" "),t._t("button-after"),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),t._t("button-before"),t._v(" "),t._m(1)],2),t._v(" "),t._m(2),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),t._m(3)])])])},Rt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[i("div",{staticClass:"pswp__share-tooltip"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])}],qt={render:Ot,staticRenderFns:Rt},zt=qt,Pt=i("C7Lr"),jt=l,Ft=Pt(Vt,zt,!1,jt,null,null),Ht=Ft.exports,Mt=i("uiKT"),Ut=i("aozt"),At=i.n(Ut),Xt=i("3khs"),Zt=i.n(Xt);i("2bHb");u.a.use(Zt.a,At.a),u.a.component("alert",G),u.a.component("loading",at),u.a.component("swiper",ft),u.a.component("SwiperItem",It),u.a.component("previewer",Ht),u.a.directive("transfer-dom",Mt.a),At.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",u.a.prototype.BackFunction=function(){this.$router.go(-1)},c.a.attach(document.body),u.a.config.productionTip=!1,new u.a({router:p,store:L,render:function(t){return t(I)}}).$mount("#app-box")},vsE3:function(t,e){},wJPB:function(t,e){},xLaL:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c0139ec433754f28051f.js.map