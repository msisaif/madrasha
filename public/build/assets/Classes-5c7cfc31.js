import{A as f}from"./GridApp-da8eb0a1.js";import{Z as g,i as b,r as s,o as d,c as i,a as n,w as p,F as c,b as e,f as h,t as r,e as x}from"./app-92b5b829.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{M as v}from"./Index-381fcbc5.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";const w={components:{AppLayout:f,Head:g,Link:b,MoneyReceiptSvg:v},props:{data:{type:Object,default:{}}}},k={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4"},S={class:"flex h-10 w-10 shrink-0 grow-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-gray-500 md:h-12 md:w-12 md:text-2xl"},L={class:"shrink grow"},$={class:"text-md font-bold text-brand-600 md:text-xl"},M={class:"flex items-center gap-2"},B=e("span",{class:"text-gray-600"}," আদায়: ",-1),C={class:"font-bold text-gray-800"};function H(o,N,a,R,T,V){const l=s("Head"),m=s("MoneyReceiptSvg"),_=s("Link"),u=s("app-layout");return d(),i(c,null,[n(l,{title:"ক্লাস/বিভাগ সমুহ"}),n(u,{pageTitle:`ক্লাস/বিভাগ সমুহ (${a.data.purpose.title})`},{default:p(()=>[e("div",k,[(d(!0),i(c,null,h(a.data.classes,t=>(d(),i("div",{key:t.id,class:"flex items-center gap-2 rounded-md border bg-white p-2 hover:shadow md:gap-4 md:p-4"},[e("div",S,r(o.$e2bnumber(t.code).padStart(2,o.$e2bnumber("0"))),1),e("div",L,[e("div",$,r(t.name),1),e("div",M,[n(m,{class:"w-5 text-gray-400"}),B,e("span",C,r(o.$e2bnumber(a.data.totalPayment[t.id]))+" / "+r(o.$e2bnumber(t.totalStudent)),1)])]),n(_,{href:o.route("others.purpose.class",[a.data.purposeId,t.id]),class:"border bg-rose-600/70 px-3 pt-2 pb-1 text-white"},{default:p(()=>[x(" বিস্তারিত ")]),_:2},1032,["href"])]))),128))])]),_:1},8,["pageTitle"])],64)}const O=y(w,[["render",H]]);export{O as default};
