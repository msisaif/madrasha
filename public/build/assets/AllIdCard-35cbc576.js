import{Z as c,i as l,r as t,o,c as r,a,w as m,F as s,b as u,f as _}from"./app-dab4910b.js";import{A as b}from"./GridApp-a9521563.js";import{A as g}from"./ApplicationLogo-789de0bc.js";import{A as y}from"./AvatarView-6df52c45.js";import{S as x}from"./StaffIdCard-c4ef14d9.js";import{P as A}from"./PrintButton-ae8d55c7.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./Index-07eb770f.js";import"./Master-9dd18387.js";import"./qrcode.vue.esm-bdf6b5fe.js";const L={components:{Head:c,Link:l,AppLayout:b,ApplicationLogo:g,AvatarView:y,StaffIdCard:x,PrintButton:A},props:{staffList:{type:Object,default:{}},data:{type:Object,default:{}},signature:{type:String,default:""}}},S={class:"w-full max-w-xl rounded px-6 py-6 print:hidden"};function k(w,h,e,v,B,I){const i=t("Head"),p=t("print-button"),d=t("StaffIdCard"),f=t("app-layout");return o(),r(s,null,[a(i,{title:"Staff"}),a(f,null,{default:m(()=>[u("div",S,[a(p,{class:"mx-auto"})]),(o(!0),r(s,null,_(e.staffList,n=>(o(),r("div",{key:n.id,class:"border-b border-gray-700 pb-10 print:break-before-page print:border-0 print:pb-0"},[a(d,{staff:n,data:e.data,signature:e.signature},null,8,["staff","data","signature"])]))),128))]),_:1})],64)}const z=C(L,[["render",k]]);export{z as default};
