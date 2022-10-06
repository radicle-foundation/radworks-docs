"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[673],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7894:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n="grid_iD3H";function o(e){let{children:t}=e;return a.createElement("div",{className:n},t)}},3637:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(7894);const o="install_YuZt",i="link_tMX9";function l(){return a.createElement(n.Z,null,a.createElement("div",{className:o},a.createElement("a",{className:i,href:"https://radicle.xyz/get-started.html"},"See the Radicle website for the most up-to-date CLI tooling installation instructions for macOS and Linux and the process for creating your Radicle identity.")))}},3718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=r(3637),i=r(7894);const l={id:"get-started",title:"Get started with Radicle",sidebar_label:"Get started",slug:"/get-started"},d=void 0,s={unversionedId:"get-started",id:"get-started",title:"Get started with Radicle",description:"Radicle is a decentralized code collaboration network built on open protocols \ud83c\udf31. It enables developers to collaborate",source:"@site/docs/radicle.md",sourceDirName:".",slug:"/get-started",permalink:"/get-started",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/radicle.md",tags:[],version:"current",frontMatter:{id:"get-started",title:"Get started with Radicle",sidebar_label:"Get started",slug:"/get-started"},sidebar:"docsSidebar",next:{title:"Migrate from GitHub to Radicle",permalink:"/migrate-github-radicle"}},c={},u=[{value:"How do I get started?",id:"how-do-i-get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Learn the basics of <code>rad</code>",id:"learn-the-basics-of-rad",level:3},{value:"Start hosting and collaborating on code",id:"start-hosting-and-collaborating-on-code",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Radicle is a decentralized code collaboration network built on open protocols \ud83c\udf31. It enables developers to collaborate\non code without relying on trusted intermediaries. Radicle was designed to provide similar functionality to centralized\ncode collaboration platforms \u2014 or "forges" \u2014 while retaining Git\u2019s peer-to-peer nature, building on what made\ndistributed version control so powerful in the first place.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Instead of user accounts and logins, Radicle uses public key cryptography to identify projects and their\ncollaborators."),(0,n.kt)("li",{parentName:"ul"},"Instead of issue trackers hosted and owned by a corporation, Radicle uses seed nodes. The Radicle Foundation sponsors\nsome, but you can always host a seed node of your own, and use all the same collaboration tools/processes, using\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/radicle-dev/radicle-client-services"},"open-source code"),"."),(0,n.kt)("li",{parentName:"ul"},"Instead of dictating your process for collaboration, Radicle lets anyone build new tools or design new workflows\naround completely open protocols.")),(0,n.kt)("p",null,"Two interlacing clients create this experience:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/radicle-dev/radicle-cli"},(0,n.kt)("inlineCode",{parentName:"a"},"rad")," command-line tool")),", which interacts with Git and the\nRadicle network to help you host code or collaborate on projects."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://app.radicle.xyz"},"web app")),", which provides a visual interface for discovering projects, viewing\ncode, and viewing patches from collaborators.")),(0,n.kt)("p",null,"Radicle also addresses ",(0,n.kt)("strong",{parentName:"p"},"open source funding")," through ",(0,n.kt)("a",{parentName:"p",href:"https://www.drips.network/"},"Drips"),", an Ethereum protocol for\ngenerating recurring income with subscriptions and NFT memberships. Drips helps you create a circular funding network by\ndripping funds to your favorite creators and dedicating a percentage of your incoming drips to others."),(0,n.kt)("h2",{id:"how-do-i-get-started"},"How do I get started?"),(0,n.kt)("p",null,"Hosting and collaborating on code in Radicle relies on our CLI tooling ","\u2014"," the bridge between Git and the Radicle\nnetwork ","\u2014"," and your identity, which is a ",(0,n.kt)("strong",{parentName:"p"},"Peer ID")," and ",(0,n.kt)("strong",{parentName:"p"},"personal URN"),", which cryptographically verify you and\nyour devices with a secure Ed25519 keypair."),(0,n.kt)(o.Z,{mdxType:"Installation"}),(0,n.kt)(i.Z,{mdxType:"Grid"},(0,n.kt)("div",null,(0,n.kt)("a",{href:"/migrate-github-radicle"},"Leaving GitHub in favor of Radicle's sovereign code infrastructure? Check out our migration guide!")),(0,n.kt)("div",null,(0,n.kt)("a",{href:"/using-radicle/collaboration"},"Learn about Radicle's code collaboration workflows using CLI-based issues and patches."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you need help installing or using Radicle, check out our ",(0,n.kt)("a",{parentName:"p",href:"/troubleshooting"},"troubleshooting")," guide,\n",(0,n.kt)("a",{parentName:"p",href:"/understanding-radicle/faq"},"FAQ"),", or join a ",(0,n.kt)("a",{parentName:"p",href:"/community/"},"community channel")," where our core teams hang out.")),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Now that you've installed ",(0,n.kt)("inlineCode",{parentName:"p"},"rad")," and created your Radicle identity, it's time to securely collaborate on a sovereign code\ninfrastructure."),(0,n.kt)("h3",{id:"learn-the-basics-of-rad"},"Learn the basics of ",(0,n.kt)("inlineCode",{parentName:"h3"},"rad")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rad help"),": See all the commands provided by ",(0,n.kt)("inlineCode",{parentName:"li"},"rad"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rad self"),": See information about your current identity and display name, URN, Peer ID, and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rad ls"),": View a list of projects you've synced with the Radicle network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rad auth"),": Create and manage multiple Radicle ",(0,n.kt)("a",{parentName:"li",href:"/using-radicle/identity"},"identities"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rad [command] --help"),": See additional options for an individual command.")),(0,n.kt)("h3",{id:"start-hosting-and-collaborating-on-code"},"Start hosting and collaborating on code"),(0,n.kt)(i.Z,{mdxType:"Grid"},(0,n.kt)("div",null,(0,n.kt)("a",{href:"/using-radicle/create"},"Create a new Radicle project")),(0,n.kt)("div",null,(0,n.kt)("a",{href:"/using-radicle/clone"},"Clone an existing project")),(0,n.kt)("div",null,(0,n.kt)("a",{href:"/using-radicle/issues"},"Create or view issues")),(0,n.kt)("div",null,(0,n.kt)("a",{href:"/using-radicle/track-review-merge"},"Collaborate with patches"))))}m.isMDXComponent=!0}}]);