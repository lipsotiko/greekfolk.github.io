import{g as o}from"./valueByPath.9afb6b32.js";import{a as n,w as l,v as c,o as r,c as u,x as m,e as t,F as h,G as f,y as p,f as i,T as d,j as _}from"./entry.c55b7e60.js";const y="IFormError",v=n({name:y,inject:{formGroup:{default:()=>({})},form:{default:()=>({})}},props:{for:{type:String,default:""},visible:{type:[Array,String],default:()=>["touched","dirty","invalid"]}},computed:{parent(){return this.formGroup.$?this.formGroup:this.form},schema(){return this.for!==""?o(this.parent.schema||{},`${this.for}`):this.parent.schema||{}},errors(){return this.schema.errors||[]},isVisible(){let e=!0;return this.schema&&this.visible&&[].concat(this.visible).forEach(s=>{e=e&&this.schema[s]}),e}}}),g={key:0,class:"form-error","aria-live":"polite"};function b(e,s,$,k,w,B){return e.schema?l((r(),u(d,{key:0,name:"fade-in-transition"},{default:m(()=>[e.errors.length>0?(r(),t("ul",g,[(r(!0),t(h,null,f(e.errors,a=>(r(),t("li",null,p(a.message),1))),256))])):i("",!0)]),_:1},512)),[[c,e.isVisible]]):i("",!0)}const V=_(v,[["render",b]]);export{V as default};