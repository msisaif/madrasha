import{L as n}from"./LetterHead-11e39293.js";import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{r as i,o as d,c as r,a as l,b as t,e as _,t as s}from"./app-92b5b829.js";const p={components:{LetterHead:n},props:{data:{type:Object,default:{}}}},m={class:"bg-white p-10"},f={class:"py-3 print:text-black"},b={class:"mt-4 mb-2 text-center text-2xl font-bold print:text-black"},h=["innerHTML"],x={class:"mt-20 flex justify-end"},u={class:"text-center"},v={class:"tex-lg font-bold print:text-black"},k={class:"print:text-black"},N={class:"print:text-black"};function g(a,y,e,T,L,j){const o=i("letter-head");return d(),r("div",m,[l(o),t("div",f,[_(" তারিখ: "),t("b",null,s(a.$e2bnumber(e.data.notice.formatedDate)),1)]),t("h2",b,s(e.data.notice.title),1),t("div",{class:"whitespace-pre-wrap text-justify print:text-black",innerHTML:e.data.notice.body},null,8,h),t("div",x,[t("div",u,[t("div",v,s(e.data.notice.staffName),1),t("div",k," ("+s(e.data.notice.staff.designationTitle)+") ",1),t("div",N,s(a.$page.props.settings.siteName),1)])])])}const V=c(p,[["render",g]]);export{V as N};
