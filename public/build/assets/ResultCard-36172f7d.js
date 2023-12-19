import{A as j}from"./GridApp-da8eb0a1.js";import{r as o,o as d,c as u,b as t,a as c,t as l,F as h,f,g as w,Z as M,i as N,w as b,e as S}from"./app-92b5b829.js";import{r as T}from"./ArrowLeftIcon-bc402536.js";import{P as O}from"./PrintButton-b0866b6f.js";import{L as A}from"./LetterHead-11e39293.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";const L={components:{LetterHead:A},props:{data:{type:Object,default:{}},student:{type:Object,default:{}},signature:{type:String,default:""}},data(){return{}},methods:{getSubjectMark(e){return this.student.results[Number(e)]},getSubjectWritingMark(e){if(!this.getSubjectMark(e))return"";let s=this.getSubjectMark(e).writing||"";return s===null?"":s},getSubjectSpeakingMark(e){if(!this.getSubjectMark(e))return"";let s=this.getSubjectMark(e).speaking||"";return s===null?"":s},getSubjectTotalMark(e){return parseInt(this.getSubjectWritingMark(e)||0)+parseInt(this.getSubjectSpeakingMark(e)||0)},getTotalMark(){let e=0;return Object.values(this.student.results).forEach(s=>{e+=parseInt(s.writing||0),e+=parseInt(s.speaking||0)}),e},getStudentTotalMark(e){let s=0;return Object.values(this.data.subjects).forEach(r=>{let n=Object.values(this.data.results).find(a=>Number(a.subject_code)===Number(r.code));if(n){let a=Object.values(n.marks).find(i=>Number(i.student_id)===Number(e.id));a&&(s+=Number(a.speaking)+Number(a.writing))}}),s||""},getAverageMark(){let e=this.getTotalMark(),s=0;return Object.values(this.data.subjects).forEach(r=>{if(Number(r.code)===Number(this.data.class.optional_subject_code))return;let n=Object.values(this.data.results).find(a=>Number(a.subject_code)===Number(r.code));if(n){let a=Object.values(n.marks).find(i=>Number(i.student_id)===Number(this.student.id));a&&(a.speaking!==""||a.writing!=="")&&s++}}),s&&e?Number(e/s).toFixed(2):""},getMinSubjectMark(){const e=[];return Object.values(this.data.subjects).forEach(s=>{if(Number(s.code)===Number(this.data.class.optional_subject_code))return;let r=Object.values(this.data.results).find(n=>Number(n.subject_code)===Number(s.code));if(r){let n=Object.values(r.marks).find(a=>Number(a.student_id)===Number(this.student.id));n&&(n.speaking!==""||n.writing!=="")&&e.push(Number(n.speaking)+Number(n.writing))}}),Math.min.apply(Math,e.map(s=>Number(s)))},getGrade(){if(this.getMinSubjectMark()<35)return"F";let s=this.getAverageMark();return s===""?"":s>=80?"A+":s>=70?"A":s>=60?"A-":s>=50?"B":s>=40?"C":s>=33?"D":"F"},getMeritList(){let e=this.getTotalMark();if(e==="")return"";let s=[];Object.values(this.data.students).forEach(a=>{let i=this.getStudentTotalMark(a);i&&this.getGrade(a)!=="F"&&s.push(i)}),s.sort((a,i)=>a-i).reverse(),s=[...new Set([...s])];let n=s.indexOf(e)+1;return this.getMeritTextByPosition(n)},getMeritTextByPosition(e){return e===0?"":e}}},C={class:"w-full bg-white relative -z-20 overflow-hidden px-12 py-4 print:py-0 print:px-4"},B={class:"absolute inset-0 w-full h-full -z-10 flex justify-center items-center"},I=["src"],E={class:"mt-2 flex items-center justify-center gap-4 text-lg font-bold"},F=t("div",{class:"mt-1.5 mb-2 flex items-center justify-center"},[t("div",{class:"rounded-md border px-4 py-0.5 text-center text-2xl font-bold print:border-black print:text-black"}," রেজাল্ট কার্ড ")],-1),P={class:"grid grid-cols-5"},H={class:"col-span-3 flex gap-2"},R=t("div",{class:"w-24 text-gray-500 print:text-black"}," শিক্ষার্থীর নাম ",-1),V=t("span",null,":",-1),G={class:"col-span-2 flex gap-2"},$=t("div",{class:"w-20 text-gray-500 print:text-black"},"রেজি. নং",-1),z=t("span",null,":",-1),D={class:"col-span-3 flex gap-2"},W=t("div",{class:"w-24 text-gray-500 print:text-black"},"শ্রেণী",-1),Z=t("span",null,":",-1),q={class:"col-span-2 flex gap-2"},J=t("div",{class:"w-20 text-gray-500 print:text-black"}," শ্রেণী রোল ",-1),K=t("span",null,":",-1),Q=t("hr",{class:"my-4"},null,-1),U={class:"w-full table-auto"},X=t("thead",{class:""},[t("tr",null,[t("th",{class:"border p-2 print:p-1"},"বিষয় কোড"),t("th",{class:"border p-2 print:p-1"},"বিষয় নাম"),t("th",{class:"border p-2 print:p-1"},"মোট")])],-1),Y={class:""},tt={class:"border p-2 print:p-1"},et={class:"border p-2 text-left print:p-1"},st={class:"border p-2 text-center print:p-1"},rt=t("th",{colspan:"1",rowspan:"3",class:"align-bottom"},null,-1),at=t("th",{colspan:"1",class:"border p-2 text-right print:p-1"}," মোট ",-1),nt={class:"border p-2 text-center print:p-1"},it=t("th",{colspan:"1",class:"border p-2 text-right print:p-1"}," গড় ",-1),lt={class:"border p-2 text-center print:p-1"},ot=t("th",{colspan:"1",class:"border p-2 text-right print:p-1"}," গ্রেড ",-1),ct={class:"border p-2 text-center print:p-1"},dt=t("th",{colspan:"1"},null,-1),ut=t("th",{colspan:"1",class:"border p-2 text-right print:p-1"}," মেধাক্রম ",-1),pt={class:"border p-2 text-center print:p-1"},mt={class:"flex h-full w-full items-end justify-end py-4"},ht={class:"mt-2 flex flex-col items-center justify-center"},_t={class:"flex h-[40px] max-w-[100px] items-center justify-center"},bt=["src"],ft=t("div",{class:"flex items-center justify-center"},[t("p",{class:"text-sm font-bold"},"অধ্যক্ষের স্বাক্ষর")],-1);function gt(e,s,r,n,a,i){const m=o("letter-head");return d(),u("div",C,[t("div",B,[t("img",{class:"opacity-10",src:e.$page.props.settings.logoLink},null,8,I)]),c(m),t("div",E,[t("div",null,l(r.data.exam.name),1),t("div",null,l(e.$e2bnumber(r.data.exam.session))+" হিজরি",1)]),F,t("div",P,[t("div",H,[R,V,t("div",null,l(r.student.name),1)]),t("div",G,[$,z,t("div",null,l(e.$e2bnumber(r.student.registration)),1)]),t("div",D,[W,Z,t("div",null,l(r.data.class.name),1)]),t("div",q,[J,K,t("div",null,l(e.$e2bnumber(r.student.roll)),1)])]),Q,t("table",U,[X,t("tbody",Y,[(d(!0),u(h,null,f(r.data.subjects,p=>(d(),u("tr",{key:p.code,class:"hover:bg-gray-100 dark:hover:bg-gray-700"},[t("th",tt,l(e.$e2bnumber(p.code)),1),t("th",et,l(p.name),1),t("th",st,l(e.$e2bnumber(i.getSubjectTotalMark(p.code))),1)]))),128)),t("tr",null,[rt,at,t("th",nt,l(e.$e2bnumber(i.getTotalMark())),1)]),t("tr",null,[it,t("th",lt,l(e.$e2bnumber(i.getAverageMark())),1)]),t("tr",null,[ot,t("th",ct,l(e.$e2bnumber(i.getGrade())),1)]),t("tr",null,[dt,ut,t("th",pt,l(e.$e2bnumber(i.getMeritList())),1)])])]),t("div",mt,[t("div",ht,[t("div",_t,[r.signature?(d(),u("img",{key:0,src:r.signature,class:"h-full w-full object-contain"},null,8,bt)):w("",!0)]),ft])])])}const kt=g(L,[["render",gt]]),xt={components:{AppLayout:j,Head:M,Link:N,ArrowLeftIcon:T,PrintButton:O,ResultCardTemplete:kt},props:{data:{type:Object,default:{}},signature:{type:String,default:""}}},vt={class:"w-full flex items-center justify-between py-2 print:hidden"};function yt(e,s,r,n,a,i){const m=o("Head"),p=o("ArrowLeftIcon"),k=o("Link"),x=o("print-button"),v=o("ResultCardTemplete"),y=o("app-layout");return d(),u(h,null,[c(m,{title:`${r.data.exam.name} : ${r.data.class.name} ক্লাস এর বিষয় সমুহ`},null,8,["title"]),c(y,{pageTitle:`${r.data.exam.name} : ${r.data.class.name} ক্লাস এর বিষয় সমুহ`},{default:b(()=>[t("div",vt,[c(k,{href:e.route("results.subjects",[r.data.exam.id,r.data.class.id])+"?session="+e.$page.props.current_academic_session.value,class:"flex items-center justify-center gap-2 rounded-md bg-gray-600 px-4 py-1 text-white"},{default:b(()=>[c(p,{class:"w-5"}),S(" পূর্বের পেজ ")]),_:1},8,["href"]),c(x)]),(d(!0),u(h,null,f(r.data.students,_=>(d(),u("div",{key:_.id,class:"w-full print:break-before-page"},[c(v,{student:_,data:r.data,signature:r.signature},null,8,["student","data","signature"])]))),128))]),_:1},8,["pageTitle"])],64)}const Ct=g(xt,[["render",yt]]);export{Ct as default};
