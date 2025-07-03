import{d as _,P as u,z as h,f as n,g as t,t as s,B as r,F as f,Q as g,o as l,i as v,e as x,E as b}from"../modules/vue-ElOxmkUr.js";import{l as k,k as y,c as m}from"../index-wkiAlmV5.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BIg0-W2h.js";import"../modules/shiki-JTWoPtEB.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},z={class:"opacity-50"},C={key:0,class:"border-main mb-8"},j=_({__name:"print",setup(D){const{slides:d,total:p}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(l(),n("div",w,[t("div",B,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),n(f,null,g(i.value,(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",z,s(e==null?void 0:e.no)+"/"+s(r(p)),1),b(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),n("hr",C)):v("v-if",!0)]))),128))])]))}});export{j as default};
