import{A as i}from"./GridApp-da8eb0a1.js";import{Z as l,r as t,o as f,c,a as e,w as o,F as p,b as m,e as s}from"./app-92b5b829.js";import{G as u}from"./GridViewCard-6de10a43.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-dea2134a.js";import"./ApplicationLogo-6b91dc49.js";import"./Index-381fcbc5.js";const h={components:{AppLayout:i,Head:l,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4"};function b(a,w,x,V,y,C){const d=t("Head"),r=t("GridViewCard"),n=t("app-layout");return f(),c(p,null,[e(d,{title:"ড্যাশবোর্ড"}),e(n,{backHref:a.route("dashboard")},{default:o(()=>[m("div",g,[e(r,{href:a.route("expenses.create"),"icon-class":"fa-solid fa-hand-holding-dollar"},{default:o(()=>[s(" সাধারণ ব্যয় ")]),_:1},8,["href"]),e(r,{href:a.route("expenses.index"),"icon-class":"fa-solid fa-list"},{default:o(()=>[s(" সাধারণ ব্যয় তালিকা ")]),_:1},8,["href"]),e(r,{href:a.route("staff.index"),"icon-class":"fa-solid fa-money-bill-transfer"},{default:o(()=>[s(" স্টাফ বেতন ")]),_:1},8,["href"]),e(r,{href:a.route("salaries.index"),"icon-class":"fa-solid fa-list"},{default:o(()=>[s(" স্টাফ বেতন তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const A=_(h,[["render",b]]);export{A as default};
