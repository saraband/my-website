webpackJsonp([20914233979579],{295:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(404),s=r(i),p=n(603),f=r(p),d=n(587),m=r(d),E=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{id:s.default.container,style:{backgroundImage:"url("+f.default+")"}},u.default.createElement("div",{id:s.default.loginBar},u.default.createElement("a",null,"Login"),u.default.createElement("a",null,"Sign up")),u.default.createElement(m.default,{id:s.default.logoSvg}))},t}(u.default.Component);t.default=E,e.exports=t.default},404:function(e,t){e.exports={container:"src-components-apps-delivery-app----Banner-module---container---3JCl0",loginBar:"src-components-apps-delivery-app----Banner-module---loginBar---3OGDQ",logoSvg:"src-components-apps-delivery-app----Banner-module---logoSvg---1kT_O"}},296:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(2),s=n(405),p=r(s),f=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.items,n=e.total;return u.default.createElement("div",{id:p.default.container},u.default.createElement("ul",null,t.map(function(e,t){return u.default.createElement("li",{key:t},u.default.createElement("span",null,e.name),u.default.createElement("span",null,"x ",e.quantity))})),u.default.createElement("h3",null,"Total: ",n,"$"),u.default.createElement("button",{disabled:!t.length},"Pay now"))},t}(u.default.Component),d=function(e,t){var n=e.find(function(e){return e.id===t});return void 0===n||void 0===n.items?[]:[].concat(n.items)},m=function(e,t){for(var n=d(e,t),r=0,a=n,o=Array.isArray(a),l=0,a=o?a:a[Symbol.iterator]();;){var c;if(o){if(l>=a.length)break;c=a[l++]}else{if(l=a.next(),l.done)break;c=l.value}var u=c;r+=u.quantity*u.price}return r},E=function(e){return{items:d(e.deliveryApp.baskets,e.deliveryApp.restaurantData.id),total:m(e.deliveryApp.baskets,e.deliveryApp.restaurantData.id)}};t.default=(0,i.connect)(E)(f),e.exports=t.default},405:function(e,t){e.exports={container:"src-components-apps-delivery-app----BasketComponent-module---container---3QB04"}},297:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(2),s=n(406),p=(r(s),n(300)),f=r(p),d=n(204),m=r(d),E=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.render=function(){var e=this.props.currentPage;switch(e){case"restaurants_list_page":return u.default.createElement(f.default,null);case"restaurant_data_page":return u.default.createElement(m.default,null);default:return u.default.createElement("p",null,"Error")}},t}(u.default.Component),h=function(e){return{currentPage:e.deliveryApp.currentPage}},y=function(e){return{}};t.default=(0,i.connect)(h,y)(E),e.exports=t.default},406:function(e,t){e.exports={container:"src-components-apps-delivery-app----BodyComponent-module---container---2MnwQ"}},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),s=n(407),p=r(s),f=n(586),d=r(f),m=(n(2),function(e){var t=e.text,n=e.onClick,r=e.renderIcon,a=e.renderDropDown;return i.default.createElement("p",{className:p.default.dropdownItem,onClick:n},void 0!==r?r():null,i.default.createElement("span",{className:p.default.dropdownText},t),a?i.default.createElement(d.default,{className:p.default.dropdownSvg}):null)}),E=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.toggle=function(){return r.setState({toggle:!r.state.toggle})},r.hide=function(){return r.setState({toggle:!1})},r.handleSelect=function(e){var t=r.props,n=(t.onChange,t.name);r.setState({selected:e.value}),r.toggle(),r.props.onChange({target:{name:n,value:e.value}})},r.renderElements=function(){if(r.state.toggle)return r.elements.map(function(e,t){return i.default.createElement(m,c({},e,{onClick:function(){return r.handleSelect(e)},key:t}))})},r.elements=n.children.map(function(e,t){return{value:e.props.value,text:e.props.children}}),r.state={toggle:!1,selected:n.value},r}return l(t,e),t.prototype.componentDidUpdate=function(e){var t=this.props.value;e.value!==t&&this.setState({selected:t})},t.prototype.render=function(){var e=this,t=this.elements.find(function(t){return t.value===e.state.selected}),n=(t.value,t.text),r=this.state.toggle,a=this.props.renderIcon;return i.default.createElement("div",{tabIndex:"0",className:p.default.container,style:this.props.style,onBlur:this.hide},i.default.createElement(m,{text:n,onClick:this.toggle,renderIcon:a,renderDropDown:!0}),r?i.default.createElement("div",{className:p.default.dropdown},this.renderElements()):null)},t}(i.default.Component);t.default=E,e.exports=t.default},407:function(e,t){e.exports={container:"src-components-apps-delivery-app----DeliSelect-module---container---22m_v",dropdownItem:"src-components-apps-delivery-app----DeliSelect-module---dropdownItem---UIo8_",dropdownText:"src-components-apps-delivery-app----DeliSelect-module---dropdownText---3LlHa",dropdownSvg:"src-components-apps-delivery-app----DeliSelect-module---dropdownSvg---2CUX4",dropdown:"src-components-apps-delivery-app----DeliSelect-module---dropdown---2lNqU","flex-row":"src-components-apps-delivery-app----DeliSelect-module---flex-row---TdGrp",rotation:"src-components-apps-delivery-app----DeliSelect-module---rotation---3pwBG",fadeIn:"src-components-apps-delivery-app----DeliSelect-module---fadeIn---3wqnQ",fadeOut:"src-components-apps-delivery-app----DeliSelect-module---fadeOut---iENXn",shimmer:"src-components-apps-delivery-app----DeliSelect-module---shimmer---230Dr"}},204:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(2),s=n(408),p=r(s),f=n(32),d=n(296),m=r(d),E=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.renderMenus=function(){var e=r.props.restaurantData,t=e.id,n=e.menus,a=r.props,o=a.addToBasket,l=a.removeFromBasket;return n.map(function(e,n){return u.default.createElement("div",{className:p.default.menu,key:n},u.default.createElement("h2",null,e.name),u.default.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},e.items.map(function(e,n){return u.default.createElement("div",{className:p.default.item,key:n},u.default.createElement("div",{className:p.default.itemDesc},u.default.createElement("p",null,u.default.createElement("strong",null,e.name)," : ",e.price,"$"),u.default.createElement("p",null,e.ingredients.map(function(e){return e+", "}))),u.default.createElement("div",{className:p.default.itemOperations},u.default.createElement("a",{onClick:function(){return l(t,e.id)}},"-"),u.default.createElement("a",{onClick:function(){return o(t,e)}},"+")))})))})},r}return l(t,e),t.prototype.render=function(){var e=this.props.restaurantData,t=e.name,n=(e.priceRange,e.description),r=(e.rating,e.menus,e.pictureUrl),a=this.props.backToResults;return u.default.createElement("div",{id:p.default.container},u.default.createElement("div",{id:p.default.body},u.default.createElement("h4",null,u.default.createElement("a",{onClick:a},"<<"," Back to results")),u.default.createElement("br",null),u.default.createElement("div",{id:p.default.imgContainer},u.default.createElement("img",{src:r})),u.default.createElement("h1",null,t),u.default.createElement("p",null,n),u.default.createElement("br",null),u.default.createElement("br",null),u.default.createElement("br",null),this.renderMenus()),u.default.createElement(m.default,null))},t}(u.default.Component),h=function(e){return{restaurantData:e.deliveryApp.restaurantData}},y=function(e){return{backToResults:function(){return e({type:f.CHANGE_PAGE,page:"restaurants_list_page"})},addToBasket:function(t,n){return e((0,f.addToBasket)(t,n))},removeFromBasket:function(t,n){return e((0,f.removeFromBasket)(t,n))}}};t.default=(0,i.connect)(h,y)(E),e.exports=t.default},408:function(e,t){e.exports={container:"src-components-apps-delivery-app----RestaurantComponent-module---container---1IHV1",body:"src-components-apps-delivery-app----RestaurantComponent-module---body---4LrUb",menu:"src-components-apps-delivery-app----RestaurantComponent-module---menu---FfMXm",item:"src-components-apps-delivery-app----RestaurantComponent-module---item---dz66T",itemOperations:"src-components-apps-delivery-app----RestaurantComponent-module---itemOperations---2JsXZ",imgContainer:"src-components-apps-delivery-app----RestaurantComponent-module---imgContainer---ptxAf"}},299:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(2),s=n(409),p=r(s),f=n(32),d=function(e){var t=e/100;return"rgb("+Math.floor(255*(1-t))+", "+Math.floor(255*t)+", 125)"},m=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.name,r=(t.priceRange,t.description,t.rating),a=t.pictureUrl,o=t.showRestaurantData;return u.default.createElement("div",{id:p.default.container,onClick:function(){return o(e.props)}},u.default.createElement("div",{id:p.default.imgContainer},u.default.createElement("img",{src:a})),u.default.createElement("h3",null,u.default.createElement("span",{style:{color:d(r)}},r,"%")," - ",n))},t}(u.default.Component),E=function(e){return{}},h=function(e){return{showRestaurantData:function(t){return e((0,f.showRestaurantData)(t))}}};t.default=(0,i.connect)(E,h)(m),e.exports=t.default},409:function(e,t){e.exports={container:"src-components-apps-delivery-app----RestaurantItem-module---container---32qZs",imgContainer:"src-components-apps-delivery-app----RestaurantItem-module---imgContainer---3s8sr"}},300:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),i=r(u),s=n(2),p=n(410),f=r(p),d=n(32),m=n(299),E=r(m),h=n(204),y=(r(h),n(301)),_=r(y),v=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.componentWillMount=function(){this.props.requestRestaurantsList()},t.prototype.render=function(){var e=this.props,t=e.restaurantsList,n=e.hideCurrentPage;return i.default.createElement("div",{id:f.default.container,className:n?f.default.fadeOut:null},i.default.createElement(_.default,null),t.map(function(e,t){return i.default.createElement(E.default,c({key:t},e))}))},t}(i.default.Component),g=function(e){return{restaurantsList:e.deliveryApp.restaurantsList,hideCurrentPage:e.deliveryApp.hideCurrentPage}},T=function(e){return{requestRestaurantsList:function(){return e((0,d.requestRestaurantsList)())}}};t.default=(0,s.connect)(g,T)(v),e.exports=t.default},410:function(e,t){e.exports={container:"src-components-apps-delivery-app----RestaurantList-module---container---2NteR",fadeOut:"src-components-apps-delivery-app----RestaurantList-module---fadeOut---2PK1g",rotation:"src-components-apps-delivery-app----RestaurantList-module---rotation---m9lAH",fadeIn:"src-components-apps-delivery-app----RestaurantList-module---fadeIn---3Z-M1",shimmer:"src-components-apps-delivery-app----RestaurantList-module---shimmer---1SBHP"}},301:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(2),s=n(411),p=r(s),f=n(298),d=r(f),m=n(32),E=function(e){function t(n){a(this,t);var r=o(this,e.call(this,n));return r.requestListTest=function(){return console.log("Requesting data...")},r.handleChange=function(e){(0,m.changeSearchData)(e.target.name,e.target.value),clearTimeout(r.timeout),r.timeout=setTimeout(r.requestListTest,1e3),console.log("changed data")},r}return l(t,e),t.prototype.render=function(){var e=this.props.searchData,t=e.search,n=e.location;this.props.changeSearchData;return u.default.createElement("div",{id:p.default.container},u.default.createElement("form",{onSubmit:function(e){return e.preventDefault()}},u.default.createElement("input",{type:"search",placeholder:"Search",value:t,name:"search",onChange:this.handleChange}),u.default.createElement("input",{type:"search",placeholder:"Place, City, ZIP code",value:n,onChange:this.handleChange}),u.default.createElement(d.default,{onChange:function(){}},u.default.createElement("p",null,"Chinese"),u.default.createElement("p",null,"Japanese"),u.default.createElement("p",null,"Spanish"),u.default.createElement("p",null,"French")),u.default.createElement(d.default,{onChange:function(){}},u.default.createElement("option",null,"Cheap"),u.default.createElement("option",null,"Moderate"),u.default.createElement("option",null,"Expensive"))))},t}(u.default.Component),h=function(e){return{searchData:e.deliveryApp.searchData}},y=function(e){return{changeSearchData:function(t,n){return e((0,m.changeSearchData)(t,n))}}};t.default=(0,i.connect)(h,y)(E),e.exports=t.default},411:function(e,t){e.exports={container:"src-components-apps-delivery-app----SearchComponent-module---container---2Bjfc"}},586:function(e,t,n){function r(e){return a.createElement("svg",e,a.createElement("polyline",{id:"XMLID_2_",style:{fill:"none",stroke:"#007BA7",strokeWidth:"20",strokeMiterlimit:"10"},points:"7.7,6.4 48.6,55.7 \r\n\t88.7,6.4 47.8,55.7 "}))}var a=n(1);r.displayName="ArrowDown",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 96.5 71.5",style:{enableBackground:"new 0 0 96.5 71.5"},xmlSpace:"preserve"},e.exports=r,r.default=r},603:function(e,t,n){e.exports=n.p+"static/leaves-pattern.ca7697a7.png"},587:function(e,t,n){function r(e){return a.createElement("svg",e,a.createElement("g",{id:"XMLID_2_"},[a.createElement("g",{id:"XMLID_7_",key:0},[a.createElement("path",{id:"XMLID_8_",style:{fill:"#FFFFFF"},d:"M24.8,0c-1.5,0-2.5,1.2-2.5,2.7v22.4v9.7v1.1c-1,1.2-1.7,2.2-3,2.2\r\n\t\t\tc-1.5,0-3-1.2-3-2.7V20.6V2.7c0-1.5-1-2.7-2.5-2.7s-2.5,1.2-2.5,2.7v17.9v14.8c0,1.5-1.5,2.7-3,2.7c-1.5,0-3-1.2-3-2.7V3.2h0.3\r\n\t\t\tc0,0,0-0.3,0-0.3c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.3-2.7,2.8c0,0,0,0.3,0,0.3h0.1v42H0.2c0,0-0.2,0.1-0.2,0.2\r\n\t\t\tC0,56,3.3,65.1,8.3,68.9v13.3h11V68.9c5-3.7,8.3-12.9,8.3-23.6c0,0-0.2-0.2-0.2-0.2h-0.1V2.7C27.3,1.2,26.3,0,24.8,0z",key:0}),a.createElement("polygon",{id:"XMLID_9_",style:{fill:"#FFFFFF"},points:"4.3,92.2 5.3,92.2 5.3,141.2 22.3,141.2 22.3,92.2 23.3,92.2 23.3,82.2 \r\n\t\t\t4.3,82.2 \t\t",key:1}),a.createElement("path",{id:"XMLID_10_",style:{fill:"#FFFFFF"},d:"M65.3,101.2V43.7V0c-9,2.8-16.2,11.6-16.2,22c0,0,0.1,0.2,0.1,0.2h0.1v79h-2v10h2\r\n\t\t\tv30h16v-30h2v-10H65.3z",key:2})]),a.createElement("g",{id:"XMLID_18_",key:1},[a.createElement("path",{id:"XMLID_19_",style:{fill:"#FFFFFF"},d:"M138.3,122.2l-0.1-6.2c-3.1,5-7.8,7.6-14.2,7.6c-3.2,0-6.2-0.6-8.9-1.9\r\n\t\t\tc-2.7-1.2-5-3-6.9-5.4c-1.9-2.3-3.5-5.2-4.6-8.6c-1.1-3.4-1.7-7.2-1.7-11.5c0-3.9,0.5-7.4,1.4-10.6c0.9-3.2,2.3-6,4.1-8.3\r\n\t\t\tc1.8-2.3,4-4.2,6.6-5.4c2.6-1.3,5.5-1.9,8.8-1.9c6.3,0,11.3,2.7,15.1,8V52.6h13.2v69.6H138.3z M127.1,112.5c3.2,0,6-1.3,8.1-4\r\n\t\t\tc2.2-2.7,3.3-6.2,3.3-10.6c0-11-3.8-16.6-11.3-16.6c-7.7,0-11.6,5.2-11.6,15.7c0,4.6,1.1,8.3,3.2,11.1\r\n\t\t\tC121,111.1,123.7,112.5,127.1,112.5z",key:0}),a.createElement("path",{id:"XMLID_22_",style:{fill:"#FFFFFF"},d:"M168.9,100.2c0.2,3.9,1.3,6.9,3.4,9.2c2,2.3,4.7,3.4,8,3.4c2.2,0,4.2-0.5,5.8-1.5\r\n\t\t\tc1.7-1,2.8-2.4,3.3-4.2h13.9c-1.6,5.2-4.3,9.3-8.3,12.1c-3.9,2.8-8.6,4.2-14.1,4.2c-17,0-25.5-9.2-25.5-27.7\r\n\t\t\tc0-3.9,0.6-7.5,1.7-10.7c1.1-3.2,2.7-5.9,4.8-8.2c2.1-2.3,4.7-4,7.7-5.2c3-1.2,6.5-1.8,10.5-1.8c7.9,0,13.8,2.5,17.9,7.6\r\n\t\t\tc4,5,6.1,12.6,6.1,22.8H168.9z M190.2,91.7c-0.1-1.9-0.4-3.5-1-4.9c-0.6-1.4-1.4-2.6-2.3-3.5c-1-0.9-2.1-1.6-3.3-2.1\r\n\t\t\tc-1.2-0.4-2.5-0.7-3.8-0.7c-2.7,0-5,1-7,2.9c-2,2-3.1,4.7-3.4,8.2H190.2z",key:1}),a.createElement("path",{id:"XMLID_25_",style:{fill:"#FFFFFF"},d:"M208.2,122.2V52.6h13.5v69.6H208.2z",key:2}),a.createElement("path",{id:"XMLID_27_",style:{fill:"#FFFFFF"},d:"M227.2,65.1V52.6h13.5v12.5H227.2z M227.2,122.2V71.2h13.5v50.9H227.2z",key:3})]),a.createElement("g",{id:"XMLID_4_",key:2},[a.createElement("path",{id:"XMLID_5_",style:{fill:"#FFFFFF"},d:"M277.5,123.2c-7.9,0-14-2.5-18.4-7.4c-4.4-5-6.7-11.9-6.7-20.7\r\n\t\t\tc0-9.1,2.3-16.2,6.9-21.3c4.6-5.1,10.9-7.6,19-7.6c4.8,0,9.3,0.8,13.6,2.5l-1.4,4.4c-4.8-1.6-8.9-2.4-12.4-2.4\r\n\t\t\tc-6.7,0-11.8,2.1-15.3,6.2c-3.5,4.2-5.2,10.2-5.2,18c0,7.4,1.7,13.2,5.2,17.4c3.5,4.2,8.3,6.3,14.6,6.3c5,0,9.6-0.9,13.9-2.7v4.6\r\n\t\t\tC287.7,122.3,283.1,123.2,277.5,123.2z",key:0}),a.createElement("path",{id:"XMLID_11_",style:{fill:"#FFFFFF"},d:"M304,52c0-3.2,1.1-4.9,3.2-4.9c1,0,1.9,0.4,2.5,1.3c0.6,0.8,0.9,2,0.9,3.6\r\n\t\t\tc0,1.5-0.3,2.7-0.9,3.6c-0.6,0.9-1.4,1.3-2.5,1.3C305,56.9,304,55.2,304,52z M309.7,122.2h-5V67.2h5V122.2z",key:1}),a.createElement("path",{id:"XMLID_14_",style:{fill:"#FFFFFF"},d:"M332.4,67.2v35.6c0,5.5,1.2,9.5,3.5,12.1c2.3,2.5,5.9,3.8,10.8,3.8\r\n\t\t\tc6.5,0,11.3-1.7,14.4-5s4.6-8.7,4.6-16.1V67.2h5v54.9h-4.2l-0.9-7.6h-0.3c-3.6,5.7-9.9,8.6-19.1,8.6c-12.5,0-18.7-6.7-18.7-20.1\r\n\t\t\tV67.2H332.4z",key:2}),a.createElement("path",{id:"XMLID_16_",style:{fill:"#FFFFFF"},d:"M423.2,107.9c0,4.9-1.9,8.7-5.6,11.3c-3.7,2.6-9,4-15.9,4c-7.3,0-13.2-1.1-17.5-3.4\r\n\t\t\tv-5.4c5.5,2.8,11.4,4.1,17.5,4.1c5.4,0,9.5-0.9,12.4-2.7c2.8-1.8,4.2-4.2,4.2-7.2c0-2.8-1.1-5.1-3.4-7c-2.2-1.9-5.9-3.7-11-5.6\r\n\t\t\tc-5.5-2-9.3-3.7-11.6-5.1c-2.2-1.4-3.9-3-5-4.9c-1.1-1.8-1.7-4-1.7-6.6c0-4.1,1.7-7.4,5.2-9.8c3.5-2.4,8.3-3.6,14.5-3.6\r\n\t\t\tc5.9,0,11.6,1.1,16.9,3.3l-1.9,4.5c-5.4-2.2-10.4-3.3-15-3.3c-4.5,0-8,0.7-10.7,2.2c-2.6,1.5-3.9,3.5-3.9,6.2c0,2.9,1,5.2,3.1,6.9\r\n\t\t\tc2,1.7,6,3.6,12,5.8c5,1.8,8.6,3.4,10.8,4.8c2.3,1.4,3.9,3.1,5.1,4.9C422.6,103.3,423.2,105.4,423.2,107.9z",key:3})])]))}var a=n(1);r.displayName="Logo",r.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 423.2 141.2",style:{enableBackground:"new 0 0 423.2 141.2"},xmlSpace:"preserve"},e.exports=r,r.default=r},311:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),u=r(c),i=n(424),s=r(i),p=n(295),f=r(p),d=n(297),m=r(d),E=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype.render=function(){return u.default.createElement("div",{id:s.default.container},u.default.createElement(f.default,null),u.default.createElement(m.default,null))},t}(u.default.Component);t.default=E,e.exports=t.default},424:function(e,t){e.exports={container:"src-pages-delicius----index-module---container---3w05k"}},107:function(e,t,n){"use strict";t.__esModule=!0;var r=n(19),a=[n(158),n(159),n(160),n(161)],o=["The Friendly Clam","The Champagne Ranch","The Cool Beehive","The Solar Bistrot","The Square Clove","Pavilion","Jewel","Roast","The Maple","Prospects"],l=["Tomato","Garlic","Mushrooms","Pork","Beef","Chicken","Cream","Onions","Rice","Potatoes"],c=["Cheap","Moderate","Expensive"],u=0,i="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat massa convallis rhoncus fringilla. Morbi ornare odio lectus, in placerat nisi efficitur non.",s=function(e){for(var t=[],n=0;n<e;++n)t.push((0,r.getRandomArrayElement)(l));return t},p=function(e){for(var t=[],n=0;n<e;++n)t.push({id:u++,name:(0,r.getRandomArrayElement)(o),price:(0,r.getRandomInt)(5,25),ingredients:s((0,r.getRandomInt)(2,5))});return t},f=function(e){for(var t=[],n=0;n<e;++n)t.push({id:u++,name:(0,r.getRandomArrayElement)(o),items:p((0,r.getRandomInt)(2,10))});return t},d=function(e){for(var t=[],n=0;n<e;++n)t.push({id:u++,name:(0,r.getRandomArrayElement)(o),priceRange:(0,r.getRandomArrayElement)(c),description:i,rating:(0,r.getRandomInt)(0,100),menus:f((0,r.getRandomInt)(1,3)),pictureUrl:(0,r.getRandomArrayElement)(a)});return t};t.default={restaurants:d(20)},e.exports=t.default},158:function(e,t,n){e.exports=n.p+"static/0.f6fc8365.jpg"},159:function(e,t,n){e.exports=n.p+"static/1.a1406365.jpg"},160:function(e,t,n){e.exports=n.p+"static/2.9517c61c.jpg"},161:function(e,t,n){e.exports=n.p+"static/3.71b39428.jpg"},32:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.changeSearchData=t.removeFromBasket=t.addToBasket=t.showRestaurantData=t.requestRestaurantsList=t.CHANGE_SEARCH_DATA=t.REMOVE_FROM_BASKET=t.ADD_TO_BASKET=t.HIDE_CURRENT_PAGE=t.CHANGE_PAGE=t.REQUEST_RESTAURANT_DATA_SUCCESS=t.REQUEST_RESTAURANT_DATA_FAILED=t.REQUEST_RESTAURANT_DATA_PENDING=t.REQUEST_RESTAURANTS_LIST_SUCCESS=t.REQUEST_RESTAURANTS_LIST_FAILED=t.REQUEST_RESTAURANTS_LIST_PENDING=void 0;var a=n(107),o=r(a),l=t.REQUEST_RESTAURANTS_LIST_PENDING="REQUEST_RESTAURANTS_LIST_PENDING",c=(t.REQUEST_RESTAURANTS_LIST_FAILED="REQUEST_RESTAURANTS_LIST_FAILED",t.REQUEST_RESTAURANTS_LIST_SUCCESS="REQUEST_RESTAURANTS_LIST_SUCCESS"),u=t.REQUEST_RESTAURANT_DATA_PENDING="REQUEST_RESTAURANT_DATA_PENDING",i=(t.REQUEST_RESTAURANT_DATA_FAILED="REQUEST_RESTAURANT_DATA_FAILED",t.REQUEST_RESTAURANT_DATA_SUCCESS="REQUEST_RESTAURANT_DATA_SUCCESS"),s=t.CHANGE_PAGE="CHANGE_PAGE",p=t.HIDE_CURRENT_PAGE="HIDE_CURRENT_PAGE",f=t.ADD_TO_BASKET="ADD_TO_BASKET",d=t.REMOVE_FROM_BASKET="REMOVE_FROM_BASKET",m=t.CHANGE_SEARCH_DATA="CHANGE_SEARCH_DATA";t.requestRestaurantsList=function(){return function(e){e({type:l});var t=o.default.restaurants;e({type:c,list:t})}},t.showRestaurantData=function(e){return function(t){t({type:u}),setTimeout(function(){t({type:i,data:e}),t({type:p}),setTimeout(function(){t({type:s,page:"restaurant_data_page"})},0)},0)}},t.addToBasket=function(e,t){return{type:f,basketId:e,itemData:t}},t.removeFromBasket=function(e,t){return{type:d,basketId:e,itemId:t}},t.changeSearchData=function(e,t){return{type:m,key:e,value:t}}}});
//# sourceMappingURL=component---src-pages-delicius-index-js-d1e535a63e63cb9cecfa.js.map