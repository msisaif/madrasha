import{A as u}from"./GridApp-da8eb0a1.js";import{Z as _,i as b,r as i,o as g,c as x,a as t,w as e,F as h,e as a,t as s}from"./app-92b5b829.js";import{S as A}from"./DataTable-9f441c6a.js";import{A as T}from"./ActionButtonShow-d57006a9.js";import{A as k}from"./ActionButtonEdit-e5b7be6e.js";import{A as w}from"./AddNewButton-48f4400a.js";import{T as B}from"./TableTd-0861edc0.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";import"./Label-ad23df54.js";import"./PaginatorLinks-15bc8b7e.js";const L={components:{AppLayout:u,SimpleTable:A,Head:_,Link:b,ActionButtonShow:T,ActionButtonEdit:k,AddNewButton:w,TableTd:B},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"রশিদ নং",align:"left"},{title:"শিক্ষার্থী",align:"left"},{title:"রোল",align:"left"},{title:"ক্লাস",align:"left"},{title:"বাবদ",align:"left"},{title:"জমা",align:"right"}]}}};function S(n,$,r,H,c,v){const m=i("Head"),d=i("Link"),l=i("table-td"),f=i("simple-table"),p=i("app-layout");return g(),x(h,null,[t(m,{title:"টাকা জমার রশিদ"}),t(p,{pageTitle:"টাকা জমার রশিদ"},{default:e(()=>[t(f,{collections:r.data.collections,filters:r.data.filters,columns:c.columns},{default:e(({item:o})=>[t(l,{class:"text-left"},{default:e(()=>[t(d,{href:n.route("payments.show",o.id),class:"text-brand-600 hover:underline"},{default:e(()=>[a(s(n.$e2bnumber(o.id)),1)]),_:2},1032,["href"])]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[a(s(o.admission.studentName),1)]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[a(s(n.$e2bnumber(o.admission.roll)),1)]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[a(s(o.admission.className),1)]),_:2},1024),t(l,{class:"text-left"},{default:e(()=>[a(s(o.purposeText),1)]),_:2},1024),t(l,{class:"text-right"},{default:e(()=>[a(s(n.$e2bnumber(o.paid))+" TK ",1)]),_:2},1024)]),_:1},8,["collections","filters","columns"])]),_:1})],64)}const G=N(L,[["render",S]]);export{G as default};
