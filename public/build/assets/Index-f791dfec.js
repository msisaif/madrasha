import{A as n}from"./GridApp-54ff9508.js";import{Z as c,r,o as l,c as f,a as e,w as a,F as p,b as m,e as t}from"./app-bdd8d9b0.js";import{G as u}from"./GridViewCard-3d219fb5.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import"./Index-c0c92f6e.js";import"./ApplicationLogo-2e0bb50c.js";import"./Index-e3386d73.js";const h={components:{AppLayout:n,Head:c,GridViewCard:u},props:{data:{type:Object,default:{}}}},g={class:"w-full grid gap-2 grid-cols-2 md:gap-4 md:grid-cols-3 lg:grid-cols-4"};function b(o,w,V,k,C,H){const i=r("Head"),s=r("GridViewCard"),d=r("app-layout");return l(),f(p,null,[e(i,{title:"ড্যাশবোর্ড"}),e(d,{backHref:o.route("dashboard")},{default:a(()=>[m("div",g,[e(s,{href:o.route("admissions.admission"),"icon-class":"fa-solid fa-file-circle-plus",class:""},{default:a(()=>[t(" ভর্তির আবেদন ")]),_:1},8,["href"]),e(s,{href:o.route("admissions.index"),"icon-class":"fa-solid fa-list-check"},{default:a(()=>[t(" আবেদন তালিকা ")]),_:1},8,["href"]),e(s,{href:o.route("admissions.online-forms.index"),"icon-class":"fa-solid fa-globe"},{default:a(()=>[t(" Online আবেদন তালিকা ")]),_:1},8,["href"])])]),_:1},8,["backHref"])],64)}const A=_(h,[["render",b]]);export{A as default};
