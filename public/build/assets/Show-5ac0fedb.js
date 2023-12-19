import{A as h}from"./GridApp-a9521563.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{C as f}from"./Index-07eb770f.js";import{Z as x,i as b,r as s,o as r,c as i,a as d,w as l,F as c,b as t,f as w,h as v,t as o,n as y}from"./app-dab4910b.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";const k={components:{AppLayout:h,Head:x,Link:b,ClassSvg:f},props:{data:{type:Object,default:{}}}},S={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},C={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},B={class:"shrink grow"},L={class:"text-md font-bold text-brand-600 md:text-xl"},N={class:"flex items-center gap-2"},A=t("span",{class:"text-gray-600"}," শিক্ষার্থী: ",-1),H={class:"font-bold text-gray-800"},M={class:"flex items-center gap-2"},Z=t("span",{class:"text-gray-600"},"আসন নং:",-1),j=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-brand-600"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1);function F(n,T,a,V,$,z){const m=s("Head"),_=s("ClassSvg"),p=s("Link"),g=s("app-layout");return r(),i(c,null,[d(m,{title:`${a.data.exam.name} এর ক্লাস সমুহ`},null,8,["title"]),d(g,{pageTitle:`${a.data.exam.name} এর ক্লাস সমুহ`},{default:l(()=>[t("div",S,[(r(!0),i(c,null,w(a.data.classes,e=>(r(),v(p,{key:e.id,href:n.route("admit-card.list",[a.data.exam.id,e.id]),class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:l(()=>[t("div",C,o(n.$e2bnumber(e.code).padStart(2,n.$e2bnumber("0"))),1),t("div",B,[t("div",L,o(e.name),1),t("div",N,[d(_,{class:"w-5 text-gray-400"}),A,t("span",H,o(n.$e2bnumber(e.totalStudent))+" জন ",1)]),t("div",M,[Z,t("span",{class:y(["font-bold text-gray-800",{"text-brand-600":a.data.seat_plan_classes.includes(Number(e.id)||String(e.id)),"text-rose-600":!a.data.seat_plan_classes.includes(Number(e.id)||String(e.id))}])},o(a.data.seat_plan_classes.includes(Number(e.id)||String(e.id))?"প্রদর্শনীয়":"অনুপস্থিত"),3)])]),j]),_:2},1032,["href"]))),128))])]),_:1},8,["pageTitle"])],64)}const J=u(k,[["render",F]]);export{J as default};
