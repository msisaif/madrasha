import{A as g}from"./GridApp-da8eb0a1.js";import{Z as f,i as w,r as o,o as n,c as h,a,w as d,F as m,b as t,f as u,h as x,t as r}from"./app-92b5b829.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{C as v}from"./Index-381fcbc5.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";const k={components:{AppLayout:g,Head:f,Link:w,ClassSvg:v},props:{data:{type:Object,default:{}}}},y={class:"w-full grid gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4"},C={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},S={class:"shrink grow"},A={class:"text-md font-bold text-brand-600 md:text-xl"},B={class:"flex items-center gap-2"},M=t("span",{class:"text-gray-600"}," শিক্ষার্থী: ",-1),$={class:"font-bold text-gray-800"},L=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-brand-600"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1),Z={class:"shrink grow"},H=t("div",{class:"text-md font-bold text-white md:text-xl"}," সকল শিক্ষার্থী ",-1),j={class:"flex items-center gap-2"},F=t("span",{class:"text-white"}," মোট: ",-1),N={class:"font-bold text-white"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-white"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1);function D(e,E,l,O,T,q){const p=o("Head"),i=o("ClassSvg"),c=o("Link"),_=o("app-layout");return n(),h(m,null,[a(p,{title:"ক্লাস/বিভাগ সমুহ"}),a(_,{pageTitle:"ক্লাস/বিভাগ সমুহ"},{default:d(()=>[t("div",y,[(n(!0),h(m,null,u(l.data.classes,s=>(n(),x(c,{href:e.route("students.class.show",s.id),key:s.id,class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:d(()=>[t("div",C,r(e.$e2bnumber(s.code).padStart(2,e.$e2bnumber("0"))),1),t("div",S,[t("div",A,r(s.name),1),t("div",B,[a(i,{class:"w-5 text-gray-400"}),M,t("span",$,r(e.$e2bnumber(s.totalStudent))+" জন ",1)])]),L]),_:2},1032,["href"]))),128)),a(c,{href:e.route("students.index"),class:"flex items-center gap-2 rounded-md border bg-brand-600 p-2 hover:shadow md:gap-4 md:p-4"},{default:d(()=>[t("div",Z,[H,t("div",j,[a(i,{class:"w-5 text-white"}),F,t("span",N,r(e.$e2bnumber(l.data.totalStudent))+" জন ",1)])]),V]),_:1},8,["href"])])]),_:1})],64)}const Q=b(k,[["render",D]]);export{Q as default};
