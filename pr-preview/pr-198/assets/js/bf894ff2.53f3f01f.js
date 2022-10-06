"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={id:"community",title:"Community Hub"},o=void 0,l={unversionedId:"community/community",id:"community/community",title:"Community Hub",description:"Welcome to the Radicle Community Hub!",source:"@site/docs/community/README.md",sourceDirName:"community",slug:"/community/",permalink:"/community/",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/community/README.md",tags:[],version:"current",frontMatter:{id:"community",title:"Community Hub"},sidebar:"communitySidebar"},c={},s=[{value:"Get involved",id:"get-involved",level:2},{value:"Discord",id:"discord",level:3},{value:"Discourse",id:"discourse",level:3},{value:"Newsletters",id:"newsletters",level:3},{value:"GitHub",id:"github",level:3},{value:"Twitter",id:"twitter",level:3},{value:"Matrix",id:"matrix",level:3},{value:"Telegram",id:"telegram",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Radicle Community Hub!"),(0,a.kt)("p",null,"We're currently migrating community resources here, beginning with ",(0,a.kt)("a",{parentName:"p",href:"/governance"},"governance documentation"),". In the\nmeantime, please excuse our dust."),(0,a.kt)("h2",{id:"get-involved"},"Get involved"),(0,a.kt)("p",null,"To get involved with Radicle project, start by joining our community channels:"),(0,a.kt)("h3",{id:"discord"},(0,a.kt)("a",{parentName:"h3",href:"https://discord.gg/j2HZCBDUvF"},"Discord")),(0,a.kt)("p",null,"Most conversations in the community are happening here. The core team is very active and typically responds to questions\nin real time."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/dZK4TxaU2v"},"discord.com")),(0,a.kt)("h3",{id:"discourse"},(0,a.kt)("a",{parentName:"h3",href:"https://radicle.community/"},"Discourse")),(0,a.kt)("p",null,"The hub for all longer-form discussions about the project. The team uses it regularly to share project-wide\nannouncements, releases, feature updates, and more."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://radicle.community/"},"radicle.community")),(0,a.kt)("h3",{id:"newsletters"},"Newsletters"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.getrevue.co/profile/radicle"},(0,a.kt)("strong",{parentName:"a"},"Radicle Digest")),": Monthly updates from the future of sovereign code\ncollaboration over peer-to-peer networks, designed to keep those who aren't following Discord constantly up to speed\nwith the latest product news and updates."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://eepurl.com/hhHxMX"},(0,a.kt)("strong",{parentName:"a"},"Radicle Governance Updates")),": Get updates on the latest ",(0,a.kt)("a",{parentName:"p",href:"/governance"},"governance")," news for\nRAD holders and delegates, including links to active proposals, governance team updates, and highlights exciting\nactivity to keep an eye out for in coming weeks. "),(0,a.kt)("h3",{id:"github"},(0,a.kt)("a",{parentName:"h3",href:"https://github.com/radicle-dev"},"GitHub")),(0,a.kt)("p",null,"All Radicle development is open-source and public by default. The ",(0,a.kt)("inlineCode",{parentName:"p"},"radicle-dev")," GitHub account is consistently active\nand is the best place to see what the team is working on until Radicle itself has features like issues, patches, and\nCI/CD."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev"},"github.com/radicle-dev")),(0,a.kt)("h3",{id:"twitter"},(0,a.kt)("a",{parentName:"h3",href:"https://twitter.com/radicle"},"Twitter")),(0,a.kt)("p",null,"We use Twitter to share announcements and project-wide updates, as well as amplify Radicle-aligned messaging from\npartnerships and the greater ecosystem. We don't offer support here."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/radicle"},"@radicle")),(0,a.kt)("h3",{id:"matrix"},(0,a.kt)("a",{parentName:"h3",href:"https://matrix.radicle.community/"},"Matrix")),(0,a.kt)("p",null,"Some of the core team uses Matrix, and the Discord channels are mirrored here. Information on Matrix is almost the same\nas Discord."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://matrix.radicle.community/"},"matrix.radicle.community")),(0,a.kt)("h3",{id:"telegram"},(0,a.kt)("a",{parentName:"h3",href:"https://t.me/radicleworld"},"Telegram")),(0,a.kt)("p",null,"Larger announcements are posted in our official Telegram channel. There are also other channels sprouting up which are\nquite active."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://t.me/radicleworld"},"t.me/radicleworld")))}p.isMDXComponent=!0}}]);