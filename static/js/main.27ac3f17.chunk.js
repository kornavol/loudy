(this.webpackJsonpcurrent=this.webpackJsonpcurrent||[]).push([[0],{21:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);n(20),n(21);var c=n(1),r=n.n(c),a=n(18),i=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},u=(n(26),n(4)),l=n.n(u),o=n(6),j=n(5),d=(n(28),n(29),n(19)),p=n.n(d).a.create({baseURL:"https://api-stg.jam-community.com"}),b=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.get("/song/trending");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/x-www-form-urlencoded"}},(c=new URLSearchParams).append("id",t),e.prev=3,e.next=6,p.post("/interact/like?apikey=".concat("___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8"),c,n);case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),f=n(0),h=function(e){var t=e.list,n=Object(c.useContext)(N),r=n.state,a=n.dispatch,i=Object(c.useState)(""),s=Object(j.a)(i,2),u=s[0],l=s[1];return Object(f.jsx)("div",{id:"content",children:Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{}),Object(f.jsx)("td",{}),Object(f.jsx)("td",{children:"Title"}),Object(f.jsx)("td",{children:"Artist"})]})}),Object(f.jsx)("tbody",{children:t&&t.map((function(e,t){var n=e.id,c=e.name,i=e.music_file_path,s=e.artist_name,o=e.cover_image_path;return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{style:{width:75,paddingLeft:5},children:[Object(f.jsx)(x,{id:n}),Object(f.jsx)("span",{style:{marginRight:20}}),Object(f.jsx)(m,{playing:r.playing,isCurrentSong:r.id===n,visible:u===n}),Object(f.jsx)("span",{style:{marginRight:20}})]}),Object(f.jsx)("td",{children:Object(f.jsx)("img",{src:o,alt:""})}),Object(f.jsx)("td",{className:"song-name",onClick:function(){a({type:"PLAY",path:i,id:n,index:t.toString()}),l(n)},children:c}),Object(f.jsx)("td",{children:s})]},n)}))})]})})},x=function(e){var t=e.id,n=Object(c.useState)(!1),r=Object(j.a)(n,2),a=r[0],i=r[1];return a?Object(f.jsx)("i",{className:"fa fa-heart",onClick:function(){return i((function(e){return!e}))}}):Object(f.jsx)("i",{onClick:function(){O(t),i((function(e){return!e}))},className:"fa fa-heart-o"})},m=function(e){var t=e.playing,n=e.isCurrentSong,r=e.visible,a=Object(c.useContext)(N).dispatch,i={visibility:r?"visible":"hidden"};return n&&t?Object(f.jsx)("i",{className:"fa fa-pause",onClick:function(){return a({type:"PAUSE"})},style:i}):Object(f.jsx)("i",{className:"fa fa-play",onClick:function(){return a({type:"PLAY"})},style:i})},v=(n(49),function(e){var t=Math.floor(e%60);t<10&&(t="0".concat(t));var n=Math.floor(e/60);return"".concat(n,":").concat(t)}),y=function(e){var t=e.list,n=Object(c.useContext)(N),r=n.state,a=n.dispatch,i=r.index,s=r.id;if(!s)return Object(f.jsx)("div",{className:"playbar"});var u,l,o=t[i];return Object(f.jsxs)("div",{id:"playbar",children:[Object(f.jsx)("div",{className:"left",children:s&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:o.name}),Object(f.jsx)("div",{className:"artist",children:o.artist_name})]})}),Object(f.jsxs)("div",{className:"middle",children:[Object(f.jsx)("div",{className:"play-pause-circle",onClick:function(){return r.playing?a({type:"PAUSE"}):a({type:"PLAY"})},children:Object(f.jsx)("i",{className:"fa fa-".concat(r.playing?"pause":"play"),style:{transform:r.playing?"":"translateX(1.5px)"}})}),Object(f.jsxs)("div",{style:{marginTop:2.5},children:[Object(f.jsx)("span",{children:v(Math.floor(r.currentTime))}),Object(f.jsx)("div",{className:"progress-container",children:Object(f.jsx)("div",{className:"bar",style:{width:(u=r.currentTime,l=r.duration,u/l*600)}})}),Object(f.jsx)("span",{children:v(r.duration)})]})]}),Object(f.jsxs)("div",{className:"right",children:[Object(f.jsx)("i",{className:"fa fa-volume-up"}),Object(f.jsx)("input",{type:"range",min:"0",max:"1",value:r.volume,step:"0.01",style:{marginLeft:10},onChange:function(e){return a({type:"SET_VOLUME",volume:e.target.value})}})]})]})},g=n(3),_={id:"",music_file_path:"",playing:!1,index:"",currentTime:0,duration:0,volume:.65},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLAY":return Object(g.a)(Object(g.a)({},e),{},{playing:!0,music_file_path:t.path||e.music_file_path,id:t.id||e.id,index:t.index||e.index});case"PAUSE":return Object(g.a)(Object(g.a)({},e),{},{playing:!1});case"SET_CURRENT_TIME":return Object(g.a)(Object(g.a)({},e),{},{currentTime:t.time});case"SET_DURATION":return Object(g.a)(Object(g.a)({},e),{},{duration:t.duration});case"SET_VOLUME":return Object(g.a)(Object(g.a)({},e),{},{volume:parseFloat(t.volume)})}return e},N=Object(c.createContext)(null),C=function(){var e=Object(c.useReducer)(T,_),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],u=i[1];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:(t=e.sent)&&200===t.status&&u(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=Object(c.useRef)();Object(c.useEffect)((function(){n.playing?(d.current.load(),d.current.play()):d.current.pause()}),[n.playing,n.music_file_path]),Object(c.useEffect)((function(){d.current.volume=n.volume}),[n.volume]);var p=n.music_file_path;return Object(f.jsxs)(N.Provider,{value:{state:n,dispatch:r},children:[Object(f.jsxs)("div",{id:"musicPlayer",children:[Object(f.jsx)(h,{list:s}),Object(f.jsx)(y,{list:s})]}),Object(f.jsx)("audio",{ref:d,src:p&&p,onLoadedMetadata:function(){return r({type:"SET_DURATION",duration:d.current.duration})},onTimeUpdate:function(e){return r({type:"SET_CURRENT_TIME",time:e.target.currentTime})}})]})},E=function(){return Object(f.jsx)("div",{id:"app",children:Object(f.jsx)(C,{})})};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),s()}},[[50,1,2]]]);
//# sourceMappingURL=main.27ac3f17.chunk.js.map