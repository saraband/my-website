webpackJsonp([55213770944713,35783957827783],{20:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1),c=n(o),a=function(e,t){return void 0===t?e:e.slice(0,4)+(" class='"+t+"' ")+e.slice(4)};t.default=function(e){var t=e.src,r=e.className,n=l(e,["src","className"]);return c.default.createElement("div",i({dangerouslySetInnerHTML:{__html:a(t,r)}},n))},e.exports=t.default},41:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=r(1),a=n(c),s=r(44),d=n(s),u=r(8);r(52);var f=r(20),p=(n(f),r(64)),y=n(p),m=r(67),k=n(m),E=r(66),F=n(E),h=r(62),_=n(h),M=r(60),x=n(M),g=r(65),v=n(g),L=r(61),w=n(L),D=r(43),I=n(D),A=r(16),X=function(e){function t(r){return l(this,t),i(this,e.call(this,r))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.tr,r=e.setLang,n=e.lang;return a.default.createElement("div",{id:"presentation-container"},a.default.createElement("div",{id:"presentation-header"},a.default.createElement(y.default,{id:"logo",className:"fadeIn"}),a.default.createElement("div",{id:"presentation-lang-container"},a.default.createElement("div",{className:"presentation-lang-item"+("en"===n?" selectedLang":""),onClick:function(){return r("en")}},"EN"),a.default.createElement("div",{className:"presentation-lang-item"+("fr"===n?" selectedLang":""),onClick:function(){return r("fr")}},"FR"),a.default.createElement("div",{className:"presentation-lang-item"+("es"===n?" selectedLang":""),onClick:function(){return r("es")}},"ES"))),a.default.createElement("div",{id:"presentation-body"},a.default.createElement("div",{id:"presentation-title"},a.default.createElement("h1",null,t("presentation-title")),a.default.createElement("h2",null,t("presentation-subtitle"))),a.default.createElement("div",{id:"presentation-projects"},a.default.createElement("div",{id:"presentation-logos-container"},a.default.createElement(I.default,{text:"CSS3"},a.default.createElement(x.default,{className:"presentation-logo-item"})),a.default.createElement(I.default,{text:"Redux"},a.default.createElement(k.default,{className:"presentation-logo-item"})),a.default.createElement(I.default,{text:"React"},a.default.createElement(F.default,{className:"presentation-logo-item"})),a.default.createElement(I.default,{text:"Node"},a.default.createElement(v.default,{className:"presentation-logo-item"})),a.default.createElement(I.default,{text:"HTML5"},a.default.createElement(_.default,{className:"presentation-logo-item"}))),a.default.createElement(w.default,{id:"graph"}),a.default.createElement("button",null,"Projects"))))},t}(a.default.Component),b=function(e){return{tr:(0,d.default)(e.lang),lang:e.lang}},C=function(e){return{setLang:function(t){return e((0,A.setLang)(t))}}};t.default=(0,u.connect)(b,C)(X),e.exports=t.default},52:function(e,t){},42:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=r(1),a=n(c),s=r(8);r(53);var d=r(20),u=(n(d),r(63)),f=n(u),p=r(68),y=n(p),m=r(70),k=n(m),E=r(16),F=function(e){function t(r){return l(this,t),i(this,e.call(this,r))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.nextProject,r=e.previousProject,n=e.currentProjectFade,l=this.props.currentProject,i=l.id,o=(l.title,l.component);return a.default.createElement("div",{id:"project-container"},this.props.test,a.default.createElement("div",{id:"project-controls"},a.default.createElement(f.default,{className:"arrow-img",onClick:function(){return r(i)}}),a.default.createElement(y.default,{className:"arrow-img",onClick:function(){return t(i)}})),a.default.createElement("div",{id:"project-panel",className:n},o))},t}(a.default.Component),h=function(e){return{currentProject:e.currentProject,currentProjectFade:e.currentProjectFade}},_=function(e){return{nextProject:function t(r){var n=k.default.length,l=r+1>=n?0:r+1,t=k.default[l];e((0,E.setProject)(t))},previousProject:function(t){var r=k.default.length,n=t-1<0?r-1:t-1,l=k.default[n];e((0,E.setProject)(l))}}};t.default=(0,s.connect)(h,_)(F),e.exports=t.default},53:function(e,t){},43:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=r(1),i=n(l);t.default=function(e){var t=e.text,r=e.children;return i.default.createElement("div",{className:"tool-tip"},r,i.default.createElement("p",{className:"tool-tip-text"},t))},e.exports=t.default},44:function(e,t){"use strict";t.__esModule=!0;var r={en:{"presentation-title":"Front-end developper","presentation-subtitle":"I design, implement and connect user interfaces."},fr:{"presentation-title":"Développeur front-end","presentation-subtitle":"Je conçois, implémente et connecte des interfaces utilisateur."},es:{"presentation-title":"Front-end developper","presentation-subtitle":"I design, implement and connect user interfaces."}};t.default=function(e){return function(t){return void 0===r[e][t]?"No translation available for lang="+e+", key="+t:r[e][t]}},e.exports=t.default},60:function(e,t,r){function n(e){return l.createElement("svg",e,[l.createElement("sodipodi:namedview",{fitMarginLeft:"0",id:"base",showgrid:"false",inkscapeZoom:"0.35",inkscapeCx:"-276.49014",borderopacity:"1.0",fitMarginTop:"0",bordercolor:"#666666",pagecolor:"#ffffff",inkscapeCy:"244.10462",inkscapeCurrentLayer:"layer1",inkscapeDocumentUnits:"px",inkscapeWindowMaximized:"1",inkscapeWindowY:"31",fitMarginBottom:"0",inkscapeWindowX:"0",fitMarginRight:"0",inkscapePageopacity:"0.0",inkscapePageshadow:"2",inkscapeWindowHeight:"938",inkscapeWindowWidth:"1280",key:0}),l.createElement("g",{id:"layer1",transform:"translate(-170.06157,-270.18109)",inkscapeLabel:"Calque 1",inkscapeGroupmode:"layer",key:1},l.createElement("g",{id:"g3013",transform:"translate(95.428571,270.18109)"},[l.createElement("polygon",{id:"polygon2989",style:{fill:"#264DE4"},points:"-638.6,1129.6 -1068.3,1010.4 -1164,-63.4 -112,-63.4 -208,1010.1 \t\t",key:0}),l.createElement("polygon",{id:"polygon2991",style:{fill:"#2965F1"},points:"-290,942 -208,24.5 -638,24.5 -638,1038.3 \t\t",key:1}),l.createElement("polygon",{id:"polygon2993",style:{fill:"#EBEBEB"},points:"-944.5,422.6 -932.6,554.3 -638,554.3 -638,422.6 \t\t",key:2}),l.createElement("polygon",{id:"polygon2995",style:{fill:"#EBEBEB"},points:"-968.3,156.1 -956.1,287.8 -638,287.8 -638,156.1 -638.6,156.1 \t\t",key:3}),l.createElement("polygon",{id:"polygon2997",style:{fill:"#EBEBEB"},points:"-638,764.8 -638.6,764.8 -785.3,725.4 -794.6,620.4 -865.9,620.4 \r\n\t\t\t-926.8,620.4 -908.3,827.1 -638.6,902 -638,901.7 \t\t",key:4}),l.createElement("polygon",{id:"polygon3005",style:{fill:"#FFFFFF"},points:"-332.4,422.6 -308.6,156.1 -638.6,156.1 -638.6,287.8 -453,287.8 \r\n\t\t\t-464.9,422.6 -638.6,422.6 -638.6,554.3 -476.2,554.3 -491.6,725.1 -638.6,764.8 -638.6,902 -368.6,827.1 -366.6,804.8 \r\n\t\t\t-335.5,458 \t\t",key:5})]))])}var l=r(1);n.displayName="CssLogo",n.defaultProps={version:"1.1",id:"svg2",xmlnsCc:"http://creativecommons.org/ns#",xmlnsInkscape:"http://www.inkscape.org/namespaces/inkscape",xmlnsRdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",xmlnsSvg:"http://www.w3.org/2000/svg",xmlnsSodipodi:"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",xmlnsDc:"http://purl.org/dc/elements/1.1/",sodipodiDocname:"htmlcss.svg",inkscapeVersion:"0.48.3.1 r9886",x:"0px",y:"0px",viewBox:"-1238.7 -63.4 1052.1 1193",style:{enableBackground:"new -1238.7 -63.4 1052.1 1193"},xmlSpace:"preserve"},e.exports=n,n.default=n},61:function(e,t,r){function n(e){return l.createElement("svg",e,[l.createElement("rect",{id:"XMLID_37_",x:"80.3",y:"109.4",transform:"matrix(0.9925 -0.1219 0.1219 0.9925 -19.6107 11.456)",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},width:"7",height:"113.1",key:0}),l.createElement("path",{id:"XMLID_51_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M72.7,146.5l-3.6-29.2\r\n\tc-0.3-2.7,1.6-5.2,4.3-5.5h0",key:1}),l.createElement("path",{id:"XMLID_45_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M86.9,149.1l-10.2,1.3l-5.2-42.4\r\n\tc-0.2-1.9,1.1-3.6,3-3.8l3.4-0.4c1.9-0.2,3.6,1.1,3.8,3L86.9,149.1z",key:2}),l.createElement("path",{id:"XMLID_39_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M300.5,194.3\r\n\tc0,37.5-113.8,9.3-113.8,58.8s0,50,0,50",key:3}),l.createElement("path",{id:"XMLID_15_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M508.2,1H238.6\r\n\tc-6.5,0-12,5.1-12,11.6v169.6c0,6.5,5.4,11.8,12,11.8h126v26h-41.7c-8.8,0-16,7.2-16,16v0h133v0c0-8.8-7.2-16-16-16h-42.3v-26h126.6\r\n\tc6.5,0,11.4-5.2,11.4-11.8V12.6C519.7,6.1,514.8,1,508.2,1z",key:4}),l.createElement("rect",{id:"XMLID_2_",x:"241.7",y:"17",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},width:"263.5",height:"160.8",key:5}),l.createElement("circle",{id:"XMLID_3_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},cx:"273.7",cy:"73.9",r:"12.8",key:6}),l.createElement("path",{id:"XMLID_4_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M439.4,39.3h-132\r\n\tc-3.1,0-5.6-2.5-5.6-5.6v-0.3c0-3.1,2.5-5.6,5.6-5.6h132c3.1,0,5.6,2.5,5.6,5.6v0.3C445,36.7,442.5,39.3,439.4,39.3z",key:7}),l.createElement("rect",{id:"XMLID_5_",x:"300.5",y:"67.9",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},width:"47.4",height:"11.5",key:8}),l.createElement("rect",{id:"XMLID_6_",x:"300.5",y:"86.8",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},width:"73",height:"11.5",key:9}),l.createElement("rect",{id:"XMLID_34_",x:"300.5",y:"106.5",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},width:"59.7",height:"11.5",key:10}),l.createElement("rect",{id:"XMLID_35_",x:"360.2",y:"67.9",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},width:"34.5",height:"11.5",key:11}),l.createElement("g",{id:"XMLID_49_",key:12},[l.createElement("circle",{id:"XMLID_36_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},cx:"472.2",cy:"153.2",r:"9.9",key:0}),l.createElement("path",{id:"XMLID_7_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M480.1,217h-45c-4.9,0-9-4-9-9\r\n\t\tv-89.4c0-4.9,4-9,9-9h45c4.9,0,9,4,9,9V208C489,213,485,217,480.1,217z",key:1}),l.createElement("line",{id:"XMLID_9_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"426.7",y1:"201",x2:"488.7",y2:"201",key:2}),l.createElement("circle",{id:"XMLID_11_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},cx:"457.9",cy:"209",r:"2.9",key:3}),l.createElement("line",{id:"XMLID_8_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"467.7",y1:"209.5",x2:"482.7",y2:"209.5",key:4}),l.createElement("line",{id:"XMLID_1_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"433.7",y1:"209.5",x2:"448.7",y2:"209.5",key:5}),l.createElement("line",{id:"XMLID_26_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"176",x2:"465.7",y2:"176",key:6}),l.createElement("line",{id:"XMLID_27_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"183",x2:"474.7",y2:"183",key:7}),l.createElement("line",{id:"XMLID_28_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"188",x2:"453.7",y2:"188",key:8}),l.createElement("circle",{id:"XMLID_25_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},cx:"457.9",cy:"147",r:"14.3",key:9}),l.createElement("line",{id:"XMLID_29_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"468.7",y1:"176",x2:"474.7",y2:"176",key:10}),l.createElement("line",{id:"XMLID_30_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"457.7",y1:"188",x2:"461.7",y2:"188",key:11}),l.createElement("line",{id:"XMLID_31_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"426.7",y1:"118",x2:"488.7",y2:"118",key:12}),l.createElement("line",{id:"XMLID_32_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"454.7",y1:"114",x2:"464.7",y2:"114",key:13}),l.createElement("line",{id:"XMLID_33_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"451.7",y1:"114",x2:"453.7",y2:"114",key:14})]),l.createElement("path",{id:"XMLID_38_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M571.2,265H15.5\r\n\tc-8,0-14.5-6.5-14.5-14.5v0c0-8,6.5-14.5,14.5-14.5h555.7c8,0,14.5,6.5,14.5,14.5v0C585.7,258.5,579.2,265,571.2,265z",key:13}),l.createElement("path",{id:"XMLID_40_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M195.7,323.7h-18v-13.1\r\n\tc0-4.2,3.4-7.7,7.7-7.7h2.7c4.2,0,7.7,3.4,7.7,7.7V323.7z",key:14}),l.createElement("line",{id:"XMLID_42_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"181.7",y1:"324",x2:"181.7",y2:"332",key:15}),l.createElement("line",{id:"XMLID_41_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},x1:"190.7",y1:"324",x2:"190.7",y2:"332",key:16}),l.createElement("circle",{id:"XMLID_43_",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},cx:"373.5",cy:"187.5",r:"3.7",key:17}),l.createElement("polyline",{id:"XMLID_46_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},points:"58.5,136.9 79,188.3 \r\n\t69.2,192.3 48.7,140.9 ",key:18}),l.createElement("polygon",{id:"XMLID_47_",style:{fill:"none",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},points:"53.9,139 51.6,141.2 \r\n\t48.7,140.9 47.3,123.1 58.6,137 57.2,139 ",key:19}),l.createElement("line",{id:"XMLID_48_",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"47.6",y1:"127.4",x2:"50.1",y2:"126.4",key:20}),l.createElement("line",{id:"XMLID_50_",style:{fill:"none",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"53.9",y1:"139",x2:"74.4",y2:"191.1",key:21}),l.createElement("rect",{id:"XMLID_44_",x:"59.7",y:"168",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},width:"60.7",height:"68",key:22}),l.createElement("g",{id:"XMLID_62_",key:23},[l.createElement("path",{id:"XMLID_59_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M80.7,181c0,20,7.8,33,7.8,33\r\n\t\th35.2c0,0-7.8-13-7.8-33H80.7z",key:0}),l.createElement("line",{id:"XMLID_60_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"88.7",y1:"189.5",x2:"110.7",y2:"189.5",key:1}),l.createElement("line",{id:"XMLID_61_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"90.7",y1:"197.5",x2:"111.7",y2:"197.5",key:2}),l.createElement("line",{id:"XMLID_58_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},x1:"93.7",y1:"205.5",x2:"113.7",y2:"205.5",key:3})]),l.createElement("path",{id:"XMLID_54_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeMiterlimit:"10"},d:"M161.3,219.8L161.3,219.8\r\n\tc-2.2,0-3.9-1.8-3.9-3.9l0,0c0-2.2,1.8-3.9,3.9-3.9l0,0c2.2,0,3.9,1.8,3.9,3.9l0,0C165.2,218.1,163.5,219.8,161.3,219.8z",key:24}),l.createElement("path",{id:"XMLID_52_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M158,215.9h6.6\r\n\tc7.2,0,13.1,5.9,13.1,13.1v0h-32.8v0C144.9,221.8,150.8,215.9,158,215.9z",key:25}),l.createElement("path",{id:"XMLID_53_",style:{fill:"#FFFFFF",stroke:"#E5424A",strokeWidth:"2",strokeMiterlimit:"10"},d:"M144.9,229h32.8v0\r\n\tc0,3.2-2.6,5.8-5.8,5.8h-21.2C147.5,234.8,144.9,232.2,144.9,229L144.9,229z",key:26})])}var l=r(1);n.displayName="Graph",n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 586.7 332",style:{enableBackground:"new 0 0 586.7 332"},xmlSpace:"preserve"},e.exports=n,n.default=n},62:function(e,t,r){function n(e){return l.createElement("svg",e,[l.createElement("title",{key:0},"HTML5 Logo Badge"),l.createElement("path",{style:{fill:"#E34F26"},d:"M-500.4,648.7L-569.3-124h757.5l-68.9,772.7L-191.3,736",key:1}),l.createElement("path",{style:{fill:"#EF652A"},d:"M-189.7,668.8l250.3-68.9l58.8-661.8h-309.1",key:2}),l.createElement("path",{style:{fill:"#EBEBEB"},d:"M-189.7,225.4h-126L-324,128h134.4V33.9h-1.7h-236.8l1.7,25.2l23.5,262h213.3V225.4z M-189.7,472.3\r\n\th-1.7l-105.8-28.6l-6.7-75.6h-50.4h-43.7l11.8,149.5l194.8,53.8h1.7V472.3z",key:3}),l.createElement("path",{style:{fill:"#FFFFFF"},d:"M-191.3,225.4v95.7h117.6l-11.8,122.6l-105.8,28.6v99.1L3.5,517.6l1.7-16.8L27,250.6l3.4-25.2H3.5\r\n\tH-191.3z M-191.3,33.9v58.8V128l0,0H38.8l0,0l0,0l1.7-20.2l5-48.7l1.7-25.2H-191.3z",key:4})])}var l=r(1);n.displayName="HtmlLogo",n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"-569.3 -124 757.5 860",style:{enableBackground:"new -569.3 -124 757.5 860"},xmlSpace:"preserve"},e.exports=n,n.default=n},63:function(e,t,r){function n(e){return l.createElement("svg",e,l.createElement("polygon",{points:"352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "}))}var l=r(1);n.displayName="LeftArrow",n.defaultProps={height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},version:"1.1",viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve"},e.exports=n,n.default=n},64:function(e,t,r){function n(e){return l.createElement("svg",e,[l.createElement("polygon",{id:"XMLID_3_",style:{opacity:"0.4",fill:"#E5428C"},points:"177,306.4 88.5,357.6 0,306.4 0,204.1 88.5,153 177,204.1 ",key:0}),l.createElement("polygon",{id:"XMLID_4_",style:{opacity:"0.4",fill:"#E55B52"},points:"266,153.4 177.5,204.6 89,153.4 89,51.1 177.5,0 266,51.1 ",key:1}),l.createElement("polygon",{id:"XMLID_2_",style:{opacity:"0.4",fill:"#E5425E"},points:"354,307.4 265.5,358.6 177,307.4 177,205.1 265.5,154 354,205.1 \r\n\t",key:2}),l.createElement("polygon",{id:"XMLID_1_",style:{fill:"#E5424A"},points:"266,255.4 177.5,306.6 89,255.4 89,153.1 177.5,102 266,153.1 ",key:3}),l.createElement("polygon",{id:"XMLID_6_",style:{fill:"#CC1746"},points:"89,255.4 177.5,204.6 89,153.4 ",key:4}),l.createElement("polygon",{id:"XMLID_7_",style:{fill:"#E55E5E"},points:"177.5,204.5 266,255.4 266,153.3 ",key:5}),l.createElement("polygon",{id:"XMLID_8_",style:{fill:"#ED8A8A"},points:"177,204.3 177,102.3 266,153.3 ",key:6}),l.createElement("g",{id:"XMLID_5_",key:7},l.createElement("path",{id:"XMLID_10_",style:{fill:"#FFFFFF"},d:"M329.7,128.6l-143.8,82.1v124.6H165V211.7L22.3,116.6l17.3-14.3l136.2,90.1L315,112\r\n\t\tL329.7,128.6z"}))])}var l=r(1);n.displayName="Logo",n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 354 358.6",style:{enableBackground:"new 0 0 354 358.6"},xmlSpace:"preserve"},e.exports=n,n.default=n},65:function(e,t,r){function n(e){return l.createElement("svg",e,l.createElement("g",null,l.createElement("path",{style:{fill:"#539E43"},d:"M-574.1,845c-11.9,0-22.9-3.3-33-8.6l-104.6-62.1c-15.8-8.6-8-11.9-3.3-13.4\r\n\t\tc21.4-7.1,25.3-8.6,47.3-21.4c2.4-1.5,5.6-0.9,8,0.9l80.3,48.2c3.3,1.5,7.1,1.5,9.5,0l314.2-181.9c3.3-1.5,4.8-4.8,4.8-8.6V234.5\r\n\t\tc0-3.9-1.5-7.1-4.8-8.6L-569.9,44.5c-3.3-1.5-7.1-1.5-9.5,0l-314.2,181.3c-3.3,1.5-4.8,5.6-4.8,8.6v363.2c0,3.3,1.5,7.1,4.8,8.6\r\n\t\tl85.9,49.6c46.4,23.8,75.5-3.9,75.5-31.5V266c0-4.8,3.9-9.5,9.5-9.5h40.1c4.8,0,9.5,3.9,9.5,9.5v358.5c0,62.1-33.9,98.4-93,98.4\r\n\t\tc-18.1,0-32.4,0-72.5-19.6l-82.6-47.3c-20.5-11.9-33-33.9-33-57.4V235.1c0-23.8,12.5-45.8,33-57.4L-607.1-4.2\r\n\t\tc19.6-11,46.4-11,66.3,0l314.2,181.9c20.5,11.9,33,33.9,33,57.4v363.2c0,23.8-12.5,45.8-33,57.4l-314.2,181.9\r\n\t\tC-551.2,842.6-563.1,845-574.1,845L-574.1,845z M-477.2,595.3c-137.9,0-166.2-63-166.2-116.5c0-4.8,3.9-9.5,9.5-9.5h41\r\n\t\tc4.8,0,8.6,3.3,8.6,8c6.2,41.6,24.4,62.1,107.9,62.1c66.3,0,94.5-14.9,94.5-50.5c0-20.5-8-35.4-111.2-45.8\r\n\t\tc-85.9-8.6-139.4-27.6-139.4-96c0-63.9,53.5-101.7,143.3-101.7c100.8,0,150.4,34.8,156.6,110.3c0,2.4-0.9,4.8-2.4,7.1\r\n\t\tc-1.5,1.5-3.9,3.3-6.2,3.3h-41c-3.9,0-8-3.3-8.6-7.1c-9.5-43.4-33.9-57.4-98.4-57.4c-72.5,0-81.1,25.3-81.1,44\r\n\t\tc0,22.9,10.1,30,107.9,42.5c96.9,12.5,142.7,30.6,142.7,98.4C-320.5,555.8-377,595.3-477.2,595.3L-477.2,595.3z"})))}var l=r(1);n.displayName="NodeLogo",n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"-954.3 -12.5 760.6 857.5",style:{enableBackground:"new -954.3 -12.5 760.6 857.5"},xmlSpace:"preserve"},e.exports=n,n.default=n},66:function(e,t,r){function n(e){return l.createElement("svg",e,l.createElement("g",null,[l.createElement("path",{style:{fill:"#61DAFB"},d:"M467.4,403.5c0-75.8-95-147.7-240.6-192.3c33.6-148.4,18.7-266.5-47.1-304.3\r\n\t\tc-15.2-8.9-32.9-13.1-52.3-13.1v52c10.7,0,19.4,2.1,26.6,6.1c31.7,18.2,45.5,87.5,34.8,176.6c-2.6,21.9-6.8,45-11.9,68.6\r\n\t\tc-45.7-11.2-95.7-19.8-148.2-25.4C-2.8,128.6-35.5,89.4-68.4,55.1C7.7-15.6,79.1-54.4,127.6-54.4v-52l0,0\r\n\t\tc-64.2,0-148.2,45.7-233.1,125.1c-84.9-78.9-168.9-124.1-233.1-124.1v52c48.3,0,119.9,38.5,196,108.7\r\n\t\tc-32.7,34.3-65.3,73.3-96.4,116.4c-52.7,5.6-102.7,14.2-148.4,25.7c-5.4-23.3-9.3-46-12.1-67.7c-11-89.1,2.6-158.4,34.1-176.9\r\n\t\tc7-4.2,16.1-6.1,26.8-6.1v-52l0,0c-19.6,0-37.3,4.2-52.7,13.1c-65.6,37.8-80.3,155.6-46.4,303.6c-145.1,44.8-239.6,116.4-239.6,192\r\n\t\tc0,75.8,95,147.7,240.6,192.3c-33.6,148.4-18.7,266.5,47.1,304.3c15.2,8.9,32.9,13.1,52.5,13.1c64.2,0,148.2-45.7,233.1-125.1\r\n\t\tC-19.1,866.9,64.9,912.2,129,912.2c19.6,0,37.3-4.2,52.7-13.1c65.6-37.8,80.3-155.6,46.4-303.6\r\n\t\tC372.9,550.9,467.4,479.1,467.4,403.5z M163.6,247.8c-8.6,30.1-19.4,61.1-31.5,92.2c-9.6-18.7-19.6-37.3-30.6-56\r\n\t\tc-10.7-18.7-22.2-36.9-33.6-54.6C101,234.3,133,240.4,163.6,247.8z M56.7,496.3c-18.2,31.5-36.9,61.4-56.2,89.1\r\n\t\tc-34.8,3-70,4.7-105.5,4.7c-35.2,0-70.5-1.6-105-4.4c-19.4-27.8-38.3-57.4-56.5-88.7c-17.7-30.6-33.8-61.6-48.5-92.9\r\n\t\tc14.5-31.3,30.8-62.5,48.3-93.1c18.2-31.5,36.9-61.4,56.2-89.1c34.8-3,70-4.7,105.5-4.7c35.2,0,70.5,1.6,105,4.4\r\n\t\tc19.4,27.8,38.3,57.4,56.5,88.7c17.7,30.6,33.8,61.6,48.5,92.9C90.3,434.5,74.2,465.8,56.7,496.3z M132.1,466\r\n\t\tc12.6,31.3,23.3,62.5,32.2,92.9c-30.6,7.5-62.8,13.8-96.1,18.7c11.4-18,22.9-36.4,33.6-55.3C112.5,503.6,122.5,484.7,132.1,466z\r\n\t\t M-104.5,715c-21.7-22.4-43.4-47.4-64.9-74.7c21,0.9,42.5,1.6,64.2,1.6c21.9,0,43.6-0.5,64.9-1.6C-61.4,667.6-83.1,692.6-104.5,715\r\n\t\tz M-278.1,577.5c-33.1-4.9-65.1-11-95.7-18.4c8.6-30.1,19.4-61.1,31.5-92.2c9.6,18.7,19.6,37.3,30.6,56\r\n\t\tC-300.8,541.6-289.6,559.8-278.1,577.5z M-105.7,91.9c21.7,22.4,43.4,47.4,64.9,74.7c-21-0.9-42.5-1.6-64.2-1.6\r\n\t\tc-21.9,0-43.6,0.5-64.9,1.6C-148.9,139.3-127.2,114.3-105.7,91.9z M-278.4,229.4c-11.4,18-22.9,36.4-33.6,55.3\r\n\t\tc-10.7,18.7-20.8,37.3-30.3,56c-12.6-31.3-23.3-62.5-32.2-92.9C-343.9,240.6-311.7,234.3-278.4,229.4z M-489.6,521.5\r\n\t\tc-82.6-35.2-136-81.4-136-118.1s53.4-83.1,136-118.1c20.1-8.6,42-16.3,64.6-23.6c13.3,45.7,30.8,93.3,52.5,142.1\r\n\t\tc-21.5,48.5-38.7,95.9-51.8,141.4C-447.3,538.1-469.3,530.2-489.6,521.5z M-364,855c-31.7-18.2-45.5-87.5-34.8-176.6\r\n\t\tc2.6-21.9,6.8-45,11.9-68.6c45.7,11.2,95.7,19.8,148.2,25.4c31.5,43.2,64.2,82.4,97.1,116.7c-76.1,70.7-147.5,109.4-196,109.4\r\n\t\tC-348.1,861.1-357,859-364,855z M189.5,677.2c11,89.1-2.6,158.4-34.1,176.9c-7,4.2-16.1,6.1-26.8,6.1c-48.3,0-119.9-38.5-196-108.7\r\n\t\tc32.7-34.3,65.3-73.3,96.4-116.4c52.7-5.6,102.7-14.2,148.4-25.7C182.7,632.8,186.9,655.5,189.5,677.2z M279.3,521.5\r\n\t\tc-20.1,8.6-42,16.3-64.6,23.6c-13.3-45.7-30.8-93.3-52.5-142.1c21.5-48.5,38.7-95.9,51.8-141.4c23.1,7.2,45,15.2,65.6,23.8\r\n\t\tc82.6,35.2,136,81.4,136,118.1C415.4,440.1,361.9,486.5,279.3,521.5z",key:0}),l.createElement("path",{style:{fill:"#61DAFB"},d:"M-338.8-105.5L-338.8-105.5L-338.8-105.5z",key:1}),l.createElement("circle",{style:{fill:"#61DAFB"},cx:"-105.2",cy:"403.5",r:"106.6",key:2}),l.createElement("path",{style:{fill:"#61DAFB"},d:"M127.2-106.2L127.2-106.2L127.2-106.2z",key:3})]))}var l=r(1);n.displayName="ReactLogo",n.defaultProps={version:"1.1",id:"Layer_2_1_",x:"0px",y:"0px",viewBox:"-677.4 -106.4 1144.8 1019.5",style:{enableBackground:"new -677.4 -106.4 1144.8 1019.5"},xmlSpace:"preserve"},e.exports=n,n.default=n},67:function(e,t,r){function n(e){return l.createElement("svg",e,l.createElement("path",{style:{fill:"#764ABC"},d:"M3272.2-159.8c92.3-9.6,162.2-89.1,159.1-184.5c-3.2-95.4-82.7-171.8-178.2-171.8h-6.4\r\n\tc-98.6,3.2-175,85.9-171.8,184.5c3.2,47.7,22.3,89.1,50.9,117.7c-108.2,213.2-273.6,369.1-521.7,499.5\r\n\tc-168.6,89.1-343.6,120.9-518.6,98.6c-143.2-19.1-254.5-82.7-324.5-187.7c-101.8-155.9-111.3-324.5-25.4-493.1\r\n\tc60.4-120.9,155.9-210,216.3-254.5c-12.7-41.4-31.8-111.3-41.4-162.2C1449.3-379.3,1497,72.5,1637,285.6\r\n\tc105,159.1,318.1,257.7,553.6,257.7c63.6,0,127.2-6.4,190.9-22.3C2788.7,441.5,3097.3,199.7,3272.2-159.8L3272.2-159.8z\r\n\t M3832.2-554.3c-241.8-283.2-598.1-439-1005.3-439H2776c-28.6-57.3-89.1-95.4-155.9-95.4h-6.4c-98.6,3.2-175,85.9-171.8,184.5\r\n\tc3.2,95.4,82.7,171.8,178.2,171.8h6.4c70-3.2,130.4-47.7,155.9-108.2h57.3c241.8,0,470.8,70,677.6,206.8\r\n\tc159.1,105,273.6,241.8,337.2,407.2c54.1,133.6,50.9,264.1-6.4,375.4c-89.1,168.6-238.6,260.9-435.8,260.9\r\n\tc-127.3,0-248.1-38.2-311.8-66.8c-35,31.8-98.6,82.7-143.2,114.5c136.8,63.6,276.8,98.6,410.4,98.6c305.4,0,531.3-168.6,617.2-337.2\r\n\tC4077.1,34.3,4070.8-283.8,3832.2-554.3L3832.2-554.3z M2216-105.7c3.2,95.4,82.7,171.8,178.2,171.8h6.4\r\n\tc98.6-3.2,175-85.9,171.8-184.5c-3.2-95.4-82.7-171.8-178.2-171.8h-6.4c-6.4,0-15.9,0-22.3,3.2\r\n\tc-130.4-216.4-184.5-451.8-165.4-706.3c12.7-190.9,76.3-356.3,187.7-493.1c92.3-117.7,270.4-175,391.3-178.2\r\n\tc337.2-6.4,480.4,413.6,489.9,582.2c41.4,9.5,111.3,31.8,159.1,47.7c-38.2-515.4-356.3-782.6-661.7-782.6\r\n\tc-286.3,0-550.4,206.8-655.4,512.2c-146.3,407.2-50.9,798.5,127.3,1107.1C2222.4-175.7,2212.8-140.7,2216-105.7L2216-105.7z"}))}var l=r(1);n.displayName="ReduxLogo",n.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"1540 -1817.3 2500.1 2373.3",style:{enableBackground:"new 1540 -1817.3 2500.1 2373.3"},xmlSpace:"preserve"},e.exports=n,n.default=n},68:function(e,t,r){function n(e){return l.createElement("svg",e,l.createElement("polygon",{points:"160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "}))}var l=r(1);n.displayName="RightArrow",n.defaultProps={height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},version:"1.1",viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve"},e.exports=n,n.default=n},228:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=r(1),i=n(l),o=r(45),c=n(o);t.default=function(){return i.default.createElement(c.default,{lang:"es"})},e.exports=t.default},45:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=r(1),a=n(c),s=r(8);r(54);var d=r(41),u=n(d),f=r(42),p=n(f),y=(r(16),function(e){function t(r){return l(this,t),i(this,e.call(this,r))}return o(t,e),t.prototype.componentWillMount=function(){var e=this.props,t=e.lang,r=e.setLang;void 0===t||"fr"!==t&&"es"!==t||r(t)},t.prototype.render=function(){return a.default.createElement("div",{id:"app-container"},a.default.createElement(u.default,null),a.default.createElement(p.default,null))},t}(a.default.Component)),m=function(e){return{}},k=function(e){return{setLang:function(t){return e({type:"SET_LANG",lang:t})}}};t.default=(0,s.connect)(m,k)(y),e.exports=t.default},54:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-es-js-30c339fcc72a12b82392.js.map