(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Byip:function(e,t,a){"use strict";a.r(t);var r=a("ke3Z"),s=a("5fFP"),o={data:function(){return{fieldsets:[],creatingFieldset:!1,form:new r.a({name:"",handle:"",description:"",fieldset:null,sidebar:"1",icon:"",route:"",template:"",status:"1"},!0)}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies").then((function(t){s.a.dispatch("navigation/fetchAdminNavigation"),toast("Taxonomy successfully created","success"),e.$router.push("/taxonomies")})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/fieldsets")]).then(axios.spread((function(e){a((function(t){t.fieldsets=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),t.fieldsets.unshift({label:"None",value:null}),t.$nextTick((function(){t.form.resetChangeListener()}))}))})))}},n=a("KHd+"),i=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"sitemap"}},[e._v("Create Taxonomy")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("General")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("What will this taxonomy be called and what will it organize?")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("p-input",{attrs:{name:"name",label:"Name",help:"What this taxonomy will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the taxonomy's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),a("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this taxonomy will organize and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),a("div",{staticClass:"flex"},[e.creatingFieldset?a("p-input",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to create? Don't forget to configure it afterwards.","has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}):a("p-select",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}),e._v(" "),a("div",{staticClass:"form__group ml-2"},[a("label",{staticClass:"form__label",attrs:{for:"create_fieldset"}},[e._v(" ")]),e._v(" "),e.creatingFieldset?e._e():a("p-button",{staticClass:"form__select-button font-mono",on:{click:function(t){e.creatingFieldset=!0}}},[e._v("+")]),e._v(" "),e.creatingFieldset?a("div",{staticClass:"flex"},[a("p-button",{staticClass:"form__select-button mr-1",attrs:{theme:"primary"},on:{click:function(e){e.preventDefault()}}},[e._v("Create")]),e._v(" "),a("p-button",{staticClass:"form__select-button",on:{click:function(t){e.creatingFieldset=!1}}},[e._v("Cancel")])],1):e._e()],1)],1)],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Customize")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize how your taxonomy will be found and displayed within the admin control panel.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-select",{attrs:{name:"sidebar",label:"Show in Sidebar",help:"Do you want this taxonomy to be shown in the sidebar?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(t){e.$set(e.form,"sidebar",t)},expression:"form.sidebar"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your taxonomy.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Route")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("If your taxonomy will be accessible from the frontend, you may define its route and template here.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}})],1)])])])]),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"taxonomies"}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Taxonomy")])],1)],1)])])],1)}),[],!1,null,null,null);t.default=i.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(e,t,a){"use strict";a("WjD0");function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,s;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&r(t.prototype,a),s&&r(t,s),e}(),o=a("5fFP");function n(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.d(t,"a",(function(){return i}));var i=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new s,this.originalData=t,this.hasChanges=!1,this.preventNavigation=a;var r=this;for(var o in this.__data={},t)this[o]=t[o],r.__data[o]=r[o],function(e){Object.defineProperty(r,e,{get:function(){return r.__data[e]},set:function(t){r.__data[e]=t,r.hasChanges||r.onFirstChange()}})}(o)}var t,a,r;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(r,s){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),r(e.data)})).catch((function(e){a.onFailure(e.response.data),s(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!1)}}])&&n(t.prototype,a),r&&n(t,r),e}()}}]);