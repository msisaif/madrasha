import{A as u}from"./GridApp-da8eb0a1.js";import{Z as _,i as g,r as e,o,c as r,a as i,w as n,F as l,b as a,f as h,h as x,t as d}from"./app-92b5b829.js";import{S as w}from"./DataTable-9f441c6a.js";import{A as y}from"./ActionButtonShow-d57006a9.js";import{A}from"./ActionButtonEdit-e5b7be6e.js";import{A as k}from"./AddNewButton-48f4400a.js";import{T as B}from"./TableTd-0861edc0.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";import"./Label-ad23df54.js";import"./PaginatorLinks-15bc8b7e.js";const v={components:{AppLayout:u,SimpleTable:w,Head:_,Link:g,ActionButtonShow:y,ActionButtonEdit:A,AddNewButton:k,TableTd:B},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"ভাউচার নং",align:"left"},{title:"তারিখ",align:"left"},{title:"খাত",align:"left"},{title:"ব্যয়কারী",align:"left"},{title:"টাকা",align:"right"}]}}},H={class:"grid w-full gap-2 md:grid-cols-2"},L={class:"text-brand-600 text-xl md:text-3xl"},N={class:"line-clamp-1 text-xs text-gray-700 md:text-sm"};function T(s,S,c,$,C,E){const p=e("Head"),m=e("Link"),f=e("app-layout");return o(),r(l,null,[i(p,{title:"Department তালিকা"}),i(f,{pageTitle:"Department তালিকা",addNewHref:s.route("departments.create")},{default:n(()=>[a("div",H,[(o(!0),r(l,null,h(c.data.collections.data,t=>(o(),x(m,{key:t.id,class:"space-y-2 rounded bg-white p-4 shadow transition-all ease-out hover:scale-105",href:s.route("departments.show",t.id)},{default:n(()=>[a("div",L,d(t.name),1),a("div",N,d(t.description),1)]),_:2},1032,["href"]))),128))])]),_:1},8,["addNewHref"])],64)}const P=b(v,[["render",T]]);export{P as default};
