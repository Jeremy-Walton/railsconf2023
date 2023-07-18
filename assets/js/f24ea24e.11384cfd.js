"use strict";(self.webpackChunkrailsconf_2023=self.webpackChunkrailsconf_2023||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5408:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const i={card:"card_vceO",image:"image_EDOu",description:"description_Vdg7",position:"position_CmtU"};function r(e){let{imageUrl:t,name:n,position:r}=e;return a.createElement("div",{className:i.card},a.createElement("img",{src:t,className:i.image}),a.createElement("div",{className:i.description},a.createElement("p",null,n),a.createElement("p",{className:i.position},r)))}},9983:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const i={video:"video_lqCn"};function r(e){let{src:t}=e;return a.createElement("iframe",{className:i.video,width:"100%",height:"auto",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}},3881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=n(5408),l=n(9983);const o={sidebar_position:1},s="Keynote: The Magic of Rails",c={unversionedId:"day-one/keynote-eileen",id:"day-one/keynote-eileen",title:"Keynote: The Magic of Rails",description:"Exploring the principles & techniques behind the framework",source:"@site/docs/day-one/keynote-eileen.mdx",sourceDirName:"day-one",slug:"/day-one/keynote-eileen",permalink:"/railsconf2023/docs/day-one/keynote-eileen",draft:!1,editUrl:"https://github.com/Jeremy-Walton/railsconf2023/tree/main/docs/day-one/keynote-eileen.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"talksSidebar",previous:{title:"Day One - April 24",permalink:"/railsconf2023/docs/category/day-one---april-24"},next:{title:"The End of Legacy Code",permalink:"/railsconf2023/docs/day-one/legacy-code"}},p={},u=[{value:"Attendees",id:"attendees",level:2},{value:"Notes",id:"notes",level:2},{value:"Tenants",id:"tenants",level:3},{value:"How Rails Components are structured.",id:"how-rails-components-are-structured",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Railties",id:"railties",level:3},{value:"Agnostic Interface",id:"agnostic-interface",level:3},{value:"Metaprogramming",id:"metaprogramming",level:3},{value:"Maintaining Rails",id:"maintaining-rails",level:3},{value:"Rails is",id:"rails-is",level:3}],m={toc:u},d="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keynote-the-magic-of-rails"},"Keynote: The Magic of Rails"),(0,i.kt)("p",null,"Exploring the principles & techniques behind the framework"),(0,i.kt)(r.Z,{name:"Eileen M. Uchitelle",position:"Rails Core Team | Senior Staff Engineer @ Shopify",imageUrl:"https://sessionize.com/image/0603-400o400o2-DcZeRc1f5jggZXcKhQkdBt.png",mdxType:"Speaker"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://railsconf2023.sessionize.com/session/471435"},"Schedule Entry")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://speakerdeck.com/eileencodes/the-magic-of-rails"},"Slides")),(0,i.kt)(l.Z,{src:"https://www.youtube.com/embed/jE1Wp7-wnSM",mdxType:"Video"}),(0,i.kt)("h2",{id:"attendees"},"Attendees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Relevancy"),(0,i.kt)("th",{parentName:"tr",align:null},"Interesting"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"9"),(0,i.kt)("td",{parentName:"tr",align:null},"9")))),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Exploring the principles & techniques behind the framework.\nWorks at Shopify"),(0,i.kt)("p",null,"Originally Tightly coupled. Clear lines between gems\nActive model only requires active support."),(0,i.kt)("h3",{id:"tenants"},"Tenants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rails is modular but not fractured."),(0,i.kt)("li",{parentName:"ul"},"Rails is designed to have agnostic interfaces."),(0,i.kt)("li",{parentName:"ul"},"Rails  is extracted from applications."),(0,i.kt)("li",{parentName:"ul"},"Rails is made of simple and aesthetic APIs"),(0,i.kt)("li",{parentName:"ul"},"Rails is a framework that takes on complexity to empower you")),(0,i.kt)("h3",{id:"how-rails-components-are-structured"},"How Rails Components are structured."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Action Cable"),(0,i.kt)("li",{parentName:"ul"},"Action Pack"),(0,i.kt)("li",{parentName:"ul"},"Active Job"),(0,i.kt)("li",{parentName:"ul"},"Active Storage"),(0,i.kt)("li",{parentName:"ul"},"Action Mailbox"),(0,i.kt)("li",{parentName:"ul"},"Action Text"),(0,i.kt)("li",{parentName:"ul"},"Active Model"),(0,i.kt)("li",{parentName:"ul"},"Active support"),(0,i.kt)("li",{parentName:"ul"},"Action Mailer"),(0,i.kt)("li",{parentName:"ul"},"Action View"),(0,i.kt)("li",{parentName:"ul"},"Active Record"),(0,i.kt)("li",{parentName:"ul"},"Railties")),(0,i.kt)("p",null,"Naming Convention\nActive vs Action?"),(0,i.kt)("p",null,"Active is backend behavior\nAction is user facing\nFrailties is the glue between them."),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Architecture & Patterns of Rails components\nArchitecture & Patterns the role of Railties"),(0,i.kt)("p",null,"Application -> Register hooks -> Load components -> Run hooks"),(0,i.kt)("h3",{id:"railties"},"Railties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Railties are the core of the framework"),(0,i.kt)("li",{parentName:"ul"},"Railties control load order ad when hooks should be run"),(0,i.kt)("li",{parentName:"ul"},"Enables components to work together without adding dependencies\nLook in the components railties for how it is configured.")),(0,i.kt)("p",null,"Architecture & Patterns Agnostic interfaces."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"model ActiveRecord\n  module ConnectionAdapters\n    class AbstractAdapter\n    end\n  end\nend\n")),(0,i.kt)("p",null,"Factory pattern with inheritance.\nActive storage does this too.\nConcrete should inherit from Abstract"),(0,i.kt)("h3",{id:"agnostic-interface"},"Agnostic Interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consistent interface for all supported libraries"),(0,i.kt)("li",{parentName:"ul"},"Simplifies Rails code to avoid using is_a"),(0,i.kt)("li",{parentName:"ul"},"Makes it easy for apps to swap out adapters / services"),(0,i.kt)("li",{parentName:"ul"},"Lowers the maintenance burden. They maintain the ones they are comfortable with and other can implement the rest")),(0,i.kt)("h3",{id:"metaprogramming"},"Metaprogramming"),(0,i.kt)("p",null,"Class eval.\nHow does the has_many and belongs_to work?"),(0,i.kt)("p",null,"Find the implementation of a method.\n",(0,i.kt)("inlineCode",{parentName:"p"},"post.method(:comments).source_location"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Post::generatedAssociationMethods")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Powerful tools enables us to build beautiful, simple APIs"),(0,i.kt)("li",{parentName:"ul"},"Hides complexity from your application"),(0,i.kt)("li",{parentName:"ul"},"Where \u201cRails Magic\u201d comes from")),(0,i.kt)("h3",{id:"maintaining-rails"},"Maintaining Rails"),(0,i.kt)("p",null,"Why I work on it"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2010: Introduced to Rails"),(0,i.kt)("li",{parentName:"ul"},"2011: Big Nerd Ranch"),(0,i.kt)("li",{parentName:"ul"},"2014: 1st conference. 1st contribution"),(0,i.kt)("li",{parentName:"ul"},"2015: First RailsConf"),(0,i.kt)("li",{parentName:"ul"},"2017 Join Rails Core"),(0,i.kt)("li",{parentName:"ul"},"2023 This RailsConf")),(0,i.kt)("p",null,"I work on Rails to advance the framework\nI work on Rails to ensure applications can stay on Rails\nI work on Rails to build a stronger community\nI work on Rails have an impact on the future"),(0,i.kt)("h3",{id:"rails-is"},"Rails is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inspiring"),(0,i.kt)("li",{parentName:"ul"},"Empowering"),(0,i.kt)("li",{parentName:"ul"},"Imperfect"),(0,i.kt)("li",{parentName:"ul"},"The applications we build"),(0,i.kt)("li",{parentName:"ul"},"The team behind it"),(0,i.kt)("li",{parentName:"ul"},"Community"),(0,i.kt)("li",{parentName:"ul"},"Magic")))}k.isMDXComponent=!0}}]);