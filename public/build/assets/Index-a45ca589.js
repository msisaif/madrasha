import{A as _}from"./GridApp-a9521563.js";import{Z as u,i as b,r as e,o as h,c as w,a as t,w as o,F as A,b as N,t as i,e as x}from"./app-dab4910b.js";import{S as g}from"./DataTable-b2741429.js";import{A as k}from"./ActionButtonShow-6436f241.js";import{A as B}from"./ActionButtonEdit-24f73e20.js";import{A as T}from"./AddNewButton-f0b3e038.js";import{T as y}from"./TableTd-cff43bc9.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";import"./Index-07eb770f.js";import"./Label-b6c50d3c.js";import"./PaginatorLinks-d43f818c.js";const v={components:{AppLayout:_,SimpleTable:g,Head:u,Link:b,ActionButtonShow:k,ActionButtonEdit:B,AddNewButton:T,TableTd:y},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"প্রকাশের তারিখ",align:"left"},{title:"বিষয়",align:"left"},{title:"Action",align:"center"}]}}},L={class:"overflow-hidden whitespace-normal break-all line-clamp-6"};function S(n,V,s,C,r,D){const c=e("Head"),l=e("table-td"),d=e("Link"),m=e("action-button-edit"),p=e("simple-table"),f=e("app-layout");return h(),w(A,null,[t(c,{title:"Notice"}),t(f,{pageTitle:"Notices",addNewHref:n.route("notices.create")},{default:o(()=>[t(p,{collections:s.data.collections,filters:s.data.filters,columns:r.columns},{default:o(({item:a})=>[t(l,{class:"text-left"},{default:o(()=>[N("div",L,i(a.formatedDate),1)]),_:2},1024),t(l,{class:"text-left"},{default:o(()=>[t(d,{href:n.route("notices.show",a.id),class:"text-brand-600 hover:underline"},{default:o(()=>[x(i(a.title),1)]),_:2},1032,["href"])]),_:2},1024),t(l,{class:"text-left"},{default:o(()=>[t(m,{href:n.route("notices.edit",a.id)},null,8,["href"])]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1},8,["addNewHref"])],64)}const P=H(v,[["render",S]]);export{P as default};
