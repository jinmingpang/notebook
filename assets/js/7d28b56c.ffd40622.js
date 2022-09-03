"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9573],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function m(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=a.createContext({}),i=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=i(n.components);return a.createElement(u.Provider,{value:e},n.children)},o={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,u=n.parentName,p=m(n,["components","mdxType","originalType","parentName"]),c=i(t),d=r,k=c["".concat(u,".").concat(d)]||c[d]||o[d]||l;return t?a.createElement(k,s(s({ref:e},p),{},{components:t})):a.createElement(k,s({ref:e},p))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,s=new Array(l);s[0]=c;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=n,m.mdxType="string"==typeof n?n:r,s[1]=m;for(var i=2;i<l;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4556:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>m,metadata:()=>i,toc:()=>o});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),s=["components"],m={},u="\u987a\u5e8f\u8868\u76f8\u5173\u9898\u76ee",i={unversionedId:"computer/code-design/write-code/leetcode/simple/linear-linked-list",id:"computer/code-design/write-code/leetcode/simple/linear-linked-list",title:"\u987a\u5e8f\u8868\u76f8\u5173\u9898\u76ee",description:"\u67e5\u627e\u76f8\u5173",source:"@site/docs/computer/02-code-design/10-write-code/01-leetcode/simple/01-linear-linked-list.mdx",sourceDirName:"computer/02-code-design/10-write-code/01-leetcode/simple",slug:"/computer/code-design/write-code/leetcode/simple/linear-linked-list",permalink:"/notebook/docs/computer/code-design/write-code/leetcode/simple/linear-linked-list",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"computerSidebar",previous:{title:"\u5b9e\u6218\u5e94\u7528",permalink:"/notebook/docs/computer/code-design/write-code/"},next:{title:"\u94fe\u8868\u76f8\u5173\u9898\u76ee",permalink:"/notebook/docs/computer/code-design/write-code/leetcode/simple/sequenatial-list"}},p={},o=[{value:"\u67e5\u627e\u76f8\u5173",id:"\u67e5\u627e\u76f8\u5173",level:2},{value:"\u4e22\u5931\u7684\u6570\u5b57",id:"\u4e22\u5931\u7684\u6570\u5b57",level:3},{value:"\u7b2c\u4e09\u5927\u7684\u6570",id:"\u7b2c\u4e09\u5927\u7684\u6570",level:3},{value:"\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",id:"\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e",level:3},{value:"\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e",id:"\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e",level:3},{value:"\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57",id:"\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57",level:3},{value:"\u5bfb\u627e\u91cd\u590d\u6570",id:"\u5bfb\u627e\u91cd\u590d\u6570",level:3},{value:"\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e",id:"\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e",level:3},{value:"\u7f3a\u5931\u7684\u7b2c\u4e00\u4e2a\u6b63\u6570",id:"\u7f3a\u5931\u7684\u7b2c\u4e00\u4e2a\u6b63\u6570",level:3},{value:"\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",id:"\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570",level:3},{value:"\u6c42\u548c\u76f8\u5173",id:"\u6c42\u548c\u76f8\u5173",level:2},{value:"\u4e24\u6570\u4e4b\u548c",id:"\u4e24\u6570\u4e4b\u548c",level:3},{value:"\u4e24\u6570\u4e4b\u548c II",id:"\u4e24\u6570\u4e4b\u548c-ii",level:3},{value:"\u4e09\u6570\u4e4b\u548c",id:"\u4e09\u6570\u4e4b\u548c",level:3},{value:"\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",id:"\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",level:3},{value:"\u56db\u6570\u4e4b\u548c",id:"\u56db\u6570\u4e4b\u548c",level:3},{value:"\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",id:"\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668",level:3},{value:"\u5b50\u96c6\u76f8\u5173",id:"\u5b50\u96c6\u76f8\u5173",level:2},{value:"\u64cd\u4f5c\u76f8\u5173",id:"\u64cd\u4f5c\u76f8\u5173",level:2},{value:"\u79fb\u9664\u5143\u7d20",id:"\u79fb\u9664\u5143\u7d20",level:3},{value:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",id:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879",level:3},{value:"\u79fb\u52a8\u96f6",id:"\u79fb\u52a8\u96f6",level:3},{value:"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",id:"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4",level:3},{value:"\u6570\u7ec4\u62c6\u5206",id:"\u6570\u7ec4\u62c6\u5206",level:3}],c={toc:o};function d(n){var e=n.components,m=(0,r.Z)(n,s);return(0,l.kt)("wrapper",(0,a.Z)({},c,m,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u987a\u5e8f\u8868\u76f8\u5173\u9898\u76ee"},"\u987a\u5e8f\u8868\u76f8\u5173\u9898\u76ee"),(0,l.kt)("h2",{id:"\u67e5\u627e\u76f8\u5173"},"\u67e5\u627e\u76f8\u5173"),(0,l.kt)("h3",{id:"\u4e22\u5931\u7684\u6570\u5b57"},"\u4e22\u5931\u7684\u6570\u5b57"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/missing-number"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b [0, n] \u4e2d n \u4e2a\u6570\u7684\u6570\u7ec4 nums \uff0c\u627e\u51fa [0, n] \u8fd9\u4e2a\u8303\u56f4\u5185\u6ca1\u6709\u51fa\u73b0\u5728\u6570\u7ec4\u4e2d\u7684\u90a3\u4e2a\u6570\u3002\n\n\u63d0\u793a\uff1anums \u4e2d\u7684\u6240\u6709\u6570\u5b57\u90fd \u72ec\u4e00\u65e0\u4e8c\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [3,0,1]\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1an = 3\uff0c\u56e0\u4e3a\u6709 3 \u4e2a\u6570\u5b57\uff0c\u6240\u4ee5\u6240\u6709\u7684\u6570\u5b57\u90fd\u5728\u8303\u56f4 [0,3] \u5185\u30022 \u662f\u4e22\u5931\u7684\u6570\u5b57\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u51fa\u73b0\u5728 nums \u4e2d\u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [0,1]\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1an = 2\uff0c\u56e0\u4e3a\u6709 2 \u4e2a\u6570\u5b57\uff0c\u6240\u4ee5\u6240\u6709\u7684\u6570\u5b57\u90fd\u5728\u8303\u56f4 [0,2] \u5185\u30022 \u662f\u4e22\u5931\u7684\u6570\u5b57\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u51fa\u73b0\u5728 nums \u4e2d\u3002\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [9,6,4,2,3,5,7,0,1]\n\u8f93\u51fa\uff1a8\n\u89e3\u91ca\uff1an = 9\uff0c\u56e0\u4e3a\u6709 9 \u4e2a\u6570\u5b57\uff0c\u6240\u4ee5\u6240\u6709\u7684\u6570\u5b57\u90fd\u5728\u8303\u56f4 [0,9] \u5185\u30028 \u662f\u4e22\u5931\u7684\u6570\u5b57\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u51fa\u73b0\u5728 nums \u4e2d\u3002\n\n\u793a\u4f8b 4\uff1a\n\u8f93\u5165\uff1anums = [0]\n\u8f93\u51fa\uff1a1\n\u89e3\u91ca\uff1an = 1\uff0c\u56e0\u4e3a\u6709 1 \u4e2a\u6570\u5b57\uff0c\u6240\u4ee5\u6240\u6709\u7684\u6570\u5b57\u90fd\u5728\u8303\u56f4 [0,1] \u5185\u30021 \u662f\u4e22\u5931\u7684\u6570\u5b57\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u51fa\u73b0\u5728 nums \u4e2d\u3002\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u5927\u7684\u6570"},"\u7b2c\u4e09\u5927\u7684\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/third-maximum-number"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u975e\u7a7a\u6570\u7ec4\uff0c\u8fd4\u56de\u6b64\u6570\u7ec4\u4e2d \u7b2c\u4e09\u5927\u7684\u6570 \u3002\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56de\u6570\u7ec4\u4e2d\u6700\u5927\u7684\u6570\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1a[3, 2, 1]\n\u8f93\u51fa\uff1a1\n\u89e3\u91ca\uff1a\u7b2c\u4e09\u5927\u7684\u6570\u662f 1 \u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1a[1, 2]\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\u7b2c\u4e09\u5927\u7684\u6570\u4e0d\u5b58\u5728, \u6240\u4ee5\u8fd4\u56de\u6700\u5927\u7684\u6570 2 \u3002\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1a[2, 2, 3, 1]\n\u8f93\u51fa\uff1a1\n\u89e3\u91ca\uff1a\u6ce8\u610f\uff0c\u8981\u6c42\u8fd4\u56de\u7b2c\u4e09\u5927\u7684\u6570\uff0c\u662f\u6307\u5728\u6240\u6709\u4e0d\u540c\u6570\u5b57\u4e2d\u6392\u7b2c\u4e09\u5927\u7684\u6570\u3002\n\u6b64\u4f8b\u4e2d\u5b58\u5728\u4e24\u4e2a\u503c\u4e3a 2 \u7684\u6570\uff0c\u5b83\u4eec\u90fd\u6392\u7b2c\u4e8c\u3002\u5728\u6240\u6709\u4e0d\u540c\u6570\u5b57\u4e2d\u6392\u7b2c\u4e09\u5927\u7684\u6570\u4e3a 1 \u3002\n")),(0,l.kt)("h3",{id:"\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e"},"\u641c\u7d22\u63d2\u5165\u4f4d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/search-insert-position"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u6392\u5e8f\u6570\u7ec4\u548c\u4e00\u4e2a\u76ee\u6807\u503c\uff0c\u5728\u6570\u7ec4\u4e2d\u627e\u5230\u76ee\u6807\u503c\uff0c\u5e76\u8fd4\u56de\u5176\u7d22\u5f15\u3002\u5982\u679c\u76ee\u6807\u503c\u4e0d\u5b58\u5728\u4e8e\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u5b83\u5c06\u4f1a\u88ab\u6309\u987a\u5e8f\u63d2\u5165\u7684\u4f4d\u7f6e\u3002\n\n\u8bf7\u5fc5\u987b\u4f7f\u7528\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n) \u7684\u7b97\u6cd5\u3002\n\n\u793a\u4f8b 1:\n\u8f93\u5165: nums = [1,3,5,6], target = 5\n\u8f93\u51fa: 2\n\n\u793a\u4f8b 2:\n\u8f93\u5165: nums = [1,3,5,6], target = 2\n\u8f93\u51fa: 1\n\n\u793a\u4f8b 3:\n\u8f93\u5165: nums = [1,3,5,6], target = 7\n\u8f93\u51fa: 4\n")),(0,l.kt)("h3",{id:"\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"},"\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u6309\u7167\u975e\u9012\u51cf\u987a\u5e8f\u6392\u5217\u7684\u6574\u6570\u6570\u7ec4 nums\uff0c\u548c\u4e00\u4e2a\u76ee\u6807\u503c target\u3002\u8bf7\u4f60\u627e\u51fa\u7ed9\u5b9a\u76ee\u6807\u503c\u5728\u6570\u7ec4\u4e2d\u7684\u5f00\u59cb\u4f4d\u7f6e\u548c\u7ed3\u675f\u4f4d\u7f6e\u3002\n\n\u5982\u679c\u6570\u7ec4\u4e2d\u4e0d\u5b58\u5728\u76ee\u6807\u503c target\uff0c\u8fd4\u56de [-1, -1]\u3002\n\n\u4f60\u5fc5\u987b\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n) \u7684\u7b97\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898\u3002\n\n\u63d0\u793a\uff1anums \u662f\u4e00\u4e2a\u975e\u9012\u51cf\u6570\u7ec4\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [5,7,7,8,8,10], target = 8\n\u8f93\u51fa\uff1a[3,4]\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [5,7,7,8,8,10], target = 6\n\u8f93\u51fa\uff1a[-1,-1]\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [], target = 0\n\u8f93\u51fa\uff1a[-1,-1]\n")),(0,l.kt)("h3",{id:"\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57"},"\u627e\u5230\u6240\u6709\u6570\u7ec4\u4e2d\u6d88\u5931\u7684\u6570\u5b57"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u542b n \u4e2a\u6574\u6570\u7684\u6570\u7ec4 nums \uff0c\u5176\u4e2d nums[i] \u5728\u533a\u95f4 [1, n] \u5185\u3002\n\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u5728 [1, n] \u8303\u56f4\u5185\u4f46\u6ca1\u6709\u51fa\u73b0\u5728 nums \u4e2d\u7684\u6570\u5b57\uff0c\u5e76\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u8fd4\u56de\u7ed3\u679c\u3002\n\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [4,3,2,7,8,2,3,1]\n\u8f93\u51fa\uff1a[5,6]\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [1,1]\n\u8f93\u51fa\uff1a[2]\n")),(0,l.kt)("h3",{id:"\u5bfb\u627e\u91cd\u590d\u6570"},"\u5bfb\u627e\u91cd\u590d\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/find-the-duplicate-number"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u5305\u542b n + 1 \u4e2a\u6574\u6570\u7684\u6570\u7ec4 nums \uff0c\u5176\u6570\u5b57\u90fd\u5728 [1, n] \u8303\u56f4\u5185\uff08\u5305\u62ec 1 \u548c n\uff09\uff0c\u53ef\u77e5\u81f3\u5c11\u5b58\u5728\u4e00\u4e2a\u91cd\u590d\u7684\u6574\u6570\u3002\n\u5047\u8bbe nums \u53ea\u6709 \u4e00\u4e2a\u91cd\u590d\u7684\u6574\u6570 \uff0c\u8fd4\u56de \u8fd9\u4e2a\u91cd\u590d\u7684\u6570 \u3002\n\n\u4f60\u8bbe\u8ba1\u7684\u89e3\u51b3\u65b9\u6848\u5fc5\u987b \u4e0d\u4fee\u6539 \u6570\u7ec4 nums \u4e14\u53ea\u7528\u5e38\u91cf\u7ea7 O(1) \u7684\u989d\u5916\u7a7a\u95f4\u3002\n\n\u63d0\u793a\uff1anums \u4e2d \u53ea\u6709\u4e00\u4e2a\u6574\u6570 \u51fa\u73b0 \u4e24\u6b21\u6216\u591a\u6b21 \uff0c\u5176\u4f59\u6574\u6570\u5747\u53ea\u51fa\u73b0 \u4e00\u6b21\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [1,3,4,2,2]\n\u8f93\u51fa\uff1a2\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [3,1,3,4,2]\n\u8f93\u51fa\uff1a3\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e"},"\u6570\u7ec4\u4e2d\u91cd\u590d\u7684\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/find-all-duplicates-in-an-array/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u5176\u4e2d nums \u7684\u6240\u6709\u6574\u6570\u90fd\u5728\u8303\u56f4 [1, n] \u5185\uff0c\n\u4e14\u6bcf\u4e2a\u6574\u6570\u51fa\u73b0 \u4e00\u6b21 \u6216 \u4e24\u6b21 \u3002\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u51fa\u73b0 \u4e24\u6b21 \u7684\u6574\u6570\uff0c\u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u3002\n\n\u4f60\u5fc5\u987b\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u4e00\u4e2a\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n) \u4e14\u4ec5\u4f7f\u7528\u5e38\u91cf\u989d\u5916\u7a7a\u95f4\u7684\u7b97\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [4,3,2,7,8,2,3,1]\n\u8f93\u51fa\uff1a[2,3]\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [1,1,2]\n\u8f93\u51fa\uff1a[1]\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [1]\n\u8f93\u51fa\uff1a[]\n")),(0,l.kt)("h3",{id:"\u7f3a\u5931\u7684\u7b2c\u4e00\u4e2a\u6b63\u6570"},"\u7f3a\u5931\u7684\u7b2c\u4e00\u4e2a\u6b63\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/first-missing-positive/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u8bf7\u4f60\u627e\u51fa\u5176\u4e2d\u6ca1\u6709\u51fa\u73b0\u7684\u6700\u5c0f\u7684\u6b63\u6574\u6570\u3002\n\n\u8bf7\u4f60\u5b9e\u73b0\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n) \u5e76\u4e14\u53ea\u4f7f\u7528\u5e38\u6570\u7ea7\u522b\u989d\u5916\u7a7a\u95f4\u7684\u89e3\u51b3\u65b9\u6848\u3002\n \n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [1,2,0]\n\u8f93\u51fa\uff1a3\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [3,4,-1,1]\n\u8f93\u51fa\uff1a2\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [7,8,9,11,12]\n\u8f93\u51fa\uff1a1\n")),(0,l.kt)("h3",{id:"\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"},"\u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/median-of-two-sorted-arrays"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e24\u4e2a\u5927\u5c0f\u5206\u522b\u4e3a m \u548c n \u7684\u6b63\u5e8f\uff08\u4ece\u5c0f\u5230\u5927\uff09\u6570\u7ec4 nums1 \u548c nums2\u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684 \u4e2d\u4f4d\u6570 \u3002\n\n\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5e94\u8be5\u4e3a O(log (m+n)) \u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums1 = [1,3], nums2 = [2]\n\u8f93\u51fa\uff1a2.00000\n\u89e3\u91ca\uff1a\u5408\u5e76\u6570\u7ec4 = [1,2,3] \uff0c\u4e2d\u4f4d\u6570 2\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums1 = [1,2], nums2 = [3,4]\n\u8f93\u51fa\uff1a2.50000\n\u89e3\u91ca\uff1a\u5408\u5e76\u6570\u7ec4 = [1,2,3,4] \uff0c\u4e2d\u4f4d\u6570 (2 + 3) / 2 = 2.5\n")),(0,l.kt)("h2",{id:"\u6c42\u548c\u76f8\u5173"},"\u6c42\u548c\u76f8\u5173"),(0,l.kt)("h3",{id:"\u4e24\u6570\u4e4b\u548c"},"\u4e24\u6570\u4e4b\u548c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/two-sum/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u6574\u6570\u76ee\u6807\u503c target\u3002\n\u8bf7\u4f60\u5728\u8be5\u6570\u7ec4\u4e2d\u627e\u51fa \u548c\u4e3a\u76ee\u6807\u503c target \u7684\u90a3 \u4e24\u4e2a \u6574\u6570\uff0c\u5e76\u8fd4\u56de\u5b83\u4eec\u7684\u6570\u7ec4\u4e0b\u6807\u3002\n\u4f60\u53ef\u4ee5\u5047\u8bbe\u6bcf\u79cd\u8f93\u5165\u53ea\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7b54\u6848\u3002\u4f46\u662f\uff0c\u6570\u7ec4\u4e2d\u540c\u4e00\u4e2a\u5143\u7d20\u5728\u7b54\u6848\u91cc\u4e0d\u80fd\u91cd\u590d\u51fa\u73b0\u3002\n\u4f60\u53ef\u4ee5\u6309\u4efb\u610f\u987a\u5e8f\u8fd4\u56de\u7b54\u6848\u3002\n \n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [2,7,11,15], target = 9\n\u8f93\u51fa\uff1a[0,1]\n\u89e3\u91ca\uff1a\u56e0\u4e3a nums[0] + nums[1] == 9 \uff0c\u8fd4\u56de [0, 1] \u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [3,2,4], target = 6\n\u8f93\u51fa\uff1a[1,2]\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [3,3], target = 6\n\u8f93\u51fa\uff1a[0,1]\n")),(0,l.kt)("h3",{id:"\u4e24\u6570\u4e4b\u548c-ii"},"\u4e24\u6570\u4e4b\u548c II"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 numbers \uff0c\u8be5\u6570\u7ec4\u5df2\u6309 \u975e\u9012\u51cf\u987a\u5e8f\u6392\u5217\uff0c\n\u8bf7\u4f60\u4ece\u6570\u7ec4\u4e2d\u627e\u51fa\u6ee1\u8db3\u76f8\u52a0\u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 target \u7684\u4e24\u4e2a\u6570\u3002\n\n\u5982\u679c\u8bbe\u8fd9\u4e24\u4e2a\u6570\u5206\u522b\u662f numbers[index1] \u548c numbers[index2] \uff0c\n\u5219 1 <= index1 < index2 <= numbers.length \u3002\n\n\u4ee5\u957f\u5ea6\u4e3a 2 \u7684\u6574\u6570\u6570\u7ec4 [index1, index2] \u7684\u5f62\u5f0f\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6574\u6570\u7684\u4e0b\u6807 index1 \u548c index2\u3002\n\n\u4f60\u53ef\u4ee5\u5047\u8bbe\u6bcf\u4e2a\u8f93\u5165 \u53ea\u5bf9\u5e94\u552f\u4e00\u7684\u7b54\u6848 \uff0c\u800c\u4e14\u4f60 \u4e0d\u53ef\u4ee5 \u91cd\u590d\u4f7f\u7528\u76f8\u540c\u7684\u5143\u7d20\u3002\n\n\u4f60\u6240\u8bbe\u8ba1\u7684\u89e3\u51b3\u65b9\u6848\u5fc5\u987b\u53ea\u4f7f\u7528\u5e38\u91cf\u7ea7\u7684\u989d\u5916\u7a7a\u95f4\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anumbers = [2,7,11,15], target = 9\n\u8f93\u51fa\uff1a[1,2]\n\u89e3\u91ca\uff1a2 \u4e0e 7 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 9 \u3002\u56e0\u6b64 index1 = 1, index2 = 2 \u3002\u8fd4\u56de [1, 2] \u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anumbers = [2,3,4], target = 6\n\u8f93\u51fa\uff1a[1,3]\n\u89e3\u91ca\uff1a2 \u4e0e 4 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 6 \u3002\u56e0\u6b64 index1 = 1, index2 = 3 \u3002\u8fd4\u56de [1, 3] \u3002\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anumbers = [-1,0], target = -1\n\u8f93\u51fa\uff1a[1,2]\n\u89e3\u91ca\uff1a-1 \u4e0e 0 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 -1 \u3002\u56e0\u6b64 index1 = 1, index2 = 2 \u3002\u8fd4\u56de [1, 2] \u3002\n")),(0,l.kt)("h3",{id:"\u4e09\u6570\u4e4b\u548c"},"\u4e09\u6570\u4e4b\u548c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/3sum/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u5305\u542b n \u4e2a\u6574\u6570\u7684\u6570\u7ec4 nums\uff0c\u5224\u65ad nums \u4e2d\u662f\u5426\u5b58\u5728\u4e09\u4e2a\u5143\u7d20 a\uff0cb\uff0cc \uff0c\u4f7f\u5f97 a + b + c = 0 \uff1f\n\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u548c\u4e3a 0 \u4e14\u4e0d\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002\n\n\u6ce8\u610f\uff1a\u7b54\u6848\u4e2d\u4e0d\u53ef\u4ee5\u5305\u542b\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [-1,0,1,2,-1,-4]\n\u8f93\u51fa\uff1a[[-1,-1,2],[-1,0,1]]\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [0,1,1]\n\u8f93\u51fa\uff1a[]\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums = [0,0,0]\n\u8f93\u51fa\uff1a[[0,0,0]]\n")),(0,l.kt)("h3",{id:"\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"},"\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/3sum-closest/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 nums \u548c \u4e00\u4e2a\u76ee\u6807\u503c target\u3002\u8bf7\u4f60\u4ece nums \u4e2d\u9009\u51fa\u4e09\u4e2a\u6574\u6570\uff0c\u4f7f\u5b83\u4eec\u7684\u548c\u4e0e target \u6700\u63a5\u8fd1\u3002\n\n\u8fd4\u56de\u8fd9\u4e09\u4e2a\u6570\u7684\u548c\u3002\n\u5047\u5b9a\u6bcf\u7ec4\u8f93\u5165\u53ea\u5b58\u5728\u6070\u597d\u4e00\u4e2a\u89e3\u3002\n \n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [-1,2,1,-4], target = 1\n\u8f93\u51fa\uff1a2\n\n\u89e3\u91ca\uff1a\u4e0e target \u6700\u63a5\u8fd1\u7684\u548c\u662f 2 (-1 + 2 + 1 = 2) \u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [0,0,0], target = 1\n\u8f93\u51fa\uff1a0\n")),(0,l.kt)("h3",{id:"\u56db\u6570\u4e4b\u548c"},"\u56db\u6570\u4e4b\u548c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/4sum/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a\u7531 n \u4e2a\u6574\u6570\u7ec4\u6210\u7684\u6570\u7ec4 nums \uff0c\u548c\u4e00\u4e2a\u76ee\u6807\u503c target \u3002\n\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u6ee1\u8db3\u4e0b\u8ff0\u5168\u90e8\u6761\u4ef6\u4e14\u4e0d\u91cd\u590d\u7684\u56db\u5143\u7ec4 [nums[a], nums[b], nums[c], nums[d]] \n\n\uff08\u82e5\u4e24\u4e2a\u56db\u5143\u7ec4\u5143\u7d20\u4e00\u4e00\u5bf9\u5e94\uff0c\u5219\u8ba4\u4e3a\u4e24\u4e2a\u56db\u5143\u7ec4\u91cd\u590d\uff09\uff1a\n\n0 <= a, b, c, d < n \u4e14 a\u3001b\u3001c \u548c d \u4e92\u4e0d\u76f8\u540c\nnums[a] + nums[b] + nums[c] + nums[d] == target\n\n\u4f60\u53ef\u4ee5\u6309 \u4efb\u610f\u987a\u5e8f \u8fd4\u56de\u7b54\u6848 \u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [1,0,-1,0,-2,2], target = 0\n\u8f93\u51fa\uff1a[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [2,2,2,2,2], target = 8\n\u8f93\u51fa\uff1a[[2,2,2,2]]\n")),(0,l.kt)("h3",{id:"\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"},"\u76db\u6700\u591a\u6c34\u7684\u5bb9\u5668"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/container-with-most-water/"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 height \u3002\u6709 n \u6761\u5782\u7ebf\uff0c\u7b2c i \u6761\u7ebf\u7684\u4e24\u4e2a\u7aef\u70b9\u662f (i, 0) \u548c (i, height[i]) \u3002\n\n\u627e\u51fa\u5176\u4e2d\u7684\u4e24\u6761\u7ebf\uff0c\u4f7f\u5f97\u5b83\u4eec\u4e0e x \u8f74\u5171\u540c\u6784\u6210\u7684\u5bb9\u5668\u53ef\u4ee5\u5bb9\u7eb3\u6700\u591a\u7684\u6c34\u3002\n\n\u8fd4\u56de\u5bb9\u5668\u53ef\u4ee5\u50a8\u5b58\u7684\u6700\u5927\u6c34\u91cf\u3002\n\n\u8bf4\u660e\uff1a\u4f60\u4e0d\u80fd\u503e\u659c\u5bb9\u5668\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1-1",src:t(4547).Z,width:"879",height:"422"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u8f93\u5165\uff1a[1,8,6,2,5,4,8,3,7]\n\u8f93\u51fa\uff1a49 \n\u89e3\u91ca\uff1a\u56fe\u4e2d\u5782\u76f4\u7ebf\u4ee3\u8868\u8f93\u5165\u6570\u7ec4 [1,8,6,2,5,4,8,3,7]\u3002\u5728\u6b64\u60c5\u51b5\u4e0b\uff0c\u5bb9\u5668\u80fd\u591f\u5bb9\u7eb3\u6c34\uff08\u8868\u793a\u4e3a\u84dd\u8272\u90e8\u5206\uff09\u7684\u6700\u5927\u503c\u4e3a\xa049\u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1aheight = [1,1]\n\u8f93\u51fa\uff1a1\n")),(0,l.kt)("h2",{id:"\u5b50\u96c6\u76f8\u5173"},"\u5b50\u96c6\u76f8\u5173"),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u76f8\u5173"},"\u64cd\u4f5c\u76f8\u5173"),(0,l.kt)("h3",{id:"\u79fb\u9664\u5143\u7d20"},"\u79fb\u9664\u5143\u7d20"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/remove-element"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\n\u7ed9\u4f60\u4e00\u4e2a\u6570\u7ec4 nums \u548c\u4e00\u4e2a\u503c val\uff0c\u4f60\u9700\u8981 \u539f\u5730 \u79fb\u9664\u6240\u6709\u6570\u503c\u7b49\u4e8e val \u7684\u5143\u7d20\uff0c\u5e76\u8fd4\u56de\u79fb\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002\n\n\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u6570\u7ec4\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u4ec5\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u5e76 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4\u3002\n\n\u5143\u7d20\u7684\u987a\u5e8f\u53ef\u4ee5\u6539\u53d8\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [3,2,2,3], val = 3\n\u8f93\u51fa\uff1a2, nums = [2,2]\n\u89e3\u91ca\uff1a\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 2, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e24\u4e2a\u5143\u7d20\u5747\u4e3a 2\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\u4f8b\u5982\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u65b0\u957f\u5ea6\u4e3a 2 \uff0c\u800c nums = [2,2,3,3] \u6216 nums = [2,2,0,0]\uff0c\u4e5f\u4f1a\u88ab\u89c6\u4f5c\u6b63\u786e\u7b54\u6848\u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [0,1,2,2,3,0,4,2], val = 2\n\u8f93\u51fa\uff1a5, nums = [0,1,4,0,3]\n\u89e3\u91ca\uff1a\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 5, \u5e76\u4e14 nums \u4e2d\u7684\u524d\u4e94\u4e2a\u5143\u7d20\u4e3a 0, 1, 3, 0, 4\u3002\u6ce8\u610f\u8fd9\u4e94\u4e2a\u5143\u7d20\u53ef\u4e3a\u4efb\u610f\u987a\u5e8f\u3002\u4f60\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n")),(0,l.kt)("h3",{id:"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"},"\u5220\u9664\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u91cd\u590d\u9879"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e00\u4e2a \u5347\u5e8f\u6392\u5217 \u7684\u6570\u7ec4 nums \uff0c\u8bf7\u4f60 \u539f\u5730 \u5220\u9664\u91cd\u590d\u51fa\u73b0\u7684\u5143\u7d20\uff0c\u4f7f\u6bcf\u4e2a\u5143\u7d20 \u53ea\u51fa\u73b0\u4e00\u6b21 \uff0c\u8fd4\u56de\u5220\u9664\u540e\u6570\u7ec4\u7684\u65b0\u957f\u5ea6\u3002\u5143\u7d20\u7684 \u76f8\u5bf9\u987a\u5e8f \u5e94\u8be5\u4fdd\u6301 \u4e00\u81f4 \u3002\n\n\u7531\u4e8e\u5728\u67d0\u4e9b\u8bed\u8a00\u4e2d\u4e0d\u80fd\u6539\u53d8\u6570\u7ec4\u7684\u957f\u5ea6\uff0c\u6240\u4ee5\u5fc5\u987b\u5c06\u7ed3\u679c\u653e\u5728\u6570\u7ec4nums\u7684\u7b2c\u4e00\u90e8\u5206\u3002\u66f4\u89c4\u8303\u5730\u8bf4\uff0c\u5982\u679c\u5728\u5220\u9664\u91cd\u590d\u9879\u4e4b\u540e\u6709 k \u4e2a\u5143\u7d20\uff0c\u90a3\u4e48 nums \u7684\u524d k \u4e2a\u5143\u7d20\u5e94\u8be5\u4fdd\u5b58\u6700\u7ec8\u7ed3\u679c\u3002\n\n\u5c06\u6700\u7ec8\u7ed3\u679c\u63d2\u5165 nums \u7684\u524d k \u4e2a\u4f4d\u7f6e\u540e\u8fd4\u56de k \u3002\n\n\u4e0d\u8981\u4f7f\u7528\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u4f60\u5fc5\u987b\u5728 \u539f\u5730 \u4fee\u6539\u8f93\u5165\u6570\u7ec4 \u5e76\u5728\u4f7f\u7528 O(1) \u989d\u5916\u7a7a\u95f4\u7684\u6761\u4ef6\u4e0b\u5b8c\u6210\u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [1,1,2]\n\u8f93\u51fa\uff1a2, nums = [1,2,_]\n\u89e3\u91ca\uff1a\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 2 \uff0c\u5e76\u4e14\u539f\u6570\u7ec4 nums \u7684\u524d\u4e24\u4e2a\u5143\u7d20\u88ab\u4fee\u6539\u4e3a 1, 2 \u3002\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [0,0,1,1,1,2,2,3,3,4]\n\u8f93\u51fa\uff1a5, nums = [0,1,2,3,4]\n\u89e3\u91ca\uff1a\u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u65b0\u7684\u957f\u5ea6 5 \uff0c \u5e76\u4e14\u539f\u6570\u7ec4 nums \u7684\u524d\u4e94\u4e2a\u5143\u7d20\u88ab\u4fee\u6539\u4e3a 0, 1, 2, 3, 4 \u3002\u4e0d\u9700\u8981\u8003\u8651\u6570\u7ec4\u4e2d\u8d85\u51fa\u65b0\u957f\u5ea6\u540e\u9762\u7684\u5143\u7d20\u3002\n")),(0,l.kt)("h3",{id:"\u79fb\u52a8\u96f6"},"\u79fb\u52a8\u96f6"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/move-zeroes"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u4e00\u4e2a\u6570\u7ec4 nums\uff0c\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u5c06\u6240\u6709 0 \u79fb\u52a8\u5230\u6570\u7ec4\u7684\u672b\u5c3e\uff0c\u540c\u65f6\u4fdd\u6301\u975e\u96f6\u5143\u7d20\u7684\u76f8\u5bf9\u987a\u5e8f\u3002\n\n\u8bf7\u6ce8\u610f \uff0c\u5fc5\u987b\u5728\u4e0d\u590d\u5236\u6570\u7ec4\u7684\u60c5\u51b5\u4e0b\u539f\u5730\u5bf9\u6570\u7ec4\u8fdb\u884c\u64cd\u4f5c\u3002\n\n\u793a\u4f8b 1:\n\u8f93\u5165: nums = [0,1,0,3,12]\n\u8f93\u51fa: [1,3,12,0,0]\n\n\u793a\u4f8b 2:\n\u8f93\u5165: nums = [0]\n\u8f93\u51fa: [0]\n")),(0,l.kt)("h3",{id:"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"},"\u5408\u5e76\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/merge-sorted-array"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u4f60\u4e24\u4e2a\u6309 \u975e\u9012\u51cf\u987a\u5e8f \u6392\u5217\u7684\u6574\u6570\u6570\u7ec4 nums1 \u548c nums2\uff0c\u53e6\u6709\u4e24\u4e2a\u6574\u6570 m \u548c n \uff0c\u5206\u522b\u8868\u793a nums1 \u548c nums2 \u4e2d\u7684\u5143\u7d20\u6570\u76ee\u3002\n\u8bf7\u4f60 \u5408\u5e76 nums2 \u5230 nums1 \u4e2d\uff0c\u4f7f\u5408\u5e76\u540e\u7684\u6570\u7ec4\u540c\u6837\u6309 \u975e\u9012\u51cf\u987a\u5e8f \u6392\u5217\u3002\n\n\u6ce8\u610f\uff1a\u6700\u7ec8\uff0c\u5408\u5e76\u540e\u6570\u7ec4\u4e0d\u5e94\u7531\u51fd\u6570\u8fd4\u56de\uff0c\u800c\u662f\u5b58\u50a8\u5728\u6570\u7ec4 nums1 \u4e2d\u3002\n\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0cnums1 \u7684\u521d\u59cb\u957f\u5ea6\u4e3a m + n\uff0c\u5176\u4e2d\u524d m \u4e2a\u5143\u7d20\u8868\u793a\u5e94\u5408\u5e76\u7684\u5143\u7d20\uff0c\u540e n \u4e2a\u5143\u7d20\u4e3a 0 \uff0c\u5e94\u5ffd\u7565\u3002nums2 \u7684\u957f\u5ea6\u4e3a n \u3002\n \n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n\u8f93\u51fa\uff1a[1,2,2,3,5,6]\n\u89e3\u91ca\uff1a\u9700\u8981\u5408\u5e76 [1,2,3] \u548c [2,5,6] \u3002\n\u5408\u5e76\u7ed3\u679c\u662f [1,2,2,3,5,6] \uff0c\u5176\u4e2d\u659c\u4f53\u52a0\u7c97\u6807\u6ce8\u7684\u4e3a nums1 \u4e2d\u7684\u5143\u7d20\u3002\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums1 = [1], m = 1, nums2 = [], n = 0\n\u8f93\u51fa\uff1a[1]\n\u89e3\u91ca\uff1a\u9700\u8981\u5408\u5e76 [1] \u548c [] \u3002\n\u5408\u5e76\u7ed3\u679c\u662f [1] \u3002\n\n\u793a\u4f8b 3\uff1a\n\u8f93\u5165\uff1anums1 = [0], m = 0, nums2 = [1], n = 1\n\u8f93\u51fa\uff1a[1]\n\u89e3\u91ca\uff1a\u9700\u8981\u5408\u5e76\u7684\u6570\u7ec4\u662f [] \u548c [1] \u3002\n\u5408\u5e76\u7ed3\u679c\u662f [1] \u3002\n\u6ce8\u610f\uff0c\u56e0\u4e3a m = 0 \uff0c\u6240\u4ee5 nums1 \u4e2d\u6ca1\u6709\u5143\u7d20\u3002nums1 \u4e2d\u4ec5\u5b58\u7684 0 \u4ec5\u4ec5\u662f\u4e3a\u4e86\u786e\u4fdd\u5408\u5e76\u7ed3\u679c\u53ef\u4ee5\u987a\u5229\u5b58\u653e\u5230 nums1 \u4e2d\u3002\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u62c6\u5206"},"\u6570\u7ec4\u62c6\u5206"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/array-partition"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"\u7ed9\u5b9a\u957f\u5ea6\u4e3a 2n \u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u4f60\u7684\u4efb\u52a1\u662f\u5c06\u8fd9\u4e9b\u6570\u5206\u6210 n \u5bf9, \n\u4f8b\u5982 (a1, b1), (a2, b2), ..., (an, bn) \uff0c\u4f7f\u5f97\u4ece 1 \u5230 n \u7684 min(ai, bi) \u603b\u548c\u6700\u5927\u3002\n\n\u8fd4\u56de\u8be5 \u6700\u5927\u603b\u548c \u3002\n\n\u793a\u4f8b 1\uff1a\n\u8f93\u5165\uff1anums = [1,4,3,2]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6240\u6709\u53ef\u80fd\u7684\u5206\u6cd5\uff08\u5ffd\u7565\u5143\u7d20\u987a\u5e8f\uff09\u4e3a\uff1a\n1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3\n2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3\n3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4\n\u6240\u4ee5\u6700\u5927\u603b\u548c\u4e3a 4\n\n\u793a\u4f8b 2\uff1a\n\u8f93\u5165\uff1anums = [6,2,6,5,1,2]\n\u8f93\u51fa\uff1a9\n\u89e3\u91ca\uff1a\u6700\u4f18\u7684\u5206\u6cd5\u4e3a (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9\n")))}d.isMDXComponent=!0},4547:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/1-1-6721808e32f99b64872dd4d4f8b60a3e.jpeg"}}]);