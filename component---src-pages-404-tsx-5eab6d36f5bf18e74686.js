/*! For license information please see component---src-pages-404-tsx-5eab6d36f5bf18e74686.js.LICENSE.txt */
(self.webpackChunkeevee_zayas_garin=self.webpackChunkeevee_zayas_garin||[]).push([[218],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return o}});var r=n(7294),a=n(5893);const i=["as","disabled"];function o({tagName:e,disabled:t,href:n,target:r,rel:a,role:i,onClick:o,tabIndex:s=0,type:l}){e||(e=null!=n||null!=r||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==o||o(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:s,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const s=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,s=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);const[l,{tagName:c}]=o(Object.assign({tagName:n,disabled:r},s));return(0,a.jsx)(c,Object.assign({},s,l,{ref:t}))}));s.displayName="Button",t.ZP=s},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},9454:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(7294),a=n(1883);const i=e=>{let{title:t,description:n,pathname:i,children:o}=e;const{title:s,description:l,keywords:c,image:u,siteUrl:m,twitterUsername:d}=(0,a.useStaticQuery)("3114581520").site.siteMetadata,f={title:t||s,description:n||l,keywords:c,image:""+m+u,url:""+m+(i||""),twitterUsername:d};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"keywords",content:f.keywords}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:creator",content:f.twitterUsername}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🙋</text></svg>"}),o)}},2513:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),a=n(5005),i=n(9454);const o={padding:"144px"},s={marginTop:0,marginBottom:32,maxWidth:320},l={marginBottom:48,maxWidth:400,fontSize:32};t.default=()=>r.createElement("main",{style:o},r.createElement("h1",{style:s},"Page not found"),r.createElement("p",{style:l},"Sorry 😔—we couldn’t find what you were looking for."),r.createElement(a.Z,{href:"/",variant:"outline-primary"},"Go home"));const c=()=>r.createElement(i.H,{title:"404 | Eevee Zayas-Garín"})},5005:function(e,t,n){"use strict";var r=n(4184),a=n.n(r),i=n(7294),o=n(861),s=n(6792),l=n(5893);const c=i.forwardRef((({as:e,bsPrefix:t,variant:n,size:r,active:i,className:c,...u},m)=>{const d=(0,s.vE)(t,"btn"),[f,{tagName:p}]=(0,o.FT)({tagName:e,...u}),g=p;return(0,l.jsx)(g,{...f,...u,ref:m,className:a()(c,d,i&&"active",n&&`${d}-${n}`,r&&`${d}-${r}`,u.href&&u.disabled&&"disabled")})}));c.displayName="Button",c.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=c},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return c},vE:function(){return l},zG:function(){return u}});var r=n(7294);n(5893);const a=["xxl","xl","lg","md","sm","xs"],i=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:s}=i;function l(e,t){const{prefixes:n}=(0,r.useContext)(i);return e||n[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(i);return e}function u(){const{minBreakpoint:e}=(0,r.useContext)(i);return e}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-5eab6d36f5bf18e74686.js.map