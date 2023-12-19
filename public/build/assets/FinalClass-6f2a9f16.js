import{A as w}from"./GridApp-da8eb0a1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{C as y}from"./Index-381fcbc5.js";import{Z as b,i as v,r as a,o,c as n,a as r,w as d,F as i,b as t,f as m,h as k,t as l}from"./app-92b5b829.js";import{r as L}from"./ArrowLeftIcon-bc402536.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";const A={components:{AppLayout:w,Head:b,Link:v,ClassSvg:y,ArrowLeftIcon:L},props:{data:{type:Object,default:{}}}},C={class:"w-full flex items-center justify-start py-2"},$=t("span",null,"পূর্বের পেজ",-1),j={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},S={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},B={class:"shrink grow"},F={class:"text-md font-bold text-brand-600 md:text-xl"},H={class:"flex items-center gap-2"},I=t("span",{class:"text-gray-600"}," বিষয়: ",-1),M={class:"font-bold text-gray-800"},Z={class:"flex items-center gap-1 flex-wrap"},N=t("span",{class:"text-gray-600"}," পরীক্ষা: ",-1),V=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",class:"h-10 w-10 shrink-0 grow-0 fill-brand-600"},[t("g",{id:"right_arrow",transform:"translate(-0.287 0)"},[t("path",{id:"circle",d:"M20,1.379A18.593,18.593,0,0,0,1.429,20,18.554,18.554,0,1,0,27.212,2.835,18.411,18.411,0,0,0,20,1.379M20,0A20,20,0,1,1,0,20,20,20,0,0,1,20,0Z",transform:"translate(0.287 0)"}),t("path",{id:"arrow_icn",d:"M1048.294,2575.52h18.868l-7.145-7.146a.918.918,0,0,1,1.3-1.3l8.711,8.712a.92.92,0,0,1,0,1.3l-8.711,8.708a.918.918,0,0,1-1.3-1.3l7.145-7.144h-18.867a.918.918,0,1,1,0-1.835Z",transform:"translate(-1038.832 -2556.308)"})])],-1);function D(e,E,_,O,T,q){const f=a("Head"),u=a("ArrowLeftIcon"),c=a("Link"),g=a("ClassSvg"),h=a("app-layout");return o(),n(i,null,[r(f,{title:"চূড়ান্ত ফলাফল : ক্লাস সমুহ"}),r(h,{pageTitle:"চূড়ান্ত ফলাফল : ক্লাস সমুহ"},{default:d(()=>[t("div",C,[r(c,{href:e.route("results.exams"),class:"flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-1 text-white"},{default:d(()=>[r(u,{class:"w-5"}),$]),_:1},8,["href"])]),t("div",j,[(o(!0),n(i,null,m(_.data.classes,s=>(o(),k(c,{key:s.id,href:e.route("results.final.subjects",[s.id])+"?session="+e.$page.props.current_academic_session.value,class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},{default:d(()=>[t("div",S,l(e.$e2bnumber(s.code).padStart(2,e.$e2bnumber("0"))),1),t("div",B,[t("div",F,l(s.name),1),t("div",H,[r(g,{class:"w-5 text-gray-400"}),I,t("span",M,l(e.$e2bnumber(s.totalSubject))+" টি ",1)]),t("div",Z,[N,(o(!0),n(i,null,m(s.exams,p=>(o(),n("span",{key:p.id,class:"font-bold text-sm text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded-lg"},l(p.name.replace(" পরীক্ষা","")),1))),128))])]),V]),_:2},1032,["href"]))),128))])]),_:1})],64)}const U=x(A,[["render",D]]);export{U as default};
