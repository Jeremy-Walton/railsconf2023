"use strict";(self.webpackChunkrailsconf_2023=self.webpackChunkrailsconf_2023||[]).push([[697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5408:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const a={card:"card_vceO",image:"image_EDOu",description:"description_Vdg7",position:"position_CmtU"};function o(e){let{imageUrl:t,name:n,position:o}=e;return i.createElement("div",{className:a.card},i.createElement("img",{src:t,className:a.image}),i.createElement("div",{className:a.description},i.createElement("p",null,n),i.createElement("p",{className:a.position},o)))}},9983:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const a={video:"video_lqCn"};function o(e){let{src:t}=e;return i.createElement("iframe",{className:a.video,width:"100%",height:"auto",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}},656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(7462),a=(n(7294),n(3905)),o=n(5408),r=n(9983);const l={sidebar_position:7},s="Accessible by default",c={unversionedId:"day-one/accessible",id:"day-one/accessible",title:"Accessible by default",description:"It's one thing to build a new application that meets the latest accessibility standards, but it's another thing to update an existing application to meet them.",source:"@site/docs/day-one/accessible.mdx",sourceDirName:"day-one",slug:"/day-one/accessible",permalink:"/railsconf2023/docs/day-one/accessible",draft:!1,editUrl:"https://github.com/Jeremy-Walton/railsconf2023/tree/main/docs/day-one/accessible.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"talksSidebar",previous:{title:"Taylor's Guide to Big Rewrites",permalink:"/railsconf2023/docs/day-one/rewrites"},next:{title:"Merged PRs: An Untapped Resource for Practice and Exploration",permalink:"/railsconf2023/docs/day-one/merged"}},d={},u=[{value:"Attendees",id:"attendees",level:2},{value:"Notes",id:"notes",level:2},{value:"Github and whether this is relevant",id:"github-and-whether-this-is-relevant",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Types of disability",id:"types-of-disability",level:3},{value:"Standards",id:"standards",level:3},{value:"Chrome has accessible tools in the dev tools",id:"chrome-has-accessible-tools-in-the-dev-tools",level:3},{value:"Scanning",id:"scanning",level:3},{value:"ax tool.",id:"ax-tool",level:4},{value:"Intractability",id:"intractability",level:4},{value:"Forms",id:"forms",level:3},{value:"Accessible Abstractions",id:"accessible-abstractions",level:4},{value:"Previews (Preview Driven Development)",id:"previews-preview-driven-development",level:3},{value:"Tools",id:"tools",level:4},{value:"Universal Design",id:"universal-design",level:3}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessible-by-default"},"Accessible by default"),(0,a.kt)("p",null,"It's one thing to build a new application that meets the latest accessibility standards, but it's another thing to update an existing application to meet them."),(0,a.kt)(o.Z,{name:"Joel Hawksley",position:"Staff Engineer at GitHub",imageUrl:"https://sessionize.com/image/9741-400o400o2-HBQvHkWcun2QZpgLcPHSjA.jpg",mdxType:"Speaker"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://railsconf2023.sessionize.com/session/446700"},"Schedule Entry")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hawksley.org/2023/04/21/accessible-by-default.html"},"Slides")),(0,a.kt)(r.Z,{src:"https://www.youtube.com/embed/4j2zlvE_Yj8",mdxType:"Video"}),(0,a.kt)("h2",{id:"attendees"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jeremy")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Relevancy"),(0,a.kt)("th",{parentName:"tr",align:null},"Interesting"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"8")))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hawksley.org/"},"https://hawksley.org/")),(0,a.kt)("h3",{id:"github-and-whether-this-is-relevant"},"Github and whether this is relevant"),(0,a.kt)("p",null,"~4000 Employees\n~1400 Controllers. +25% YoY\n400,000 lines of ERB\nFirst 6 years no managers,\n9 years no product managers.\nBe the home for all devs."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201cWe believe people with disabilities should benefit from and be able to contribute to the creation of human progress\u201d - Accessibility.GitHub.com")),(0,a.kt)("p",null,"Colorado. Natural disaster. House burned down."),(0,a.kt)("h3",{id:"accessibility"},"Accessibility"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201cAccessibility is the concept of whether a product or service can be used by everyone - however they encounter it.\u201d - intersection-design.org")),(0,a.kt)("h3",{id:"types-of-disability"},"Types of disability"),(0,a.kt)("p",null,"Permanent, Temporary, Situational\nHearing. Deaf, Ear Infection, Loud Environment\nTouch. Missing Arm, Broken Arm, Filled arm."),(0,a.kt)("h3",{id:"standards"},"Standards"),(0,a.kt)("p",null,"WCAG\n508\nAPG"),(0,a.kt)("h3",{id:"chrome-has-accessible-tools-in-the-dev-tools"},"Chrome has accessible tools in the dev tools"),(0,a.kt)("p",null,"Scanning Forms Previews (Preview Driven Development)"),(0,a.kt)("h3",{id:"scanning"},"Scanning"),(0,a.kt)("p",null,"BAD A11Y DOES NOT BREAK CI"),(0,a.kt)("p",null,"Alt text for images. Can check for alt text, but cannot check it is accurately describes it.\nGrouping things implies meaning. Blind people don\u2019t see that."),(0,a.kt)("h4",{id:"ax-tool"},"ax tool."),(0,a.kt)("p",null,"Highlights accessibility errors and throws console errors."),(0,a.kt)("h4",{id:"intractability"},"Intractability"),(0,a.kt)("p",null,"Rethink an entire workflow. GH projects for instance. Drag and Drop"),(0,a.kt)("h3",{id:"forms"},"Forms"),(0,a.kt)("p",null,"Core competency\n",(0,a.kt)("inlineCode",{parentName:"p"},"form_with")," is basically 1to1 with DOM. Not accessible out of the box."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201cProgrammatically associate labels with all form controls. The recommended methods is to use the label element and an explicit association using the for and id attributes\u201d - Axe rule 4.4")),(0,a.kt)("p",null,"DEFINE ERRORS OUT OF EXISTENCE. Construct software to make invalid states impossible.\nAccessible by\u2026 default? Solved with a custom form builder."),(0,a.kt)("h4",{id:"accessible-abstractions"},"Accessible Abstractions"),(0,a.kt)("p",null,"E.G. Avatar.\nBuilt a UI Component."),(0,a.kt)("h3",{id:"previews-preview-driven-development"},"Previews (Preview Driven Development)"),(0,a.kt)("p",null,"View Component Previews.\nBasically like Action Mailer preview but for view components.\nTestable."),(0,a.kt)("h4",{id:"tools"},"Tools"),(0,a.kt)("p",null,"LookBook (basically storybook). Works for Rails partials\nBuilt from the ground up for Rails and Hotwire.\nHas accessibility tools built in.\nPrimer for Github Design System."),(0,a.kt)("h3",{id:"universal-design"},"Universal Design"),(0,a.kt)("p",null,"I.E. Curb cuts (for wheelchairs originally, but helps/\nSingle Sign on avoids Capchas."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201cWe also know there are know unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns - the ones we don\u2019t know we don\u2019t know. And if one looks throughout the history ","[\u2026]"," it is the latter category that tends to be the difficult ones.\u201d -Donald Rumsfeld")),(0,a.kt)("p",null,"Use Practical Empathy"))}h.isMDXComponent=!0}}]);