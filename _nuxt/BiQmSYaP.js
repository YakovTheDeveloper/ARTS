import{n as r,A as l,o as p,p as c,w as i,Q as u,T as d,V as f,u as y,_ as h}from"./DSO9E7FE.js";const _=r({__name:"Typo",props:{variant:{type:String,default:"body",validator:t=>["h1","h2","body","caption","subtitle"].includes(t)},color:{type:String,default:"black"},offset:{type:Boolean},align:{type:String,default:"left",validator:t=>["left","center","right"].includes(t)}},setup(t){const o={h1:"h1",h2:"h2",h3:"h3",body:"p",caption:"p",link:"p",subtitle:"p"},e=t,a=o[e.variant],s=l(()=>[`typo--${e.variant}`,`typo--color-${e.color}`,`${e.align}`,`${e.offset?"offset":""}`]);return(n,m)=>(p(),c(f(y(a)),{class:d(s.value)},{default:i(()=>[u(n.$slots,"default",{},void 0,!0)]),_:3},8,["class"]))}}),g=h(_,[["__scopeId","data-v-f7e902ab"]]);export{g as T};
