import{a as o,b as t,k as a,o as r,e as n,h as l,r as p,m as d,j as i}from"./entry.9bbcd5c6.js";const s="ITable",c=o({name:s,inheritAttrs:!1,props:{border:{type:Boolean,default:!1},condensed:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},responsive:{type:[Boolean,String],default:!0},nowrap:{type:Boolean,default:!1},color:{type:String,default:t(s,"color")}},computed:{classes(){return{...a(this),"-border":this.border,"-condensed":this.condensed,"-striped":this.striped,"-hover":this.hover,"-nowrap":this.nowrap,[`-responsive${typeof this.responsive=="boolean"?"":`-${this.responsive}`}`]:Boolean(this.responsive)}}}}),f={class:"table"};function u(e,h,_,m,y,v){return r(),n("div",d(e.$attrs,{class:["table-wrapper",e.classes]}),[l("table",f,[p(e.$slots,"default")])],16)}const b=i(c,[["render",u]]);export{b as default};