(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{1433:function(e,t,a){"use strict";a.r(t);var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh")},on:{click:function(t){return e.reFresh()}}})],1),a("q-space"),a("q-input",{staticClass:"cordova-search",attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"staff_name",attrs:{props:t}},[e._v("\n             "+e._s(t.row.staff_name)+"\n           ")]),a("q-td",{key:"staff_type",attrs:{props:t}},[e._v("\n             "+e._s(t.row.staff_type)+"\n           ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),a("q-td",{key:"action",staticStyle:{width:"240px"},attrs:{props:t}},[a("q-btn",{attrs:{color:"teal",label:e.$t("contact")},on:{click:function(a){return e.ChatWith(t.row.staff_name)}}})],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center cordova-footer"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.chat,callback:function(t){e.chat=t},expression:"chat"}},[a("q-card",{staticStyle:{width:"600px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.receiver))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[20,20],"content-style":"font-size: 12px"},on:{click:function(t){return e.ChatClose()}}},[e._v("\n        "+e._s(e.$t("index.close")))])],1)],1),a("q-separator"),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh",height:"50vh"},attrs:{id:"chat_scroll"}},[[a("div",{staticClass:"q-pa-md row justify-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.chat_next,expression:"chat_next !== null"}],attrs:{flat:"",rounded:"",label:e.$t("loadmore")},on:{click:function(t){return e.LoadChatList()}}}),a("div",{staticStyle:{width:"100%"}},[a("q-chat-message",{directives:[{name:"show",rawName:"v-show",value:null===e.chat_next,expression:"chat_next === null"}],attrs:{label:e.$t("nomoremessage")}}),e._l(e.chat_list,(function(t){return a("div",{key:t.id},[t.sender===e.sender+"-"+e.openid?a("q-chat-message",{attrs:{name:e.sender,text:[t.detail],"bg-color":"light-green-4","name-sanitize":"",sent:"","text-sanitize":""}}):a("q-chat-message",{attrs:{name:e.receiver,text:[t.detail],"text-sanitize":"","name-sanitize":"","bg-color":"grey-4"}})],1)}))],2)],1)]],2),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-input",{staticClass:"bg-white col",attrs:{autofocus:"",dense:"",outlined:"",square:"",placeholder:e.$t("sendmessage")},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.websocketsend()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.ChatClose()}]},model:{value:e.chat_text,callback:function(t){e.chat_text=t},expression:"chat_text"}}),a("q-btn",{attrs:{flat:"",label:e.$t("send"),color:"primary"},on:{click:function(t){return e.websocketsend()}}})],1)],1)],1)],2)},i=[],o=(a("5319"),a("26e9"),a("3004")),r=a("bd4c"),l=a("18d6"),c={name:"Pagestafflist_scan",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],staff_type_list:["Manager","Inbound","Outbound","Supervisor","StockControl","Customer","Supplier"],columns:[{name:"staff_name",required:!0,label:this.$t("staff.view_staff.staff_name"),align:"left",field:"staff_name"},{name:"staff_type",label:this.$t("staff.view_staff.staff_type"),field:"staff_type",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},sender:"",receiver:"",chat:!1,chat_list:"",chat_text:"",chat_next:null}},methods:{getList(){var e=this;l["a"].has("auth")&&Object(o["d"])(e.pathname,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var s=t.next.split(":")[0],i=t.next.replace(s,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;l["a"].has("auth")&&Object(o["d"])(e.pathname+"?staff_name__icontains="+e.filter,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var s=t.next.split(":")[0],i=t.next.replace(s,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;l["a"].has("auth")&&Object(o["d"])(e.pathname_previous,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var s=t.next.split(":")[0],i=t.next.replace(s,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;l["a"].has("auth")&&Object(o["d"])(e.pathname_next,{}).then((t=>{if(e.table_list=t.results,t.previous){var a=t.previous.split(":")[0],n=t.previous.replace(a,window.location.href.split(":")[0]);e.pathname_previous=n}else e.pathname_previous=t.previous;if(t.next){var s=t.next.split(":")[0],i=t.next.replace(s,window.location.href.split(":")[0]);e.pathname_next=i}else e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},Scan(){var e=this;e.filter="aa"},initWebSocket(){var e=this;n=new WebSocket(o["j"]+"?sender="+e.login_name+"&receiver="+e.receiver+"&openid="+e.openid),n.onmessage=e.websocketonmessage,n.onopen=e.websocketonopen,n.onerror=e.websocketonerror,n.onclose=e.websocketclose},websocketonopen(){console.log("Success Connect")},websocketonerror(){var e=this;e.initWebSocket()},websocketonmessage(e){var t=this;t.$q.sessionStorage.getItem("receiver")===JSON.parse(e.data).sender&&t.chat_list.push(JSON.parse(e.data)),t.Readnum(),t.$q.notify({message:JSON.parse(e.data).sender+"Send you a message",color:"deep-purple",icon:"textsms",position:"right",actions:[{label:"VIEW",color:"yellow",handler:()=>{t.ChatWith(JSON.parse(e.data).sender)}}]})},websocketsend(){var e=this;""===e.chat_text||(n.send(e.chat_text),e.chat_list.push({sender:e.sender+"-"+e.openid,receiver:e.receiver,detail:e.chat_text,create_time:r["a"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}),e.chat_text="")},websocketclose(e){console.log("Disconnect",e)},ChatWith(e){var t=this;t.sender=t.login_name,t.receiver=e,t.$q.sessionStorage.set("receiver",e),t.sender===t.receiver?t.$q.notify({message:"Cannot Chat with yourself",icon:"close",color:"negative"}):(t.chat=!0,t.chat_text="",t.initWebSocket(),Object(o["d"])("chat/?sender="+t.sender+"&receiver="+t.receiver).then((e=>{if(t.chat_list=e.results.reverse(),e.next){var a=e.next.split(":")[0],n=e.next.replace(a,window.location.href.split(":")[0]);t.chat_next=n}else t.chat_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},LoadChatList(){var e=this;Object(o["d"])(e.chat_next).then((t=>{if(t.results.forEach((t=>{e.chat_list.unshift(t)})),t.next){var a=t.next.split(":")[0],n=t.next.replace(a,window.location.href.split(":")[0]);e.chat_next=n}else e.chat_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ChatClose(){var e=this;e.receiver="",e.$q.sessionStorage.set("receiver",""),e.chat_list=[],e.chat_text="",e.chat_next=null}},created(){var e=this;l["a"].has("openid")?e.openid=l["a"].getItem("openid"):(e.openid="",l["a"].set("openid","")),l["a"].has("login_name")?e.login_name=l["a"].getItem("login_name"):(e.login_name="",l["a"].set("login_name","")),l["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-170)+"px":e.height=e.$q.screen.height-170+"px"},updated(){document.getElementById("chat_scroll")&&(document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight)},destroyed(){n&&n.readyState===n.OPEN&&n.close()}},p=c,h=a("42e1"),d=a("b4f0"),u=a("eaac"),f=a("e7a9"),m=a("9c40"),v=a("2c91"),_=a("27f9"),g=a("0016"),x=a("bd08"),b=a("db86"),w=a("05c0"),y=a("24e8"),k=a("f09f"),q=a("d847"),S=a("eb85"),$=a("a370"),C=a("8169"),O=a("4b7e"),Q=a("7f67"),L=a("eebe"),N=a.n(L),E=Object(h["a"])(p,s,i,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(E);t["default"]=E.exports;N()(E,"components",{QTable:u["a"],QBtnGroup:f["a"],QBtn:m["a"],QSpace:v["a"],QInput:_["a"],QIcon:g["a"],QTr:x["a"],QTd:b["a"],QTooltip:w["a"],QDialog:y["a"],QCard:k["a"],QBar:q["a"],QSeparator:S["a"],QCardSection:$["a"],QChatMessage:C["a"],QCardActions:O["a"]}),N()(E,"directives",{ClosePopup:Q["a"]})},"586c":function(e,t){},b4f0:function(e,t,a){"use strict";var n=a("586c"),s=a.n(n);t["default"]=s.a}}]);