webpackJsonp([0xf2a3a8ae0c0],{287:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=n(395),l=o(u),p=n(579),f=o(p),d=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return c(t,e),t.prototype.render=function(){return i.default.createElement("div",{id:l.default.container},i.default.createElement(f.default,{id:l.default.logo}),i.default.createElement("p",null,"2 Unread messages"))},t}(i.default.Component);t.default=d,e.exports=t.default},395:function(e,t){e.exports={container:"src-components-apps-chat-app----BannerComponent-module---container---3PI64",logo:"src-components-apps-chat-app----BannerComponent-module---logo---32DvC",rotation:"src-components-apps-chat-app----BannerComponent-module---rotation---1wpcu",shimmer:"src-components-apps-chat-app----BannerComponent-module---shimmer---3keQh",fadeIn:"src-components-apps-chat-app----BannerComponent-module---fadeIn---3zcFM",fadeLeft:"src-components-apps-chat-app----BannerComponent-module---fadeLeft---3fPH8"}},288:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),a=o(r),c=n(3),s=n(24),i=n(396),u=o(i),l=function(e){var t=e.showCreateRoomPanel;return a.default.createElement("div",{id:u.default.container},a.default.createElement("p",{onClick:t},"Create room"))},p=function(e){return{}},f=function(e){return{showCreateRoomPanel:function(){return e({type:s.SHOW_CREATE_ROOM_PANEL})}}};t.default=(0,c.connect)(p,f)(l),e.exports=t.default},396:function(e,t){e.exports={container:"src-components-apps-chat-app----CreateRoomButton-module---container---hqxXs"}},289:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=n(3),l=n(397),p=o(l),f=n(595),d=o(f),m=n(24),E=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.handleSubmit=function(e){e.preventDefault();var t=o.props,n=t.createRoom,r=t.currentUser,a=t.hideCreateRoomPanel,c=o.state,s=c.title,i=c.message,u=c.participants;s.length&&i.length&&u.length&&(n(r,s,i,u),a())},o.handleChange=function(e){var t;o.setState((t={},t[e.target.name]=e.target.value,t))},o.addParticipant=function(e){o.setState({participants:[].concat(o.state.participants,[e])})},o.renderUsersListLeft=function(){var e=o.state.participants,t=o.props.usersList;return t.filter(function(t){return!e.includes(t)}).map(function(e,t){return i.default.createElement("strong",{key:t,onClick:function(){return o.addParticipant(e)}},e.name,", ")})},o.state={title:"",message:"",participants:[]},o}return c(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.requestUsersList,n=e.currentUser;t(n.id)},t.prototype.render=function(){var e=this.props,t=e.hideCreateRoomPanel,n=(e.usersList,this.state),o=n.title,r=n.message,a=n.participants;return i.default.createElement("div",{id:p.default.container},i.default.createElement("div",{id:p.default.panel},i.default.createElement("img",{src:d.default,onClick:t}),i.default.createElement("form",{onSubmit:this.handleSubmit},i.default.createElement("input",{type:"text",placeholder:"Title",name:"title",value:o,onChange:this.handleChange}),i.default.createElement("br",null),i.default.createElement("p",null,"Participants: ",a.map(function(e){return e.name+", "})),i.default.createElement("input",{type:"text",placeholder:"Message",name:"message",value:r,onChange:this.handleChange}),i.default.createElement("br",null),i.default.createElement("button",null,"Create"),i.default.createElement("br",null),i.default.createElement("p",null,this.renderUsersListLeft()))))},t}(i.default.Component),_=function(e){return{currentUser:e.chatApp.currentUser,usersList:e.chatApp.usersList}},h=function(e){return{hideCreateRoomPanel:function(){return e({type:m.HIDE_CREATE_ROOM_PANEL})},requestUsersList:function(t){return e((0,m.requestUsersList)(t))},createRoom:function(t,n,o,r){return e((0,m.createRoom)(t,n,o,r))}}};t.default=(0,u.connect)(_,h)(E),e.exports=t.default},397:function(e,t){e.exports={container:"src-components-apps-chat-app----CreateRoomPanel-module---container---2iOIl",panel:"src-components-apps-chat-app----CreateRoomPanel-module---panel---1O4t7"}},290:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=n(3),l=n(398),p=o(l),f=n(24),d=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.handleChange=function(e){var t;o.setState((t={},t[e.target.name]=e.target.value,t))},o.handleKeyPress=function(e){var t=e.which||e.keyCode;13==t&&o.handleSubmit()},o.handleSubmit=function(){var e=o.props,t=e.currentRoom,n=e.currentUser,r=e.sendMessage,a=o.state.message;void 0!==n&&void 0!==t&&a.length&&(r(n,t.id,a),o.setState({message:""}))},o.state={message:""},o}return c(t,e),t.prototype.componentDidMount=function(){},t.prototype.render=function(){var e=this.state.message,t=this.props.currentRoom;return i.default.createElement("div",{id:p.default.container},i.default.createElement("textarea",{type:"text",value:e,disabled:void 0===t.id,name:"message",ref:this.inputRef,onChange:this.handleChange,onKeyPress:this.handleKeyPress,placeholder:"Type your message here"}))},t}(i.default.PureComponent),m=function(e){return{currentUser:e.chatApp.currentUser,currentRoom:e.chatApp.currentRoom}},E=function(e){return{sendMessage:function(t,n,o){return e((0,f.sendMessage)(t,n,o))}}};t.default=(0,u.connect)(m,E)(d),e.exports=t.default},398:function(e,t){e.exports={container:"src-components-apps-chat-app----InputComponent-module---container---3FMjx"}},291:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=n(3),l=n(580),p=o(l),f=n(399),d=o(f),m=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return c(t,e),t.prototype.render=function(){var e=this.props.currentRoom,t=e.title,n=(e.seenBy,e.messages);return void 0===t?i.default.createElement("p",null,"No current room"):i.default.createElement("div",{id:d.default.container},i.default.createElement("p",null,i.default.createElement(p.default,{id:d.default.seen})),n.map(function(e,t){return i.default.createElement("p",{key:t},e.user.name," said: ",e.content)}))},t}(i.default.PureComponent),E=function(e){return{currentRoom:e.chatApp.currentRoom}},_=function(e){return{}};t.default=(0,u.connect)(E,_)(m),e.exports=t.default},399:function(e,t){e.exports={container:"src-components-apps-chat-app----RoomComponent-module---container---2EPcO",seen:"src-components-apps-chat-app----RoomComponent-module---seen---2ZAbR"}},292:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(1),u=o(i),l=n(3),p=n(400),f=o(p),d=n(24),m=n(19),E=n(578),_=o(E),h=function(e){var t=e.id,n=e.title,o=e.lastMessage,r=(e.messages,e.participants,e.seenBy,e.requestRoomData);return u.default.createElement("div",{className:f.default.item,onClick:function(){return r(t)}},u.default.createElement("img",{src:o.user.picture}),u.default.createElement("div",null,u.default.createElement("h4",null,u.default.createElement("strong",null,n)),u.default.createElement("p",null,o.content),u.default.createElement("p",{className:f.default.smallDate},(0,m.timeSince)(o.date))))},S=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return c(t,e),t.prototype.componentDidMount=function(){this.props.requestRoomsList(0)},t.prototype.render=function(){var e=this.props,t=e.roomsList,n=e.requestRoomData,o=e.isRequestingRoomsList;return o?u.default.createElement("div",{id:"rooms-list-container"},u.default.createElement(_.default,{className:"rotating"})):t.length?u.default.createElement("div",{id:f.default.container},t.map(function(e,t){return u.default.createElement(h,s({requestRoomData:n},e,{key:t}))})):u.default.createElement("div",{id:"rooms-list-container"},"Pas de rooms")},t}(u.default.PureComponent),R=function(e){return{roomsList:e.chatApp.roomsList,isRequestingRoomsList:e.chatApp.isRequestingRoomsList}},y=function(e){return{requestRoomData:function(t){return e((0,d.requestRoomData)(t))},requestRoomsList:function(t){return e((0,d.requestRoomsList)(t))}}};t.default=(0,l.connect)(R,y)(S),e.exports=t.default},400:function(e,t){e.exports={container:"src-components-apps-chat-app----RoomsListComponent-module---container---3rJlY",item:"src-components-apps-chat-app----RoomsListComponent-module---item---2AHes",smallDate:"src-components-apps-chat-app----RoomsListComponent-module---smallDate---1YTBz","rooms-list-item":"src-components-apps-chat-app----RoomsListComponent-module---rooms-list-item---1w4og",unread:"src-components-apps-chat-app----RoomsListComponent-module---unread---3rrZ2",fadeIn:"src-components-apps-chat-app----RoomsListComponent-module---fadeIn---2f_K6",rotation:"src-components-apps-chat-app----RoomsListComponent-module---rotation---2YPWD",shimmer:"src-components-apps-chat-app----RoomsListComponent-module---shimmer---36znv",fadeLeft:"src-components-apps-chat-app----RoomsListComponent-module---fadeLeft---Z44hx"}},293:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=(n(3),n(401)),l=o(u),p=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return c(t,e),t.prototype.render=function(){return i.default.createElement("div",{id:l.default.container},i.default.createElement("input",{type:"text",placeholder:"Search conversations.."}))},t}(i.default.PureComponent);t.default=p,e.exports=t.default},401:function(e,t){e.exports={container:"src-components-apps-chat-app----SearchRoomsListComponent-module---container---20CWc",rotating:"src-components-apps-chat-app----SearchRoomsListComponent-module---rotating---2CveG",rotation:"src-components-apps-chat-app----SearchRoomsListComponent-module---rotation---1zsQe",shimmer:"src-components-apps-chat-app----SearchRoomsListComponent-module---shimmer---1t8u2",fadeIn:"src-components-apps-chat-app----SearchRoomsListComponent-module---fadeIn---3K4D_",fadeLeft:"src-components-apps-chat-app----SearchRoomsListComponent-module---fadeLeft---1p7_H"}},595:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA21JREFUeJzt3LmOXEUYR/HvIJFYSAz22HiBESIx4A2zme0BeAIeiYgHICFGiDcgcUDEZoPZbZCKhH0nIUEmwBczdvUs3fd23ao6P+nm1f2d+B8hSZIkSZIkSZIkSZIkSZIkSZIkSdJCW8DFiHiw9ENm6nngzYjYKP2QKWwBXwHXga/DCG71HPDnjf/nUkRsln7QqIA3bvy460Zwm2eBP275f14t/aixbQDvGcFtcsd/KyLuKv2wKdwDvG8E/3mmp+MPjOBfTwO/93b8wUHgUscRdH38Qa8RXPD4N/UWwVPAbx5/u4PA5Q4i8Pg7OAR80HAET3r83bUawRPArx5/bw4BHzYUgcdfwmYjETzu8Ze3CVypOILHgF88/moOAx9VGIHHH1FtEZz3+OOrJYLzwM8efxqHgY9nHMGjHn96R2YawTngJ4+/HkeAT2YUgccv4F7g0xlEcNbjl1M6grPAjx6/rKPAZwUiOOPx52PdEZwGfvD483IU+HwNEXj8GZs6glMef/6OTRTBKeB7j1+HY8AXI0bwiMevz/GRIngY+M7j1+k4cHWFCDx+A04A15aI4CHgW4/fhv1G4PEbdB/w5R4iOOnx27VbBCeBbzx+2xZF8ILH78f93JypWfR5/MbtFIHH78SLmeP/HRGnSz9M08vNsgxfiogHCr9PE8otc/xlBH1YNMtyAnjbCNq22yzL3cA7RtCmC+xtnGEDeNcI2rLfWRYjaMiymzy5RdMURlCVVTd5cmOWKYygCmPNshhBhcbe5MntGKYwglmaapPHCCow9SxLbswyhRHMwro2eXI7himMoKh1DzIZwYyUGmTKjVmmMIK1Kj3IlBuzTGEEazGXQabcmGUKI5jU3DZ5chN2KYxgEnM7/sAI1mDug0y5HcMURjCKWgaZcjuGKYxgJbUNMuV2DFMYwVLOUOcsS27CLoUR7Evtg0xGsILajz/ITdilMIIdtbbGZQT70OoaV27CLoURbNP6Glduwi6FEUREP4NMuQm7FJ1H0MvxB7kJuxSdRtDrIFNuwi5FZxH0evxBbr0sRScR9H78QZcROMW2XW64KkWjETjFltdHBMBrHn+h3HDVK6UfNbYDwEWPv9D/I3g9Iu4s/aApHABeDo+/yBbwUkTcUfohkiRJkiRJkiRJkiRJkiRJkiSpDv8Ax+/Wa5nmksYAAAAASUVORK5CYII="},578:function(e,t,n){function o(e){return r.createElement("svg",e,[r.createElement("style",{type:"text/css",key:0},"\r\n\t.st0{fill:none;stroke:#ffffff;stroke-width:15;stroke-linecap:round;stroke-miterlimit:10;}\r\n"),r.createElement("path",{id:"XMLID_1_",className:"st0",d:"M514.5,247.7c1.1-3.5,1.7-7.2,1.7-11c0-20-16.2-36.1-36.1-36.1s-36.1,16.2-36.1,36.1\r\n\tc0,19.5,15.4,35.4,34.7,36.1",key:1})])}var r=n(1);o.displayName="LoadingWhite",o.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 960 560",style:{enableBackground:"new 0 0 960 560"},xmlSpace:"preserve"},e.exports=o,o.default=o},579:function(e,t,n){function o(e){return r.createElement("svg",e,[r.createElement("g",{id:"XMLID_1_",key:0},[r.createElement("linearGradient",{id:"XMLID_41_",gradientUnits:"userSpaceOnUse",x1:"87",y1:"66",x2:"241",y2:"66",key:0},[r.createElement("stop",{offset:"0",style:{stopColor:"#5BDAEF"},key:0}),r.createElement("stop",{offset:"1",style:{stopColor:"#596ED3"},key:1})]),r.createElement("path",{id:"XMLID_9_",style:{fill:"url(#XMLID_41_)"},d:"M87,0v100h79l43,32v-32h32V0H87z M114,29h58v15h-58V29z M212,73h-98V58h98V73\r\n\t\tz M212,44h-20V29h20V44z",key:1}),r.createElement("linearGradient",{id:"XMLID_42_",gradientUnits:"userSpaceOnUse",x1:"0",y1:"109",x2:"154",y2:"109",key:2},[r.createElement("stop",{offset:"0",style:{stopColor:"#5BDAEF"},key:0}),r.createElement("stop",{offset:"1",style:{stopColor:"#596ED3"},key:1})]),r.createElement("polygon",{id:"XMLID_11_",style:{fill:"url(#XMLID_42_)"},points:"124,110 124,120 104,120 104,110 87,110 87,120 28,120 28,105 \r\n\t\t77,105 77,88 28,88 28,73 77,73 77,43 0,43 0,143 32,143 32,175 76,143 154,143 154,110 \t",key:3})]),r.createElement("g",{id:"XMLID_3_",key:1},[r.createElement("path",{id:"XMLID_4_",style:{fill:"#596ED3"},d:"M317.5,88.8c-0.3,2.8-1.1,5.2-2.4,7.5c-1.2,2.2-2.8,4.2-4.8,5.8\r\n\t\tc-1.9,1.6-4.1,2.8-6.6,3.7c-2.5,0.9-5.1,1.3-8,1.3c-3.2,0-6.1-0.5-8.8-1.6c-2.7-1.1-4.9-2.7-6.9-4.8c-1.9-2.1-3.4-4.8-4.5-8\r\n\t\ts-1.6-6.9-1.6-11.1c0-4.2,0.5-7.9,1.6-10.9s2.5-5.6,4.5-7.5c1.9-2,4.2-3.4,7-4.4c2.7-1,5.7-1.4,9.1-1.4c3.1,0,5.9,0.4,8.4,1.2\r\n\t\tc2.5,0.8,4.7,2,6.6,3.6c1.9,1.6,3.4,3.5,4.5,5.8c1.1,2.2,1.7,4.7,1.9,7.5h-12.6c-0.3-2.4-1.3-4.3-2.9-5.7c-1.6-1.4-3.6-2.1-6-2.1\r\n\t\tc-1.3,0-2.6,0.2-3.7,0.7c-1.2,0.4-2.2,1.2-3,2.3s-1.6,2.5-2.1,4.2c-0.5,1.8-0.8,3.9-0.8,6.5c0,5.2,0.9,9,2.8,11.5\r\n\t\tc1.9,2.5,4,3.7,6.4,3.7c2.4,0,4.5-0.7,6.2-2c1.7-1.3,2.7-3.3,3-5.9H317.5z",key:0}),r.createElement("path",{id:"XMLID_6_",style:{fill:"#596ED3"},d:"M350.9,105.8V76.6c0-3.6-0.6-6-1.9-7.3c-1.2-1.3-3.3-2-6.2-2c-1.5,0-2.9,0.3-4.1,0.9\r\n\t\tc-1.2,0.6-2.2,1.4-3.1,2.5c-0.8,1.1-1.5,2.3-1.9,3.6c-0.4,1.4-0.6,2.9-0.6,4.5v27.1h-12.5V41.3h12.5v23.4c0.4-1,1.1-2,2.1-2.9\r\n\t\tc0.9-0.9,2-1.7,3.2-2.4c1.2-0.6,2.6-1.2,4-1.5c1.5-0.4,3-0.6,4.6-0.6c4.9,0,8.8,1.3,11.9,4c3,2.7,4.6,6.4,4.6,11.1v33.4H350.9z",key:1}),r.createElement("path",{id:"XMLID_14_",style:{fill:"#596ED3"},d:"M368.8,53V41.3h12.5V53H368.8z M368.8,105.8V58.6h12.5v47.2H368.8z",key:2}),r.createElement("path",{id:"XMLID_17_",style:{fill:"#596ED3"},d:"M413.3,74.7h11.6v13.4c0,2.5-0.4,4.9-1.1,7.1c-0.7,2.3-1.9,4.3-3.5,6\r\n\t\tc-1.6,1.8-3.6,3.2-6,4.2c-2.4,1-5.3,1.5-8.6,1.5c-3.5,0-6.4-0.5-8.8-1.5s-4.4-2.4-6-4.1c-1.6-1.7-2.7-3.7-3.4-6\r\n\t\tc-0.7-2.3-1.1-4.7-1.1-7.3V45.9h12.3v12.8h26.1v8.8h-26.1v19.4c0,3,0.6,5.3,1.7,7c1.1,1.6,3,2.4,5.5,2.4c2.5,0,4.3-0.8,5.5-2.4\r\n\t\tc1.2-1.6,1.8-3.9,1.8-6.8V74.7z",key:3}),r.createElement("path",{id:"XMLID_19_",style:{fill:"#596ED3"},d:"M495.7,88.8c-0.3,2.8-1.1,5.2-2.4,7.5c-1.2,2.2-2.8,4.2-4.8,5.8\r\n\t\tc-1.9,1.6-4.1,2.8-6.6,3.7c-2.5,0.9-5.1,1.3-8,1.3c-3.2,0-6.1-0.5-8.8-1.6c-2.7-1.1-4.9-2.7-6.9-4.8c-1.9-2.1-3.4-4.8-4.5-8\r\n\t\ts-1.6-6.9-1.6-11.1c0-4.2,0.5-7.9,1.6-10.9s2.5-5.6,4.5-7.5c1.9-2,4.2-3.4,7-4.4c2.7-1,5.7-1.4,9.1-1.4c3.1,0,5.9,0.4,8.4,1.2\r\n\t\tc2.5,0.8,4.7,2,6.6,3.6c1.9,1.6,3.4,3.5,4.5,5.8c1.1,2.2,1.7,4.7,1.9,7.5h-12.6c-0.3-2.4-1.3-4.3-2.9-5.7c-1.6-1.4-3.6-2.1-6-2.1\r\n\t\tc-1.3,0-2.6,0.2-3.7,0.7c-1.2,0.4-2.2,1.2-3,2.3s-1.6,2.5-2.1,4.2c-0.5,1.8-0.8,3.9-0.8,6.5c0,5.2,0.9,9,2.8,11.5\r\n\t\tc1.9,2.5,4,3.7,6.4,3.7c2.4,0,4.5-0.7,6.2-2c1.7-1.3,2.7-3.3,3-5.9H495.7z",key:4}),r.createElement("path",{id:"XMLID_21_",style:{fill:"#596ED3"},d:"M529,105.8V76.6c0-3.6-0.6-6-1.9-7.3c-1.2-1.3-3.3-2-6.2-2c-1.5,0-2.9,0.3-4.1,0.9\r\n\t\tc-1.2,0.6-2.2,1.4-3.1,2.5c-0.8,1.1-1.5,2.3-1.9,3.6c-0.4,1.4-0.6,2.9-0.6,4.5v27.1h-12.5V41.3h12.5v23.4c0.4-1,1.1-2,2.1-2.9\r\n\t\tc0.9-0.9,2-1.7,3.2-2.4c1.2-0.6,2.6-1.2,4-1.5c1.5-0.4,3-0.6,4.6-0.6c4.9,0,8.8,1.3,11.9,4c3,2.7,4.6,6.4,4.6,11.1v33.4H529z",key:5}),r.createElement("path",{id:"XMLID_23_",style:{fill:"#596ED3"},d:"M576.2,105.8c-0.4-1.2-0.6-2.6-0.8-4.2c-1.5,1.7-3.4,3-5.9,4c-2.4,1-5.2,1.5-8.4,1.5\r\n\t\tc-5.4,0-9.4-1.2-11.9-3.6c-2.5-2.4-3.8-5.5-3.8-9.4c0-3.4,0.5-6.1,1.6-8.1c1.1-2,2.6-3.6,4.5-4.8c1.9-1.2,4.2-2,6.9-2.5\r\n\t\tc2.7-0.5,5.5-1,8.7-1.5c3.1-0.4,5.2-1,6.3-1.8c1.1-0.7,1.6-1.9,1.6-3.6c0-1.5-0.7-2.7-2.2-3.6c-1.4-0.9-3.4-1.3-5.8-1.3\r\n\t\tc-2.9,0-4.9,0.6-6.2,1.9c-1.2,1.3-2,3-2.4,5.1h-11.6c0.1-2.4,0.5-4.7,1.2-6.7c0.7-2,1.9-3.8,3.6-5.3c1.6-1.5,3.8-2.6,6.4-3.4\r\n\t\tc2.6-0.8,5.8-1.2,9.6-1.2c3.7,0,6.9,0.4,9.5,1.2c2.6,0.8,4.7,2,6.2,3.6c1.6,1.6,2.7,3.5,3.4,5.9c0.7,2.3,1.1,5,1.1,7.9v29.8H576.2z\r\n\t\t M575.3,82.7c-0.6,0.6-1.6,1.2-2.8,1.5c-1.2,0.4-3,0.8-5.3,1.2c-3.6,0.7-6,1.6-7.4,2.7c-1.3,1.1-2,2.7-2,4.7c0,3.5,2,5.3,6,5.3\r\n\t\tc1.6,0,3.1-0.3,4.5-0.8c1.4-0.5,2.6-1.3,3.6-2.2c1-0.9,1.8-2,2.4-3.3c0.6-1.2,0.9-2.6,0.9-4L575.3,82.7z",key:6}),r.createElement("path",{id:"XMLID_26_",style:{fill:"#596ED3"},d:"M619.5,74.7h11.6v13.4c0,2.5-0.4,4.9-1.1,7.1c-0.7,2.3-1.9,4.3-3.5,6\r\n\t\tc-1.6,1.8-3.6,3.2-6,4.2c-2.4,1-5.3,1.5-8.6,1.5c-3.5,0-6.4-0.5-8.8-1.5s-4.4-2.4-6-4.1c-1.6-1.7-2.7-3.7-3.4-6\r\n\t\tc-0.7-2.3-1.1-4.7-1.1-7.3V45.9H605v12.8h26.1v8.8H605v19.4c0,3,0.6,5.3,1.7,7c1.1,1.6,3,2.4,5.5,2.4c2.5,0,4.3-0.8,5.5-2.4\r\n\t\tc1.2-1.6,1.8-3.9,1.8-6.8V74.7z",key:7})])])}var r=n(1);o.displayName="Logo",o.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 631.2 175",style:{enableBackground:"new 0 0 631.2 175"},xmlSpace:"preserve"},e.exports=o,o.default=o},580:function(e,t,n){function o(e){return r.createElement("svg",e,[r.createElement("style",{type:"text/css",key:0},"\r\n\t.st0{fill:#B9BFC3;}\r\n"),r.createElement("path",{className:"st0",d:"M-463,279c0,1.1-0.9,2-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2S-461.9,279-463,279z M-463,275c-4.1,0-8,4.6-8,6\r\n\ts3.9,6,8,6s8-4.6,8-6S-458.9,275-463,275z M-463,285c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4C-459,283.2-460.8,285-463,285z",key:1})])}var r=n(1);o.displayName="Seen",o.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"-471 273 16 16",style:{enableBackground:"new -471 273 16 16"},xmlSpace:"preserve"},e.exports=o,o.default=o},308:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=o(s),u=n(3),l=n(292),p=o(l),f=n(293),d=o(f),m=n(291),E=o(m),_=n(290),h=o(_),S=n(418),R=o(S),y=n(24),M=n(289),L=o(M),O=n(288),C=o(O),A=n(287),v=o(A),g=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return c(t,e),t.prototype.componentDidMount=function(){var e=this.props;e.requestRoomsList,e.receiveRoomsList,e.receiveUsersList,e.receiveMessage,e.currentUser},t.prototype.render=function(){var e=this.props.isCreateRoomPanelOpen;return i.default.createElement("div",{id:R.default.container},e?i.default.createElement(L.default,null):null,i.default.createElement(v.default,null),i.default.createElement("div",{id:R.default.body},i.default.createElement("div",{id:R.default.left},i.default.createElement(C.default,null),i.default.createElement(p.default,null),i.default.createElement(d.default,null)),i.default.createElement("div",{id:R.default.right},i.default.createElement("div",{id:R.default.conversation},i.default.createElement(E.default,null)),i.default.createElement("div",{id:R.default.input},i.default.createElement(h.default,null)))))},t}(i.default.Component),D=function(e){return{currentUser:e.chatApp.currentUser,isCreateRoomPanelOpen:e.chatApp.isCreateRoomPanelOpen}},I=function(e){return{requestRoomsList:function(t){return e((0,y.requestRoomsList)(t))},receiveRoomsList:function(t){return e((0,y.receiveRoomsList)(t))},receiveUsersList:function(t){return e((0,y.receiveUsersList)(t))},receiveMessage:function(t){return e((0,y.receiveMessage)(t))}}};t.default=(0,u.connect)(D,I)(g),e.exports=t.default},418:function(e,t){e.exports={container:"src-pages-chitchat----index-module---container---dMo-5",body:"src-pages-chitchat----index-module---body---1ZEBs",left:"src-pages-chitchat----index-module---left---2ov5U",right:"src-pages-chitchat----index-module---right---3DF3v",conversation:"src-pages-chitchat----index-module---conversation---VRRBN",input:"src-pages-chitchat----index-module---input---1roR5"}},106:function(e,t,n){"use strict";t.__esModule=!0;var o={id:1,name:"Jon",picture:n(81)},r={id:0,content:"Salut les djeuns",user:o,date:Date.now()};t.default={rooms:[{id:1,title:"Bonjour",lastMessage:r,messages:[r],participants:[o],seenBy:[0]}],users:[{id:0,name:"Sara",picture:n(103)},{id:1,name:"Jon",picture:n(81)},{id:2,name:"Sofia",picture:n(31)},{id:3,name:"Enzo",picture:n(31)},{id:4,name:"Lynn",picture:n(31)}]},e.exports=t.default},81:function(e,t,n){e.exports=n.p+"static/jon.2c3c458a.jpg"},103:function(e,t,n){e.exports=n.p+"static/sara.8ade68d7.jpg"},31:function(e,t,n){e.exports=n.p+"static/sofia.dee79a2e.jpg"},24:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.createRoom=t.receiveMessage=t.sendMessage=t.requestRoomData=t.receiveRoomsList=t.requestRoomsList=t.receiveUsersList=t.requestUsersList=t.setRoomsListFilter=t.CREATE_ROOM_FAILED=t.CREATE_ROOM_SUCCESS=t.CREATE_ROOM_PENDING=t.SEND_MESSAGE_FAILED=t.SEND_MESSAGE_SUCCESS=t.SEND_MESSAGE_PENDING=t.REQUEST_ROOM_DATA_FAILED=t.REQUEST_ROOM_DATA_SUCCESS=t.REQUEST_ROOM_DATA_PENDING=t.REQUEST_ROOMS_LIST_FAILED=t.REQUEST_ROOMS_LIST_SUCCESS=t.REQUEST_ROOMS_LIST_PENDING=t.REQUEST_USERS_LIST_FAILED=t.REQUEST_USERS_LIST_SUCCESS=t.REQUEST_USERS_LIST_PENDING=t.HIDE_CREATE_ROOM_PANEL=t.SHOW_CREATE_ROOM_PANEL=t.SET_ROOMS_LIST_FILTER=void 0;var r=n(106),a=o(r),c=t.SET_ROOMS_LIST_FILTER="SET_ROOMS_LIST_FILTER",s=(t.SHOW_CREATE_ROOM_PANEL="SHOW_CREATE_ROOM_PANEL",t.HIDE_CREATE_ROOM_PANEL="HIDE_CREATE_ROOM_PANEL",t.REQUEST_USERS_LIST_PENDING="REQUEST_USERS_LIST_PENDING"),i=t.REQUEST_USERS_LIST_SUCCESS="REQUEST_USERS_LIST_SUCCESS",u=(t.REQUEST_USERS_LIST_FAILED="REQUEST_USERS_LIST_FAILED",t.REQUEST_ROOMS_LIST_PENDING="REQUEST_ROOMS_LIST_PENDING"),l=t.REQUEST_ROOMS_LIST_SUCCESS="REQUEST_ROOMS_LIST_SUCCESS",p=(t.REQUEST_ROOMS_LIST_FAILED="REQUEST_ROOMS_LIST_FAILED",t.REQUEST_ROOM_DATA_PENDING="REQUEST_ROOM_DATA_PENDING"),f=t.REQUEST_ROOM_DATA_SUCCESS="REQUEST_ROOM_DATA_SUCCESS",d=(t.REQUEST_ROOM_DATA_FAILED="REQUEST_ROOM_DATA_FAILED",t.SEND_MESSAGE_PENDING="SEND_MESSAGE_PENDING"),m=t.SEND_MESSAGE_SUCCESS="SEND_MESSAGE_SUCCESS",E=(t.SEND_MESSAGE_FAILED="SEND_MESSAGE_FAILED",t.CREATE_ROOM_PENDING="CREATE_ROOM_PENDING"),_=(t.CREATE_ROOM_SUCCESS="CREATE_ROOM_SUCCESS",t.CREATE_ROOM_FAILED="CREATE_ROOM_FAILED",20),h=(t.setRoomsListFilter=function(e){return{type:c,filter:e}},t.requestUsersList=function(e){return function(e){e({type:s}),e(h(a.default.users.filter(function(e){return 0!==e.id})))}},t.receiveUsersList=function(e){return{type:i,usersList:e}}),S=(t.requestRoomsList=function(e){return function(e){e({type:u});var t=a.default.rooms;setTimeout(function(){e(S(t))},500)}},t.receiveRoomsList=function(e){return{type:l,roomsList:e}}),R=t.requestRoomData=function(e){return function(t){t({type:p}),t({type:f,roomData:a.default.rooms.find(function(t){return t.id===e})})}},y=(t.sendMessage=function(e,t,n){return function(o){o({type:d});var r=a.default.rooms.find(function(e){return e.id===t}),c={id:_++,content:n,user:e,date:Date.now()};r.messages.push(c),r.lastMessage=c,o(y(c,t))}},t.receiveMessage=function(e,t){return{type:m,message:e,roomId:t}});t.createRoom=function(e,t,n,o){return function(r){r({type:E});var c={id:_++,content:n,user:e,date:Date.now()};a.default.rooms.push({id:_++,title:t,lastMessage:c,messages:[c],participants:o,seenBy:[e]}),r(S(a.default.rooms)),r(R(_-1))}}}});
//# sourceMappingURL=component---src-pages-chitchat-index-js-abb1be629c97ede49594.js.map