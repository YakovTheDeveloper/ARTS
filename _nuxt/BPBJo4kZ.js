import{_ as v,r as p,A as f,o as t,c as n,a as e,R as h,S as k,F as d,B as $,t as i,d as u,C as x,b as m,w as C,T as S,U as w,n as V,Q as g}from"./DSO9E7FE.js";import{T as y}from"./BiQmSYaP.js";import{L as D}from"./BQ9Tayk9.js";const I={class:"price-description"},L={class:"price-container"},T={class:"price-cell price-cell-heading"},B={class:"price-list"},N=["onClick"],M={class:"service-name"},j={class:"price-container"},A={class:"price-cell"},F={class:"price-border-text"},P={key:0,class:"price-cell"},R={__name:"PriceList",props:{priceData:Array,required:!0},setup(a){const c=p(!1),l=p(null),o=_=>{l.value=_,c.value=!0};return f(()=>({"grid-template-columns":"1fr 1fr"})),(_,r)=>(t(),n(d,null,[e("header",I,[h(e("div",L,[(t(!0),n(d,null,$(a.priceData.priceVariants,s=>(t(),n("span",T,i(s),1))),256))],512),[[k,a.priceData.priceVariants]])]),e("div",B,[(t(!0),n(d,null,$(a.priceData.content,(s,b)=>(t(),n("div",{key:b,class:"line"},[e("div",{class:"service",onClick:X=>o(s)},[e("p",M,i(s.displayName),1),h(e("p",{class:"service-description"},i(s.description),513),[[k,s.description]])],8,N),e("div",j,[e("p",A,[e("span",F,i(s.border),1),u(" "+i(s.price),1)]),s.price2?(t(),n("p",P,[h(e("span",{class:"price-border-text"},i(s.border),513),[[k,s.border]]),u(" "+i(s.price2),1)])):x("",!0)])]))),128))])],64))}},se=v(R,[["__scopeId","data-v-caf172ad"]]),q={class:"our-work"},z={class:"photo-container"},E=["src"],O={__name:"OurWork",setup(a){p(!1),p("");const c=_=>{},l=p(0);f(()=>o[l.value]),f(()=>o[l.value].src===o[0].src);const o=[{src:"images/mock1.jpg"},{src:"images/mock2.jpg"}];return(_,r)=>{const s=y;return t(),n("div",q,[m(s,{variant:"h1",align:"right"},{default:C(()=>r[0]||(r[0]=[u(" Наши работы ")])),_:1}),e("div",z,[e("img",{src:o[0].src,alt:"Slider Image",class:"photo",onClick:c},null,8,E)])])}}},oe=v(O,[["__scopeId","data-v-fca40ae6"]]),Q={class:"list"},U={__name:"Categories",props:{inverseColor:Boolean},setup(a){const c=a,l=[{name:"маникюр",link:"manicure"},{name:"педикюр",link:"pedicure"},{name:"волосы",link:"hair"},{name:"макияж и брови",link:"makeup"},{name:"косметология",link:"cosmetology"},{name:"шугаринг",link:"sugaring"}];return(o,_)=>(t(),n("nav",null,[e("ul",Q,[(t(),n(d,null,$(l,(r,s)=>e("li",{key:r.name,class:S(`/${r.link}`===(o._.provides[w]||o.$route).path?"hide":"show")},[m(D,{to:`/${r.link}`,inverseColor:c.inverseColor},{default:C(()=>[u(i(r.name),1)]),_:2},1032,["to","inverseColor"])],2)),64))])]))}},W=v(U,[["__scopeId","data-v-dbb1ed51"]]),G={class:"container"},H={class:"section"},J={class:"price-container"},K=V({__name:"CategoryLayout",setup(a){return(c,l)=>{const o=y,_=W;return t(),n("div",G,[e("section",H,[e("div",J,[m(o,{variant:"h1"},{default:C(()=>[g(c.$slots,"heading",{},void 0,!0)]),_:3}),g(c.$slots,"price",{},void 0)]),g(c.$slots,"our-works",{},void 0)]),m(_,{class:"categories"})])}}}),te=v(K,[["__scopeId","data-v-404f3180"]]);export{te as C,se as _,oe as a};
