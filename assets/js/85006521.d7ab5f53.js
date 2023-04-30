"use strict";(self.webpackChunkrailsconf_2023=self.webpackChunkrailsconf_2023||[]).push([[446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5408:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={card:"card_vceO",image:"image_EDOu",description:"description_Vdg7",position:"position_CmtU"};function o(e){let{imageUrl:t,name:r,position:o}=e;return a.createElement("div",{className:n.card},a.createElement("img",{src:t,className:n.image}),a.createElement("div",{className:n.description},a.createElement("p",null,r),a.createElement("p",{className:n.position},o)))}},3467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(5408);const i={sidebar_position:3},l="Gradually Modularizing your Monolith with Ruby Packs and Packwerk",s={unversionedId:"day-three/modular",id:"day-three/modular",title:"Gradually Modularizing your Monolith with Ruby Packs and Packwerk",description:"<Speaker",source:"@site/docs/day-three/modular.mdx",sourceDirName:"day-three",slug:"/day-three/modular",permalink:"/railsconf2023/docs/day-three/modular",draft:!1,editUrl:"https://github.com/Jeremy-Walton/railsconf2023/tree/main/packages/create-docusaurus/templates/shared/docs/day-three/modular.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dissecting Rails - a different approach to learning Rails",permalink:"/railsconf2023/docs/day-three/dissecting-rails"},next:{title:"Using Rails Engines to Supercharge Your Team",permalink:"/railsconf2023/docs/day-three/engines"}},c={},p=[{value:"Attendees",id:"attendees",level:2},{value:"Notes",id:"notes",level:2},{value:"Resources",id:"resources",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gradually-modularizing-your-monolith-with-ruby-packs-and-packwerk"},"Gradually Modularizing your Monolith with Ruby Packs and Packwerk"),(0,n.kt)(o.Z,{name:"Alex Evanczuk",position:"Product Infrastructure and Gradual Modularity Engineer at Gusto",imageUrl:"https://sessionize.com/image/bc47-400o400o2-RptoU3BoLgRtMRrqfmNozG.jpg",mdxType:"Speaker"}),(0,n.kt)(o.Z,{name:"Stephan Hagemann",position:"Leading Product Infrastructure Engineering at Gusto",imageUrl:"https://sessionize.com/image/aa19-400o400o2-sYhNc8LjRWWcunoZYU1nGJ.jpg",mdxType:"Speaker"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://railsconf2023.sessionize.com/session/452625"},"Schedule Entry")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1iM1ffdoy6otuBopqGTUTgnOC9nXgrzrcxN6l8xsF13Y/edit#slide=id.g23309be7886_1_55"},"Slides")),(0,n.kt)("h2",{id:"attendees"},"Attendees"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jeremy"),(0,n.kt)("li",{parentName:"ul"},"Josh"),(0,n.kt)("li",{parentName:"ul"},"Gary")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Relvancy"),(0,n.kt)("th",{parentName:"tr",align:null},"Interesting"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11, 7"),(0,n.kt)("td",{parentName:"tr",align:null},"11, 10")))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"This was a workshop talking about how to utilize Shopify's Packwerk gem and other tools to modularize your Rails application."),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/gradual-systems/railsconf-workshop"},"Workshop Repo")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/rubymod/shared_invite/zt-1u8syzcmr-waYQdSTM7sNztR26cDl8dg"},"Modularization Slack")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://leanpub.com/package-based-rails-applications/c/railsconf2023"},"Stephan's Book")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.github.com/alexevanczuk/ed743044d8c963e36e3b86e8185b74df"},"Code for conditional builds")))}m.isMDXComponent=!0}}]);