import{_ as s}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,t as i}from"./app-dab4910b.js";const c={props:{href:{type:String,default:"#"},value:{type:String,default:"Go to list"},history:{type:Boolean,default:!0}},methods:{goBack(){this.$inertia.get(this.history?localStorage.getItem("historyOfList")||this.href:this.href)}}};function l(d,t,r,p,f,e){return a(),n("span",{onClick:t[0]||(t[0]=(...o)=>e.goBack&&e.goBack(...o)),class:"text-center font-bold cursor-pointer border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-3 py-1.5 rounded-xl"},i(r.value),1)}const g=s(c,[["render",l]]);export{g as G};
