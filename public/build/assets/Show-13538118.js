import{A as h}from"./GridApp-da8eb0a1.js";import{o as d,h as f,a as o,Z as g,i as v,r as a,c as r,w as x,F as c,b as t,t as s,g as b,f as y}from"./app-92b5b829.js";import{A as w}from"./ActionButtonEdit-e5b7be6e.js";import{F as k}from"./FormHeading-1be968fd.js";import{I as B}from"./InlineData-341d8041.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";function A(i,l){return d(),f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[o("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clip-rule":"evenodd"})])}const H={components:{AppLayout:h,Head:g,Link:v,ActionButtonEdit:w,FormHeading:k,InlineData:B,PlusCircleIcon:A},props:{data:{type:Object,default:{}}}},I={class:"w-full max-w-xl rounded border bg-white p-3 shadow md:p-4"},S={class:"flex items-end justify-end"},j={class:"flex items-center gap-2"},D={class:"mt-4 grid gap-4"},E={class:"rounded-lg border px-4 py-2 font-bold text-gray-800"};const F={class:"w-full max-w-xl rounded border bg-white p-3 shadow md:p-4"},V={class:"grid grid-cols-2 gap-4"},L=t("div",{class:"col-span-full flex items-center justify-center rounded border bg-gray-200 p-2"}," Academic Sessions ",-1),N={class:"flex items-center gap-1"},P=t("div",{class:"text-gray-400"},"Session:",-1),z={class:"font-bold"},$={class:"flex items-center gap-1"},M=t("div",{class:"text-gray-400"},"Bengali:",-1),O={class:"font-bold"},Z={class:"flex items-center gap-1"},q=t("div",{class:"text-gray-400"},"English:",-1),G={class:"font-bold"},J={class:"flex items-center gap-1"},K=t("div",{class:"text-gray-400"},"Arabic:",-1),Q={class:"font-bold"},R={class:"col-span-full flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-sky-600 p-3"},T=t("div",{class:"text-sky-600 md:text-xl"}," নতুন সেশন যুক্ত করুণ ",-1);function U(i,l,n,W,X,Y){const _=a("Head"),p=a("action-button-edit"),m=a("PlusCircleIcon"),u=a("app-layout");return d(),r(c,null,[o(_,{title:"Department"}),o(u,null,{default:x(()=>[t("div",I,[t("div",S,[t("div",j,[o(p,{href:i.route("departments.edit",n.data.department.id)},null,8,["href"])])]),t("div",D,[t("div",E,s(n.data.department.name),1),b("",!0)])]),t("div",F,[t("div",V,[L,(d(!0),r(c,null,y(n.data.department.academic_sessions,e=>(d(),r("div",{key:e.value,class:"grid gap-4 rounded-xl border p-4"},[t("div",N,[P,t("div",z,s(e.value),1)]),t("div",$,[M,t("div",O,s(e.bengali),1)]),t("div",Z,[q,t("div",G,s(e.english),1)]),t("div",J,[K,t("div",Q,s(e.arabic),1)])]))),128)),t("div",R,[o(m,{class:"w-8 text-sky-600"}),T])])])]),_:1})],64)}const ct=C(H,[["render",U]]);export{ct as default};
