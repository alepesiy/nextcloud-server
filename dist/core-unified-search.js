/*! For license information please see core-unified-search.js.LICENSE.txt */
!function(){"use strict";var n,e={91231:function(n,e,r){var i=r(17499),a=r(22200),o=r(9944),s=r(20144),c=r(74854),u=r(79753),l=r(16453),d=r(4820);function A(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){A(a,r,i,o,s,"next",n)}function s(n){A(a,r,i,o,s,"throw",n)}o(void 0)}))}}var p=(0,l.loadState)("unified-search","limit-default"),f=/[^-]in:([a-z_-]+)/gi,m=/-in:([a-z_-]+)/gi;function C(){return g.apply(this,arguments)}function g(){return(g=h(regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.default.get((0,u.generateOcsUrl)("search/providers"),{params:{from:window.location.pathname.replace("/index.php","")+window.location.search}});case 3:if(t=n.sent,!("ocs"in(e=t.data)&&"data"in e.ocs&&Array.isArray(e.ocs.data)&&e.ocs.data.length>0)){n.next=7;break}return n.abrupt("return",e.ocs.data);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:return n.abrupt("return",[]);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function v(n){var t=n.type,e=n.query,r=n.cursor,i=d.default.CancelToken.source(),a=function(){var n=h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",d.default.get((0,u.generateOcsUrl)("search/providers/{type}/search",{type:t}),{cancelToken:i.token,params:{term:e,cursor:r,from:window.location.pathname.replace("/index.php","")+window.location.search}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return{request:a,cancel:i.cancel}}var _=r(26932),b=r(56286),y=r.n(b),x=r(79440),w=r.n(x),k=r(20296),S=r.n(k),D=r(97e3),$=r.n(D),B=r(94094),E=r.n(B),R=r(63302),I=r(67536),q=r(85354),U=r.n(q),L={name:"HeaderMenu",directives:{ClickOutside:I.directive},mixins:[U()],props:{id:{type:String,required:!0},ariaLabel:{type:String,default:""},open:{type:Boolean,default:!1}},data:function(){return{opened:this.open,clickOutsideConfig:{handler:this.closeMenu,middleware:this.clickOutsideMiddleware}}},watch:{open:function(n){var t=this;this.opened=n,this.$nextTick((function(){t.opened?t.openMenu():t.closeMenu()}))}},mounted:function(){document.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){document.removeEventListener("keydown",this.onKeyDown)},methods:{toggleMenu:function(){this.opened?this.closeMenu():this.openMenu()},closeMenu:function(){this.opened&&(this.opened=!1,this.$emit("close"),this.$emit("update:open",!1))},openMenu:function(){this.opened||(this.opened=!0,this.$emit("open"),this.$emit("update:open",!0))},onKeyDown:function(n){"Escape"===n.key&&this.opened&&(n.preventDefault(),this.$emit("cancel"),this.opened=!1,this.$emit("update:open",!1))}}},O=r(93379),M=r.n(O),P=r(7795),z=r.n(P),Z=r(90569),j=r.n(Z),G=r(3565),T=r.n(G),F=r(19216),W=r.n(F),N=r(44589),Q=r.n(N),H=r(34769),K={};K.styleTagTransform=Q(),K.setAttributes=T(),K.insert=j().bind(null,"head"),K.domAPI=z(),K.insertStyleElement=W(),M()(H.Z,K),H.Z&&H.Z.locals&&H.Z.locals;var V=r(51900),Y=(0,V.Z)(L,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:n.clickOutsideConfig,expression:"clickOutsideConfig"}],staticClass:"header-menu",class:{"header-menu--opened":n.opened},attrs:{id:n.id}},[e("a",{staticClass:"header-menu__trigger",attrs:{href:"#","aria-label":n.ariaLabel,"aria-controls":"header-menu-"+n.id,"aria-expanded":n.opened,"aria-haspopup":"menu"},on:{click:function(t){return t.preventDefault(),n.toggleMenu.apply(null,arguments)}}},[n._t("trigger")],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.opened,expression:"opened"}],staticClass:"header-menu__wrapper",attrs:{id:"header-menu-"+n.id,role:"menu"}},[e("div",{staticClass:"header-menu__carret"}),n._v(" "),e("div",{staticClass:"header-menu__content"},[n._t("default")],2)])])}),[],!1,null,"51f09a15",null),J=Y.exports,X={name:"SearchResult",components:{Highlight:E()},props:{thumbnailUrl:{type:String,default:null},title:{type:String,required:!0},subline:{type:String,default:null},resourceUrl:{type:String,default:null},icon:{type:String,default:""},rounded:{type:Boolean,default:!1},query:{type:String,default:""},focused:{type:Boolean,default:!1}},data:function(){return{hasValidThumbnail:this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),loaded:!1}},computed:{isIconUrl:function(){if(this.icon.startsWith("/"))return!0;try{new URL(this.icon)}catch(n){return!1}return!0}},watch:{thumbnailUrl:function(){this.hasValidThumbnail=this.thumbnailUrl&&""!==this.thumbnailUrl.trim(),this.loaded=!1}},methods:{reEmitEvent:function(n){this.$emit(n.type,n)},onError:function(){this.hasValidThumbnail=!1},onLoad:function(){this.loaded=!0}}},nn=r(33068),tn={};tn.styleTagTransform=Q(),tn.setAttributes=T(),tn.insert=j().bind(null,"head"),tn.domAPI=z(),tn.insertStyleElement=W(),M()(nn.Z,tn),nn.Z&&nn.Z.locals&&nn.Z.locals;var en=(0,V.Z)(X,(function(){var n,t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"unified-search__result",class:{"unified-search__result--focused":t.focused},attrs:{href:t.resourceUrl||"#"},on:{click:t.reEmitEvent,focus:t.reEmitEvent}},[r("div",{staticClass:"unified-search__result-icon",class:(n={"unified-search__result-icon--rounded":t.rounded,"unified-search__result-icon--no-preview":!t.hasValidThumbnail&&!t.loaded,"unified-search__result-icon--with-thumbnail":t.hasValidThumbnail&&t.loaded},n[t.icon]=!t.loaded&&!t.isIconUrl,n),style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":""},attrs:{role:"img"}},[t.hasValidThumbnail?r("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],attrs:{src:t.thumbnailUrl,alt:""},on:{error:t.onError,load:t.onLoad}}):t._e()]),t._v(" "),r("span",{staticClass:"unified-search__result-content"},[r("h3",{staticClass:"unified-search__result-line-one",attrs:{title:t.title}},[r("Highlight",{attrs:{text:t.title,search:t.query}})],1),t._v(" "),t.subline?r("h4",{staticClass:"unified-search__result-line-two",attrs:{title:t.subline}},[t._v(t._s(t.subline))]):t._e()])])}),[],!1,null,"9dc2a344",null).exports,rn={name:"SearchResultPlaceholders",data:function(){return{light:null,dark:null}},mounted:function(){var n=getComputedStyle(document.documentElement);this.dark=n.getPropertyValue("--color-placeholder-dark"),this.light=n.getPropertyValue("--color-placeholder-light")},methods:{randWidth:function(){return Math.floor(20*Math.random())+30}}},an=r(44201),on={};on.styleTagTransform=Q(),on.setAttributes=T(),on.insert=j().bind(null,"head"),on.domAPI=z(),on.insertStyleElement=W(),M()(an.Z,on),an.Z&&an.Z.locals&&an.Z.locals;var sn=(0,V.Z)(rn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ul",[e("svg",{staticClass:"unified-search__result-placeholder-gradient"},[e("defs",[e("linearGradient",{attrs:{id:"unified-search__result-placeholder-gradient"}},[e("stop",{attrs:{offset:"0%","stop-color":n.light}},[e("animate",{attrs:{attributeName:"stop-color",values:n.light+"; "+n.light+"; "+n.dark+"; "+n.dark+"; "+n.light,dur:"2s",repeatCount:"indefinite"}})]),n._v(" "),e("stop",{attrs:{offset:"100%","stop-color":n.dark}},[e("animate",{attrs:{attributeName:"stop-color",values:n.dark+"; "+n.light+"; "+n.light+"; "+n.dark+"; "+n.dark,dur:"2s",repeatCount:"indefinite"}})])],1)],1)]),n._v(" "),n._l([1,2,3],(function(t){return e("li",{key:t},[e("svg",{staticClass:"unified-search__result-placeholder",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"url(#unified-search__result-placeholder-gradient)"}},[e("rect",{staticClass:"unified-search__result-placeholder-icon"}),n._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-one"}),n._v(" "),e("rect",{staticClass:"unified-search__result-placeholder-line-two",style:{width:"calc("+n.randWidth()+"%)"}})])])}))],2)}),[],!1,null,"9ed03c40",null).exports;function cn(n){return function(n){if(Array.isArray(n))return un(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return un(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?un(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function un(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function ln(n,t,e,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,i)}function dn(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){ln(a,r,i,o,s,"next",n)}function s(n){ln(a,r,i,o,s,"throw",n)}o(void 0)}))}}var An={name:"UnifiedSearch",components:{ActionButton:y(),Actions:w(),EmptyContent:$(),HeaderMenu:J,Highlight:E(),Magnify:R.Z,SearchResult:en,SearchResultPlaceholders:sn},data:function(){return{types:[],cursors:{},limits:{},loading:{},reached:{},requests:[],results:{},query:"",focused:null,defaultLimit:p,minSearchLength:2,open:!1}},computed:{typesIDs:function(){return this.types.map((function(n){return n.id}))},typesNames:function(){return this.types.map((function(n){return n.name}))},typesMap:function(){return this.types.reduce((function(n,t){return n[t.id]=t.name,n}),{})},ariaLabel:function(){return t("core","Search")},hasResults:function(){return 0!==Object.keys(this.results).length},orderedResults:function(){var n=this;return this.typesIDs.filter((function(t){return t in n.results})).map((function(t){return{type:t,list:n.results[t]}}))},availableFilters:function(){return Object.keys(this.results)},usedFiltersIn:function(){for(var n,t=[];null!==(n=f.exec(this.query));)t.push(n[1]);return t},usedFiltersNot:function(){for(var n,t=[];null!==(n=m.exec(this.query));)t.push(n[1]);return t},isShortQuery:function(){return this.query&&this.query.trim().length<2},isValidQuery:function(){return this.query&&""!==this.query.trim()&&!this.isShortQuery},isDoneSearching:function(){return Object.values(this.reached).every((function(n){return!1===n}))},isLoading:function(){return Object.values(this.loading).some((function(n){return!0===n}))}},created:function(){var n=this;return dn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:n.types=t.sent,n.logger.debug("Unified Search initialized with the following providers",n.types);case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var n=this;document.addEventListener("keydown",(function(t){t.ctrlKey&&"f"===t.key&&!n.open&&(t.preventDefault(),n.open=!0,n.focusInput()),n.open&&("ArrowDown"===t.key&&n.focusNext(t),"ArrowUp"===t.key&&n.focusPrev(t))}))},methods:{onOpen:function(){var n=this;return dn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.focusInput(),t.next=3,C();case 3:n.types=t.sent;case 4:case"end":return t.stop()}}),t)})))()},onClose:function(){(0,c.emit)("nextcloud:unified-search.close")},onReset:function(){(0,c.emit)("nextcloud:unified-search.reset"),this.logger.debug("Search reset"),this.query="",this.resetState(),this.focusInput()},resetState:function(){var n=this;return dn(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.cursors={},n.limits={},n.reached={},n.results={},n.focused=null,t.next=7,n.cancelPendingRequests();case 7:case"end":return t.stop()}}),t)})))()},cancelPendingRequests:function(){var n=this;return dn(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.requests.slice(0),n.requests=[],t.next=4,Promise.all(e.map((function(n){return n()})));case 4:case"end":return t.stop()}}),t)})))()},focusInput:function(){var n=this;this.$nextTick((function(){n.$refs.input.focus(),n.$refs.input.select()}))},onInputEnter:function(){this.hasResults?this.getResultsList()[0].click():this.onInput()},onInput:function(){var n=this;return dn(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,c.emit)("nextcloud:unified-search.search",{query:n.query}),""!==n.query.trim()&&!n.isShortQuery){t.next=3;break}return t.abrupt("return");case 3:return e=n.typesIDs,r=n.query,n.usedFiltersNot.length>0&&(e=n.typesIDs.filter((function(t){return-1===n.usedFiltersNot.indexOf(t)}))),n.usedFiltersIn.length>0&&(e=n.typesIDs.filter((function(t){return n.usedFiltersIn.indexOf(t)>-1}))),r=r.replace(f,"").replace(m,""),t.next=10,n.resetState();case 10:n.$set(n.loading,"all",!0),n.logger.debug("Searching ".concat(r," in"),e),Promise.all(e.map(function(){var t=dn(regeneratorRuntime.mark((function t(e){var i,a,o,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=v({type:e,query:r}),a=i.request,o=i.cancel,n.requests.push(o),t.next=5,a();case 5:return s=t.sent,(c=s.data).ocs.data.entries.length>0?n.$set(n.results,e,c.ocs.data.entries):n.$delete(n.results,e),c.ocs.data.cursor?n.$set(n.cursors,e,c.ocs.data.cursor):c.ocs.data.isPaginated||n.$set(n.limits,e,n.defaultLimit),c.ocs.data.entries.length<n.defaultLimit&&n.$set(n.reached,e,!0),null===n.focused&&(n.focused=0),t.abrupt("return",1);case 14:if(t.prev=14,t.t0=t.catch(0),n.$delete(n.results,e),!t.t0.response||!t.t0.response.status){t.next=21;break}return n.logger.error("Error searching for ".concat(n.typesMap[e]),t.t0),(0,_.x2)(n.t("core","An error occurred while searching for {type}",{type:n.typesMap[e]})),t.abrupt("return",0);case 21:return t.abrupt("return",2);case 22:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(n){return t.apply(this,arguments)}}())).then((function(t){t.some((function(n){return 2===n}))||(n.loading={})}));case 13:case"end":return t.stop()}}),t)})))()},onInputDebounced:S()((function(n){this.onInput(n)}),200),loadMore:function(n){var t=this;return dn(regeneratorRuntime.mark((function e(){var r,i,a,o,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading[n]){e.next=2;break}return e.abrupt("return");case 2:if(!t.cursors[n]){e.next=14;break}return r=v({type:n,query:t.query,cursor:t.cursors[n]}),i=r.request,a=r.cancel,t.requests.push(a),e.next=7,i();case 7:o=e.sent,(s=o.data).ocs.data.cursor&&t.$set(t.cursors,n,s.ocs.data.cursor),s.ocs.data.entries.length>0&&(c=t.results[n]).push.apply(c,cn(s.ocs.data.entries)),s.ocs.data.entries.length<t.defaultLimit&&t.$set(t.reached,n,!0),e.next=15;break;case 14:t.limits[n]&&t.limits[n]>=0&&(t.limits[n]+=t.defaultLimit,t.limits[n]>=t.results[n].length&&t.$set(t.reached,n,!0));case 15:null!==t.focused&&t.$nextTick((function(){t.focusIndex(t.focused)}));case 16:case"end":return e.stop()}}),e)})))()},limitIfAny:function(n,t){return t in this.limits?n.slice(0,this.limits[t]):n},getResultsList:function(){return this.$el.querySelectorAll(".unified-search__results .unified-search__result")},focusFirst:function(n){var t=this.getResultsList();t&&t.length>0&&(n&&n.preventDefault(),this.focused=0,this.focusIndex(this.focused))},focusNext:function(n){if(null!==this.focused){var t=this.getResultsList();t&&t.length>0&&this.focused+1<t.length&&(n.preventDefault(),this.focused++,this.focusIndex(this.focused))}else this.focusFirst(n)},focusPrev:function(n){if(null!==this.focused){var t=this.getResultsList();t&&t.length>0&&this.focused>0&&(n.preventDefault(),this.focused--,this.focusIndex(this.focused))}else this.focusFirst(n)},focusIndex:function(n){var t=this.getResultsList();t&&t[n]&&t[n].focus()},setFocusedIndex:function(n){var t=n.target,e=cn(this.getResultsList()).findIndex((function(n){return n===t}));e>-1&&(this.focused=e)},onClickFilter:function(n){this.query="".concat(this.query," ").concat(n).replace(/ {2}/g," ").trim(),this.onInput()}}},hn=An,pn=r(55352),fn={};fn.styleTagTransform=Q(),fn.setAttributes=T(),fn.insert=j().bind(null,"head"),fn.domAPI=z(),fn.insertStyleElement=W(),M()(pn.Z,fn),pn.Z&&pn.Z.locals&&pn.Z.locals;var mn=(0,V.Z)(hn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("HeaderMenu",{staticClass:"unified-search",attrs:{id:"unified-search","exclude-click-outside-classes":"popover",open:n.open,"aria-label":n.ariaLabel},on:{"update:open":function(t){n.open=t},open:n.onOpen,close:n.onClose},scopedSlots:n._u([{key:"trigger",fn:function(){return[e("Magnify",{staticClass:"unified-search__trigger",attrs:{size:20,"fill-color":"var(--color-primary-text)"}})]},proxy:!0}])},[n._v(" "),e("div",{staticClass:"unified-search__input-wrapper"},[e("form",{staticClass:"unified-search__form",class:{"icon-loading-small":n.isLoading},attrs:{role:"search"},on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),n.onInputEnter.apply(null,arguments)},reset:function(t){return t.preventDefault(),t.stopPropagation(),n.onReset.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.query,expression:"query"}],ref:"input",staticClass:"unified-search__form-input",class:{"unified-search__form-input--with-reset":!!n.query},attrs:{type:"search",placeholder:n.t("core","Search {types} …",{types:n.typesNames.join(", ")})},domProps:{value:n.query},on:{input:[function(t){t.target.composing||(n.query=t.target.value)},n.onInputDebounced],keypress:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),t.stopPropagation(),n.onInputEnter.apply(null,arguments))}}}),n._v(" "),n.query&&!n.isLoading?e("input",{staticClass:"unified-search__form-reset icon-close",attrs:{type:"reset","aria-label":n.t("core","Reset search"),value:""}}):n._e()]),n._v(" "),n.availableFilters.length>1?e("Actions",{staticClass:"unified-search__filters",attrs:{placement:"bottom"}},n._l(n.availableFilters,(function(t){return e("ActionButton",{key:t,attrs:{icon:"icon-filter",title:n.t("core","Search for {name} only",{name:n.typesMap[t]})},on:{click:function(e){return n.onClickFilter("in:"+t)}}},[n._v("\n\t\t\t\t"+n._s("in:"+t)+"\n\t\t\t")])})),1):n._e()],1),n._v(" "),n.hasResults?n._l(n.orderedResults,(function(t,r){var i=t.list,a=t.type;return e("ul",{key:a,staticClass:"unified-search__results",class:"unified-search__results-"+a,attrs:{"aria-label":n.typesMap[a]}},[n._l(n.limitIfAny(i,a),(function(t,i){return e("li",{key:t.resourceUrl},[e("SearchResult",n._b({attrs:{query:n.query,focused:0===n.focused&&0===r&&0===i},on:{focus:n.setFocusedIndex}},"SearchResult",t,!1))],1)})),n._v(" "),e("li",[n.reached[a]?n._e():e("SearchResult",{staticClass:"unified-search__result-more",attrs:{title:n.loading[a]?n.t("core","Loading more results …"):n.t("core","Load more results"),"icon-class":n.loading[a]?"icon-loading-small":""},on:{click:function(t){return t.preventDefault(),n.loadMore(a)},focus:n.setFocusedIndex}})],1)],2)})):[n.isLoading?e("SearchResultPlaceholders"):n.isValidQuery?e("EmptyContent",{attrs:{icon:"icon-search"}},[e("Highlight",{attrs:{text:n.t("core","No results for {query}",{query:n.query}),search:n.query}})],1):!n.isLoading||n.isShortQuery?e("EmptyContent",{attrs:{icon:"icon-search"},scopedSlots:n._u([n.isShortQuery?{key:"desc",fn:function(){return[n._v("\n\t\t\t\t"+n._s(n.n("core","Please enter {minSearchLength} character or more to search","Please enter {minSearchLength} characters  or more to search",n.minSearchLength,{minSearchLength:n.minSearchLength}))+"\n\t\t\t")]},proxy:!0}:null],null,!0)},[n._v("\n\t\t\t"+n._s(n.t("core","Start typing to search"))+"\n\t\t\t")]):n._e()]],2)}),[],!1,null,"59134936",null),Cn=mn.exports;r.nc=btoa((0,a.getRequestToken)());var gn=(0,i.getLoggerBuilder)().setApp("unified-search").detectUser().build();s.default.mixin({data:function(){return{logger:gn}},methods:{t:o.translate,n:o.translatePlural}}),new s.default({el:"#unified-search",name:"UnifiedSearchRoot",render:function(n){return n(Cn)}})},34769:function(n,t,e){var r=e(94015),i=e.n(r),a=e(23645),o=e.n(a)()(i());o.push([n.id,'.notifications:not(:empty)~#unified-search[data-v-51f09a15]{order:-1}.notifications:not(:empty)~#unified-search .header-menu__carret[data-v-51f09a15]{right:175px}.header-menu__trigger[data-v-51f09a15]{display:flex;align-items:center;justify-content:center;width:50px;height:100%;margin:0;padding:0;cursor:pointer;opacity:.6}.header-menu--opened .header-menu__trigger[data-v-51f09a15],.header-menu__trigger[data-v-51f09a15]:hover,.header-menu__trigger[data-v-51f09a15]:focus,.header-menu__trigger[data-v-51f09a15]:active{opacity:1}.header-menu__wrapper[data-v-51f09a15]{position:fixed;z-index:2000;top:50px;right:0;box-sizing:border-box;margin:0;border-radius:0 0 var(--border-radius) var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 5px var(--color-box-shadow))}.header-menu__carret[data-v-51f09a15]{position:absolute;right:128px;bottom:100%;width:0;height:0;content:" ";pointer-events:none;border:10px solid transparent;border-bottom-color:var(--color-main-background)}.header-menu__content[data-v-51f09a15]{overflow:auto;width:350px;max-width:100vw;min-height:66px;max-height:calc(100vh - 100px)}',"",{version:3,sources:["webpack://./core/src/components/HeaderMenu.vue"],names:[],mappings:"AAoKA,4DACC,QAAA,CACA,iFACC,WAAA,CAID,uCACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CAGD,oMAIC,SAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,QAAA,CACA,OAAA,CACA,qBAAA,CACA,QAAA,CACA,2DAAA,CACA,6CAAA,CAEA,qDAAA,CAGD,sCACC,iBAAA,CACA,WAAA,CACA,WAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CACA,mBAAA,CACA,6BAAA,CACA,gDAAA,CAGD,uCACC,aAAA,CACA,WAAA,CACA,eAAA,CACA,eAAA,CACA,8BAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.notifications:not(:empty) ~ #unified-search {\n\torder: -1;\n\t.header-menu__carret {\n\t\tright: 175px;\n\t}\n}\n.header-menu {\n\t&__trigger {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 50px;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tcursor: pointer;\n\t\topacity: .6;\n\t}\n\n\t&--opened &__trigger,\n\t&__trigger:hover,\n\t&__trigger:focus,\n\t&__trigger:active {\n\t\topacity: 1;\n\t}\n\n\t&__wrapper {\n\t\tposition: fixed;\n\t\tz-index: 2000;\n\t\ttop: 50px;\n\t\tright: 0;\n\t\tbox-sizing: border-box;\n\t\tmargin: 0;\n\t\tborder-radius: 0 0 var(--border-radius) var(--border-radius);\n\t\tbackground-color: var(--color-main-background);\n\n\t\tfilter: drop-shadow(0 1px 5px var(--color-box-shadow));\n\t}\n\n\t&__carret {\n\t\tposition: absolute;\n\t\tright: 128px;\n\t\tbottom: 100%;\n\t\twidth: 0;\n\t\theight: 0;\n\t\tcontent: ' ';\n\t\tpointer-events: none;\n\t\tborder: 10px solid transparent;\n\t\tborder-bottom-color: var(--color-main-background);\n\t}\n\n\t&__content {\n\t\toverflow: auto;\n\t\twidth: 350px;\n\t\tmax-width: 100vw;\n\t\tmin-height: calc(44px * 1.5);\n\t\tmax-height: calc(100vh - 50px * 2);\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=o},33068:function(n,t,e){var r=e(94015),i=e.n(r),a=e(23645),o=e.n(a)()(i());o.push([n.id,".unified-search__result[data-v-9dc2a344]{display:flex;height:44px;padding:10px;border-bottom:1px solid var(--color-border)}.unified-search__result[data-v-9dc2a344]:last-child{border-bottom:none}.unified-search__result--focused[data-v-9dc2a344],.unified-search__result[data-v-9dc2a344]:active,.unified-search__result[data-v-9dc2a344]:hover,.unified-search__result[data-v-9dc2a344]:focus{background-color:var(--color-background-hover)}.unified-search__result *[data-v-9dc2a344]{cursor:pointer}.unified-search__result-icon[data-v-9dc2a344]{overflow:hidden;width:44px;height:44px;border-radius:var(--border-radius);background-repeat:no-repeat;background-position:center center;background-size:32px}.unified-search__result-icon--rounded[data-v-9dc2a344]{border-radius:22px}.unified-search__result-icon--no-preview[data-v-9dc2a344]{background-size:32px}.unified-search__result-icon--with-thumbnail[data-v-9dc2a344]{background-size:cover}.unified-search__result-icon--with-thumbnail[data-v-9dc2a344]:not(.unified-search__result-icon--rounded){max-width:42px;max-height:42px;border:1px solid var(--color-border)}.unified-search__result-icon img[data-v-9dc2a344]{width:100%;height:100%;object-fit:cover;object-position:center}.unified-search__result-icon[data-v-9dc2a344],.unified-search__result-actions[data-v-9dc2a344]{flex:0 0 44px}.unified-search__result-content[data-v-9dc2a344]{display:flex;align-items:center;flex:1 1 100%;flex-wrap:wrap;min-width:0;padding-left:10px}.unified-search__result-line-one[data-v-9dc2a344],.unified-search__result-line-two[data-v-9dc2a344]{overflow:hidden;flex:1 1 100%;margin:1px 0;white-space:nowrap;text-overflow:ellipsis;color:inherit;font-size:inherit}.unified-search__result-line-two[data-v-9dc2a344]{opacity:.7;font-size:var(--default-font-size)}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResult.vue"],names:[],mappings:"AA0KA,yCACC,YAAA,CACA,WALgB,CAMhB,YALQ,CAMR,2CAAA,CAGA,oDACC,kBAAA,CAGD,gMAIC,8CAAA,CAGD,2CACC,cAAA,CAGD,8CACC,eAAA,CACA,UA3Be,CA4Bf,WA5Be,CA6Bf,kCAAA,CACA,2BAAA,CACA,iCAAA,CACA,oBAAA,CACA,uDACC,kBAAA,CAED,0DACC,oBAAA,CAED,8DACC,qBAAA,CAED,yGAEC,cAAA,CACA,eAAA,CACA,oCAAA,CAGD,kDAEC,UAAA,CACA,WAAA,CAEA,gBAAA,CACA,sBAAA,CAIF,+FAEC,aAAA,CAGD,iDACC,YAAA,CACA,kBAAA,CACA,aAAA,CACA,cAAA,CAEA,WAAA,CACA,iBAtEO,CAyER,oGAEC,eAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,aAAA,CACA,iBAAA,CAED,kDACC,UAAA,CACA,kCAAA",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use "sass:math";\n\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result {\n\tdisplay: flex;\n\theight: $clickable-area;\n\tpadding: $margin;\n\tborder-bottom: 1px solid var(--color-border);\n\n\t// Load more entry,\n\t&:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\t&--focused,\n\t&:active,\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t* {\n\t\tcursor: pointer;\n\t}\n\n\t&-icon {\n\t\toverflow: hidden;\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\tbackground-size: 32px;\n\t\t&--rounded {\n\t\t\tborder-radius: math.div($clickable-area, 2);\n\t\t}\n\t\t&--no-preview {\n\t\t\tbackground-size: 32px;\n\t\t}\n\t\t&--with-thumbnail {\n\t\t\tbackground-size: cover;\n\t\t}\n\t\t&--with-thumbnail:not(&--rounded) {\n\t\t\t// compensate for border\n\t\t\tmax-width: $clickable-area - 2px;\n\t\t\tmax-height: $clickable-area - 2px;\n\t\t\tborder: 1px solid var(--color-border);\n\t\t}\n\n\t\timg {\n\t\t\t// Make sure to keep ratio\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\n\t\t\tobject-fit: cover;\n\t\t\tobject-position: center;\n\t\t}\n\t}\n\n\t&-icon,\n\t&-actions {\n\t\tflex: 0 0 $clickable-area;\n\t}\n\n\t&-content {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex: 1 1 100%;\n\t\tflex-wrap: wrap;\n\t\t// Set to minimum and gro from it\n\t\tmin-width: 0;\n\t\tpadding-left: $margin;\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\toverflow: hidden;\n\t\tflex: 1 1 100%;\n\t\tmargin: 1px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Use the same color as the `a`\n\t\tcolor: inherit;\n\t\tfont-size: inherit;\n\t}\n\t&-line-two {\n\t\topacity: .7;\n\t\tfont-size: var(--default-font-size);\n\t}\n}\n\n'],sourceRoot:""}]),t.Z=o},44201:function(n,t,e){var r=e(94015),i=e.n(r),a=e(23645),o=e.n(a)()(i());o.push([n.id,".unified-search__result-placeholder-gradient[data-v-9ed03c40]{position:fixed;height:0;width:0;z-index:-1}.unified-search__result-placeholder[data-v-9ed03c40]{width:calc(100% - 2 * 10px);height:44px;margin:10px}.unified-search__result-placeholder-icon[data-v-9ed03c40]{width:44px;height:44px;rx:var(--border-radius);ry:var(--border-radius)}.unified-search__result-placeholder-line-one[data-v-9ed03c40],.unified-search__result-placeholder-line-two[data-v-9ed03c40]{width:calc(100% - 54px);height:1em;x:54px}.unified-search__result-placeholder-line-one[data-v-9ed03c40]{y:5px}.unified-search__result-placeholder-line-two[data-v-9ed03c40]{y:25px}","",{version:3,sources:["webpack://./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue"],names:[],mappings:"AA+DA,8DACC,cAAA,CACA,QAAA,CACA,OAAA,CACA,UAAA,CAGD,qDACC,2BAAA,CACA,WAZgB,CAahB,WAZQ,CAcR,0DACC,UAhBe,CAiBf,WAjBe,CAkBf,uBAAA,CACA,uBAAA,CAGD,4HAEC,uBAAA,CACA,UAAA,CACA,MAAA,CAGD,8DACC,KAAA,CAGD,8DACC,MAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n$clickable-area: 44px;\n$margin: 10px;\n\n.unified-search__result-placeholder-gradient {\n\tposition: fixed;\n\theight: 0;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.unified-search__result-placeholder {\n\twidth: calc(100% - 2 * #{$margin});\n\theight: $clickable-area;\n\tmargin: $margin;\n\n\t&-icon {\n\t\twidth: $clickable-area;\n\t\theight: $clickable-area;\n\t\trx: var(--border-radius);\n\t\try: var(--border-radius);\n\t}\n\n\t&-line-one,\n\t&-line-two {\n\t\twidth: calc(100% - #{$margin + $clickable-area});\n\t\theight: 1em;\n\t\tx: $margin + $clickable-area;\n\t}\n\n\t&-line-one {\n\t\ty: 5px;\n\t}\n\n\t&-line-two {\n\t\ty: 25px;\n\t}\n}\n\n"],sourceRoot:""}]),t.Z=o},55352:function(n,t,e){var r=e(94015),i=e.n(r),a=e(23645),o=e.n(a)()(i());o.push([n.id,".unified-search__trigger[data-v-59134936]{width:20px;height:20px}.unified-search__input-wrapper[data-v-59134936]{position:sticky;z-index:2;top:0;display:inline-flex;align-items:center;width:100%;background-color:var(--color-main-background)}.unified-search__filters[data-v-59134936]{margin:5px 10px}.unified-search__filters ul[data-v-59134936]{display:inline-flex;justify-content:space-between}.unified-search__form[data-v-59134936]{position:relative;width:100%;margin:10px}.unified-search__form[data-v-59134936]::after{right:6px;left:auto}.unified-search__form-input[data-v-59134936],.unified-search__form-reset[data-v-59134936]{margin:3px}.unified-search__form-input[data-v-59134936]{width:100%;height:34px;padding:6px}.unified-search__form-input[data-v-59134936],.unified-search__form-input[placeholder][data-v-59134936],.unified-search__form-input[data-v-59134936]::placeholder{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.unified-search__form-input[data-v-59134936]::-webkit-search-decoration,.unified-search__form-input[data-v-59134936]::-webkit-search-cancel-button,.unified-search__form-input[data-v-59134936]::-webkit-search-results-button,.unified-search__form-input[data-v-59134936]::-webkit-search-results-decoration{-webkit-appearance:none}.icon-loading-small .unified-search__form-input[data-v-59134936],.unified-search__form-input--with-reset[data-v-59134936]{padding-right:34px}.unified-search__form-reset[data-v-59134936]{position:absolute;top:0;right:0;width:28px;height:28px;padding:0;opacity:.5;border:none;background-color:transparent;margin-right:0}.unified-search__form-reset[data-v-59134936]:hover,.unified-search__form-reset[data-v-59134936]:focus,.unified-search__form-reset[data-v-59134936]:active{opacity:1}.unified-search__filters[data-v-59134936]{margin-right:5px}.unified-search__results[data-v-59134936]::before{display:block;margin:10px;margin-left:16px;content:attr(aria-label);color:var(--color-primary-element)}.unified-search .unified-search__result-more[data-v-59134936]{color:var(--color-text-maxcontrast)}.unified-search .empty-content[data-v-59134936]{margin:10vh 0}.unified-search .empty-content[data-v-59134936]  .empty-content__title{font-weight:normal;font-size:var(--default-font-size);padding:0 15px;text-align:center}","",{version:3,sources:["webpack://./core/src/views/UnifiedSearch.vue"],names:[],mappings:"AAspBC,0CACC,UAAA,CACA,WAAA,CAGD,gDACC,eAAA,CAEA,SAAA,CACA,KAAA,CACA,mBAAA,CACA,kBAAA,CACA,UAAA,CACA,6CAAA,CAGD,0CACC,eAAA,CACA,6CACC,mBAAA,CACA,6BAAA,CAIF,uCACC,iBAAA,CACA,UAAA,CACA,WAhCO,CAmCP,8CACC,SAlCa,CAmCb,SAAA,CAGD,0FAEC,UAAA,CAGD,6CACC,UAAA,CACA,WA9CY,CA+CZ,WA9Ca,CAgDb,iKAGC,eAAA,CACA,kBAAA,CACA,sBAAA,CAID,+SAIC,uBAAA,CAID,0HAEC,kBApEW,CAwEb,6CACC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,4BAAA,CACA,cAAA,CAEA,0JAGC,SAAA,CAKH,0CACC,gBAAA,CAIA,kDACC,aAAA,CACA,WApGM,CAqGN,gBAAA,CACA,wBAAA,CACA,kCAAA,CAIF,8DACC,mCAAA,CAGD,gDACC,aAAA,CAEA,uEACC,kBAAA,CACS,kCAAA,CACT,cAAA,CACA,iBAAA",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use "sass:math";\n\n$margin: 10px;\n$input-height: 34px;\n$input-padding: 6px;\n\n.unified-search {\n\t&__trigger {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t}\n\n\t&__input-wrapper {\n\t\tposition: sticky;\n\t\t// above search results\n\t\tz-index: 2;\n\t\ttop: 0;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tbackground-color: var(--color-main-background);\n\t}\n\n\t&__filters {\n\t\tmargin: math.div($margin, 2) $margin;\n\t\tul {\n\t\t\tdisplay: inline-flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t}\n\n\t&__form {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmargin: $margin;\n\n\t\t// Loading spinner\n\t\t&::after {\n\t\t\tright: $input-padding;\n\t\t\tleft: auto;\n\t\t}\n\n\t\t&-input,\n\t\t&-reset {\n\t\t\tmargin: math.div($input-padding, 2);\n\t\t}\n\n\t\t&-input {\n\t\t\twidth: 100%;\n\t\t\theight: $input-height;\n\t\t\tpadding: $input-padding;\n\n\t\t\t&,\n\t\t\t&[placeholder],\n\t\t\t&::placeholder {\n\t\t\t\toverflow: hidden;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t}\n\n\t\t\t// Hide webkit clear search\n\t\t\t&::-webkit-search-decoration,\n\t\t\t&::-webkit-search-cancel-button,\n\t\t\t&::-webkit-search-results-button,\n\t\t\t&::-webkit-search-results-decoration {\n\t\t\t\t-webkit-appearance: none;\n\t\t\t}\n\n\t\t\t// Ellipsis earlier if reset button is here\n\t\t\t.icon-loading-small &,\n\t\t\t&--with-reset {\n\t\t\t\tpadding-right: $input-height;\n\t\t\t}\n\t\t}\n\n\t\t&-reset {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\twidth: $input-height - $input-padding;\n\t\t\theight: $input-height - $input-padding;\n\t\t\tpadding: 0;\n\t\t\topacity: .5;\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tmargin-right: 0;\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__filters {\n\t\tmargin-right: math.div($margin, 2);\n\t}\n\n\t&__results {\n\t\t&::before {\n\t\t\tdisplay: block;\n\t\t\tmargin: $margin;\n\t\t\tmargin-left: $margin + $input-padding;\n\t\t\tcontent: attr(aria-label);\n\t\t\tcolor: var(--color-primary-element);\n\t\t}\n\t}\n\n\t.unified-search__result-more::v-deep {\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t.empty-content {\n\t\tmargin: 10vh 0;\n\n\t\t::v-deep .empty-content__title {\n\t\t\tfont-weight: normal;\n            font-size: var(--default-font-size);\n\t\t\tpadding: 0 15px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n}\n\n'],sourceRoot:""}]),t.Z=o}},r={};function i(n){var t=r[n];if(void 0!==t)return t.exports;var a=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=e,i.amdD=function(){throw new Error("define cannot be used indirect")},i.amdO={},n=[],i.O=function(t,e,r,a){if(!e){var o=1/0;for(l=0;l<n.length;l++){e=n[l][0],r=n[l][1],a=n[l][2];for(var s=!0,c=0;c<e.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((function(n){return i.O[n](e[c])}))?e.splice(c--,1):(s=!1,a<o&&(o=a));if(s){n.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,r,a]},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,{a:t}),t},i.d=function(n,t){for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},i.j=671,function(){var n={671:0};i.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,a,o=e[0],s=e[1],c=e[2],u=0;if(o.some((function(t){return 0!==n[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var l=c(i)}for(t&&t(e);u<o.length;u++)a=o[u],i.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return i.O(l)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var a=i.O(void 0,[874],(function(){return i(91231)}));a=i.O(a)}();
//# sourceMappingURL=core-unified-search.js.map?v=1aa55129f8148a307e3d