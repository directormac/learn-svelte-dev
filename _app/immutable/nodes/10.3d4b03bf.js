import{s as V,f as g,l as u,a as z,g as w,h as N,m as c,d as _,c as G,i as b,x as l,n as P,y as D,j as k,X as J}from"../chunks/scheduler.ecb0429e.js";import{S as X,i as y,b as A,d as C,m as I,a as O,t as T,e as q}from"../chunks/index.3959f891.js";import{g as K,a as L}from"../chunks/spread.8a54911c.js";import{N as M}from"../chunks/Nav.17efb716.js";function Q(s){let e,o,r,i,n,p,d;return{c(){e=g("p"),o=u("exported name is "),r=u(s[0]),i=z(),n=g("p"),p=u("exported valuedName is "),d=u(s[1])},l(a){e=w(a,"P",{});var t=N(e);o=c(t,"exported name is "),r=c(t,s[0]),t.forEach(_),i=G(a),n=w(a,"P",{});var m=N(n);p=c(m,"exported valuedName is "),d=c(m,s[1]),m.forEach(_)},m(a,t){b(a,e,t),l(e,o),l(e,r),b(a,i,t),b(a,n,t),l(n,p),l(n,d)},p(a,[t]){t&1&&P(r,a[0]),t&2&&P(d,a[1])},i:D,o:D,d(a){a&&(_(e),_(i),_(n))}}}function R(s,e,o){let{name:r}=e,{valuedName:i="NoGivenValue"}=e;return s.$$set=n=>{"name"in n&&o(0,r=n.name),"valuedName"in n&&o(1,i=n.valuedName)},[r,i]}class U extends X{constructor(e){super(),y(this,e,R,Q,V,{name:0,valuedName:1})}}function W(s){let e,o,r,i,n,p,d,a,t,m,E,j,v,S;return{c(){e=g("p"),o=u("The "),r=g("code"),i=u(s[1]),n=u(" package is "),p=u(s[2]),d=u(" fast. Download version "),a=u(s[0]),t=u(` from
	`),m=g("a"),E=u("npm"),j=u(" and "),v=g("a"),S=u("learn more here"),this.h()},l(h){e=w(h,"P",{});var f=N(e);o=c(f,"The "),r=w(f,"CODE",{});var B=N(r);i=c(B,s[1]),B.forEach(_),n=c(f," package is "),p=c(f,s[2]),d=c(f," fast. Download version "),a=c(f,s[0]),t=c(f,` from
	`),m=w(f,"A",{href:!0});var F=N(m);E=c(F,"npm"),F.forEach(_),j=c(f," and "),v=w(f,"A",{href:!0});var H=N(v);S=c(H,"learn more here"),H.forEach(_),f.forEach(_),this.h()},h(){k(m,"href",s[4]),k(v,"href",s[3])},m(h,f){b(h,e,f),l(e,o),l(e,r),l(r,i),l(e,n),l(e,p),l(e,d),l(e,a),l(e,t),l(e,m),l(m,E),l(e,j),l(e,v),l(v,S)},p(h,[f]){f&2&&P(i,h[1]),f&4&&P(p,h[2]),f&1&&P(a,h[0]),f&16&&k(m,"href",h[4]),f&8&&k(v,"href",h[3])},i:D,o:D,d(h){h&&_(e)}}}function Y(s,e,o){let r,{name:i}=e,{version:n}=e,{speed:p}=e,{website:d}=e;return n=4,s.$$set=a=>{"name"in a&&o(1,i=a.name),"version"in a&&o(0,n=a.version),"speed"in a&&o(2,p=a.speed),"website"in a&&o(3,d=a.website)},s.$$.update=()=>{s.$$.dirty&2&&o(4,r=`https://www.npmjs.com/package/${i}`)},[n,i,p,d,r]}class Z extends X{constructor(e){super(),y(this,e,Y,W,V,{name:1,version:0,speed:2,website:3})}}function $(s){let e,o,r,i,n,p;e=new M({});const d=[s[0]];let a={};for(let t=0;t<d.length;t+=1)a=J(a,d[t]);return r=new Z({props:a}),n=new U({props:{name:"svelte",valuedName:"Override"}}),{c(){A(e.$$.fragment),o=z(),A(r.$$.fragment),i=z(),A(n.$$.fragment)},l(t){C(e.$$.fragment,t),o=G(t),C(r.$$.fragment,t),i=G(t),C(n.$$.fragment,t)},m(t,m){I(e,t,m),b(t,o,m),I(r,t,m),b(t,i,m),I(n,t,m),p=!0},p(t,[m]){const E=m&1?K(d,[L(t[0])]):{};r.$set(E)},i(t){p||(O(e.$$.fragment,t),O(r.$$.fragment,t),O(n.$$.fragment,t),p=!0)},o(t){T(e.$$.fragment,t),T(r.$$.fragment,t),T(n.$$.fragment,t),p=!1},d(t){t&&(_(o),_(i)),q(e,t),q(r,t),q(n,t)}}}function x(s){return[{name:"svelte",speed:"blazing",version:3,website:"https://svelte.dev"}]}class se extends X{constructor(e){super(),y(this,e,x,$,V,{})}}export{se as component};
