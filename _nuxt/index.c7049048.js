import{a,L as s,o as t,c as i,x as r,r as l,m as n,z as d,j as o}from"./entry.9bbcd5c6.js";const u="IListGroupItem",p=a({name:u,mixins:[s],inheritAttrs:!1,props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},tag:{type:String,default:"div"},tabindex:{type:[Number,String],default:0}},computed:{ariaDisabled(){return this.role==="link"?null:this.disabled?"true":"false"},classes(){return{"-active":this.active,"-disabled":this.disabled}},role(){return this.$attrs.to||this.$attrs.href?"link":"listitem"},tabIndex(){return this.disabled?-1:this.tabindex}}});function b(e,f,c,m,h,g){return t(),i(d(e.isTag),n(e.$attrs,{class:["list-group-item",e.classes],tag:e.tag,role:e.role,tabindex:e.tabIndex,disabled:e.disabled,"aria-disabled":e.ariaDisabled}),{default:r(()=>[l(e.$slots,"default")]),_:3},16,["tag","role","tabindex","class","disabled","aria-disabled"])}const $=o(p,[["render",b]]);export{$ as default};