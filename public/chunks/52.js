(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{qIk6:function(t,e,a){"use strict";a.r(e);var i=a("zwY0"),l=a.n(i),n={name:"datetime-fieldtype",data:function(){return{datetime:"",flatpickr:null}},props:{field:{type:Object,required:!0},value:{required:!1,default:""}},methods:{emitEvent:function(t,e,a){var i=a.parseDate(e),l=a.formatDate(i,"Y-m-d H:i:S");this.$emit("input",l)}},mounted:function(){this.datetime=this.value,this.flatpickr=l()("#flatpickr_"+this.field.handle,{altInput:!0,enableTime:this.field.settings.time,altFormat:this.field.settings.format||"Y-m-d",minuteIncrement:1,allowInput:!1,clickOpens:!1,defaultDate:this.value+"+00.00",onChange:this.emitEvent,onValueUpdate:this.inputChanged})}},s=a("KHd+"),d=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"datetime"},[a("label",{staticClass:"form__label",attrs:{for:t.field.handle}},[t._v(t._s(t.field.name))]),t._v(" "),a("div",{staticClass:"flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.datetime,expression:"datetime"}],staticClass:"datetime__input form__control mr-2",attrs:{id:"flatpickr_"+t.field.handle,name:t.field.handle,help:t.field.help,placeholder:t.field.settings.placeholder},domProps:{value:t.datetime},on:{input:function(e){e.target.composing||(t.datetime=e.target.value)}}}),t._v(" "),a("a",{staticClass:"datetime__button button button--primary px-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.flatpickr.open()}}},[a("fa-icon",{attrs:{icon:"calendar-alt"}})],1)]),t._v(" "),t.field.help?a("div",{staticClass:"form__control--meta"},[a("div",{staticClass:"form__help"},[a("span",{domProps:{innerHTML:t._s(t.field.help)}})])]):t._e()])}),[],!1,null,null,null);e.default=d.exports}}]);