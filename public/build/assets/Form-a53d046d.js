import{V as y}from"./ValidationErrors-c0afd389.js";import{B as v}from"./Button-9fd3649d.js";import{I as k}from"./Input-e7e5fa37.js";import{S as w}from"./Select-e3c22499.js";import{F as I}from"./FormGroup-0f81330e.js";import{T as V}from"./Textarea-fe08cbac.js";import{L as j}from"./LetterHead-3ef3c212.js";import{i as B,r as l,o as m,c as p,a as e,b as t,F,f as T,t as d,w as f,n as L,d as S,g as C,e as x}from"./app-dab4910b.js";import{I as N}from"./InlineData-9519f5b7.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Label-b6c50d3c.js";import"./ApplicationLogo-789de0bc.js";const O={components:{ValidationErrors:y,Button:v,Input:k,Select:w,FormGroup:I,Textarea:V,LetterHead:j,Link:B,InlineData:N},props:{moduleAction:String,buttonValue:{type:String,default:"সংরক্ষণ করুণ"},data:{type:Object,default:{}}},created(){this.form.admission_id=this.data.admission.id,this.form.purpose=this.data.purpose,this.form.purposes=this.data.req_purposes,this.form.date=this.data.date,this.form.fees=this.data.fees,Object.keys(this.data.paidPayments).length?(this.form.fees=[],this.form.fees.push({id:1,classId:0,feeId:0,amount:this.data.parentPayment.total,concession:0,name:this.data.parentPayment.purposeText,period:2}),Object.values(this.data.paidPayments).forEach(s=>{let o=this.$e2bnumber(s.id);this.form.fees.push({id:1,classId:0,feeId:0,amount:-s.paid,concession:0,name:`পূর্বের জমা (রশিদ নং: ${o})`,period:2})})):this.data.admission.student.due&&this.form.fees.unshift({id:1,classId:0,feeId:0,amount:this.data.admission.student.due,concession:0,name:"পূর্বের বকেয়া",period:2})},data(){return{verifiedBy:this.$page.props.auth.user.name,form:this.$inertia.form({admission_id:"",purpose:"",purposes:"",date:"",total:"",paid:"",fees:[]})}},methods:{submit(){if(this.form.total=this.getFeeTotal(),this.moduleAction=="store")return this.form.post(this.route("payments.store"));if(this.moduleAction=="update")return this.form.put(this.route("payments.update",this.data.payment.id))},getFeeTotal(){let s=0;return Object.values(this.form.fees).forEach(o=>{s+=parseInt(o.amount)}),s}}},P={class:"w-full max-w-lg rounded border bg-white p-4 shadow"},q=t("h2",{class:"mb-2 text-center text-2xl font-bold text-brand-600 print:text-black"}," টাকা জমার রশিদ ",-1),A={class:"grid gap-x-1 md:grid-cols-3"},D={class:"col-span-2"},z={class:"col-span-2"},G={class:"col-span-2"},H={class:"col-span-2"},M={class:"min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700 print:divide-black"},U=t("thead",{class:"bg-gray-300 dark:bg-gray-700"},[t("tr",null,[t("th",{class:"py-2 px-2 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-400 print:text-black md:text-sm"}," ক্রম "),t("th",{class:"py-2 px-2 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-400 print:text-black md:text-sm"}," ফি বিবরণী "),t("th",{class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-400 print:text-black md:text-sm"}," নির্ধারিত টাকা ")])],-1),J={class:"whitespace-nowrap py-2 px-2 text-left text-xs font-medium text-gray-900 dark:text-white md:text-sm"},K={class:"whitespace-nowrap py-2 px-2 text-left text-xs font-medium text-gray-900 dark:text-white md:text-sm"},Q={class:"flex items-center justify-between"},R={class:"whitespace-nowrap py-2 px-2 text-right text-xs font-medium text-gray-900 dark:text-white md:text-sm"},W={class:"flex items-center justify-end gap-2"},X={key:0,class:"text-gray-400"},Y={colspan:"3",class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-400 print:text-black md:text-sm"},Z={class:"flex justify-end gap-2"},$=t("span",null,"মোট প্রদেয়:",-1),tt={colspan:"3",class:"py-1 text-right text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-gray-400 print:text-black md:text-sm"},et={class:"flex items-center justify-end gap-1"},st=t("span",null,"জমা:",-1),at={colspan:"3",class:"py-2 px-2 text-right text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-gray-400 print:text-black md:text-sm"},ot={class:"flex justify-end gap-2"},it=t("span",null,"বাকী:",-1),nt=t("hr",null,null,-1),rt={class:"col-span-full space-y-2 rounded-md border border-dashed border-gray-300 p-3"},dt={class:"flex items-center gap-2"},lt=t("span",{class:"-mb-1 text-sm"}," আমি শিক্ষার্থী/অভিভাবকের কাছ থেকে উপরোক্ত পরিমাণ টাকা বুঝে পেয়েছি। ",-1),ct={class:"mt-4 flex items-center justify-between"};function mt(s,o,i,pt,n,c){const _=l("validation-errors"),r=l("inline-data"),u=l("Input"),b=l("Link"),g=l("Button");return m(),p("div",P,[e(_),q,t("div",A,[t("div",D,[e(r,{title:"তারিখ:",value:s.$e2bnumber(i.data.date)},null,8,["value"])]),t("div",z,[e(r,{title:"শ্রেণী:",value:i.data.admission.className},null,8,["value"])]),t("div",null,[e(r,{title:"রোল:",value:s.$e2bnumber(i.data.admission.roll)},null,8,["value"])]),t("div",G,[e(r,{title:"শিক্ষার্থীর নাম:",value:i.data.admission.student.name},null,8,["value"])]),t("div",null,[e(r,{title:"রেজি. নং:",value:s.$e2bnumber(i.data.admission.student.registration)},null,8,["value"])]),t("div",H,[e(r,{title:"বাবদ:",value:i.data.purposeText},null,8,["value"])])]),t("form",{onSubmit:o[1]||(o[1]=S((...a)=>c.submit&&c.submit(...a),["prevent"])),class:"my-2"},[t("table",M,[U,(m(!0),p(F,null,T(n.form.fees,(a,h)=>(m(),p("tr",{key:h,class:"hover:bg-gray-100 dark:hover:bg-gray-700"},[t("td",J,d(s.$e2bnumber(h+1)),1),t("td",K,[t("div",Q,[t("span",null,d(a.name),1)])]),t("td",R,[t("div",W,[a.concession?(m(),p("del",X,d(parseInt(a.amount)+parseInt(a.concession)),1)):C("",!0),t("span",null,d(a.amount),1)])])]))),128)),t("tr",null,[t("th",Y,[t("div",Z,[$,t("span",null,d(c.getFeeTotal()),1)])])]),t("tr",null,[t("th",tt,[t("div",et,[st,e(u,{type:"number",modelValue:n.form.paid,"onUpdate:modelValue":o[0]||(o[0]=a=>n.form.paid=a),class:"block w-16 px-1 py-0.5 text-right",required:""},null,8,["modelValue"])])])]),t("tr",null,[t("th",at,[t("div",ot,[it,t("span",null,d(c.getFeeTotal()-n.form.paid),1)])])])]),nt,t("div",rt,[t("label",dt,[e(u,{type:"checkbox",name:"declaration",required:""}),lt]),t("div",null,[e(r,{title:"গ্রহিতার নাম:",value:n.verifiedBy},null,8,["value"])])]),t("div",ct,[e(b,{href:s.route("payments.create"),class:"rounded-md border border-brand-600 px-4 py-2 font-semibold text-brand-600 hover:bg-brand-700 hover:text-white"},{default:f(()=>[x(" ← পূর্ববর্তী ধাপ ")]),_:1},8,["href"]),e(g,{class:L(["",{"opacity-25":n.form.processing}]),disabled:n.form.processing},{default:f(()=>[x(d(i.buttonValue),1)]),_:1},8,["class","disabled"])])],32)])}const Vt=E(O,[["render",mt]]);export{Vt as default};
