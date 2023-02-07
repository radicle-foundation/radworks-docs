"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7894:function(e,t,n){n.d(t,{z:function(){return c},Z:function(){return s}});var r=n(7294),i=n(9960),a="grid_iD3H",o="button_YHhe",l="cta_VXSW";function s(e){let{children:t}=e;return r.createElement("div",{className:a},t)}function c(e){let{children:t,style:n={},href:a,title:s,cta:c}=e;return r.createElement(i.Z,{to:a,className:o,style:n},s&&r.createElement("h3",null,s),t&&r.createElement("p",null,t),c&&r.createElement("p",{className:l},c," \u2192"))}},3637:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),i=n(7894);function a(){return r.createElement(i.Z,null,r.createElement(i.z,{style:{gridColumn:"1 / span 12"},href:"https://radicle.xyz/get-started.html",title:"Install Radicle",cta:"radicle.xyz"},"See the Radicle website for the most up-to-date CLI tooling installation instructions for macOS and Linux and the process for creating your Radicle identity."))}},7856:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905)),a=n(3637);const o={id:"migrate-github-radicle",title:"Migrate from GitHub to Radicle",sidebar_label:"Migrate from GitHub to Radicle"},l=void 0,s={unversionedId:"migrate-github-radicle",id:"migrate-github-radicle",title:"Migrate from GitHub to Radicle",description:"Welcome to Radicle &mdash; software that enables developers to securely collaborate over a peer-to-peer network built on",source:"@site/docs/migrate-github-radicle.mdx",sourceDirName:".",slug:"/migrate-github-radicle",permalink:"/migrate-github-radicle",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/migrate-github-radicle.mdx",tags:[],version:"current",frontMatter:{id:"migrate-github-radicle",title:"Migrate from GitHub to Radicle",sidebar_label:"Migrate from GitHub to Radicle"},sidebar:"docsSidebar",previous:{title:"Get started",permalink:"/get-started"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},c={},u=[{value:"Install the Radicle CLI",id:"install-the-radicle-cli",level:2},{value:"Initialize your project on Radicle",id:"initialize-your-project-on-radicle",level:2},{value:"Push to the Radicle network",id:"push-to-the-radicle-network",level:2},{value:"Push to both Radicle and GitHub simultaneously (mirror)",id:"push-to-both-radicle-and-github-simultaneously-mirror",level:3},{value:"Code collaboration on Radicle (issues and patches/PRs)",id:"code-collaboration-on-radicle-issues-and-patchesprs",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to Radicle ","\u2014"," software that enables developers to securely collaborate over a peer-to-peer network built on\nGit. Check out our homepage if you haven't already seen our comparison between ",(0,i.kt)("a",{parentName:"p",href:"https://radicle.xyz/"},"Radicle and alternatives like GitHub or\nGitLab"),"."),(0,i.kt)("p",null,"Assuming you're already onboard Radicle's vision of sovereign code infrastructure, let's talk about what we'll cover.\nWith this guide, you'll:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a Radicle identity."),(0,i.kt)("li",{parentName:"ul"},"Migrate your code hosting to Radicle's network."),(0,i.kt)("li",{parentName:"ul"},"Continue pushing changes to Radicle alone, or mirror changes in both Radicle and GitHub.")),(0,i.kt)("p",null,"This guide also works if you're currently using GitLab, Gitea, or any other Git-based code hosting platform."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Radicle doesn't yet have feature parity with GitHub ","\u2014"," we're still working on visual code reviews, an issue board,\nand CI/CD pipelines. Even if the lack of these features is stopping you from migrating in full, we still encourage you\nto migrate your project to Radicle and mirror your changes so that you can quickly make the switch when the time is\nright!")),(0,i.kt)("h2",{id:"install-the-radicle-cli"},"Install the Radicle CLI"),(0,i.kt)("p",null,"To migrate from GitHub to Radicle, you first need to install the Radicle CLI and create a Radicle\n",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/identity"},"identity"),", which is like creating an account on GitHub. It's how your projects are\nidentified on the Radicle network, and it's your key to hosting code and collaborating with others on your project."),(0,i.kt)(a.Z,{mdxType:"Installation"}),(0,i.kt)("p",null,"Once you're done with the first two steps ","\u2014"," ",(0,i.kt)("strong",{parentName:"p"},"Install the Radicle ",(0,i.kt)("inlineCode",{parentName:"strong"},"rad")," CLI.")," and ",(0,i.kt)("strong",{parentName:"p"},"Run ",(0,i.kt)("inlineCode",{parentName:"strong"},"rad auth")," to create your\nRadicle identity.")," ","\u2014"," you can return here for the rest of the instructions."),(0,i.kt)("h2",{id:"initialize-your-project-on-radicle"},"Initialize your project on Radicle"),(0,i.kt)("p",null,"Radicle wraps around the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," binary and processes you already use to manage your project's data and history. This\nwrapper lets you push your code to the sovereign Radicle network and collaborate with others."),(0,i.kt)("p",null,"Because you already have a project you've pushed to GitHub, you already initialized the Git repository with ",(0,i.kt)("inlineCode",{parentName:"p"},"git init"),",\nwhich created the ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," directory to store objects, heads, refs, and more."),(0,i.kt)("p",null,"Initializing a project on Radicle is as simple as setting up Git for the first time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd your-project-directory/\nrad init\n")),(0,i.kt)("p",null,"Add a description and choose your default branch, which is typically either ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"rad init")," does two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creates a unique peer-to-peer identity ","\u2014"," a project URN ","\u2014"," for your project."),(0,i.kt)("li",{parentName:"ul"},"Adds a new ",(0,i.kt)("inlineCode",{parentName:"li"},"remote")," to your project's existing configuration using that new identity, for pushing code to a unique\naddress on the Radicle network.")),(0,i.kt)("p",null,"You'll also see a line similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"ok Project initialized: rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo"),". The text\nafter ",(0,i.kt)("inlineCode",{parentName:"p"},"rad:git:")," is your project's URN."),(0,i.kt)("p",null,"You can always find your project's URN by running ",(0,i.kt)("inlineCode",{parentName:"p"},"rad .")," from the project's directory."),(0,i.kt)("h2",{id:"push-to-the-radicle-network"},"Push to the Radicle network"),(0,i.kt)("p",null,"You can push to the network now that you've initialized your project on Radicle."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rad push\n")),(0,i.kt)("p",null,"Since this is your first push to Radicle, the CLI asks which seed node you want to sync with. Radicle provides three\nseed nodes with ",(0,i.kt)("em",{parentName:"p"},"identical")," functionality ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"p"},"pine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"willow"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"maple"),"."),(0,i.kt)("p",null,"Choose any that you like!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also sync to multiple Radicle-hosted seed nodes, or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev/radicle-client-services"},"host your own seed\nnode"),", if you'd like additional resiliency or security. ",(0,i.kt)("inlineCode",{parentName:"p"},"rad\npush")," syncs with your default seed node, which you can find with ",(0,i.kt)("inlineCode",{parentName:"p"},"git config --local rad.seed"),", but you'll need to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"rad push --seed <your-seed-node-url>")," for each additional seed node you want to sync with.")),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"rad")," pushes your project to the Radicle network, it outputs details on where you can find your project on the\n",(0,i.kt)("a",{parentName:"p",href:"https://app.radicle.xyz"},"Radicle web app"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ud83c\udf31 Your project is synced and available at:\n\n    (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo/\n    (git) https://willow.radicle.garden/hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo.git\n")),(0,i.kt)("h3",{id:"push-to-both-radicle-and-github-simultaneously-mirror"},"Push to both Radicle and GitHub simultaneously (mirror)"),(0,i.kt)("p",null,"If you're not ready to migrate away from GitHub completely, you can mirror your project in both places."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Your commit message here"\nrad push\ngit push\n')),(0,i.kt)("p",null,"If you don't like running two commands, you could also create an alias in Zsh or Bash to automate the process. Edit your\n",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," file and add the following line, which first pushes to your existing remote on GitHub\nand Radicle in sequence when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"gp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'alias gp="rad push && git push"\n')),(0,i.kt)("h2",{id:"code-collaboration-on-radicle-issues-and-patchesprs"},"Code collaboration on Radicle (issues and patches/PRs)"),(0,i.kt)("p",null,"Certain features, like visual code reviews and issue discussion boards, aren't yet live on Radicle."),(0,i.kt)("p",null,"We're prioritizing must-have features like issues and patches, with more information coming soon."),(0,i.kt)("p",null,"For now, the best way to collaborate is to have each contributor ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," the project, ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/push"},"push\nchanges")," to their remotes, and have a single maintainer responsible for ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/track-review-merge"},"tracking, reviewing, and\nmerging")," changes to keep the project and contributors in sync."),(0,i.kt)("p",null,"You can also ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/issues"},"create, view, and comment on issues")," using the CLI."),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"If you're having trouble with any part of the migration process, check out our ",(0,i.kt)("a",{parentName:"p",href:"/troubleshooting"},"troubleshooting\nguide"),", or head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/j2HZCBDUvF"},(0,i.kt)("strong",{parentName:"a"},"#support")," channel on Discord"),", where\na member of the Radicle team will help you out."),(0,i.kt)("p",null,"The next best thing you can do is ",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/view-share"},"share your project")," with collaborators so they can\n",(0,i.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," it and push their changes, completing your migration away from not just GitHub, but all\ncentralized, online-first, and censorship-prone code hosting platforms."),(0,i.kt)("p",null,"Now that you're on the Radicle network, hop into our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/j2HZCBDUvF"},"Discord server"),", where our core\nteam and collaborators actively chat about the future of sovereign code infrastructure, what we're working on next, and\nways to get involved."))}p.isMDXComponent=!0}}]);