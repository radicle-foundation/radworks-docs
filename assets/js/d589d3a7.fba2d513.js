"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s=void 0,d={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"Hosting and collaboration on code in Radicle relies on two clients: the Radicle CLI and Radicle Upstream. The Radicle",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"docsSidebar",previous:{title:"What is Radicle?",permalink:"/"},next:{title:"Create a project",permalink:"/using-radicle/create"}},c={},u=[{value:"Install the Radicle CLI",id:"install-the-radicle-cli",level:2},{value:"Create your Radicle identity",id:"create-your-radicle-identity",level:2},{value:"Further <code>rad</code> usage",id:"further-rad-usage",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hosting and collaboration on code in Radicle relies on two clients: the Radicle CLI and Radicle Upstream. The Radicle\nCLI handles identity and interacting with Git to push code to the network, while Upstream provides a visual layer for\ncollaborating on patches to your projects."),(0,o.kt)("p",null,"In this getting started guide, you'll Radicle CLI and create a Radicle identity, which are the first two steps in\naccessing the Radicle network."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"DISCLAIMER \ud83c\udf31")),(0,o.kt)("br",null),(0,o.kt)("em",null,(0,o.kt)("p",null,"As the Software is of experimental nature and deployed for testing purposes in a testnet environment only, you acknowledge that this Beta Version of the Software is likely to contain bugs, defects, or errors (including any bug, defect, or error relating to or resulting from the display, manipulation, processing, storage, transmission, or use of data) that may materially and adversely affect the use, functionality, or performance of Radicle or any product or system containing or used in conjunction with Radicle."),(0,o.kt)("p",null,"You are aware and acknowledge that your processing, development, exchange, storage sharing, provision of, collaboration to or other involvement in Content on or via Radicle takes place in a testnet environment for testing purposes only. You acknowledge and agree that you have no claim to integrity and consistency regarding any Content whatsoever. You acknowledge and agree to the risk of total and irretrievable loss of Content throughout and after the Beta phase. You acknowledge and agree that any Content will most likely and without prior notice be irretrievably deleted upon completion of the testing phase. You acknowledge and agree that you are solely responsible for secure storage (e.g. backup copies) of Content and that the Foundation shall not be responsible and liable under any circumstance for any loss or corruption of Content."),(0,o.kt)("p",null,"Read the rest of our Terms of Use ",(0,o.kt)("a",{href:"https://radicle.xyz/terms.html"},"here"),"."))),(0,o.kt)("h2",{id:"install-the-radicle-cli"},"Install the Radicle CLI"),(0,o.kt)("p",null,"The easiest way to install the Radicle CLI on ",(0,o.kt)("strong",{parentName:"p"},"Linux")," and ",(0,o.kt)("strong",{parentName:"p"},"x86_64 macOS")," systems is compiling from the source code\nstored on a Radicle seed node. Make sure you have\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Cargo")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cmake.org/"},"CMake")," installed,\nthen run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli\n")),(0,o.kt)("p",null,"When finished, you'll be able to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," command for managing projects and interacting with the Radicle network."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/"},"radicle-cli\nrepository")," for\nother installation methods and instructions.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"M1/Apple Silicon users"),": We're still working on an ideal installation method for running Radicle CLI on your\nmachine","\u2014","see ",(0,o.kt)("a",{parentName:"p",href:"/understanding-radicle/troubleshooting#install-radicle-cli-on-apple-silicon"},"our M1 troubleshooting\nsection")," for our latest progress until\nwe're ready to publish an official method.")),(0,o.kt)("h2",{id:"create-your-radicle-identity"},"Create your Radicle identity"),(0,o.kt)("p",null,"To interact with the Radicle network, you need an ",(0,o.kt)("strong",{parentName:"p"},"identity"),", which you generate with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth"),"."),(0,o.kt)("p",null,"After choosing a display name and setting a passphrase, the Radicle CLI generates two unique identifiers."),(0,o.kt)("p",null,"First is your ",(0,o.kt)("strong",{parentName:"p"},"Peer ID"),", which identifies your device and the code you publish on the Radicle network, and is secured\nwith an Ed25519 keypair. Second is your ",(0,o.kt)("strong",{parentName:"p"},"personal \ud83c\udf31 URN"),", which identifies you across devices."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rad auth\nInitializing your \ud83c\udf31 profile and identity\n\nok Username \xb7 \nok Passphrase \xb7 ********\nok Creating your \ud83c\udf31 Ed25519 keypair...\nok Adding to ssh-agent...\nok Profile 3ae66df3-6ac7-4466-9013-83839749ed05 created.\n\nYour radicle Peer ID is hyncoz7x4s8x9447g6yogy4iy41q8i4juy5uhou57w1ga7obt644wo. This identifies your device.\nYour personal \ud83c\udf31 URN is rad:git:hnrkmx6trm4bu19bwa4apbxj8ftw8f7amfdyy. This identifies you across devices.\n\n=> To create a radicle project, run `rad init` from a git repository.\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There is currently no way to retrieve a lost or forgotten passphrase, so please store it safely!")),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth")," to create and manage multiple Radicle identities via profiles, but we'll stick with one for now."),(0,o.kt)("h2",{id:"further-rad-usage"},"Further ",(0,o.kt)("inlineCode",{parentName:"h2"},"rad")," usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," CLI tool comes with a number of useful commands for recalling details about your identity or the projects\nyou've already synced with the Radicle network."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rad help"),": See all the commands provided by ",(0,o.kt)("inlineCode",{parentName:"li"},"rad"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rad self"),": See information about your current profile and display name, URN, Peer ID, and keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rad ls"),": View a list of your synced Radicle projects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rad [command] --help"),": See additional options for an individual command.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"The next best steps depends mostly on how you're most likely to interact with projects hosted on the Radicle network."),(0,o.kt)("p",null,"If you're a maintainer (delegate) of a project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-radicle/view-share"},"View and share projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-radicle/track-review-merge"},"Review and merge patches"))),(0,o.kt)("p",null,"If you're a collaborator:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-radicle/view-share"},"View and share projects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-radicle/clone"},"Clone a project")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/using-radicle/push"},"Push changes"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Radicle development is public by default and completely open source. ",(0,o.kt)("a",{parentName:"p",href:"get-involved/join-the-community"},"Join our\ncommunity")," to learn more about the future of Radicle or contribute code,\ndocumentation, or design.")))}h.isMDXComponent=!0}}]);