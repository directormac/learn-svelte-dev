import{s as h,f as v,l as u,g as E,h as $,m as l,d as b,i as x,x as p,n as f,y as _,z as S}from"../chunks/scheduler.ecb0429e.js";import{S as y,i as P}from"../chunks/index.3959f891.js";import{s as q}from"../chunks/singletons.6a732fb5.js";const z=()=>{const t=q;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},C={subscribe(t){return z().page.subscribe(t)}};function H(t){var g;let e,n,r=t[0].status+"",o,m,i=((g=t[0].error)==null?void 0:g.message)+"",c;return{c(){e=v("h1"),n=u("Error Page not found "),o=u(r),m=u(" : "),c=u(i)},l(a){e=E(a,"H1",{});var s=$(e);n=l(s,"Error Page not found "),o=l(s,r),m=l(s," : "),c=l(s,i),s.forEach(b)},m(a,s){x(a,e,s),p(e,n),p(e,o),p(e,m),p(e,c)},p(a,[s]){var d;s&1&&r!==(r=a[0].status+"")&&f(o,r),s&1&&i!==(i=((d=a[0].error)==null?void 0:d.message)+"")&&f(c,i)},i:_,o:_,d(a){a&&b(e)}}}function j(t,e,n){let r;return S(t,C,o=>n(0,r=o)),[r]}let B=class extends y{constructor(e){super(),P(this,e,j,H,h,{})}};export{B as component};