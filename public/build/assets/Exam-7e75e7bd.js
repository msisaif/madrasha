import{A as g}from"./GridApp-a9521563.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{C as u,E as w}from"./Index-07eb770f.js";import{Z as x,i as v,r as s,o as a,c as n,a as o,w as d,F as i,b as t,f as b,h as k,t as l}from"./app-dab4910b.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";const y={components:{AppLayout:g,Head:x,Link:v,ClassSvg:u,ExamSvg:w},props:{data:{type:Object,default:{}}}},E={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},B={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},L={class:"shrink grow"},S={class:"text-md font-bold text-brand-600 md:text-xl"},A={class:"flex items-center gap-2"},C={class:"text-gray-600"},$=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-brand-600"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1);function H(r,M,c,Z,j,F){const p=s("Head"),m=s("ExamSvg"),_=s("Link"),f=s("app-layout");return a(),n(i,null,[o(p,{title:"প্রশ্নপত্র : পরীক্ষা সমুহ"}),o(f,{pageTitle:"প্রশ্নপত্র : পরীক্ষা সমুহ"},{default:d(()=>[t("div",E,[(a(!0),n(i,null,b(c.data.exams,e=>(a(),k(_,{key:e.id,href:r.route("question-papers.classes",e.id),class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:d(()=>[t("div",B,[o(m,{class:"w-6"})]),t("div",L,[t("div",S,l(e.name),1),t("div",A,[t("span",C," সেশন: "+l(r.$e2bnumber(e.session))+" হিজরি ",1)])]),$]),_:2},1032,["href"]))),128))])]),_:1})],64)}const z=h(y,[["render",H]]);export{z as default};
