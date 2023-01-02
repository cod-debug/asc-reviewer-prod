(()=>{var t={4647:(t,e,a)=>{"use strict";a(8964),a(702);var o=a(799),r=a(1947),n=a(499),s=a(9835);function i(t,e,a,o,r,n){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});var c=a(1639);const u=(0,c.Z)(l,[["render",i]]),d=u;var p=a(1870),m=a(3340),h=a(8910);const g=[{name:"home",path:"/",requiresAuth:!1,component:()=>Promise.all([a.e(736),a.e(268)]).then(a.bind(a,4268)),children:[{name:"home-page",path:"",component:()=>Promise.all([a.e(736),a.e(71)]).then(a.bind(a,71))},{name:"redirect-page",path:"/redirect",component:()=>a.e(797).then(a.bind(a,5797))}]},{name:"dashboard",path:"/asc/page/",component:()=>Promise.all([a.e(736),a.e(314)]).then(a.bind(a,2314)),children:[{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list",path:"application/s1/lists",component:()=>Promise.all([a.e(736),a.e(853)]).then(a.bind(a,8853))},{name:"individual-application-update",path:"application/s1/update/:id",component:()=>Promise.all([a.e(736),a.e(340)]).then(a.bind(a,340))},{name:"multiple-application-list",path:"application/s1/multiple",component:()=>Promise.all([a.e(736),a.e(615)]).then(a.bind(a,6615))},{name:"special-application-list",path:"application/s1/special",component:()=>Promise.all([a.e(736),a.e(633)]).then(a.bind(a,6633))},{name:"dashboard",path:"",component:()=>a.e(160).then(a.bind(a,8160))},{name:"individual-application-list-s2",path:"application/s2/lists",component:()=>a.e(359).then(a.bind(a,6987))},{name:"announcement-view",path:"announcement",component:()=>Promise.all([a.e(736),a.e(890)]).then(a.bind(a,3890))}]},{path:"/account",name:"account",component:()=>Promise.all([a.e(736),a.e(314)]).then(a.bind(a,2314)),children:[{path:"user-profile",name:"user-profile",component:()=>Promise.all([a.e(736),a.e(917)]).then(a.bind(a,4917))}]}],f=g;var v=a(3703);const A=(0,m.BC)((function({store:t,ssrContext:e}){const a=h.PO,o=localStorage.getItem("token"),r=localStorage.getItem("user_email");t.commit("auth/setToken",o),t.commit("auth/setUserDetails",r);const n=(0,h.p7)({scrollBehavior:()=>({left:0,top:0}),routes:f,history:a("/")});return n.beforeEach(((t,e,a)=>{t.requiresAuth&&!o?a({name:"home"}):a()})),n}));async function _(t,e){const o=t(d);o.use(r.Z,e);const s="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:i}=await Promise.resolve().then(a.bind(a,1870)),l=(0,n.Xl)("function"===typeof A?await A({store:s}):A);return s.$router=l,{app:o,store:s,storeKey:i,router:l}}var y=a(6827),w=a(3527);const S={config:{},plugins:{LocalStorage:v.Z,Notify:y.Z,Dialog:w.Z}},b="/";async function P({app:t,router:e,store:a,storeKey:o},r){let n=!1;const s=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(n=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=s(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===n&&u<r.length;u++)try{await r[u]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:b})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(t.use(e),t.use(a,o),t.mount("#q-app"))}_(o.ri,S).then((t=>Promise.all([Promise.resolve().then(a.bind(a,6288)),Promise.resolve().then(a.bind(a,1569)),Promise.resolve().then(a.bind(a,958))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));P(t,a)}))))},1569:(t,e,a)=>{"use strict";a.r(e),a.d(e,{api:()=>s,default:()=>i});var o=a(3340),r=a(9981),n=a.n(r);const s=n().create({baseURL:"http://localhost:3006"}),i=(0,o.xr)((({app:t})=>{t.config.globalProperties.$axios=n(),t.config.globalProperties.$api=s}))},6288:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var o=a(3340),r=a(9991);const n={failed:"Action failed",success:"Action was successful"},s={"en-US":n},i=(0,o.xr)((({app:t})=>{const e=(0,r.o)({locale:"en-US",messages:s});t.use(e)}))},958:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s,rules:()=>n});var o=a(6827),r=a(3340);const n={required(t){return console.log(t,"value"),[t=>t&&t.length>0||"This field is required!"]},requiredSelect(t){return[t=>t||"This field is required!"]},validateEmail(t){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(t)||"Invalid email format"},confirmPassword(t,e){return t===e||"Confirm password does not  match!"},validateContact(t){var e=/^\(?([0-9]{11})\)?$/;return e.test(t)||"Invalid contact number format"},fileSizeRestrict(t){console.log(t.size);const e=3145728;return t.size<e||"Maximum of 3mb only"},fileTypeRestrict(t){return console.log(t),"application/pdf"==t.type||"Accepts PDF file only"},imageRestriction(t){o.Z.create({type:"negative",message:`${t.length} Images does not pass on validation`})},filterSelect(t,e,a){""!==t||e((()=>{a.value=stringOptions}))},update(){const t=val.toLowerCase();options.value=stringOptions.filter((e=>e.toLowerCase().indexOf(t)>-1))}},s=(0,r.xr)((({app:t})=>{t.config.globalProperties.$rules=n}))},6011:()=>{},2400:()=>{},343:()=>{},3315:()=>{},7320:()=>{},9432:()=>{},4200:()=>{},7221:()=>{},1870:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>Ne});var o={};a.r(o),a.d(o,{getToken:()=>y,getUserDetails:()=>_,isAuthenticated:()=>A});var r={};a.r(r),a.d(r,{removeToken:()=>S,setToken:()=>w,setUserDetails:()=>b});var n={};a.r(n),a.d(n,{getAllEmployees:()=>C,getEnv:()=>R,login:()=>N,registerApplicant:()=>k});var s={};a.r(s),a.d(s,{approveUser:()=>q});var i={};a.r(i),a.d(i,{getAllUsers:()=>tt,getEnv:()=>Y,updateESign:()=>ot,updatePassword:()=>at,updateProfile:()=>et});var l={};a.r(l),a.d(l,{addCompany:()=>ft,getAllAffiliation:()=>vt,getAllCompanies:()=>gt,getEnv:()=>ht});var c={};a.r(c),a.d(c,{getEnv:()=>Ut,getS1Applications:()=>Rt,passToReviewer:()=>kt,verifyApp:()=>Ct});var u={};a.r(u),a.d(u,{comment:()=>Gt,getCountByRole:()=>Wt,getCountByUser:()=>Vt,getEnv:()=>Ht,getSpecific:()=>Jt,lockApp:()=>Xt,reassign:()=>Qt});var d={};a.r(d),a.d(d,{getAllAnnouncements:()=>fe,getAllDialects:()=>he,getAllExecutionTypes:()=>pe,getAllMediums:()=>me,getAllTypeOfDocu:()=>ve,getAllUsers:()=>de,getEnv:()=>ue,getOne:()=>Ae,getSpecificAffiliation:()=>ge});var p={};a.r(p),a.d(p,{get_details:()=>we});var m={};a.r(m),a.d(m,{set_details:()=>Se});var h={};a.r(h),a.d(h,{_user_logged:()=>Re,getEnv:()=>Ue,save_sessions:()=>Ce});var g=a(3340),f=a(3100);function v(){return{isAuthenticated:!1,token:"",userDetails:{}}}const A=(t,e)=>t.isAuthenticated,_=(t,e)=>t.userDetails,y=(t,e)=>t.token,w=(t,e)=>{t.token=e,t.isAuthenticated=!0},S=(t,e)=>{t.token="",t.isAuthenticated=!1,t.userDetails={}},b=(t,e)=>{t.userDetails=e};var P,I,E=a(9981),L=a.n(E);const{LocalStorage:$,Notify:B}=a(9066),U={API_BASE_URL:(null===(P=window)||void 0===P||null===(I=P.appConfig)||void 0===I?void 0:I.API_BASE_URL)||"http://18.140.158.179:4545"};function R(t){return U[t]}const C=async({commit:t},e)=>{let a=await L()({url:"http://127.0.0.1:8000/all-employees/",method:"get"});return a},k=async({commit:t},e)=>{let a=await L()({url:`${R("API_BASE_URL")}/users/register/applicant`,data:e,method:"post"});return a},N=async({commit:t},e)=>{let a=null;try{a=await L()({url:`${R("API_BASE_URL")}/users/login`,data:e,method:"post"})}catch(o){a.data=o,a.status=400}return a},D={namespaced:!0,state:v,getters:o,mutations:r,actions:n};var T=a(4182),O=a.n(T),j=a(3376),M=a(5407);const{LocalStorage:x,Notify:z}=a(9066),q=async({commit:t},e)=>{let a=await L()({url:process.env.API_URL+`/apprv/${e.id}`,method:"post",headers:{authorization:`Bearer ${x.get("token")}`}});return a},Z={namespaced:!0,state:O(),getters:j,mutations:M,actions:s};function F(){return{}}var K,H,Q=a(6011),X=a(2400);const{LocalStorage:G,Notify:J}=a(9066),V={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},W={API_BASE_URL:(null===(K=window)||void 0===K||null===(H=K.appConfig)||void 0===H?void 0:H.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function Y(t){return W[t]}const tt=async({commit:t},e)=>{let a=await L()({url:`${Y("API_BASE_URL")}/users/all/`,data:e,method:"get"});return a},et=async({commit:t},e)=>{let a={};try{a=await L()({method:"post",url:`${Y("API_BASE_URL")}/users/update/`,data:e.data,params:e.params,headers:V})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},at=async({commit:t},e)=>{let a={};try{a=await L()({method:"post",url:`${Y("API_BASE_URL")}/users/update/password/`,data:e,headers:V})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ot=async({commit:t},e)=>{let a={};try{a=await L()({method:"post",url:`${Y("API_BASE_URL")}/users/upload/`,data:e,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},rt={namespaced:!0,state:F,getters:Q,mutations:X,actions:i};function nt(){return{}}var st,it,lt=a(4200),ct=a(7221);const{LocalStorage:ut,Notify:dt}=a(9066),pt={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${localStorage.getItem("token")}`},mt={API_BASE_URL:(null===(st=window)||void 0===st||null===(it=st.appConfig)||void 0===it?void 0:it.API_BASE_URL)||"http://18.140.158.179:4545"};function ht(t){return mt[t]}const gt=async({commit:t},e)=>{let a=await L()({method:"get",url:`${ht("API_BASE_URL")}/company/getall/`,params:e,headers:pt});return a},ft=async({commit:t},e)=>{let a=await L()({method:"post",url:`${ht("API_BASE_URL")}/company/create/`,data:e,headers:pt});return a},vt=async({commit:t},e)=>{let a=null;try{a=await L()({url:`${ht("API_BASE_URL")}/affiliate/getall/`,params:e,method:"get",headers:pt})}catch(o){a.data=o,a.status=400}return a},At={namespaced:!0,state:nt,getters:lt,mutations:ct,actions:l};function _t(){return{}}var yt,wt,St=a(2796),bt=a(6764);a(8964);const{LocalStorage:Pt,Notify:It}=a(9066);let Et="/api/v1",Lt=localStorage.getItem("token")||"";const $t={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Lt.replace("__q_strn|","")}`},Bt={API_BASE_URL:(null===(yt=window)||void 0===yt||null===(wt=yt.appConfig)||void 0===wt?void 0:wt.API_BASE_URL)||"http://18.140.158.179:4545"};function Ut(t){return Bt[t]}const Rt=async({commit:t},e)=>{let a={};try{a=await L()({method:"post",url:`${Ut("API_BASE_URL")}${Et}/reviewer/get-applications/`,data:e.data,params:e.params,headers:$t})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Ct=async({commit:t},e)=>{let a={};try{a=await L()({method:"put",url:`${Ut("API_BASE_URL")}${Et}/screener/verify-applications/${e.id}`,data:e.data,headers:$t})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},kt=async({commit:t},e)=>{let a={};try{a=await L()({method:"put",url:`${Ut("API_BASE_URL")}${Et}/reviewer/reviewed-applications/${e.id}`,data:e.data,headers:$t})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Nt={namespaced:!0,state:_t,getters:St,mutations:bt,actions:c};function Dt(){return{}}var Tt,Ot,jt=a(7320),Mt=a(9432);const{LocalStorage:xt,Notify:zt}=a(9066);let qt="/api/v1",Zt=localStorage.getItem("token")||"";const Ft={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Zt.replace("__q_strn|","")}`},Kt={API_BASE_URL:(null===(Tt=window)||void 0===Tt||null===(Ot=Tt.appConfig)||void 0===Ot?void 0:Ot.API_BASE_URL)||"http://18.140.158.179:4545"};function Ht(t){return Kt[t]}const Qt=async({commit:t},e)=>{let a={};try{a=await L()({method:"put",url:`${Ht("API_BASE_URL")}${qt}/asc-user/reassign-application/${e.id}`,data:e.data,params:e.params,headers:Ft})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Xt=async({commit:t},e)=>{let a={};try{a=await L()({method:"put",url:`${Ht("API_BASE_URL")}${qt}/asc-user/lock-application/${e.id}`,data:e,headers:Ft})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Gt=async({commit:t},e)=>{let a={};try{a=await L()({method:"put",url:`${Ht("API_BASE_URL")}${qt}/asc-user/make-comment/${e.id}`,data:e.data,headers:Ft})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},Jt=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${Ht("API_BASE_URL")}${qt}/asc-user/view-application/${e.id}`,headers:Ft})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},Vt=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${Ht("API_BASE_URL")}${qt}/asc-user/view-counts/per-user/`,headers:Ft})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},Wt=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${Ht("API_BASE_URL")}${qt}/asc-user/view-counts/per-role/`,headers:Ft})}catch(n){var o,r;a.data=(null===n||void 0===n||null===(o=n.response)||void 0===o?void 0:o.data)||null,a.status=(null===n||void 0===n||null===(r=n.response)||void 0===r?void 0:r.status)||null}return a},Yt={namespaced:!0,state:Dt,getters:jt,mutations:Mt,actions:u};function te(){return{}}var ee,ae,oe=a(343),re=a(3315);const{LocalStorage:ne,Notify:se}=a(9066);let ie=localStorage.getItem("token")||"";const le={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${ie.replace("__q_strn|","")}`},ce={ADMIN_API_BASE_URL:(null===(ee=window)||void 0===ee||null===(ae=ee.appConfig)||void 0===ae?void 0:ae.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function ue(t){return ce[t]}const de=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/users/getall/`,params:e,headers:le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},pe=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/execution-type/getall/`,params:e,headers:le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},me=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/medium-type/getall/`,params:e,headers:le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},he=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/dialect/getall/`,params:e,headers:le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},ge=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/affiliate/getone/`,params:e,headers:le})}catch(o){console.log(o),a.data=o.response.data,a.status=o.response.status}return a},fe=async({commit:t},e)=>{let a=await L()({url:`${ue("ADMIN_API_BASE_URL")}/announce/getall`,params:e,method:"get",headers:le});return a},ve=async({commit:t},e)=>{let a={};try{a=await L()({method:"get",url:`${ue("ADMIN_API_BASE_URL")}/document-type/getall/`,params:e,headers:le})}catch(o){a.data=o.response.data,a.status=o.response.status}return a},Ae=async({commit:t},e)=>{let a=null;try{a=await L()({url:`${ue("ADMIN_API_BASE_URL")}/users/getone`,params:e,method:"get",headers:le})}catch(o){a.data=o,a.status=400}return a},_e={namespaced:!0,state:te,getters:oe,mutations:re,actions:d};function ye(){return{user_logged_details:null}}const we=t=>t.user_logged_details,Se=(t,e)=>{t.user_logged_details=e};var be,Pe;const{LocalStorage:Ie,Notify:Ee}=a(9066);let Le=localStorage.getItem("token")||"";const $e={"Content-Type":"application/json; charset=utf-8",Authorization:`Bearer ${Le.replace("__q_strn|","")}`},Be={ADMIN_API_BASE_URL:(null===(be=window)||void 0===be||null===(Pe=be.appConfig)||void 0===Pe?void 0:Pe.ADMIN_API_BASE_URL)||"http://18.140.158.179:4300"};function Ue(t){return Be[t]}const Re=async t=>{let e=await L()({url:`${Ue("ADMIN_API_BASE_URL")}/users/logged-in`,data:null,method:"get",headers:$e});return e},Ce=async(t,e)=>{},ke={namespaced:!0,state:ye,getters:p,mutations:m,actions:h},Ne=(0,g.h)((function(){const t=(0,f.MT)({modules:{auth:D,users:Z,account:rt,company:At,s1:Nt,asc_user:Yt,admin_api:_e,sessions:ke},strict:!1});return t}))},2796:()=>{},6764:()=>{},3376:()=>{},5407:()=>{},4182:()=>{}},e={};function a(o){var r=e[o];if(void 0!==r)return r.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,a),n.exports}a.m=t,(()=>{var t=[];a.O=(e,o,r,n)=>{if(!o){var s=1/0;for(u=0;u<t.length;u++){for(var[o,r,n]=t[u],i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((t=>a.O[t](o[l])))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[o,r,n]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,o)=>(a.f[o](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{71:"59a4ddc6",160:"8108276c",268:"35cb03f0",314:"b6df31f6",340:"4aae9f50",359:"aa958dad",615:"d4338bec",633:"83874dfb",797:"5b055425",853:"9b5036f7",890:"f915d90d",917:"34b99e86"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{143:"069bfbbb",736:"d1e7d5b3",917:"2533e3f2"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="borough-fe:";a.l=(o,r,n,s)=>{if(t[o])t[o].push(r);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+n),i.src=o),t[o]=[r];var p=(e,a)=>{i.onerror=i.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((t=>t(a))),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t=(t,e,a,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var n=n=>{if(r.onerror=r.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),o(l)}};return r.onerror=r.onload=n,r.href=e,document.head.appendChild(r),r},e=(t,e)=>{for(var a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var r=a[o],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===t||n===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],n=r.getAttribute("data-href");if(n===t||n===e)return r}},o=o=>new Promise(((r,n)=>{var s=a.miniCssF(o),i=a.p+s;if(e(s,i))return r();t(o,i,r,n)})),r={143:0};a.f.miniCss=(t,e)=>{var a={917:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=o(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var t={143:0};a.f.j=(e,o)=>{var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((a,o)=>r=t[e]=[a,o]));o.push(r[2]=n);var s=a.p+a.u(e),i=new Error,l=o=>{if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,r[1](i)}};a.l(s,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,o)=>{var r,n,[s,i,l]=o,c=0;if(s.some((e=>0!==t[e]))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(e&&e(o);c<s.length;c++)n=s[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},o=self["webpackChunkborough_fe"]=self["webpackChunkborough_fe"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var o=a.O(void 0,[736],(()=>a(4647)));o=a.O(o)})();