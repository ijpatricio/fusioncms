(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{L3KT:function(t,e,s){"use strict";s.r(e);var a={head:{title:function(){return{inner:"Themes"}}},data:function(){return{themes:[]}},methods:{setAsActive:function(t){var e=this;axios.patch("/api/theme/".concat(t)).then((function(){e.themes.forEach((function(e){e.active=e.slug===t}))}))}},beforeRouteEnter:function(t,e,s){axios.all([axios.get("/api/themes")]).then(axios.spread((function(t){s((function(e){e.themes=t.data.data}))})))}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"fill-drip"}},[t._v("Themes")])],1),t._v(" "),s("div",{staticClass:"row"},t._l(t.themes,(function(e){return s("div",{key:e.name,staticClass:"col mb-6 w-full md:w-1/2 xl:w-1/4"},[s("p-card",{attrs:{"no-body":""}},[s("img",{staticClass:"w-full rounded-t shadow",attrs:{src:e.preview,alt:e.name}}),t._v(" "),s("div",{staticClass:"card__body"},[s("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"text-gray-800 text-base"},[t._v(t._s(e.description))]),t._v(" "),s("div",{staticClass:"w-full border-t-2 border-gray-200 pt-3"},[e.active?s("p",{staticClass:"text-center"},[t._v("Currently Active")]):s("p-button",{staticClass:"w-full",on:{click:function(s){return t.setAsActive(e.slug)}}},[t._v("Set as active")])],1)])])],1)})),0),t._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"themes.settings"}}},[t._v("Go Back")])],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);