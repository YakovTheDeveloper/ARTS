import{C as r}from"./BplF4KRw.js";import{_ as d,r as c,u as i,p,o as l,w as o,b as _,d as m,s as f,a as s}from"./DXpCPRXR.js";const u={class:"map"},w={__name:"index",setup(h){const a=c(null);return i(async()=>{const e=document.createElement("script");e.src="https://maps.api.2gis.ru/2.0/loader.js",e.async=!0,document.head.appendChild(e);const t=[56.876097,53.213179];e.onload=()=>{console.log("wtf",window.DG),window.DG&&window.DG.then(()=>{const n=window.DG.map(a.value,{center:t,zoom:14});DG.marker(t).addTo(n)})}}),(e,t)=>(l(),p(r,null,{default:o(()=>[_(f,{variant:"h1",offset:"",align:"center"},{default:o(()=>t[0]||(t[0]=[m("Наша студия находится здесь")])),_:1}),s("div",u,[s("div",{ref_key:"mapRef",ref:a,style:{width:"100%",height:"100%"}},null,512)])]),_:1}))}},D=d(w,[["__scopeId","data-v-e771f52b"]]);export{D as default};