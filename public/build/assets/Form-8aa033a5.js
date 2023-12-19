import{V as f}from"./ValidationErrors-c0afd389.js";import{B as c}from"./Button-9fd3649d.js";import{I as _}from"./Input-e7e5fa37.js";import{S as b}from"./Select-e3c22499.js";import{F as w}from"./FormGroup-0f81330e.js";import{T as V}from"./Textarea-fe08cbac.js";import{r as l,o as h,c as x,a as t,b as a,w as r,n as g,d as y,e as v,t as B}from"./app-dab4910b.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./Label-b6c50d3c.js";const k={components:{ValidationErrors:f,Button:c,Input:_,Select:b,FormGroup:w,Textarea:V},props:{moduleAction:String,buttonValue:{type:String,default:"Save"},data:{type:Object,default:{}}},data(){return{form:this.$inertia.form({name:this.data.admin.name||"",email:this.data.admin.email||"",password:""})}},methods:{submit(){if(this.moduleAction=="store")return this.form.post(this.route("admins.store"));if(this.moduleAction=="update")return this.form.put(this.route("admins.update",this.data.admin.id))}}},C={class:"w-full max-w-xl rounded border bg-white p-4 shadow"},I={class:"grid gap-4"},N=a("hr",{class:"my-4 w-full"},null,-1),A={class:"flex items-center justify-end"};function E(F,o,u,T,e,i){const d=l("validation-errors"),m=l("Input"),n=l("form-group"),p=l("Button");return h(),x("div",C,[t(d,{class:"mb-4"}),a("form",{onSubmit:o[3]||(o[3]=y((...s)=>i.submit&&i.submit(...s),["prevent"])),class:""},[a("div",I,[t(n,{class:"w-full",label:"Name"},{default:r(()=>[t(m,{type:"text",class:"block w-full",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s),required:""},null,8,["modelValue"])]),_:1}),t(n,{class:"w-full",label:"Email"},{default:r(()=>[t(m,{type:"email",class:"block w-full",modelValue:e.form.email,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.email=s),required:""},null,8,["modelValue"])]),_:1}),t(n,{class:"w-full",label:"Password"},{default:r(()=>[t(m,{type:"text",class:"block w-full",modelValue:e.form.password,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.password=s)},null,8,["modelValue"])]),_:1})]),N,a("div",A,[t(p,{class:g(["",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:r(()=>[v(B(u.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const H=S(k,[["render",E]]);export{H as default};
