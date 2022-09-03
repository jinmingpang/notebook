"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},c="\u5b9e\u6218\u5e94\u7528",p={unversionedId:"computer/code-design/write-code/index",id:"computer/code-design/write-code/index",title:"\u5b9e\u6218\u5e94\u7528",description:"\u53c2\u8003\u8d44\u6599\u94fe\u63a5",source:"@site/docs/computer/02-code-design/10-write-code/index.md",sourceDirName:"computer/02-code-design/10-write-code",slug:"/computer/code-design/write-code/",permalink:"/notebook/docs/computer/code-design/write-code/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerSidebar",previous:{title:"\u56de\u6eaf",permalink:"/notebook/docs/computer/code-design/algorithm/backtracking"},next:{title:"\u987a\u5e8f\u8868\u76f8\u5173\u9898\u76ee",permalink:"/notebook/docs/computer/code-design/write-code/leetcode/simple/linear-linked-list"}},u={},m=[{value:"\u53c2\u8003\u8d44\u6599\u94fe\u63a5",id:"\u53c2\u8003\u8d44\u6599\u94fe\u63a5",level:2},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:2},{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",level:2},{value:"\u5237\u9898",id:"\u5237\u9898",level:2}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b9e\u6218\u5e94\u7528"},"\u5b9e\u6218\u5e94\u7528"),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599\u94fe\u63a5"},"\u53c2\u8003\u8d44\u6599\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/notebook/docs/computer/code-design/data-structure"},"\u57fa\u7840\u77e5\u8bc6\u5b66\u4e60")),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u89c6\u5316\u914d\u5957\u7406\u89e3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"},"\u53ef\u89c6\u5316\u7b97\u6cd5\u52a8\u753b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualgo.net/zh/list"},"\u7b97\u6cd5\u7ec3\u4e60")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://littlesvr.ca/dsa-html5-animations/sorting.php"},"\u52a8\u753b\u7b97\u6cd5\u6f14\u793a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://algorithm-visualizer.org/backtracking/hamiltonean-cycles"},"\u52a8\u6001\u7b97\u6cd5\u6f14\u793a")))),(0,o.kt)("li",{parentName:"ul"},"\u5927\u4f6c\u603b\u7ed3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.zhihu.com/question/20588261/answer/926157817"},"\u7cfb\u7edf\u5b66\u4e60\u7b97\u6cd5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://labuladong.gitee.io/algo/"},"labu\u7b97\u6cd5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://programmercarl.com/"},"\u4ee3\u7801\u968f\u60f3\u5f55")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.geekxh.com/0.0.%E5%AD%A6%E4%B9%A0%E9%A1%BB%E7%9F%A5/01.html"},"\u5c0f\u6d69\u7b97\u6cd5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.algomooc.com/"},"\u5434\u5e08\u5144\u7b97\u6cd5"))))),(0,o.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,o.kt)("h2",{id:"\u7b97\u6cd5"},"\u7b97\u6cd5"),(0,o.kt)("h2",{id:"\u5237\u9898"},"\u5237\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6574\u7406\u9898\u76ee")))}d.isMDXComponent=!0}}]);