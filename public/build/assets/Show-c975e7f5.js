import{A as d}from"./GridApp-da8eb0a1.js";import{Z as m,r as o,o as r,c as u,a as t,w as _,F as p,b as n}from"./app-92b5b829.js";import{A as f}from"./ActionButtonEdit-e5b7be6e.js";import{F as v}from"./FormHeading-1be968fd.js";import{I as h}from"./InlineData-341d8041.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";const x={components:{AppLayout:d,Head:m,ActionButtonEdit:f,FormHeading:v,InlineData:h},props:{data:{type:Object,default:{}}}},b={class:"max-w-xl rounded border bg-white p-3 shadow md:p-4"},w={class:"flex items-end justify-end"},y={class:"flex items-center gap-2"},A={class:"grid gap-2"};function B(i,F,e,H,N,j){const l=o("Head"),s=o("action-button-edit"),a=o("inline-data"),c=o("app-layout");return r(),u(p,null,[t(l,{title:"ভাউচার তালিকা"}),t(c,{pageTitle:"ভাউচার তালিকা"},{default:_(()=>[n("div",b,[n("div",w,[n("div",y,[t(s,{href:i.route("incomes.edit",e.data.income.id)},null,8,["href"])])]),n("div",A,[t(a,{title:"খাত:",value:e.data.income.categoryName},null,8,["value"]),t(a,{title:"শিক্ষক/স্টাফ:",value:e.data.income.staffName},null,8,["value"]),t(a,{title:"টাকা:",value:e.data.income.amount},null,8,["value"]),t(a,{title:"তারিখ:",value:e.data.income.date},null,8,["value"]),t(a,{title:"বিবরণ:",value:e.data.income.description},null,8,["value"])])])]),_:1})],64)}const T=g(x,[["render",B]]);export{T as default};
