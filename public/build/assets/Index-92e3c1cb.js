import{A as w}from"./GridApp-a9521563.js";import{Z as y,i as C,L as k,r as d,o as n,c,a as r,w as i,F as g,b as e,e as p,f as A,n as u,g as f,j as B,v as T,t as m,h as V}from"./app-dab4910b.js";import{S as L}from"./DataTable-b2741429.js";import{A as j}from"./ActionButtonShow-6436f241.js";import{A as U}from"./ActionButtonEdit-24f73e20.js";import{A as D}from"./AddNewButton-f0b3e038.js";import{T as H}from"./TableTd-cff43bc9.js";import{A as N}from"./ActionButtonDelete-ddd7dda2.js";import{A as F}from"./AvatarView-6df52c45.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";import"./Index-07eb770f.js";import"./Label-b6c50d3c.js";import"./PaginatorLinks-d43f818c.js";const S={components:{AppLayout:w,SimpleTable:L,Head:y,Link:C,ActionButtonShow:j,ActionButtonEdit:U,AddNewButton:D,TableTd:H,ActionButtonDelete:N,AvatarView:F},props:{data:{type:Object,default:{}}},data(){return{columns:[{title:"নাম",align:"left"},{title:"পদবি",align:"left"},{title:"Phone",align:"left"},{title:"",align:"right"}]}},methods:{toggleActiveHandler(a){a.loading=!0;const o=new FormData;o.append("step","current_appointment_active_status"),o.append("_method","PUT"),o.append("active",a.active?1:0),k.post(this.route("staff.update",a.id),o).then(s=>{a.active=s.data.active}).catch(s=>{a.active=!a.active,console.log(s)}).finally(()=>{setTimeout(()=>{a.loading=!1},500)})}}},Z={class:"rounded py-4"},$={class:"flex flex-wrap items-end justify-start gap-4 print:hidden"},E={class:"w-full grid gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3"},P={key:0,role:"status",class:"absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"},z=e("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-brand-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),I=[z],O={class:"flex flex-col gap-2 w-12 shrink-0 grow-0 items-center justify-center text-2xl font-bold text-brand-800 md:text-4xl"},q={class:"relative inline-flex items-center cursor-pointer"},G=["onUpdate:modelValue","onChange"],J=e("div",{class:"w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-brand-600"},null,-1),K={class:"shrink grow"},Q={class:"text-md font-bold text-brand-600 md:text-2xl"},R={class:"flex items-center gap-2"},W=e("span",{class:"text-gray-600"},"পদবি: ",-1),X={class:"font-bold text-gray-800"},Y={class:"flex flex-col md:flex-row md:items-center md:justify-between"},ee={class:"flex items-center gap-2 py-0.5"},te=e("span",{class:"text-gray-600"},"ফোন: ",-1),ae={class:"font-bold text-gray-800"},re={class:"flex items-center gap-2"};function oe(a,o,s,se,ne,_){const x=d("Head"),l=d("Link"),b=d("AvatarView"),v=d("app-layout");return n(),c(g,null,[r(x,{title:"শিক্ষক/স্টাফ"}),r(v,{pageTitle:"শিক্ষক/স্টাফ"},{default:i(()=>[e("div",Z,[e("div",$,[r(l,{href:a.route("staff-attendance-page"),class:"flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded border border-brand-600 px-2.5 pt-1 text-brand-600 hover:bg-brand-600 hover:text-white"},{default:i(()=>[p(" হাজিরা খাতা ")]),_:1},8,["href"]),r(l,{href:a.route("staff.id-card"),class:"flex flex-shrink-0 flex-grow-0 items-center justify-center gap-1 rounded border border-brand-600 px-2.5 pt-1 text-brand-600 hover:bg-brand-600 hover:text-white"},{default:i(()=>[p(" পরিচয় পত্র ")]),_:1},8,["href"])])]),e("div",E,[(n(!0),c(g,null,A(s.data.staff,t=>(n(),c("div",{key:t.id,class:u(["relative rounded-md border bg-white",{grayscale:!t.active}])},[t.loading?(n(),c("div",P,I)):f("",!0),e("div",{class:u(["flex items-center gap-2 p-2 hover:shadow md:gap-4 md:p-3",{"opacity-5":t.loading}])},[e("div",O,[r(b,{class:"h-12 w-12 bg-gray-200 border",imageUrl:t.imageUrl,firstLatter:t.name[0]},null,8,["imageUrl","firstLatter"]),e("label",q,[B(e("input",{type:"checkbox",value:"",class:"sr-only peer","onUpdate:modelValue":h=>t.active=h,onChange:h=>_.toggleActiveHandler(t)},null,40,G),[[T,t.active]]),J])]),e("div",K,[e("div",Q,[r(l,{href:a.route("staff.show",t.id),class:"text-brand-600 hover:underline"},{default:i(()=>[p(m(t.name),1)]),_:2},1032,["href"])]),e("div",R,[W,e("span",X,m(t.designationTitle),1)]),e("div",Y,[e("div",ee,[te,e("span",ae,m(t.phone),1)]),e("div",re,[t.active?(n(),V(l,{key:0,href:a.route("staff.salaries.create",t.id),class:"rounded bg-brand-100 px-3 py-0.5 text-sm text-brand-600"},{default:i(()=>[p(" বেতন দিন ")]),_:2},1032,["href"])):f("",!0)])])])],2)],2))),128))])]),_:1})],64)}const ye=M(S,[["render",oe]]);export{ye as default};
