webpackJsonp([56712480889174,35783957827783],{43:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(14),u=r(s),d=n(5),f=n(56),m=r(f),p=n(23),y=r(p),k=function(e){var t=e.children,n=e.value;return c.default.createElement("div",{className:m.default.skillContainer},c.default.createElement("p",{className:m.default.skillName},t),c.default.createElement("div",{className:m.default.skillBar},c.default.createElement("div",{className:m.default.skillBarFill,style:{width:n+"%"}}),c.default.createElement("p",null,n,"%")))},h=function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{id:m.default.container,style:{backgroundImage:"url("+y.default+")"}},c.default.createElement("h1",null,"About",c.default.createElement("div",{className:m.default.border,"data-aos":"fade-up"})),c.default.createElement("div",{id:m.default.leftAndRight},c.default.createElement("div",{id:m.default.left},c.default.createElement("h3",null,"Hi, my name is Yassine Hermellin"),c.default.createElement("p",null,"Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.",c.default.createElement("br",null),c.default.createElement("br",null)," I'm quietly confident, naturally curious, and perpetually improving my chops.")),c.default.createElement("div",{id:m.default.right},c.default.createElement(k,{value:85},"React"),c.default.createElement(k,{value:80},"Redux"),c.default.createElement(k,{value:75},"Node"),c.default.createElement(k,{value:90},"HTML5"),c.default.createElement(k,{value:90},"CSS3"),c.default.createElement(k,{value:60},"Webpack"),c.default.createElement(k,{value:85},"Photoshop"),c.default.createElement(k,{value:85},"Illustrator"),c.default.createElement(k,{value:80},"Premiere"),c.default.createElement(k,{value:60},"Indesign"),c.default.createElement(k,{value:90},"After Effects"))))},t}(c.default.Component),_=function(e){return{tr:(0,u.default)(e.lang)}};t.default=(0,d.connect)(_)(h),e.exports=t.default},56:function(e,t){e.exports={container:"src-components----AboutComponent-module---container---3dIlL",border:"src-components----AboutComponent-module---border---4g78W",widthIn:"src-components----AboutComponent-module---widthIn---2Vpdc",leftAndRight:"src-components----AboutComponent-module---leftAndRight---3g-lO",left:"src-components----AboutComponent-module---left---1PPn8",right:"src-components----AboutComponent-module---right---3suie",skillContainer:"src-components----AboutComponent-module---skillContainer---3-W_b",skillName:"src-components----AboutComponent-module---skillName---1W22u",skillBar:"src-components----AboutComponent-module---skillBar---3XNxa",skillBarFill:"src-components----AboutComponent-module---skillBarFill---1277A",trimPath:"src-components----AboutComponent-module---trimPath---3cXQl"}},44:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(14),u=r(s),d=n(5),f=n(57),m=r(f),p=n(71),y=r(p),k=n(47),h=r(k),_=n(17),E=function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.lang,n=e.setLang;return c.default.createElement("div",{id:m.default.container},c.default.createElement("div",{id:m.default.navMenu},c.default.createElement(y.default,{id:m.default.logo}),c.default.createElement(h.default,null,"Work"),c.default.createElement(h.default,null,"About"),c.default.createElement(h.default,null,"Contact")),c.default.createElement("div",{id:m.default.langMenu},c.default.createElement(h.default,{selected:"en"===t,onClick:function(){return n("en")}},"EN"),c.default.createElement(h.default,{selected:"fr"===t,onClick:function(){return n("fr")}},"FR"),c.default.createElement(h.default,{selected:"es"===t,onClick:function(){return n("es")}},"ES")))},t}(c.default.Component),M=function(e){return{tr:(0,u.default)(e.lang),lang:e.lang}},v=function(e){return{setLang:function(t){return e((0,_.setLang)(t))}}};t.default=(0,d.connect)(M,v)(E),e.exports=t.default},57:function(e,t){e.exports={container:"src-components----BannerComponent-module---container---14Msy",navMenu:"src-components----BannerComponent-module---navMenu---2vuMY",logo:"src-components----BannerComponent-module---logo---22_B1",langMenu:"src-components----BannerComponent-module---langMenu---20p8_",trimPath:"src-components----BannerComponent-module---trimPath---1zNuE",widthIn:"src-components----BannerComponent-module---widthIn---24dg6"}},45:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(5),u=n(58),d=r(u),f=n(23),m=r(f),p=n(46),y=function(e){function t(n){l(this,t);var r=o(this,e.call(this,n));return r.handleChange=function(e){var t;return r.setState((t={},t[e.target.name]=e.target.value,t))},r.handleSubmit=function(e){e.preventDefault()},r.state={name:"",email:"",message:""},r}return i(t,e),t.prototype.render=function(){var e=this.state,t=e.name,n=e.email,r=e.message;return c.default.createElement("div",{id:d.default.container,style:{backgroundImage:"url("+m.default+")"}},c.default.createElement("h1",null,"Contact me"),c.default.createElement("form",{onSubmit:this.handleSubmit},c.default.createElement(p.Input,{value:t,onChange:this.handleChange,name:"name",placeholder:"Your name"}),c.default.createElement(p.Input,{value:n,onChange:this.handleChange,name:"email",placeholder:"Your email"}),c.default.createElement(p.Textarea,{value:r,onChange:this.handleChange,name:"message",placeholder:"Your message"}),c.default.createElement(p.Button,{style:{width:"200px",alignSelf:"flex-end"}},"Send")))},t}(c.default.Component),k=function(e){return{}},h=function(e){return{}};t.default=(0,s.connect)(k,h)(y),e.exports=t.default},58:function(e,t){e.exports={container:"src-components----ContactComponent-module---container---1zoeI"}},46:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}t.__esModule=!0,t.Button=t.Textarea=t.Input=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),c=n(59),s=r(c),u=function(e){var t=e.value,n=e.onChange,r=e.name,i=l(e,["value","onChange","name"]);return a.default.createElement("div",{className:s.default.container},a.default.createElement("input",o({type:"text",value:t,onChange:n,name:r},i)),a.default.createElement("div",{className:s.default.border}))};t.Input=u;var d=function(e){var t=e.value,n=e.onChange,r=e.name,i=l(e,["value","onChange","name"]);return a.default.createElement("div",{className:s.default.container},a.default.createElement("textarea",o({value:t,onChange:n,name:r},i)),a.default.createElement("div",{className:s.default.border}))};t.Textarea=d;var f=function(e){var t=e.children,n=l(e,["children"]);return a.default.createElement("div",o({className:s.default.container},n),a.default.createElement("button",null,t),a.default.createElement("div",{className:s.default.border}))};t.Button=f},59:function(e,t){e.exports={container:"src-components----Form-module---container---388IE",border:"src-components----Form-module---border---TlMtW"}},47:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=r(l),i=n(60),a=r(i);t.default=function(e){var t=e.children,n=e.selected,r=e.onClick;return o.default.createElement("div",{className:a.default.container,onClick:r},o.default.createElement("a",{className:n?a.default.linkSelected:null},t),o.default.createElement("div",{className:n?a.default.borderSelected:a.default.border}))},e.exports=t.default},60:function(e,t){e.exports={container:"src-components----MenuItem-module---container---3gmVh",border:"src-components----MenuItem-module---border---3foJt",linkSelected:"src-components----MenuItem-module---linkSelected---34-RC",borderSelected:"src-components----MenuItem-module---borderSelected---3_a7c"}},48:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(14),u=r(s),d=n(5),f=n(61),m=r(f),p=n(69),y=r(p),k=function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props.tr;return c.default.createElement("div",{id:m.default.container},c.default.createElement("div",{id:m.default.title},c.default.createElement("h1",null,e("presentation-title")),c.default.createElement("h2",null,e("presentation-subtitle"))),c.default.createElement(y.default,{id:m.default.graph}))},t}(c.default.Component),h=function(e){return{tr:(0,u.default)(e.lang)}};t.default=(0,d.connect)(h)(k),e.exports=t.default},61:function(e,t){e.exports={container:"src-components----PresentationComponent-module---container---1Pyjo",title:"src-components----PresentationComponent-module---title---2EBKL",graph:"src-components----PresentationComponent-module---graph---28PBf",trimPath:"src-components----PresentationComponent-module---trimPath---36wnH",widthIn:"src-components----PresentationComponent-module---widthIn---221p9"}},49:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(5),u=n(62),d=r(u),f=n(75),m=r(f),p=n(70),y=(r(p),n(72)),k=(r(y),n(73)),h=r(k),_=n(17),E=function(e){var t=e.src;return c.default.createElement("div",{className:d.default.project},c.default.createElement("div",{className:d.default.projectOverlay},c.default.createElement("h3",null,"Findimo"),c.default.createElement("h4",null,"Design & Front-end development")),c.default.createElement("img",{src:t}))},M=function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.nextProject,e.previousProject,e.currentProjectFade,this.props.currentProject);t.id,t.title,t.component;return c.default.createElement("div",{id:d.default.container},c.default.createElement("h1",null,"Some of my works"),c.default.createElement("div",{id:d.default.projects},c.default.createElement(E,{src:h.default}),c.default.createElement(E,{src:h.default}),c.default.createElement(E,{src:h.default}),c.default.createElement(E,{src:h.default}),c.default.createElement(E,{src:h.default}),c.default.createElement(E,{src:h.default})))},t}(c.default.Component),v=function(e){return{currentProject:e.currentProject,currentProjectFade:e.currentProjectFade}},D=function(e){return{nextProject:function t(n){var r=m.default.length,l=n+1>=r?0:n+1,t=m.default[l];e((0,_.setProject)(t))},previousProject:function(t){var n=m.default.length,r=t-1<0?n-1:t-1,l=m.default[r];e((0,_.setProject)(l))}}};t.default=(0,s.connect)(v,D)(M),e.exports=t.default},62:function(e,t){e.exports={container:"src-components----ProjectComponent-module---container---2V6p-",projects:"src-components----ProjectComponent-module---projects---u84Iz",project:"src-components----ProjectComponent-module---project---3dUC1",projectOverlay:"src-components----ProjectComponent-module---projectOverlay---ydcmy",window:"src-components----ProjectComponent-module---window---G-kp6",arrow:"src-components----ProjectComponent-module---arrow---3VpOF",collapse:"src-components----ProjectComponent-module---collapse---2UIH0",expand:"src-components----ProjectComponent-module---expand---2070-"}},14:function(e,t){"use strict";t.__esModule=!0;var n={en:{"presentation-title":"Front-end developper","presentation-subtitle":"I design, implement and connect user interfaces."},fr:{"presentation-title":"Développeur front-end","presentation-subtitle":"Je conçois, implémente et connecte des interfaces utilisateur."},es:{"presentation-title":"Front-end developper","presentation-subtitle":"I design, implement and connect user interfaces."}};t.default=function(e){return function(t){return void 0===n[e][t]?"No translation available for lang="+e+", key="+t:n[e][t]}},e.exports=t.default},69:function(e,t,n){function r(e){return l.createElement("svg",e,[l.createElement("g",{id:"XMLID_1_",key:0},[l.createElement("polyline",{id:"XMLID_16_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},points:"80.5,370.3 73.4,312.6 \r\n\t\t80.4,311.7 87.6,370.3 \t",key:0}),l.createElement("path",{id:"XMLID_51_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M72.7,348.8l-3.6-29.2\r\n\t\tc-0.3-2.7,1.6-5.2,4.3-5.5l0,0",key:1}),l.createElement("path",{id:"XMLID_45_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M86.9,351.4l-10.2,1.3l-5.2-42.4\r\n\t\tc-0.2-1.9,1.1-3.6,3-3.8l3.4-0.4c1.9-0.2,3.6,1.1,3.8,3L86.9,351.4z",key:2}),l.createElement("path",{id:"XMLID_14_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M300.5,396.6\r\n\t\tc0,30.5-79.2,21.1-107.4,41.8",key:3}),l.createElement("path",{id:"XMLID_2_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M488.7,396.3h31v-193H227.2\r\n\t\tc-0.3,0-0.5,0.2-0.5,0.5v192c0,0.3,0.2,0.5,0.5,0.5h137.5v26h-53.2c-2.5,0-4.6,2-4.6,4.6v11.4h133v-11.4c0-2.5-2-4.6-4.6-4.6h-53.7\r\n\t\tv-26h44",key:4}),l.createElement("polyline",{id:"XMLID_12_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},points:"426.1,380.1 241.7,380.1 \r\n\t\t241.7,219.3 505.2,219.3 505.2,380.1 489,380.1 \t",key:5}),l.createElement("circle",{id:"XMLID_3_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},cx:"273.7",cy:"276.2",r:"12.8",key:6}),l.createElement("path",{id:"XMLID_4_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M439.4,241.6h-132\r\n\t\tc-3.1,0-5.6-2.5-5.6-5.6v-0.3c0-3.1,2.5-5.6,5.6-5.6h132c3.1,0,5.6,2.5,5.6,5.6v0.3C445,239,442.5,241.6,439.4,241.6z",key:7}),l.createElement("rect",{id:"XMLID_5_",x:"300.5",y:"270.2",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},width:"47.4",height:"11.5",key:8}),l.createElement("rect",{id:"XMLID_6_",x:"300.5",y:"289.1",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},width:"73",height:"11.5",key:9}),l.createElement("rect",{id:"XMLID_34_",x:"300.5",y:"308.8",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},width:"59.7",height:"11.5",key:10}),l.createElement("rect",{id:"XMLID_35_",x:"360.2",y:"270.2",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},width:"34.5",height:"11.5",key:11}),l.createElement("path",{id:"XMLID_7_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M480.1,410.3h-45c-4.9,0-9-4-9-9\r\n\t\tv-89.4c0-4.9,4-9,9-9h45c4.9,0,9,4,9,9v89.4C489,406.3,485,410.3,480.1,410.3z",key:12}),l.createElement("line",{id:"XMLID_9_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"426.7",y1:"394.3",x2:"488.7",y2:"394.3",key:13}),l.createElement("circle",{id:"XMLID_11_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},cx:"457.9",cy:"402.3",r:"2.9",key:14}),l.createElement("line",{id:"XMLID_8_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"467.7",y1:"402.8",x2:"482.7",y2:"402.8",key:15}),l.createElement("line",{id:"XMLID_10_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"433.7",y1:"402.8",x2:"448.7",y2:"402.8",key:16}),l.createElement("line",{id:"XMLID_26_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"369.3",x2:"465.7",y2:"369.3",key:17}),l.createElement("line",{id:"XMLID_27_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"376.3",x2:"474.7",y2:"376.3",key:18}),l.createElement("line",{id:"XMLID_28_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"441.7",y1:"381.3",x2:"453.7",y2:"381.3",key:19}),l.createElement("circle",{id:"XMLID_25_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},cx:"457.9",cy:"340.3",r:"14.3",key:20}),l.createElement("line",{id:"XMLID_29_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"468.7",y1:"369.3",x2:"474.7",y2:"369.3",key:21}),l.createElement("line",{id:"XMLID_30_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"457.7",y1:"381.3",x2:"461.7",y2:"381.3",key:22}),l.createElement("line",{id:"XMLID_31_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"426.7",y1:"311.3",x2:"488.7",y2:"311.3",key:23}),l.createElement("line",{id:"XMLID_32_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"454.7",y1:"307.3",x2:"464.7",y2:"307.3",key:24}),l.createElement("line",{id:"XMLID_33_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"451.7",y1:"307.3",x2:"453.7",y2:"307.3",key:25}),l.createElement("path",{id:"XMLID_38_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M571.2,467.3H15.5\r\n\t\tc-8,0-14.5-6.5-14.5-14.5l0,0c0-8,6.5-14.5,14.5-14.5h555.7c8,0,14.5,6.5,14.5,14.5l0,0C585.7,460.8,579.2,467.3,571.2,467.3z",key:26}),l.createElement("circle",{id:"XMLID_43_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},cx:"373.5",cy:"389.8",r:"3.7",key:27}),l.createElement("line",{id:"XMLID_18_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"59.7",y1:"370.3",x2:"48.7",y2:"343.2",key:28}),l.createElement("line",{id:"XMLID_15_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"58.5",y1:"339.2",x2:"70.9",y2:"370.3",key:29}),l.createElement("polygon",{id:"XMLID_47_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},points:"53.9,341.3 51.6,343.5 \r\n\t\t48.7,343.2 47.3,325.4 58.6,339.3 57.2,341.3 \t",key:30}),l.createElement("line",{id:"XMLID_48_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"47.6",y1:"329.7",x2:"50.1",y2:"328.7",key:31}),l.createElement("line",{id:"XMLID_50_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"53.9",y1:"341.3",x2:"65.3",y2:"370.3",key:32}),l.createElement("polyline",{id:"XMLID_17_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},points:"120.3,416.3 120.3,438.3 \r\n\t\t59.7,438.3 59.7,370.3 120.3,370.3 120.3,408.9 \t",key:33}),l.createElement("g",{id:"XMLID_62_",key:34},[l.createElement("path",{id:"XMLID_59_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M80.7,383.3c0,20,7.8,33,7.8,33\r\n\t\t\th35.2c0,0-7.8-13-7.8-33H80.7z",key:0}),l.createElement("line",{id:"XMLID_60_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"88.7",y1:"392.3",x2:"110.7",y2:"392.3",key:1}),l.createElement("line",{id:"XMLID_61_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"90.7",y1:"400.3",x2:"111.7",y2:"400.3",key:2}),l.createElement("line",{id:"XMLID_58_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"93.7",y1:"408.3",x2:"113.7",y2:"408.3",key:3})]),l.createElement("path",{id:"XMLID_20_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M157.3,418.2L157.3,418.2\r\n\t\tc0-2.2,1.8-3.9,3.9-3.9l0,0c2.2,0,3.9,1.8,3.9,3.9l0,0",key:35}),l.createElement("path",{id:"XMLID_52_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M158,418.2h6.6\r\n\t\tc7.2,0,13.1,5.9,13.1,13.1l0,0h-32.8l0,0C144.9,424.1,150.8,418.2,158,418.2z",key:36}),l.createElement("path",{id:"XMLID_53_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M144.9,431.3h32.8l0,0\r\n\t\tc0,3.2-2.6,5.8-5.8,5.8h-21.2C147.5,437.1,144.9,434.5,144.9,431.3L144.9,431.3z",key:37}),l.createElement("path",{id:"XMLID_13_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},d:"M193.1,438.3",key:38})]),l.createElement("polygon",{id:"XMLID_19_",style:{fill:"none",stroke:"#D87741",strokeMiterlimit:"10"},points:"112.9,49.1 74.6,80.8 66.3,31.8 ",key:1}),l.createElement("line",{id:"XMLID_22_",style:{fill:"none",stroke:"#D87741",strokeMiterlimit:"10"},x1:"62.9",y1:"228.3",x2:"163.3",y2:"259.3",key:2}),l.createElement("line",{id:"XMLID_23_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"103.7",y1:"189.5",x2:"47.3",y2:"137.4",key:3}),l.createElement("polygon",{id:"XMLID_21_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},points:"480.3,81.5 463.8,81.9 \r\n\t458.3,66.3 471.4,56.3 485,65.6 ",key:4}),l.createElement("polygon",{id:"XMLID_24_",style:{fill:"none",stroke:"#D87741",strokeMiterlimit:"10"},points:"589.4,167.8 529.1,127.4 594.3,95.4 ",key:5}),l.createElement("line",{id:"XMLID_37_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"413.7",y1:"163.4",x2:"495.5",y2:"113.1",key:6}),l.createElement("line",{id:"XMLID_39_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"578",y1:"299.7",x2:"594.3",y2:"249.6",key:7}),l.createElement("line",{id:"XMLID_40_",style:{fill:"none",stroke:"#D93F46",strokeWidth:"2",strokeMiterlimit:"10"},x1:"604.2",y1:"294.8",x2:"660.3",y2:"241.6",key:8}),l.createElement("line",{id:"XMLID_41_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},x1:"250.6",y1:"0.1",x2:"243.7",y2:"31.9",key:9}),l.createElement("polygon",{id:"XMLID_36_",style:{fill:"none",stroke:"#D93F46",strokeMiterlimit:"10"},points:"192.8,184.4 189.4,202.9 175,190.7 ",key:10})])}var l=n(1);r.displayName="Graph3",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 661 468.3",style:{enableBackground:"new 0 0 661 468.3"},xmlSpace:"preserve"},e.exports=r,r.default=r},23:function(e,t,n){e.exports=n.p+"static/leaves.69e5c64b.png"},70:function(e,t,n){function r(e){return l.createElement("svg",e,l.createElement("polyline",{style:{fill:"none",stroke:"#E5424A",strokeWidth:"3",strokeMiterlimit:"10"},points:"-1252.3,807 -1265.8,819.2 -1252.3,831.4 \r\n\t-1265.8,819.2 "}))}var l=n(1);r.displayName="LeftArrow",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"-1268.1 805.9 16.8 26.6",style:{enableBackground:"new -1268.1 805.9 16.8 26.6"},xmlSpace:"preserve"},e.exports=r,r.default=r},71:function(e,t,n){function r(e){return l.createElement("svg",e,[l.createElement("polygon",{id:"XMLID_3_",style:{opacity:"0.4",fill:"#E5428C"},points:"177,306.4 88.5,357.6 0,306.4 0,204.1 88.5,153 177,204.1 ",key:0}),l.createElement("polygon",{id:"XMLID_4_",style:{opacity:"0.4",fill:"#E55B52"},points:"266,153.4 177.5,204.6 89,153.4 89,51.1 177.5,0 266,51.1 ",key:1}),l.createElement("polygon",{id:"XMLID_2_",style:{opacity:"0.4",fill:"#E5425E"},points:"354,307.4 265.5,358.6 177,307.4 177,205.1 265.5,154 354,205.1 \r\n\t",key:2}),l.createElement("polygon",{id:"XMLID_1_",style:{fill:"#E5424A"},points:"266,255.4 177.5,306.6 89,255.4 89,153.1 177.5,102 266,153.1 ",key:3}),l.createElement("polygon",{id:"XMLID_6_",style:{fill:"#CC1746"},points:"89,255.4 177.5,204.6 89,153.4 ",key:4}),l.createElement("polygon",{id:"XMLID_7_",style:{fill:"#E55E5E"},points:"177.5,204.5 266,255.4 266,153.3 ",key:5}),l.createElement("polygon",{id:"XMLID_8_",style:{fill:"#ED8A8A"},points:"177,204.3 177,102.3 266,153.3 ",key:6}),l.createElement("g",{id:"XMLID_5_",key:7},l.createElement("path",{id:"XMLID_10_",style:{fill:"#FFFFFF"},d:"M329.7,128.6l-143.8,82.1v124.6H165V211.7L22.3,116.6l17.3-14.3l136.2,90.1L315,112\r\n\t\tL329.7,128.6z"}))])}var l=n(1);r.displayName="Logo",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 354 358.6",style:{enableBackground:"new 0 0 354 358.6"},xmlSpace:"preserve"},e.exports=r,r.default=r},72:function(e,t,n){function r(e){return l.createElement("svg",e,l.createElement("polyline",{style:{fill:"none",stroke:"#E5424A",strokeWidth:"3",strokeMiterlimit:"10"},points:"-1265.8,831.4 -1252.3,819.2 -1265.8,807 \r\n\t-1252.3,819.2 "}))}var l=n(1);r.displayName="RightArrow",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"-1266.9 805.9 16.8 26.6",style:{enableBackground:"new -1266.9 805.9 16.8 26.6"},xmlSpace:"preserve"},e.exports=r,r.default=r},73:function(e,t,n){e.exports=n.p+"static/test.068b46a9.png"},241:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),o=r(l),i=n(50),a=r(i);t.default=function(){return o.default.createElement(a.default,{lang:"fr"})},e.exports=t.default},50:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=n(1),c=r(a),s=n(5);n(63);var u=n(48),d=r(u),f=n(49),m=r(f),p=n(44),y=r(p),k=n(43),h=r(k),_=n(45),E=r(_),M=(n(17),function(e){function t(n){return l(this,t),o(this,e.call(this,n))}return i(t,e),t.prototype.componentDidMount=function(){},t.prototype.componentDidUpdate=function(){},t.prototype.componentWillMount=function(){var e=this.props,t=e.lang,n=e.setLang;void 0===t||"fr"!==t&&"es"!==t||n(t)},t.prototype.render=function(){return c.default.createElement("div",{id:"app-container"},c.default.createElement(y.default,null),c.default.createElement(d.default,null),c.default.createElement(h.default,null),c.default.createElement(m.default,null),c.default.createElement(E.default,null))},t}(c.default.Component)),v=function(e){return{}},D=function(e){return{setLang:function(t){return e({type:"SET_LANG",lang:t})}}};t.default=(0,s.connect)(v,D)(M),e.exports=t.default},63:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-fr-js-a4dc873c8e02427d5acb.js.map