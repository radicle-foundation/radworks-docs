"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[734],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),h=o,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6017:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={id:"push",title:"Push your changes"},u=void 0,s={unversionedId:"using-radicle/push",id:"using-radicle/push",title:"Push your changes",description:"How you make changes to your local working copy of a Radicle project is entirely up to you. Once you're finished, add",source:"@site/docs/using-radicle/push.md",sourceDirName:"using-radicle",slug:"/using-radicle/push",permalink:"/using-radicle/push",editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/using-radicle/push.md",tags:[],version:"current",frontMatter:{id:"push",title:"Push your changes"},sidebar:"docsSidebar",previous:{title:"View and share projects",permalink:"/using-radicle/view-share"},next:{title:"Clone a project",permalink:"/using-radicle/clone"}},l={},p=[],d={toc:p};function h(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How you make changes to your local working copy of a Radicle project is entirely up to you. Once you're finished, add\nand commit your changes with ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," just as you would when collaborating on any other Git-based\nforge like GitHub or GitLab. "),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"rad push")," to synchronize your changes with a secondary source tree within the project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ rad push\nPushing \ud83c\udf31 to remote `rad`\n$ git push rad\nTo rad://hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git\n   e2cc2f9..5198e4c  main -> main\n\nGit version 2.35.1\nRadicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILnTPdmcmdNPtJtBT/1S9G+4jOL0V0GD9pPYWgvXmxxQ\n\nSyncing \ud83c\udf31 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/\n\nok Project synced.\n\n\ud83c\udf43 Your project is available at:\n\n   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy\n   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git\n")),(0,i.kt)("p",null,"Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"(web)")," link to visit ",(0,i.kt)("em",{parentName:"p"},"your")," source tree within the project using the web app, which you can also navigate\nto using the tree selector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selecting a tree to view",src:t(2714).Z,width:"606",height:"203"})))}h.isMDXComponent=!0},2714:function(e,n,t){n.Z=t.p+"assets/images/web-interface_trees-022a8b9035fb5b5713e82b91ba1a997d.png"}}]);