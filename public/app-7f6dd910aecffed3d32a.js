webpackJsonp([0xd2a57dc1d883],{94:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(225),options:{plugins:[]}}]},219:function(e,t,n){"use strict";t.components={"component---src-pages-index-es-js":n(327),"component---src-pages-index-fr-js":n(328),"component---src-pages-index-js":n(329)},t.json={"index-es.json":n(331),"index-fr.json":n(332),"index.json":n(330)},t.layouts={}},220:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(8),f=o(l),d=n(145),p=o(d),h=n(72),g=o(h),m=n(94),v=n(463),R=o(v),_=function(e){var t=e.children;return s.default.createElement("div",null,t())},y=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return p.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:p.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;p.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),p.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){p.default.getPage(e.state.location.pathname)&&t.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||(!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path)||(0,R.default)(this,e,t)))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:_,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=y,e.exports=t.default},72:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(352),a=o(r),u=(0,a.default)();e.exports=u},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(92),a=n(146),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},222:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(122),a=o(r),u=n(94),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},331:function(e,t,n){n(34),e.exports=function(e){return n.e(0xaeee416cc59b,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(338)})})}},332:function(e,t,n){n(34),e.exports=function(e){return n.e(58760430014370,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(339)})})}},330:function(e,t,n){n(34),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(340)})})}},145:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(221)),u=o(a),i=n(72),c=o(i),s=n(146),l=o(s),f=void 0,d={},p={},h={},g={},m={},v=[],R=[],_={},y="",P=[],E={},w=function(e){return e&&e.default||e},T=void 0,S=!0,x=[],b={},O={},C=5;T=n(223)({getNextQueuedResources:function(){return P.slice(-1)[0]},createResourceDownload:function(e){N(e,function(){P=P.filter(function(t){return t!==e}),T.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){T.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){T.onPostLoadPageResources(e)});var j=function(e,t){return E[e]>E[t]?1:E[e]<E[t]?-1:0},L=function(e,t){return _[e]>_[t]?1:_[e]<_[t]?-1:0},N=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?p.components[t]:"layout---"===t.slice(0,9)?p.layouts[t]:p.json[t],o(function(e,o){g[t]=o,x.push({resource:t,succeeded:!e}),O[t]||(O[t]=e),x=x.slice(-C),n(e,o)})}},k=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):O[t]?e.nextTick(function(){n(O[t])}):N(t,function(e,o){if(e)n(e);else{var r=w(o());m[t]=r,n(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=x.find(function(e){return e.succeeded});return!!t},D=function(e,t){console.log(t),b[e]||(b[e]=t),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){R=[],_={},E={},P=[],v=[],y=""},addPagesArray:function(e){v=e,f=(0,u.default)(e,y)},addDevRequires:function(e){d=e},addProdRequires:function(e){p=e},dequeue:function(){return R.pop()},enqueue:function(e){var t=(0,l.default)(e,y);if(!v.some(function(e){return e.path===t}))return!1;var n=1/U;U+=1,_[t]?_[t]+=1:_[t]=1,M.has(t)||R.unshift(t),R.sort(L);var o=f(t);return o.jsonName&&(E[o.jsonName]?E[o.jsonName]+=1+n:E[o.jsonName]=1+n,P.indexOf(o.jsonName)!==-1||g[o.jsonName]||P.unshift(o.jsonName)),o.componentChunkName&&(E[o.componentChunkName]?E[o.componentChunkName]+=1+n:E[o.componentChunkName]=1+n,P.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||P.unshift(o.componentChunkName)),P.sort(j),T.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:P,resourcesCount:E}},getPages:function(){return{pathArray:R,pathCount:_}},getPage:function(e){return f(e)},has:function(e){return R.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};S&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),S=!1;if(b[t])return D(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return D(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return k(o.componentChunkName,function(e,t){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),k(o.jsonName,function(e,t){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&k(o.layout,function(e,t){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return R.slice(-1)[0]},length:function(){return R.length},indexOf:function(e){return R.length-R.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:M.getResourcesForPathname};t.default=M}).call(t,n(124))},341:function(e,t){e.exports=[{componentChunkName:"component---src-pages-index-es-js",layout:null,jsonName:"index-es.json",path:"/index.es/",matchPath:"/index.html"},{componentChunkName:"component---src-pages-index-fr-js",layout:null,jsonName:"index-fr.json",path:"/index.fr/",matchPath:"/index.html"},{componentChunkName:"component---src-pages-index-js",layout:null,jsonName:"index.json",path:"/",matchPath:"/index.html"}]},223:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(94),u=n(1),i=o(u),c=n(185),s=o(c),l=n(92),f=n(336),d=n(313),p=o(d),h=n(180),g=n(222),m=o(g),v=n(72),R=o(v),_=n(341),y=o(_),P=n(342),E=o(P),w=n(220),T=o(w),S=n(219),x=o(S),b=n(145),O=o(b);n(242),window.___history=m.default,window.___emitter=R.default,O.default.addPagesArray(y.default),O.default.addProdRequires(x.default),window.asyncRequires=x.default,window.___loader=O.default,window.matchPath=l.matchPath;var C=E.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),j=function(e){var t=C[e];return null!=t&&(m.default.replace(t.toPath),!0)};j(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){j(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})},0)}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(224);var o=function(e){function t(e){e.page.path===O.default.getPage(o).path&&(R.default.off("onPostLoadPageResources",t),clearTimeout(u),window.___history.push(n))}var n=(0,h.createLocation)(e,null,null,m.default.location),o=n.pathname,r=C[o];r&&(o=r.toPath);var a=window.location;if(a.pathname!==n.pathname||a.search!==n.search||a.hash!==n.hash){var u=setTimeout(function(){R.default.off("onPostLoadPageResources",t),R.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(n)},1e3);O.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(n)):R.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=!1,d=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],g=function(e){var t=e.children;return i.default.createElement(l.Router,{history:m.default},t)},v=(0,l.withRouter)(T.default);O.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(d?d:g,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(v,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return O.default.getPage(o.location.pathname)?(0,u.createElement)(T.default,r({page:!0},o)):(0,u.createElement)(T.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0],c=(0,a.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,p.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},342:function(e,t){e.exports=[]},224:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(72),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},146:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},225:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(5),a=n(1),u=o(a),i=n(92),c=n(234),s=o(c);t.replaceRouterComponent=function(e){var t=e.history,n=(0,s.default)(),o=function(e){var o=e.children;return u.default.createElement(r.Provider,{store:n},u.default.createElement(i.Router,{history:t},o))};return o}},313:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},34:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},352:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},124:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&p&&(g=!1,p.length?h=p.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var p,h=[],g=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},459:function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,o=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,o,e):t(r)}}}}t.__esModule=!0;var o=n();o.withExtraArgument=n,t.default=o},463:function(e,t){"use strict";function n(e,t){for(var n in e)if(!(n in t))return!0;for(var o in t)if(e[o]!==t[o])return!0;return!1}t.__esModule=!0,t.default=function(e,t,o){return n(e.props,t)||n(e.state,o)},e.exports=t.default},327:function(e,t,n){n(34),e.exports=function(e){return n.e(55213770944713,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(232)})})}},328:function(e,t,n){n(34),e.exports=function(e){return n.e(56712480889174,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(233)})})}},329:function(e,t,n){n(34),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(48)})})}},234:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(236),a=o(r),u=(n(5),n(459)),i=o(u),c=n(93);t.default=function(){return(0,c.createStore)(a.default,(0,c.applyMiddleware)(i.default))},e.exports=t.default},235:function(e,t,n){"use strict";t.__esModule=!0;var o=n(93),r=n(49),a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case r.SHOW_PROPERTY_PANEL:return!0;case r.HIDE_PROPERTY_PANEL:return!1;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case r.LIST_REQUEST:return!0;case r.LIST_REQUEST_SUCCESS:case r.LIST_REQUEST_FAILED:return!1;default:return e}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];switch(t.type){case r.PROPERTY_DATA_REQUEST:return!0;case r.PROPERTY_DATA_SUCCESS:case r.PROPERTY_DATA_FAILED:return!1;default:return e}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case r.PROPERTY_DATA_SUCCESS:return t.data;default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case r.LIST_REQUEST_SUCCESS:return t.list;default:return e}};t.default=(0,o.combineReducers)({isRetrievingData:u,list:s,isRetrievingPropertyData:i,currentPropertyData:c,isPropertyPanelOpen:a}),e.exports=t.default},236:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(93),a=n(73),u=o(a),i=n(17),c=n(235),s=o(c),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments[1];switch(t.type){case i.SET_LANG:return t.lang;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.default[0],t=arguments[1];switch(t.type){case i.SET_PROJECT:return t.project;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.ProjectFadeTypes.FADE_IN,t=arguments[1];switch(t.type){case i.SET_PROJECT_FADE:return t.fadeType;default:return e}};t.default=(0,r.combineReducers)({lang:l,currentProject:f,currentProjectFade:d,immoApp:s.default}),e.exports=t.default}});
//# sourceMappingURL=app-7f6dd910aecffed3d32a.js.map