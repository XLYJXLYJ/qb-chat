webpackJsonp([2],{"08kl":function(t,e){},"5se7":function(t,e){},AxBg:function(t,e){},Chzn:function(t,e){},NHnr:function(t,e,i){"use strict";function s(t){i("hXcY")}function n(t){i("5se7")}function o(t){i("08kl")}function a(t){i("wJPB")}function r(t){i("vsE3")}function l(t){i("Chzn"),i("AxBg")}Object.defineProperty(e,"__esModule",{value:!0});var u=i("xd7I"),h=i("iDdd"),c=i.n(h),d=i("3XdE");u.a.use(d.a);var p=new d.a({mode:"history",base:"/insurebotaimi/SDC-bwyl",routes:[{path:"/",name:"chat",component:function(t){return i.e(0).then(function(){var e=[i("IICU")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"*",redirect:"/"}]}),w={name:"app",mounted:function(){}},v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},_=[],m={render:v,staticRenderFns:_},f=m,g=i("C7Lr"),x=s,b=g(w,f,!1,x,null,null),C=b.exports,y=i("HVJf");u.a.use(y.a);var k={robotBaseUrl:"http://open.qb-tech.net",humanBaseUrl:"https://chat.qb-tech.net"},S={},$={},I=new y.a.Store({state:k,actions:S,mutations:$}),B=(i("D0oh"),i("v4/V")),T=(B.a,Boolean,String,String,Number,String,String,Boolean,Object,Boolean,{mixins:[B.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}),N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},L=[],E={render:N,staticRenderFns:L},D=E,O=i("C7Lr"),V=n,R=O(T,D,!1,V,null,null),P=R.exports,j=(Boolean,String,String,String,Boolean,String,String,Number,String,{name:"alert",components:{XDialog:P},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-alert"},[i("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){return t.$emit("on-hide")},"on-show":function(e){return t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[i("div",{staticClass:"weui-dialog__hd"},[i("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"weui-dialog__bd"},[t._t("default",[i("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),i("div",{staticClass:"weui-dialog__ft"},[i("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},M=[],X={render:F,staticRenderFns:M},z=X,U=i("C7Lr"),H=o,A=U(j,z,!1,H,null,null),J=A.exports,Z=(Boolean,String,String,String,{name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}),q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},W=[],Q={render:q,staticRenderFns:W},Y=Q,G=i("C7Lr"),K=a,tt=G(Z,Y,!1,K,null,null),et=tt.exports,it=i("3cXf"),st=i.n(it),nt=i("9Q05"),ot=i("adVT"),at=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(ot.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(st()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new nt.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){st()(t)!==st()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,s){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":s},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,s){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":s},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}),0)])},lt=[],ut={render:rt,staticRenderFns:lt},ht=ut,ct=i("C7Lr"),dt=r,pt=ct(at,ht,!1,dt,null,null),wt=pt.exports,vt={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},_t=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},mt=[],ft={render:_t,staticRenderFns:mt},gt=ft,xt=i("C7Lr"),bt=xt(vt,gt,!1,null,null,null),Ct=bt.exports,yt=i("bYuJ"),kt=i.n(yt),St=i("bQ3Q"),$t=i.n(St),It=i("+Up5"),Bt=i.n(It),Tt=(Array,Number,Object,{name:"previewer",computed:{imgs:function(){return this.list.map(function(t){return t.msrc||(t.msrc=t.src),void 0===t.w&&(t.w=0,t.h=0),t})}},watch:{imgs:function(t,e){if(this.photoswipe)if(t.length&&t.length-e.length==-1){var i=this.photoswipe.getCurrentIndex();this.photoswipe.invalidateCurrItems(),this.photoswipe.items.splice(i,1);var s=i;s>this.photoswipe.items.length-1&&(s=0),this.photoswipe.goTo(s),this.photoswipe.updateSize(!0),this.photoswipe.ui.update()}else t.length||this.close()}},methods:{init:function(t){var e=this,i=this.imgs[t];if(!i.w||!i.h||i.w<5||i.h<5){var s=new Image;s.onload=function(){i.w=this.width,i.h=this.height,e.doInit(t)},s.src=i.src}else this.doInit(t)},doInit:function(t){var e=this,i=this,s=Bt()({history:!1,shareEl:!1,tapToClose:!0,index:t},this.options);this.photoswipe=new kt.a(this.$el,$t.a,this.imgs,s),this.photoswipe.listen("gettingData",function(t,e){if(!e.w||!e.h||e.w<1||e.h<1){var s=new Image;s.onload=function(){e.w=this.width,e.h=this.height,i.photoswipe.updateSize(!0)},s.src=e.src}}),this.photoswipe.init(),this.photoswipe.listen("close",function(){e.$emit("on-close")}),this.photoswipe.listen("afterChange",function(t,i){e.$emit("on-index-change",{currentIndex:e.photoswipe.getCurrentIndex()})})},show:function(t){this.init(t)},getCurrentIndex:function(){if(this.photoswipe)return this.photoswipe.getCurrentIndex()},close:function(){this.photoswipe&&this.photoswipe.close()},goTo:function(t){this.photoswipe&&this.photoswipe.goTo(t)},prev:function(){this.photoswipe&&this.photoswipe.prev()},next:function(){this.photoswipe&&this.photoswipe.next()}},props:{list:{type:Array,required:!0},index:{type:Number,default:0},options:{type:Object,default:function(){return{}}}}}),Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp vux-previewer",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[i("div",{staticClass:"pswp__bg"}),t._v(" "),i("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),t._v(" "),i("div",{staticClass:"pswp__ui pswp__ui--hidden"},[i("div",{staticClass:"pswp__top-bar"},[i("div",{staticClass:"pswp__counter"}),t._v(" "),t._t("button-after"),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),t._t("button-before"),t._v(" "),t._m(1)],2),t._v(" "),t._m(2),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),i("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),t._m(3)])])])},Lt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"}),t._v(" "),i("div",{staticClass:"pswp__item"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[i("div",{staticClass:"pswp__share-tooltip"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])}],Et={render:Nt,staticRenderFns:Lt},Dt=Et,Ot=i("C7Lr"),Vt=l,Rt=Ot(Tt,Dt,!1,Vt,null,null),Pt=Rt.exports,jt=i("uiKT"),Ft=i("aozt"),Mt=i.n(Ft),Xt=i("3khs"),zt=i.n(Xt);u.a.use(zt.a,Mt.a),u.a.component("alert",J),u.a.component("loading",et),u.a.component("swiper",wt),u.a.component("SwiperItem",Ct),u.a.component("previewer",Pt),u.a.directive("transfer-dom",jt.a),Mt.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",u.a.prototype.BackFunction=function(){this.$router.go(-1)},c.a.attach(document.body),u.a.config.productionTip=!1,new u.a({router:p,store:I,render:function(t){return t(C)}}).$mount("#app-box")},hXcY:function(t,e){},vsE3:function(t,e){},wJPB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.da4a11b7c0dabd4994f9.js.map