import{A as c}from"./GridApp-a9521563.js";import{Z as n,r as t,o as l,c as f,a as e,w as o,F as p,b as m,e as s}from"./app-dab4910b.js";import{G as u}from"./GridViewCard-de2fbdfb.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-146888ca.js";import"./ApplicationLogo-789de0bc.js";import"./Index-07eb770f.js";const h={components:{AppLayout:c,Head:n,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function w(a,V,b,x,C,H){const d=t("Head"),r=t("GridViewCard"),i=t("app-layout");return l(),f(p,null,[e(d,{title:"ড্যাশবোর্ড"}),e(i,{backHref:a.route("dashboard")},{default:o(()=>[m("div",g,[e(r,{href:a.route("admit-card.index"),"icon-class":"fa-solid fa-address-card"},{default:o(()=>[s(" প্রবেশপত্র ")]),_:1},8,["href"]),e(r,{href:a.route("seat-plan.index"),"icon-class":"fa-solid fa-pager"},{default:o(()=>[s(" আসন নং ")]),_:1},8,["href"]),e(r,{href:a.route("question-papers.exams"),"icon-class":"fa-solid fa-file-circle-question"},{default:o(()=>[s(" প্রশ্নপত্র ")]),_:1},8,["href"]),e(r,{href:a.route("results.exams"),"icon-class":"fa-solid fa-rectangle-list"},{default:o(()=>[s(" ফলাফল ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const v=_(h,[["render",w]]);export{v as default};
