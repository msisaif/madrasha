import{I as l}from"./InlineData-9519f5b7.js";import{_ as o}from"./_plugin-vue_export-helper-c27b6911.js";import{r as u,o as d,c as r,b as a,t as i,a as s}from"./app-dab4910b.js";const c={components:{InlineData:l},props:{data:{type:Object,default:{}}}},m={class:"space-y-1"},_={class:"flex items-center justify-center gap-4 font-bold"},v={class:"grid grid-cols-2 gap-8"},f={class:"flex items-center justify-center gap-4"},b={class:"grid grid-cols-2 gap-8"};function p(t,P,e,g,q,h){const n=u("inline-data");return d(),r("div",m,[a("div",_,[a("div",null,i(e.data.questionPaper.exam.name),1),a("div",null,i(t.$e2bnumber(e.data.questionPaper.exam.session))+" হিজরি",1)]),a("div",v,[s(n,{title:"শ্রেণী:",value:e.data.questionPaper.class.name,class:"justify-end"},null,8,["value"]),s(n,{title:"বিষয়:",value:e.data.subject.name},null,8,["value"])]),a("div",f,[a("div",null,i(e.data.questionPaper.book_name),1)]),a("div",b,[s(n,{title:"সময়:",value:`${e.data.questionPaper.hour?t.$e2bnumber(e.data.questionPaper.hour)+" ঘণ্টা":""} ${e.data.questionPaper.minute?t.$e2bnumber(e.data.questionPaper.minute)+" মিনিট":""}`},null,8,["value"]),s(n,{title:"পূর্ণমান:",value:t.$e2bnumber(e.data.questionPaper.mark),class:"justify-end"},null,8,["value"])])])}const x=o(c,[["render",p]]);export{x as default};
