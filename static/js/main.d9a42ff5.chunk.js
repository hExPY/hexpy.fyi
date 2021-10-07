(this["webpackJsonphexpy.fyi"]=this["webpackJsonphexpy.fyi"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),s=n(1),i=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("dark"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://hexpy.fyi",j="hExPy",b={name:"Marvyn",role:"Cyber Security Specialist",description:"I'am a dedicated, positive, communicative and down to earth techie loving to provide state-of-the-art solutions to make everyone's life more secure. Open-mindedness is my sixth forename (I really received five) and I'am passionate about establishing a growth and learning mindset in teams. Within my last job I established a sustainable Devops culture through coaching and mentorship.",social:{linkedin:"https://www.linkedin.com/in/marvyn-stephano-zalewski-515961a8/",github:"https://github.com/hExPY",avatar:"/avatar.png"}},h=[{name:"PenPaperHero",description:"A client only application to manage your Pen and Paper character. Mainly used for the 'Savage Worlds' ruleset. Sadly my group stopped playing so this project isn't under development right now.",stack:["TypeScript","Angular","SPA","PWA"],sourceCode:"https://github.com/hExPY/PenPaperHero",livePreview:"https://hexpy.github.io/PenPaperHero/"}],u=["Growth Mindset","TypeScript","JavaScript","Hunting Pokemon","Terraform","Agile Mindset","CDK","AWS","Cycling","Python","Coaching","Continuous Security","Mentoring"],d="mzalewski@ownpixel.com",m=n(14),O=n.n(m),x=n(12),p=n.n(x),f=n(16),v=n.n(f),g=n(15),k=n.n(g),N=(n(26),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(a.a)(r,2),j=o[0],b=o[1],m=function(){return b(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[h.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,u.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,d?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(p.a,{}):Object(i.jsx)(O.a,{})}),Object(i.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(k.a,{}):Object(i.jsx)(v.a,{})})]})}),_=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(N,{})]})}),y=n(10),w=n.n(y),P=n(17),S=n.n(P),C=(n(33),function(){var e=b.name,t=b.role,n=b.description,c=b.resume,a=b.social;return Object(i.jsxs)("div",{className:"about center",children:[a&&Object(i.jsx)(i.Fragment,{children:a.avatar&&Object(i.jsx)("img",{className:"about__avatar",alt:"avatar",src:a.avatar})}),e&&Object(i.jsxs)("h2",{children:["Moin*, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(w.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(S.a,{})})]})]})]})}),E=n(7),I=n.n(E),A=n(18),M=n.n(A),H=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},I()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(w.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(M.a,{})})]})}),T=(n(36),function(){return h.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:h.map((function(e){return Object(i.jsx)(H,{project:e},I()())}))})]}):null}),W=(n(37),function(){return u.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:u.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())}))})]}):null}),z=n(19),G=n.n(z),J=(n(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(G.a,{fontSize:"large"})})}):null}),Y=(n(39),function(){return d?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Get in touch"}),Object(i.jsx)("a",{href:"mailto:".concat(d),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("span",{children:"Moin* is commonly used in Germany/Hamburg to greet someone"})})}),F=(n(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(_,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(C,{}),Object(i.jsx)(T,{}),Object(i.jsx)(W,{}),Object(i.jsx)(Y,{})]}),Object(i.jsx)(J,{}),Object(i.jsx)(D,{})]})});n(42);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d9a42ff5.chunk.js.map