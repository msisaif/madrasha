import{V as j}from"./ValidationErrors-c0afd389.js";import{B as A}from"./Button-9fd3649d.js";import{I as O}from"./Input-e7e5fa37.js";import{S as H}from"./Select-e3c22499.js";import{F as B}from"./FormGroup-0f81330e.js";import{T as D}from"./Textarea-fe08cbac.js";import{L as N}from"./Label-b6c50d3c.js";import{F as T}from"./FormHeading-386c868d.js";import{r as p,o as i,c as a,a as h,b as e,w as m,t as d,g as f,e as c,F as _,f as b,h as x,n as I,d as z}from"./app-dab4910b.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";const R={components:{ValidationErrors:j,Button:A,Input:O,Select:H,FormGroup:B,Textarea:D,Label:N,FormHeading:T},props:{moduleAction:String,buttonValue:{type:String,default:"Save & Preview"},data:{type:Object,default:{}},step:{type:String,default:"New"}},created(){this.moduleAction=="update"&&(this.selectReceivers(),this.data.is_financial&&(this.form.purpose_id=parseInt(this.data.sms.title)||""))},data(){return{isShowClassFilter:!1,classFilterIds:[],studentFilterIds:[],form:this.$inertia.form({body:this.data.sms.body||"",sender:this.data.sms.sender||"",receivers:this.data.sms.receivers||[],step:this.step||"new",purpose_id:""})}},computed:{sms_filter_data(){return Object.values(this.data.receivers).filter(s=>this.classFilterIds.includes(parseInt(s.student_class_id)))},validationHandler(){return this.studentFilterIds.length&&this.form.body&&this.form.sender}},methods:{submit(){const s=this.getStudentFinalData();if(this.form.receivers=s.map(t=>({student_id:t.student_id,guardian_phone:t.guardian_phone})),this.moduleAction=="store")return this.form.post(this.route("sms-services.store"));if(this.moduleAction=="update")return this.form.put(this.route("sms-services.update",this.data.sms.id))},getStudentFinalData(){return Object.values(this.data.receivers).filter(s=>this.studentFilterIds.includes(parseInt(s.student_id)))},classFilterHandler(s,t){if(this.form.purpose_id="",this.data.is_financial&&(this.form.body=""),t==="all"&&s.target.checked)return this.selectAllFilterClass();if(t==="all"&&!s.target.checked)return this.classFilterIds.length=0,this.selectAllFilterStudent();const l=this.classFilterIds.indexOf(t);return l>-1&&this.classFilterIds.splice(l,1),s.target.checked&&this.classFilterIds.push(t),this.selectAllFilterStudent()},studentFilterHandler(s,t){const l=this.studentFilterIds.indexOf(t);l>-1&&this.studentFilterIds.splice(l,1),s.target.checked&&this.studentFilterIds.push(t)},selectAllFilterClass(){return this.classFilterIds=Object.keys(this.data.classes).map(s=>parseInt(s)),this.selectAllFilterStudent()},selectAllFilterStudent(){this.studentFilterIds=Object.values(this.sms_filter_data).map(s=>parseInt(s.student_id))},selectReceivers(){const s=Object.values(this.data.sms.receivers).map(l=>`${l.student_id}@@${l.guardian_phone}`),t=Object.values(this.data.receivers).filter(l=>s.includes(`${l.student_id}@@${l.guardian_phone}`));if(t){const l=t.map(n=>parseInt(n.student_class_id)),g=t.map(n=>parseInt(n.student_id));this.classFilterIds=[...new Set(l)],this.studentFilterIds=[...new Set(g)]}},selectFilterClass(){return this.classFilterIds=Object.keys(this.data.classes).map(s=>parseInt(s)),this.selectFilterStudent()},selectFilterStudent(){this.studentFilterIds=Object.values(this.sms_filter_data).map(s=>parseInt(s.student_id))},purposeSelectHandler(){this.selectFilterStudent();const s=parseInt(this.form.purpose_id);let t="";if(s){let l=this.data.purposes[s].title;l=l.split(" : ").reverse()[0],t=`প্রিয় অভিভাবক, আপনার সন্তানের ${l} এর প্রদেয় পরিশোধ করুন।`;const n=this.getStudentFinalData().filter(o=>!o.paid_purpose_ids.includes(String(s)||Number(s)));this.studentFilterIds=n.map(o=>parseInt(o.student_id))}return this.form.body=this.$e2bnumber(t)}}},L={class:"w-full max-w-4xl rounded border bg-white p-4 shadow"},P={class:"grid grid-cols-3 gap-3"},U={class:"relative"},q=e("span",null,"Class Select",-1),E={key:1,class:"absolute grid w-full left-0 top-full bg-white border rounded-lg shadow-lg z-40 px-2 py-1.5"},G={class:"py-1.5 text-left w-full block rounded"},J={class:"w-full grid"},K=e("option",{value:"",selected:""}," -- বাবদ নির্বাচন করুন -- ",-1),Q=["value"],W={class:"px-6 py-2 rounded-lg border flex justify-between items-center col-start-3 bg-gray-100"},X=e("span",null,"Selected Number",-1),Y={class:"mt-5 h-60 overflow-hidden overflow-y-auto mb-5 z-10 bg-white shadow-sm"},Z={class:"table w-full table-auto"},$=e("thead",{class:"sticky top-0 bg-gray-200 border-x"},[e("tr",null,[e("th"),e("th",{class:"text-left font-bold px-1 py-2"},"শিক্ষার্থীর নাম"),e("th",{class:"text-center font-bold px-1 py-2"}," ক্লাস নাম "),e("th",{class:"text-center font-bold px-1 py-2"},"রোল"),e("th",{class:"text-left font-bold px-1 py-2"},"অভিভাবকের নাম"),e("th",{class:"text-center font-bold px-1 py-2"},"অভিভাবকের ফোন")])],-1),ee={class:"border"},te={class:"text-center px-1 py-2"},se={class:"text-left px-1 py-2"},le={class:"text-center px-1 py-2"},re={class:"text-center px-1 py-2"},ne={class:"text-left px-1 py-2"},ie={class:"text-center px-1 py-2"},de={class:"grid"},oe={class:"bg-gray-200 flex justify-between items-center px-2 py-3 rounded-lg -mb-2"},ae=e("div",{class:""},[c("SMS লিখুন ("),e("span",{class:"text-rose-600"},[c(" প্রতি SMS-এ বাংলা-"),e("b",null,"৬০"),c(", ইংলিশ-"),e("b",null,"১৬০")]),c(") ")],-1),ue={class:"text-rose-600"},ce={class:"w-full relative"},he={key:0,class:"absolute inset-0 w-full h-full"},pe=e("option",{value:""},"-- নির্বাচন --",-1),me=["value"],fe=e("hr",{class:"my-4 w-full"},null,-1),_e={class:"flex items-center justify-end"};function be(s,t,l,g,n,o){const S=p("validation-errors"),w=p("form-heading"),F=p("Input"),v=p("Select"),k=p("Textarea"),C=p("form-group"),V=p("Button");return i(),a("div",L,[h(S,{class:"mb-4"}),e("form",{onSubmit:t[6]||(t[6]=z((...r)=>o.submit&&o.submit(...r),["prevent"])),class:""},[h(w,{class:"mb-2 md:text-3xl"},{default:m(()=>[c(d(l.data.is_financial?"ফিনানশিয়াল বার্তা":"সাধারণ বার্তা"),1)]),_:1}),e("div",P,[e("div",U,[e("div",{class:"px-6 py-2 rounded-lg border flex justify-between items-center cursor-pointer",onClick:t[0]||(t[0]=r=>n.isShowClassFilter=!n.isShowClassFilter)},[q,e("span",null,"("+d(n.classFilterIds.length||0)+")",1)]),n.isShowClassFilter?(i(),a("div",{key:0,class:"inset-0 fixed z-30 bg-gray-700/25",onClick:t[1]||(t[1]=r=>n.isShowClassFilter=!1)})):f("",!0),n.isShowClassFilter?(i(),a("div",E,[e("div",G,[h(F,{type:"checkbox",checked:n.classFilterIds.length===Object.keys(l.data.classes).length,onChange:t[2]||(t[2]=r=>o.classFilterHandler(r,"all"))},null,8,["checked"]),c(" All ")]),(i(!0),a(_,null,b(l.data.classes,(r,u)=>(i(),a("div",{key:u,class:"py-1.5 text-left w-full block border-t rounded"},[h(F,{type:"checkbox",checked:n.classFilterIds.includes(parseInt(u)),onChange:y=>o.classFilterHandler(y,parseInt(u))},null,8,["checked","onChange"]),c(" "+d(r),1)]))),128))])):f("",!0)]),e("div",J,[l.data.is_financial?(i(),x(v,{key:0,onChange:o.purposeSelectHandler,modelValue:n.form.purpose_id,"onUpdate:modelValue":t[3]||(t[3]=r=>n.form.purpose_id=r),class:"w-full"},{default:m(()=>[K,(i(!0),a(_,null,b(l.data.purposes,(r,u)=>(i(),a("option",{key:u,value:u},d(s.$e2bnumber(r.title)),9,Q))),128))]),_:1},8,["onChange","modelValue"])):f("",!0)]),e("div",W,[X,e("span",null,"("+d(n.studentFilterIds.length||0)+")",1)])]),e("div",Y,[e("table",Z,[$,e("tbody",ee,[(i(!0),a(_,null,b(o.sms_filter_data,(r,u)=>(i(),a("tr",{key:u,class:I({"bg-gray-100":u%2,"line-through":!n.studentFilterIds.includes(parseInt(r.student_id))})},[e("td",te,[h(F,{type:"checkbox",checked:n.studentFilterIds.includes(parseInt(r.student_id)),onChange:y=>o.studentFilterHandler(y,parseInt(r.student_id))},null,8,["checked","onChange"])]),e("td",se,d(r.student_name),1),e("td",le,d(l.data.classes[r.student_class_id]),1),e("td",re,d(r.student_class_roll),1),e("td",ne,d(r.guardian_name),1),e("td",ie,d(r.guardian_phone),1)],2))),128))])])]),e("div",de,[e("div",oe,[ae,e("div",null,[c(" SMS Character: "),e("b",ue,d(s.$e2bnumber(n.form.body.length)),1)])]),e("div",ce,[h(k,{class:"w-full",modelValue:n.form.body,"onUpdate:modelValue":t[4]||(t[4]=r=>n.form.body=r),required:""},null,8,["modelValue"]),l.data.is_financial?(i(),a("div",he)):f("",!0)])]),h(C,{class:"w-full mt-5",label:"Sender ID"},{default:m(()=>[h(v,{modelValue:n.form.sender,"onUpdate:modelValue":t[5]||(t[5]=r=>n.form.sender=r),class:"block w-full",required:""},{default:m(()=>[pe,(i(!0),a(_,null,b(l.data.senders,(r,u)=>(i(),a("option",{key:u,value:r},d(r),9,me))),128))]),_:1},8,["modelValue"])]),_:1}),fe,e("div",_e,[o.validationHandler?(i(),x(V,{key:0,class:I(["",{"opacity-25":n.form.processing}]),disabled:n.form.processing},{default:m(()=>[c(d(l.buttonValue),1)]),_:1},8,["class","disabled"])):f("",!0)])],32)])}const Ve=M(R,[["render",be]]);export{Ve as default};
