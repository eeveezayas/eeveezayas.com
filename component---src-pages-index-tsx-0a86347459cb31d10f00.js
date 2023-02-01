"use strict";(self.webpackChunkeevee_zayas_garin=self.webpackChunkeevee_zayas_garin||[]).push([[691],{6103:function(e,a,t){t.r(a),t.d(a,{Head:function(){return O},default:function(){return z}});var n=t(7294),r=t(1883),l=t(8032),s=t(682),c=t(5005),o=t(4184),i=t.n(o),m=t(6792),u=t(5893);const d=n.forwardRef((({bsPrefix:e,className:a,as:t="div",...n},r)=>{const l=(0,m.vE)(e,"row"),s=(0,m.pi)(),c=(0,m.zG)(),o=`${l}-cols`,d=[];return s.forEach((e=>{const a=n[e];let t;delete n[e],null!=a&&"object"==typeof a?({cols:t}=a):t=a;const r=e!==c?`-${e}`:"";null!=t&&d.push(`${o}${r}-${t}`)})),(0,u.jsx)(t,{ref:r,...n,className:i()(a,l,...d)})}));d.displayName="Row";var p=d,f=t(9454),h=t(1706);const b=n.forwardRef(((e,a)=>{const[{className:t,...n},{as:r="div",bsPrefix:l,spans:s}]=function({as:e,bsPrefix:a,className:t,...n}){a=(0,m.vE)(a,"col");const r=(0,m.pi)(),l=(0,m.zG)(),s=[],c=[];return r.forEach((e=>{const t=n[e];let r,o,i;delete n[e],"object"==typeof t&&null!=t?({span:r,offset:o,order:i}=t):r=t;const m=e!==l?`-${e}`:"";r&&s.push(!0===r?`${a}${m}`:`${a}${m}-${r}`),null!=i&&c.push(`order${m}-${i}`),null!=o&&c.push(`offset${m}-${o}`)})),[{...n,className:i()(t,...s,...c)},{as:e,bsPrefix:a,spans:s}]}(e);return(0,u.jsx)(r,{...n,ref:a,className:i()(t,!s.length&&l)})}));b.displayName="Col";var g=b,E=t(4680),y=t(9602);const v=n.forwardRef((({bsPrefix:e,className:a,variant:t,as:n="img",...r},l)=>{const s=(0,m.vE)(e,"card-img");return(0,u.jsx)(n,{ref:l,className:i()(t?`${s}-${t}`:s,a),...r})}));v.displayName="CardImg";var A=v,w=t(9059);const N=n.forwardRef((({bsPrefix:e,className:a,as:t="div",...r},l)=>{const s=(0,m.vE)(e,"card-header"),c=(0,n.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,u.jsx)(w.Z.Provider,{value:c,children:(0,u.jsx)(t,{ref:l,...r,className:i()(a,s)})})}));N.displayName="CardHeader";var k=N;const x=(0,y.Z)("h5"),Z=(0,y.Z)("h6"),I=(0,E.Z)("card-body"),S=(0,E.Z)("card-title",{Component:x}),C=(0,E.Z)("card-subtitle",{Component:Z}),P=(0,E.Z)("card-link",{Component:"a"}),_=(0,E.Z)("card-text",{Component:"p"}),M=(0,E.Z)("card-footer"),T=(0,E.Z)("card-img-overlay"),L=n.forwardRef((({bsPrefix:e,className:a,bg:t,text:n,border:r,body:l,children:s,as:c="div",...o},d)=>{const p=(0,m.vE)(e,"card");return(0,u.jsx)(c,{ref:d,...o,className:i()(a,p,t&&`bg-${t}`,n&&`text-${n}`,r&&`border-${r}`),children:l?(0,u.jsx)(I,{children:s}):s})}));L.displayName="Card",L.defaultProps={body:!1};var G=Object.assign(L,{Img:A,Title:S,Subtitle:C,Body:I,Link:P,Text:_,Header:k,Footer:M,ImgOverlay:T});var j=e=>{let{title:a,slug:t,image:r,alt:s,shortDescription:c}=e;return n.createElement(g,null,n.createElement(G,null,n.createElement(l.G,{image:(0,l.c)(r),alt:s,className:"card-img-top"}),n.createElement(G.Body,null,n.createElement(G.Title,null,a),n.createElement(G.Text,null,n.createElement("p",null,c)),n.createElement("a",{className:"stretched-link",href:"/projects/#"+t},"Go to project"))))},W=t(8501);var z=()=>{const e=(0,r.useStaticQuery)("22995768").allProjectsJson.edges;return n.createElement(h.Z,{pageTitle:"Eevee Zayas-Garín"},n.createElement(s.Z,{className:"py-3"},n.createElement(l.S,{alt:"Portrait of Eevee Zayas-Garin at Carmen Gray's studio in Amsterdam, 2022. Outpainted using Dall-E 2.",src:"../images/eevee-ams-outpaint.png",placeholder:"blurred",__imageData:t(6612)}),n.createElement("p",{className:"lead pt-3"},"I am a design engineer and a musician who also explores the mediums of poetry and photography. I have a special interest in matters of access, dialogic design, sound art and practice-based research into musical interaction."),n.createElement("p",null,"I am originally from Valencia (Spain) and based in London since 2011. I graduated in BSc Engineering Product Design with First Class Honours from London South Bank University in 2015. I am currently a PhD student at the Media and Arts Technology (MAT) Centre for Doctoral Studies, Queen Mary University of London. As part of the Augmented Instruments Laboratory, my research is concerned with accessibility, lived experience and replicability in digital musical instrument design."),n.createElement(c.Z,{variant:"outline-primary",href:"mailto:eevee1@posteo.uk"},"Get in touch")),n.createElement(s.Z,{fluid:!0,className:"bg-light py-3"},n.createElement(s.Z,null,n.createElement("h2",null,"Projects"),n.createElement(p,{xs:1,md:2,className:"g-4 py-3"},e.map((e=>{let{node:a}=e;const t=a.title,r=a.slug,l=a.image,s=a.alt,c=a.short_description;return n.createElement(j,{title:t,slug:r,image:l,alt:s,shortDescription:c})}))))),n.createElement(W.default,null),n.createElement(s.Z,{fluid:!0,id:"publications",className:"bg-light py-3"},n.createElement(s.Z,null,n.createElement("h2",null,"Publications"),n.createElement("p",null,"Here is a list of my publications:"),n.createElement("ul",null,n.createElement("li",{key:"dialogicadmis",className:"my-3"},"Zayas-Garin, E., & McPherson, A. (2022, June 16). Dialogic Design of Accessible Digital Musical Instruments: Investigating Performer Experience.",n.createElement("i",null,"Proceedings of the International Conference on New Interfaces for Musical Expression.")," ","NIME 2022."," ",n.createElement("a",{href:"https://doi.org/10.21428/92fbeb44.2b8ce9a4",target:"_blank",rel:"noreferrer"},"https://doi.org/10.21428/92fbeb44.2b8ce9a4")),n.createElement("li",{key:"mp4nime",className:"my-3"},"Reed, C. N., Nordmoen, C., Martelloni, A., Lepri, G., Robson, N., Zayas-Garin, E., Cotton, K., Mice, L., & McPherson, A. (2022, June 16). Exploring Experiences with New Musical Instruments through Micro-phenomenology."," ",n.createElement("i",null,"Proceedings of the International Conference on New Interfaces for Musical Expression.")," ","NIME 2022."," ",n.createElement("a",{href:"https://doi.org/10.21428/92fbeb44.b304e4b1",target:"_blank",rel:"noreferrer"},"https://doi.org/10.21428/92fbeb44.b304e4b1")),n.createElement("li",{key:"dmiapprenticeship",className:"my-3"},"Zayas-Garin, E., Harrison, J., Jack, R., & McPherson, A. (2021, April 29). DMI Apprenticeship: Sharing and Replicating Musical Artefacts."," ",n.createElement("i",null,"Proceedings of the International Conference on New Interfaces for Musical Expression.")," ","NIME 2021."," ",n.createElement("a",{href:"https://doi.org/10/gm8tkf",target:"_blank",rel:"noreferrer"},"https://doi.org/10/gm8tkf"))))),n.createElement(s.Z,{fluid:!0,id:"contact",className:"py-3"},n.createElement(s.Z,null,n.createElement("h2",null,"Contact"),n.createElement("p",null,"Say hello! 👋"),n.createElement(c.Z,{variant:"outline-primary",href:"mailto:eevee1@posteo.uk",target:"_blank",rel:"noreferrer",className:"me-2"},"Email"),n.createElement(c.Z,{variant:"outline-primary",href:"twitter.com/zayaseevee",target:"_blank",rel:"noreferrer",className:"me-2"},"Twitter"),n.createElement(c.Z,{variant:"outline-primary",href:"https://tech.lgbt/@eevee",target:"_blank",rel:"noreferrer",className:"me-2"},"Mastodon"))))};const O=()=>n.createElement(f.H,null)},8501:function(e,a,t){t.r(a);var n=t(7294),r=t(682);a.default=()=>n.createElement(r.Z,{fluid:!0,id:"music",className:"py-3"},n.createElement(r.Z,null,n.createElement("h2",null,"Music"),n.createElement("p",null,"I am currently engaged in several musical projects:"),n.createElement("h3",null,"Astrolabio"),n.createElement("p",null,"Find my music as Astrolabio on"," ",n.createElement("a",{href:"https://astrolabio.bandcamp.com/",target:"_blank"},"Bandcamp")," ","and"," ",n.createElement("a",{href:"https://soundcloud.com/astrolabio1",target:"_blank"},"Soundcloud"),"."),n.createElement("hr",null),n.createElement("h3",null,"Spiritual Advisor"),n.createElement("p",null,"Find my music as Spiritual Advisor also on"," ",n.createElement("a",{href:"https://spiritualadvisoruk.bandcamp.com/",target:"_blank"},"Bandcamp")," ","and"," ",n.createElement("a",{href:"https://soundcloud.com/spiritualadvisoruk",target:"_blank"},"Soundcloud"),"."),n.createElement("hr",null),n.createElement("h3",null,"YOLO"),n.createElement("p",null,"My band, YOLO, hasn't recorded yet, but we're working on it!"),n.createElement("p",null,"Follow us on"," ",n.createElement("a",{href:"https://instagram.com/yolo______theeband",target:"_blank"},"Instagram"),"."),n.createElement("hr",null),n.createElement("h3",null,"DJ mixes"),n.createElement("p",null,"Finally, I'm starting to put out some mixes on"," ",n.createElement("a",{href:"https://soundcloud.com/eeveezayas",target:"_blank"},"Soundcloud"),"."),n.createElement("iframe",{width:"100%",height:"166",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1346379259&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}),n.createElement("div",{style:{fontSize:"10px",color:"#cccccc",lineBreak:"anywhere",wordBreak:"normal",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontFamily:"Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",fontWeight:100}},n.createElement("a",{href:"https://soundcloud.com/eeveezayas",title:"EEVEE ZAYAS",target:"_blank",style:{color:"#cccccc",textDecoration:"none"}},"EEVEE ZAYAS")," ","·"," ",n.createElement("a",{href:"https://soundcloud.com/eeveezayas/queue-is-the-name-of-the-game",title:"Queue Is The Name Of The Game",target:"_blank",style:{color:"#cccccc",textDecoration:"none"}},"Queue Is The Name Of The Game"))))},6612:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVR42gFiAp39AHd2cIaDfpCPipWWkp+gnKmqp7O0sry7u8LCwsTFx8rLy9PW2dzh6ODn8+nx/X6Ch3FqbGpoaoePlpGTlwDGvK3XzLvFvrKfoJ+qqqmztLO5urnBxMWWmpicmZXQ1drS1tvc4+3h6/ji7PqXnKLR2dy6w8m2zd3T294ArqmgtLCn0s7EmpmZpKWmsrS1trm7uL/Etn6IwoCDydHbzdbi0dvp0dvqyNTjgYiPztTVztTXr8bQvdLdAJOWj7GwqM3LwHd5cpWYmauus625vLmYo9lFZvpjg8qZrbLF0LG7yaWwvY2WnlNYWWlnZmtoZ2hlZIKAgQB2YlF0aF5aWllgZGObn6Ojp66otLqzlKGcPVJgOz82JStja3eWnquCiI1pbWxAQD4fICEgHx9WVVWNj44ATzQmMSclHyEhKS0wjpGWmJyjmJ6noKqxYFtgAAQGAgkPLy8ziImAY2dnUFJPOzk0KyglJCMhm5uZxMzTALymfKKOW1VYWV9iZXt+g3F1empvdXV7g3J1eTY3ORISF0hFS21uWmNjXUpNTUFCPTk4Mzs6NlBPTDAwJgDJo0S1oV2krLOIkZp1fIJobXJpbnNpbXRpbXBvdHllZ2mRjXtrdYJnbnRhZmpTV1hGR0ZISEZEQ0ORgzYAhGg8no1bvsXIoq27l6KulZ6mkJacdHuEb3V7bHN7aXF3dXhmgIeOeYKPbnN5W19iUlVWSk1MRUZBfmQfAIdnNqOLUsrKxKWuuqCosZigqYuTnYqRm4GJlICIk3yFkXR8hoSKkYqRnH2EjWRpa1NWVEtMST9APm9dJazQPH7YjfTYAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/cf99a713cbf46ca671706b890b343ba3/6edcf/eevee-ams-outpaint.png","srcSet":"/static/cf99a713cbf46ca671706b890b343ba3/0ad88/eevee-ams-outpaint.png 1163w,\\n/static/cf99a713cbf46ca671706b890b343ba3/01c6c/eevee-ams-outpaint.png 2325w,\\n/static/cf99a713cbf46ca671706b890b343ba3/6edcf/eevee-ams-outpaint.png 4650w","sizes":"(min-width: 4650px) 4650px, 100vw"},"sources":[{"srcSet":"/static/cf99a713cbf46ca671706b890b343ba3/f72e6/eevee-ams-outpaint.webp 1163w,\\n/static/cf99a713cbf46ca671706b890b343ba3/e3c0d/eevee-ams-outpaint.webp 2325w,\\n/static/cf99a713cbf46ca671706b890b343ba3/b9cc8/eevee-ams-outpaint.webp 4650w","type":"image/webp","sizes":"(min-width: 4650px) 4650px, 100vw"}]},"width":4650,"height":2325}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-0a86347459cb31d10f00.js.map