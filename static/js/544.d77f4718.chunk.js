"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{25:function(r,t,n){n.d(t,{Hg:function(){return s},TP:function(){return o},qF:function(){return i},tx:function(){return p},zv:function(){return f}});var e=n(861),a=n(757),u=n.n(a),c=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"74f606ab36fa7bf868ad1de218dc7286"}}),s=function(){var r=(0,e.Z)(u().mark((function r(){var t,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("trending/movie/week");case 2:return t=r.sent,n=t.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{query:t}});case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t));case 2:return n=r.sent,e=n.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/credits"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return n=r.sent,e=n.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},209:function(r,t,n){n.d(t,{Z:function(){return c}});var e=n(731),a=n(689),u=n(184);function c(r){var t=r.movies,n=(0,a.TH)();return(0,u.jsx)("ul",{className:"movieList",children:t.map((function(r){var t=r.id,a=r.title;return(0,u.jsx)("li",{className:"movieItem",children:(0,u.jsx)(e.rU,{state:{from:n},to:"/movies/".concat(t),children:a})},t)}))})}},544:function(r,t,n){n.r(t),n.d(t,{default:function(){return p}});var e=n(861),a=n(885),u=n(757),c=n.n(u),s=n(791),i=n(25),o=n(209),f=n(184);function p(){var r=(0,s.useState)([]),t=(0,a.Z)(r,2),n=t[0],u=t[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Hg)();case 3:t=r.sent,u(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0);case 10:return r.prev=10,r.finish(10);case 12:case"end":return r.stop()}}),r,null,[[0,7,10,12]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending now"}),0!==n.length&&(0,f.jsx)(o.Z,{movies:n})]})}}}]);
//# sourceMappingURL=544.d77f4718.chunk.js.map