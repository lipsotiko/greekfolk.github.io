import{a as r,b as o,k as n,o as i,e as l,r as m,m as u,j as p}from"./entry.9bbcd5c6.js";const t="IProgressBar",c=r({name:t,inject:{progress:{default:()=>({min:0,max:100})}},inheritAttrs:!1,props:{color:{type:String,default:o(t,"color","primary")},value:{type:[String,Number],default:0}},computed:{computedValue(){const e=typeof this.min=="string"?parseFloat(this.min):this.min,a=typeof this.value=="string"?parseFloat(this.value.replace("%","")):this.value,s=typeof this.max=="string"?parseFloat(this.max):this.max;return(a-e)*100/(s-e)},min(){return this.progress.min},max(){return this.progress.max},style(){return{width:`${this.computedValue}%`}},classes(){return{...n(this)}}}}),d=["aria-valuemin","aria-valuemax","aria-valuenow"];function h(e,a,s,f,g,v){return i(),l("div",u(e.$attrs,{class:["progress-bar",e.classes],style:e.style,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.computedValue}),[m(e.$slots,"default")],16,d)}const _=p(c,[["render",h]]);export{_ as default};