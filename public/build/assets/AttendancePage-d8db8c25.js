import{Z as k,i as h,r as l,o as s,c as r,a as n,w as f,F as o,b as t,t as a,f as c}from"./app-dab4910b.js";import{A as w}from"./GridApp-a9521563.js";import{A as g}from"./ApplicationLogo-789de0bc.js";import{P as y}from"./PrintButton-ae8d55c7.js";import{L as v}from"./LetterHead-3ef3c212.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./Index-07eb770f.js";const A={components:{Head:k,Link:h,AppLayout:w,ApplicationLogo:g,PrintButton:y,LetterHead:v},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"রোল",align:"center"},{title:"নাম",align:"left"}]}}},$={class:"w-full max-w-xl rounded py-2 print:hidden"},B={class:"min-w-max mx-auto scale-x-90 print:scale-100 px-2 print:px-0 bg-white relative -z-20 overflow-hidden"},H={class:"absolute inset-0 w-full h-full -z-10 flex justify-center items-center"},P=["src"],j=t("h2",{class:"text-center text-xl font-bold leading-5 text-gray-700 mt-2"}," দৈনিক শিক্ষার্থী হাজিরা ",-1),z={class:"flex items-center justify-center gap-6 text-sm font-bold"},C=t("div",null,"মাস : ... ... ... ... ... ... ...",-1),F={class:"min-w-max mx-auto"},N=t("th",{class:"border border-black px-1 text-center text-xs text-black"}," রোল ",-1),V=t("th",{class:"border border-black px-1 text-left text-xs text-black"}," নাম ",-1),D=t("th",{class:"border border-black px-1 text-center text-xs text-black"}," ধরণ ",-1),E=t("th",{class:"border border-black px-1 text-center text-xs text-black"}," উপস্থিতি ",-1),O=t("th",{class:"border border-black px-1 text-center text-xs text-black"}," অনুপস্থিতি ",-1),S={class:"border border-black px-1 text-center text-xs text-black"},Z={class:"min-w-max border border-black px-1 text-xs text-black"},q={class:"min-w-max border border-black px-1 text-center text-xs text-black"},G=t("td",{class:"min-w-max border border-black px-1 text-center text-xs text-black"},null,-1),I=t("td",{class:"min-w-max border border-black px-1 text-center text-xs text-black"},null,-1),J=t("td",{class:"border border-black px-1 text-center text-xs text-black"},null,-1),K=t("td",{class:"h-12 border border-black px-1 text-center text-xs text-black"}," শিক্ষকের সাক্ষর ",-1),M=t("td",{class:"border border-black px-1 text-center text-xs text-black"},null,-1),Q=t("td",{class:"min-w-max border border-black px-1 text-center text-xs text-black"},null,-1),R=t("td",{class:"min-w-max border border-black px-1 text-center text-xs text-black"},null,-1);function T(d,U,x,W,X,Y){const b=l("Head"),i=l("print-button"),_=l("letter-head"),p=l("app-layout");return s(),r(o,null,[n(b,{title:"Attendance Page"}),n(p,null,{default:f(()=>[t("div",$,[n(i,{class:""})]),t("div",B,[t("div",H,[t("img",{class:"opacity-10",src:d.$page.props.settings.logoLink},null,8,P)]),n(_),j,t("div",z,[t("div",null,"শ্রেণী : "+a(x.data.class_info.name),1),C]),t("table",F,[t("thead",null,[t("tr",null,[N,V,D,(s(),r(o,null,c(31,e=>t("th",{class:"w-5 border border-black text-center text-xs text-black",key:e},a(d.$e2bnumber(e)),1)),64)),E,O])]),t("tbody",null,[(s(!0),r(o,null,c(x.data.admissions,(e,m)=>(s(),r("tr",{key:e.id},[t("td",S,a(d.$e2bnumber(m+1)),1),t("td",Z,a(e.student.name),1),t("td",q,a(e.student.resident_text),1),(s(),r(o,null,c(31,u=>t("td",{class:"border border-black text-center text-xs text-black",key:u})),64)),G,I]))),128)),t("tr",null,[J,K,M,(s(),r(o,null,c(31,e=>t("td",{class:"border border-black text-center text-xs text-black",key:e})),64)),Q,R])])])])]),_:1})],64)}const ct=L(A,[["render",T]]);export{ct as default};
