import{i as w,r as o,o as x,c as y,b as n,a as e,w as a,n as v,d as g,e as c,t as S}from"./app-92b5b829.js";import{V as k}from"./ValidationErrors-3a6b8622.js";import{B as U}from"./Button-2f4c7ca7.js";import{I as B}from"./Input-6b233e34.js";import{S as I}from"./Select-57e43f73.js";import{F as j}from"./FormSlotGroup-d58abf1e.js";import{T as C}from"./Textarea-1590a66d.js";import{I as E}from"./InlineData-341d8041.js";import{F}from"./FormGroup-e2e9b1dd.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./TrashIcon-58b11a7b.js";import"./PlusCircleIcon-7c5b0de4.js";import"./Label-ad23df54.js";const T={components:{Link:w,ValidationErrors:k,Button:U,Input:B,Select:I,FormSlotGroup:j,Textarea:C,InlineData:E,FormGroup:F},props:{buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},created(){this.form.educational_qualifications=this.data.staff.educational_qualifications},data(){return{form:this.$inertia.form({step:"education",educational_qualifications:[]})}},methods:{addEducationalQualificationSlot(){this.form.educational_qualifications.push({exam_name:"",year:"",institute_name:"",board:"",result:""})},submit(){return this.form.put(this.route("staff.update",this.data.staff.id))}}},D={class:"w-full max-w-5xl rounded border bg-white p-4 shadow"},L=n("h3",{class:"text-center text-2xl font-bold text-brand-600"}," শিক্ষাগত যোগ্যতা ",-1),M={class:"grid md:grid-cols-2"},G=n("hr",{class:"my-3"},null,-1),Q=n("hr",{class:"my-4 w-full"},null,-1),z={class:"flex items-center justify-between"};function O(p,f,s,A,m,i){const u=o("inline-data"),_=o("validation-errors"),d=o("Input"),r=o("form-group"),b=o("form-slot-group"),h=o("Link"),V=o("Button");return x(),y("div",D,[L,n("div",M,[e(u,{class:"justify-start",title:"নাম:",value:s.data.staff.name},null,8,["value"]),e(u,{class:"justify-end",title:"পদ:",value:s.data.staff.designationTitle},null,8,["value"]),e(u,{class:"justify-start",title:"NID:",value:s.data.staff.nid},null,8,["value"]),e(u,{class:"justify-end",title:"ফোন:",value:s.data.staff.phone},null,8,["value"])]),G,e(_,{class:"mb-4"}),n("form",{onSubmit:f[0]||(f[0]=g((...t)=>i.submit&&i.submit(...t),["prevent"])),class:""},[e(b,{collections:m.form.educational_qualifications,addSlotMethod:i.addEducationalQualificationSlot},{default:a(({item:t})=>[e(r,{label:"পরিক্ষার নাম",class:"w-full md:w-2/12"},{default:a(()=>[e(d,{type:"text",class:"block w-full",modelValue:t.exam_name,"onUpdate:modelValue":l=>t.exam_name=l,required:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{label:"সাল",class:"w-full md:w-1/12"},{default:a(()=>[e(d,{type:"text",class:"block w-full text-center",modelValue:t.year,"onUpdate:modelValue":l=>t.year=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{label:"প্রতিষ্ঠানের নাম",class:"w-full md:w-4/12"},{default:a(()=>[e(d,{type:"text",class:"block w-full",modelValue:t.institute_name,"onUpdate:modelValue":l=>t.institute_name=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{label:"বোর্ড",class:"w-full md:w-2/12"},{default:a(()=>[e(d,{type:"text",class:"block w-full",modelValue:t.board,"onUpdate:modelValue":l=>t.board=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(r,{label:"ফলাফল",class:"w-full md:w-2/12"},{default:a(()=>[e(d,{type:"text",class:"block w-full text-center",modelValue:t.result,"onUpdate:modelValue":l=>t.result=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:1},8,["collections","addSlotMethod"]),Q,n("div",z,[e(h,{href:p.route("staff.show",s.data.staff.id),class:"rounded-md border border-brand-600 px-4 py-2 font-semibold text-brand-600 hover:bg-brand-700 hover:text-white"},{default:a(()=>[c(" Cancel ")]),_:1},8,["href"]),e(V,{class:v(["",{"opacity-25":m.form.processing}]),disabled:m.form.processing},{default:a(()=>[c(S(s.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const le=N(T,[["render",O]]);export{le as default};
