import{Z as V,r as n,o as m,c as p,a as l,w as r,F as f,b as i,d as D,f as b,t as S,e as v}from"./app-dab4910b.js";import{A as w}from"./GridApp-a9521563.js";import y from"./Form-6af6f287.js";import{F as P}from"./FormGroup-0f81330e.js";import{I as C}from"./InlineData-9519f5b7.js";import{S as H}from"./Select-e3c22499.js";import{I as R}from"./Input-e7e5fa37.js";import{B as k}from"./Button-9fd3649d.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";import"./Index-07eb770f.js";import"./ValidationErrors-c0afd389.js";import"./Textarea-fe08cbac.js";import"./LetterHead-3ef3c212.js";import"./Label-b6c50d3c.js";const x={components:{Head:V,AppLayout:w,FormComponent:y,FormGroup:P,InlineData:C,Select:H,Input:R,Button:k},props:{data:{type:Object,default:{}}},created(){this.registration=this.data.registration,this.registrationHandler(),this.form.purpose=this.data.purposeId},data(){return{form:this.$inertia.form({admission:"",purpose:""}),classId:"",roll:"",studentName:"",registration:"",paidPurpose:[],duePurposeId:"",due:0}},methods:{submit(){if(this.form.admission&&this.form.purpose)return this.form.get(this.route("payments.create"))},registrationHandler(){this.resetDuringRegistrationSelect(),this.resetCommonData();let e=Object.values(this.data.admissions).filter(t=>t.student.registration==this.registration)[0];e&&(this.setCommonData(e),this.setDuringRegistrationSelect(e)),this.form.purpose=""},classOrRollHandler(){this.resetDuringclassOrRollSelect(),this.resetCommonData();let e=null;this.classId&&this.roll&&(e=Object.values(this.data.admissions).filter(t=>t.classId==this.classId&&t.roll==this.roll)[0]),e&&(this.setCommonData(e),this.setDuringclassOrRollSelect(e)),this.form.purpose=""},setCommonData(e){this.form.admission=e.id,this.studentName=e.studentName,this.paidPurpose=e.student.paidPurpose.map(t=>Number(t)),this.duePurposeId=e.student.duePurposeId,this.due=e.student.due},setDuringRegistrationSelect(e){this.roll=e.roll,this.classId=e.classId},setDuringclassOrRollSelect(e){this.registration=e.student.registration},resetCommonData(){this.form.admission="",this.studentName="",this.paidPurpose="",this.duePurposeId="",this.due=0},resetDuringRegistrationSelect(){this.roll="",this.classId=""},resetDuringclassOrRollSelect(){this.registration=""}}},B={class:"w-full max-w-lg rounded border bg-white p-4 shadow"},F=i("h2",{class:"mb-2 text-center text-2xl font-bold text-brand-600 print:text-black"}," টাকা জমার রশিদ ",-1),U={class:"grid gap-4 md:grid-cols-3"},j=i("option",{value:""},"-- নির্বাচন করুন --",-1),q=["value"],L=i("option",{value:""},"-- নির্বাচন করুন --",-1),M=["value","disabled","innerHTML"],T={class:"mt-4 flex items-center justify-end"};function E(e,t,h,G,o,u){const _=n("Head"),g=n("Select"),d=n("form-group"),c=n("Input"),I=n("Button"),N=n("app-layout");return m(),p(f,null,[l(_,{title:"নতুন রশিদ"}),l(N,null,{default:r(()=>[i("div",B,[F,i("form",{onSubmit:t[5]||(t[5]=D((...s)=>u.submit&&u.submit(...s),["prevent"])),class:""},[i("div",U,[l(d,{class:"col-span-2",label:"ক্লাস"},{default:r(()=>[l(g,{class:"block w-full",modelValue:o.classId,"onUpdate:modelValue":t[0]||(t[0]=s=>o.classId=s),onChange:u.classOrRollHandler,required:""},{default:r(()=>[j,(m(!0),p(f,null,b(h.data.classes,s=>(m(),p("option",{key:s.id,value:s.id},S(s.name),9,q))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(d,{class:"",label:"রোল"},{default:r(()=>[l(c,{class:"block w-full",type:"Number",modelValue:o.roll,"onUpdate:modelValue":t[1]||(t[1]=s=>o.roll=s),onInput:u.classOrRollHandler,required:""},null,8,["modelValue","onInput"])]),_:1}),l(d,{class:"col-span-2",label:"শিক্ষার্থীর নাম"},{default:r(()=>[l(c,{class:"block w-full",type:"text",disabled:"",modelValue:o.studentName,"onUpdate:modelValue":t[2]||(t[2]=s=>o.studentName=s)},null,8,["modelValue"])]),_:1}),l(d,{class:"",label:"রেজি. নং"},{default:r(()=>[l(c,{class:"block w-full",type:"Number",modelValue:o.registration,"onUpdate:modelValue":t[3]||(t[3]=s=>o.registration=s),onInput:u.registrationHandler,required:""},null,8,["modelValue","onInput"])]),_:1}),l(d,{class:"col-span-full",label:"বাবদ নির্বাচন করুন"},{default:r(()=>[l(g,{class:"block w-full",modelValue:o.form.purpose,"onUpdate:modelValue":t[4]||(t[4]=s=>o.form.purpose=s),required:""},{default:r(()=>[L,(m(!0),p(f,null,b(h.data.purposes,(s,a)=>(m(),p("option",{key:a,value:a,disabled:o.paidPurpose.includes(Number(a))&&Number(o.duePurposeId)!==Number(a),innerHTML:(o.paidPurpose.includes(Number(a))?Number(o.duePurposeId)===Number(a)&&o.due>0?"⚠ (বকেয়া) ":"✓ ":"")+s.title},null,8,M))),128))]),_:1},8,["modelValue"])]),_:1})]),i("div",T,[l(I,null,{default:r(()=>[v(" পরবর্তী ধাপ → ")]),_:1})])],32)])]),_:1})],64)}const ie=O(x,[["render",E]]);export{ie as default};
