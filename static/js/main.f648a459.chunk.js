(this.webpackJsonpquickapp=this.webpackJsonpquickapp||[]).push([[0],{133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),o=(a(99),a(46)),i=a(37),s=a(9),u=a(75),d={},h={123:{id:"123",name:"test",url:"https://www.dailymotion.com/video/x7r6aem",tags:[]},1234:{id:"1234",name:"test",url:"https://www.dailymotion.com/video/x7r6aem",tags:[]},1235:{id:"1235",name:"test",url:"https://www.dailymotion.com/video/x7r6aem",tags:[]},1236:{id:"1236",name:"test",url:"https://www.dailymotion.com/video/x7r6aem",tags:[]}},m={shortcuts:h,editingShortcutDetails:{shortcut:{}},isDialogOpen:!1,tags:d},p=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?a:3&a|8).toString(16)}))},g=function(){var e,t,a,n,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"EDIT_MENU_CLICKED":e=r.payload.id,c=Object(s.a)({},c,{editingShortcutDetails:{shortcut:c.shortcuts[e]},isDialogOpen:!c.isDialogOpen});break;case"SHORTCUT_TAIL_CLICKED":"ADD_SHORTCUT"===(e=r.payload.id)?c=Object(s.a)({},c,{editingShortcutDetails:{shortcut:{tags:[]}},isDialogOpen:!0}):window.location.href=c.shortcuts[e].url;break;case"ADD_SHORTCUT":var l=r.payload.name,o=r.payload.url,g=r.payload.tags,v=p(),f=Object(s.a)({},c.shortcuts,Object(i.a)({},v,{id:v,name:l,url:o,tags:g}));c=Object(s.a)({},c,{shortcuts:f,isDialogOpen:!c.isDialogOpen});break;case"REMOVE_SHORTCUT":var E=r.payload.id,b=Object(s.a)({},c.shortcuts);delete b[E],c=Object(s.a)({},c,{shortcuts:b,isDialogOpen:!c.isDialogOpen});break;case"UPDATE_SHORTCUT":var T=r.payload.id;t=r.payload.name,a=r.payload.url;var O=r.payload.tags;n=Object(s.a)({},c.shortcuts,Object(i.a)({},T,{id:T,name:t,url:a,tags:O})),c=Object(s.a)({},c,{shortcuts:n,isDialogOpen:!c.isDialogOpen});break;case"ADD_TAG":var D=r.payload.id;if(console.log(D),!D)return;var C=Object(s.a)({},c.editingShortcutDetails);C.shortcut.tags.push(D),C.searchText="",c=Object(s.a)({},c,{editingShortcutDetails:C});break;case"REMOVE_TAG":var y=r.payload.id,S=Object(s.a)({},c.editingShortcutDetails),x=S.shortcut;u.remove(x.tags,(function(e){return e===y})),console.log(S),c=Object(s.a)({},c,{tagsMenuOpen:!c.tagsMenuOpen,editingShortcutDetails:S});break;case"FECTH_TAGS":var k=r.payload.searchText,j=u.filter(c.tags,(function(e){return e.value.indexOf(k)>-1}));k=u.trim(k),u.isEmpty(k)&&(j=m.tags),c=Object(s.a)({},c,{tags:j,tagsMenuOpen:!0});break;case"CREATE_TAG":var _=r.payload.tagValue,A=p(),N=Object(s.a)({},c.tags,Object(i.a)({},A,{id:A,value:_})),w=Object(s.a)({},c.editingShortcutDetails);u.isEmpty(w.shortcut.tags)&&(w.shortcut.tags=[]),w.shortcut.tags.push(A),c=Object(s.a)({},c,{tags:N,editingShortcutDetails:w});break;case"SEARCH_CLICKED":var R=r.payload.searchText;R.trim();var B=r.payload.context;switch(B){case"shortcut":if(""===R){c=Object(s.a)({},c,{searchText:R,shortcuts:h});break}var M=[];Object.values(h).forEach((function(e){e.name.indexOf(R)>=0&&(M[e.id]=Object(s.a)({},e))})),c=Object(s.a)({},c,{searchText:R,shortcuts:M});break;case"tags":if(" "===R){c=Object(s.a)({},c,{tags:d});break}var I=Object.values(d).filter((function(e){return e.value.indexOf(R)>=0}));c=Object(s.a)({},c,{tags:I});case"shortcut_tags":if(""===R)break;var L=Object.values(d).filter((function(e){return e.value.indexOf(R)>=0}));c=Object(s.a)({},c,{editingShortcutDetails:Object(s.a)({},c.editingShortcutDetails,{popperData:L})})}break;case"CLEAR_MODAL_PROPS":c=Object(s.a)({},c,{isDialogOpen:!1,editingShortcut:{}});break;case"FILTER_BY_TAG":var U=r.payload.id;if(U===c.selectedTag){c=Object(s.a)({},c,{shortcuts:h,selectedTag:""});break}var H={};Object.values(h).forEach((function(e){e.tags.includes(U)&&(H[e.id]=e)})),c=Object(s.a)({},c,{shortcuts:H,selectedTag:U})}return c},v=a(81),f=a(26),E=a(135),b=function(e){var t=function(e){var t=e.instance,a=t.reference;t.popper.style.width="".concat(a.offsetWidth,"px")},a={onCreate:t,onUpdate:t};return c.a.createElement(E.a,{id:"custom-popper",className:"custom-popper",popperOptions:a,placement:"bottom-start",open:e.open,anchorEl:e.anchorEl},e.children)},T=a(75),O=function(e){var t=e.searchText||"",a=Object(n.useState)(t),r=Object(f.a)(a,2),l=r[0],o=r[1],i=Object(n.useState)(null),s=Object(f.a)(i,2),u=s[0],d=s[1],h=function(t){o(""),"ADD_TAG"!==t?e.addTag(t):e.createTag(l)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:"form-control mr-sm-2",value:l,type:"search",placeholder:e.placeholder,"aria-label":"Search",onChange:function(t){o(t.target.value),e.handleSearch(e.context,t.target.value),d(t.currentTarget)},onBlur:function(e){},onFocus:function(e){d(e.currentTarget)}}),function(){var t=!1;return l&&u&&(t=!0),c.a.createElement(b,{open:t,anchorEl:u},function(){var t=e.popperData||[],a=l.trim();return 0!=t.length||T.isEmpty(a)||t.push({id:"ADD_TAG",value:'Create tag "'.concat(a,'"')}),c.a.createElement("div",{className:"popper-data"},c.a.createElement("ul",{className:"list-group"},t.map((function(e){return c.a.createElement("li",{className:"list-group-item",key:e.id},c.a.createElement("div",{className:"tag-option",onClick:h.bind(void 0,e.id)},e.value))}))))}())}(),!e.disableButton&&c.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:function(){return e.handleSearch(l)}},"Search"))},D=a(55),C=function(e,t){return{type:"SEARCH_CLICKED",payload:{searchText:e,context:t}}},y=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),r=a[0],l=a[1];return c.a.createElement("input",{className:"form-control mr-sm-2",value:r,type:"search",placeholder:e.placeholder,"aria-label":"Search",onChange:function(t){l(t.target.value),e.handleSearch(e.context,t.target.value)}})},S=Object(D.a)((function(e){return{searchText:e.searchText,popperData:e.popperData}}),(function(e){return{handleSearchButtonClicked:function(t,a){e(C(a,t))}}}))((function(e){return c.a.createElement("nav",{className:"navbar navbar-light"},c.a.createElement("a",{href:"#",className:"navbar-brand"},"Navbar"),c.a.createElement("div",null,c.a.createElement(y,{context:"shortcut",placeholder:"Search shortcuts",handleSearch:e.handleSearchButtonClicked})))})),x=a(164);var k=function(e){var t=null;if("Add Shortcut"===e.name)t=c.a.createElement("div",{className:"icon"},"+");else{var a="https://api.statvoo.com/favicon/?url="+e.url;t=c.a.createElement("img",{className:"icon",title:"",alt:"",height:"60",width:"60",src:a})}return c.a.createElement("div",{className:"shortcut"},c.a.createElement("div",{className:"shortcut-draggable",draggable:"true"},c.a.createElement("div",{onClick:function(){e.handleClick(e.id)},className:"shortcut-anchor"},c.a.createElement(x.a,{title:e.name},c.a.createElement("div",{className:"shortcut-content"},t,c.a.createElement("div",{className:"shortcut-name"},c.a.createElement("span",null," ",e.name)))),"Add Shortcut"!==e.name&&c.a.createElement("div",{onClick:function(t,a){a.stopPropagation(),e.handleEditMenuClick(t)}.bind(this,e.id),className:"shortcut-edit-menu"},c.a.createElement("i",{className:"fa fa-ellipsis-v"})))))},j=function(e){var t=Object.values(e.shortcuts)||[];return t.unshift({name:"Add Shortcut",id:"ADD_SHORTCUT"}),c.a.createElement("div",{className:"shortcut-container"},t.map((function(t){return c.a.createElement(k,{name:t.name,id:t.id,url:t.url,handleEditMenuClick:e.handleEditMenuClick,handleClick:e.handleClick})})))},_=function(e){var t=function(t){e.filterByTag(t)};return c.a.createElement("div",null,c.a.createElement(y,{context:"tags",placeholder:"Search tags",handleSearch:e.handleSearch}),c.a.createElement("div",{className:"side-menu-items"},c.a.createElement("ul",null,Object.values(e.tags).map((function(a){var n="tag filter";return e.selectedTag===a.id&&(n+=" selected"),c.a.createElement("li",null,c.a.createElement("div",{className:n,onClick:t.bind(void 0,a.id)},a.value))})))))},A=a(169),N=a(170),w=a(172),R=a(168),B=a(167),M=a(173),I=a(84),L=a.n(I),U=function(e){return c.a.createElement(L.a,{label:e.value,className:"chip",clickable:!1,onDelete:e.onDelete.bind(void 0,e.id)})},H=function(e){var t=e.appliedTags.map((function(t){return console.log(e.tags),c.a.createElement(U,{value:e.tags[t].value,id:t,onDelete:e.removeTag.bind(void 0,t)})}));return c.a.createElement("div",null,c.a.createElement(O,{placeholder:"Search tags",disableButton:!0,handleSearch:e.handleSearch,context:"shortcut_tags",popperData:e.popperData,addTag:e.addTag,createTag:e.createTag}),c.a.createElement("div",{className:"tags-container"},t))};function G(e){var t=e.shortcut.name||"",a=e.shortcut.url||"",n=c.a.useState(t),r=Object(f.a)(n,2),l=r[0],o=r[1],i=c.a.useState(a),s=Object(f.a)(i,2),u=s[0],d=s[1],h=!(l.trim()&&u.trim()),m=!e.shortcut.id;return c.a.createElement("div",null,c.a.createElement(w.a,{open:e.open,"aria-labelledby":"form-dialog-title",onClick:function(e){e.stopPropagation()}},c.a.createElement(M.a,{id:"form-dialog-title"},"Add Shortcut"),c.a.createElement(B.a,null,c.a.createElement(N.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,onChange:function(e){return o(e.target.value)},value:l}),c.a.createElement(N.a,{margin:"dense",id:"url",label:"url",type:"text",fullWidth:!0,value:u,onChange:function(e){return d(e.target.value)}}),c.a.createElement(H,{appliedTags:e.shortcut.tags,tags:e.tags,handleSearch:e.handleSearch,popperData:e.popperData,removeTag:e.removeTag,addTag:e.addTag,createTag:e.createTag})),c.a.createElement(R.a,null,c.a.createElement(A.a,{disabled:m,onClick:function(){e.handleRemoveButtonClicked(e.shortcut.id)},color:"primary"},"Remove"),c.a.createElement(A.a,{onClick:function(){e.handleCancelButtonClicked()},color:"primary"},"Cancel"),c.a.createElement(A.a,{disabled:h,onClick:function(){e.handleDoneButtonClicked(e.shortcut.id,l,u,e.shortcut.tags)},color:"primary"},"Done"))))}var P=Object(D.a)((function(e){return{popperData:e.editingShortcutDetails.popperData,tags:e.tags,shortcuts:e.shortcuts,isDialogOpen:e.isDialogOpen,editingShortcutDetails:e.editingShortcutDetails,selectedTag:e.selectedTag||""}}),(function(e){return{handleSearch:function(t,a){e(C(a,t))},handleShortcutSearch:function(t,a){e(C(a,t))},handleEditMenuClicked:function(t){var a;e((a=t,console.log("shortcutId  DONE_CLICKED"),{type:"EDIT_MENU_CLICKED",payload:{id:a}}))},shortcutTailClicked:function(t){e(function(e){return{type:"SHORTCUT_TAIL_CLICKED",payload:{id:e}}}(t))},doneButtonClicked:function(t,a,n,c){e(t?function(e,t,a,n){return{type:"UPDATE_SHORTCUT",payload:{id:e,name:t,url:a,tags:n}}}(t,a,n,c):function(e,t,a){return{type:"ADD_SHORTCUT",payload:{name:e,url:t,tags:a}}}(a,n,c))},cancelClicked:function(){e({type:"CLEAR_MODAL_PROPS"})},removeClicked:function(t){e(function(e){return{type:"REMOVE_SHORTCUT",payload:{id:e}}}(t))},removeTag:function(t){e(function(e){return{type:"REMOVE_TAG",payload:{id:e}}}(t))},addTag:function(t){e(function(e){return{type:"ADD_TAG",payload:{id:e}}}(t))},filterByTag:function(t){e(function(e){return{type:"FILTER_BY_TAG",payload:{id:e}}}(t))},createTag:function(t){e(function(e){return{type:"CREATE_TAG",payload:{tagValue:e}}}(t))}}}))((function(e){var t=null;return e.isDialogOpen&&(t=c.a.createElement(G,{open:e.isDialogOpen,shortcut:e.editingShortcutDetails.shortcut,tags:e.tags,handleDoneButtonClicked:e.doneButtonClicked,handleCancelButtonClicked:e.cancelClicked,handleRemoveButtonClicked:e.removeClicked,popperData:e.popperData,handleSearch:e.handleShortcutSearch,addTag:e.addTag,removeTag:e.removeTag,fetchTags:e.fetchTags,createTag:e.createTag})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-md-2 sidebar"},c.a.createElement(_,{tags:e.tags,handleSearch:e.handleShortcutSearch.bind("shortcut"),filterByTag:e.filterByTag,selectedTag:e.selectedTag})),c.a.createElement("div",{className:"col body-container"},c.a.createElement(j,{shortcuts:e.shortcuts,handleEditMenuClick:e.handleEditMenuClicked,handleClick:e.shortcutTailClicked}),t)))})),F=(a(133),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"custom-bg"}),c.a.createElement(S,null),c.a.createElement(P,null))});var K=function(){var e=Object(o.b)(g);return c.a.createElement(v.a,{store:e},c.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(134)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.f648a459.chunk.js.map