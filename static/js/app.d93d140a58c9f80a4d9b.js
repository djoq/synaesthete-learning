webpackJsonp([1],{141:function(t,e,s){var n=s(1)(s(156),s(178),null,null);t.exports=n.exports},142:function(t,e,s){var n=s(1)(s(157),s(176),null,null);t.exports=n.exports},143:function(t,e,s){"use strict";var n=s(170),a=s.n(n),i=s(167),o=s.n(i),r=s(171),c=s.n(r),l=s(142),u=s.n(l),d=s(141),h=s.n(d),p={overVue:a.a,sideBar:c.a,carousel:o.a,pitch:u.a,sample:h.a};e.a=p},144:function(t,e){},146:function(t,e,s){s(160);var n=s(1)(s(151),s(173),null,null);t.exports=n.exports},149:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(148),a=s.n(n),i=s(146),o=s.n(i),r=s(147),c=s(3),l=s(145),u=(s.n(l),s(144)),d=(s.n(u),s(143));a.a.config.productionTip=!1,a.a.component("About",d.a.overVue),a.a.component("Carousel",d.a.carousel),a.a.component("Test",d.a.Test),a.a.component("Test",d.a.Test),a.a.component("Pitch",d.a.Pitch),a.a.component("Performance",d.a.Performance),a.a.component("side-bar",d.a.sideBar),a.a.component("ui-button",l.UiButton),a.a.component("ui-modal",l.UiModal),a.a.component("ui-tab",l.UiTab),a.a.component("ui-tabs",l.UiTabs),a.a.component("ui-textbox",l.UiTextbox),a.a.component("ui-icon",l.UiIcon),a.a.component("ui-select",l.UiSelect),a.a.component("ui-icon-button",l.UiIconButton),a.a.use(r.a);const h=new r.a({routes:c.a,linkActiveClass:"is-active"});new a.a({el:"#app",mounted:function(){console.log("[MAIN::MOUNTED]",window.location)},router:h,template:"<App/>",components:{App:o.a,UiTab:l.UiTab,UiTabs:l.UiTabs,UiButton:l.UiButton}})},150:function(t,e,s){"use strict";e.a=class{constructor(t){this.C1_HZ_VALUE=32.7,this.audioContext=new AudioContext,this.oscillator=void 0,this.gainNode=void 0,this.oscillatorType=t,this.keyRange=["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5"],this.detuneRange=this.keyRange.reduce(function(t,e,s){return t[e]=100*s,t},{})}playTone(t){this.createDevices(),this.setTone(t),this.setOscillatorType(this.oscillatorType),this.connectDevices(),this.setGainNode(1),this.oscillator.start(this.audioContext.currentTime),this.fxFadeOut(2)}stopTone(){console.log(this.oscillator),this.oscillator.stop(this.audioContext.currentTime)}createDevices(){this.gainNode=this.audioContext.createGain(),this.oscillator=this.audioContext.createOscillator()}connectDevices(){this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)}setTone(t){this.oscillator.frequency.value=this.C1_HZ_VALUE,this.oscillator.detune.value=this.detuneRange[t]}setOscillatorType(t){this.oscillator.type=t}setGainNode(t){this.gainNode.gain.setValueAtTime(t,this.audioContext.currentTime)}fxFadeOut(t){this.gainNode.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+t),this.oscillator.stop(this.audioContext.currentTime+t)}}},151:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:()=>({showSidebar:!1,description:"Project for learning"}),watch:{$route(){this.updatePageTitle(),this.$nextTick(()=>{this.$refs.pageContent.scrollTop=0,this.showSidebar=!1})}},mounted(){this.updatePageTitle()},methods:{updatePageTitle(){document.title=this.$route.meta.title+" | "+this.description}}}},152:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"carousel",props:{length:{type:Number,required:!0}},data(){return{items:Array.from({length:this.length},(t,e)=>e+1),nextNum:this.$slots.length+1}},methods:{prev:function(){var t=this.items.pop();this.items.splice(0,0,t)},next:function(){var t=this.items.shift();this.items.push(t)}}}},153:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"entry",data:()=>({msg:"Module List"})}},154:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String},tone:{type:String}},methods:{onPressedKey(t){this.$emit("keyPressed",t.target.dataset.tone)},onReleasedKey(){this.$emit("keyReleased")}}}},155:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"overview",data:()=>({msg:"Overview"})}},156:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(159);s.n(n);e.default={name:"analytics",data:()=>({msg:"Analytics",data:window.localStorage}),methods:{displayDate(t){var e=new Date(1970,0,1);return e.setSeconds(t),e},displayData(t,e){let s=JSON.parse(e.getItem(t));return s.endedAt=t,s},clearStorage(){window.localStorage.clear(),this.data=[]},drawChart(){console.log("drawChart")}},components:{Chart:n.Chart},mounted(){const t=document.getElementById("myChart");new n.Chart(t,{type:"bar",data:{labels:Object.keys(this.data).map(this.displayDate),datasets:[{label:"Percent Perfect Pitch",data:Object.keys(this.data).map(t=>{let e=JSON.parse(this.data[t]);return e.correct/(e.correct+e.wrong)*100}),borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}}},157:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(150),a=s(169),i=s.n(a);e.default={name:"Pitch",components:{Key:i.a},data:()=>({msg:"Learning pitch through color associations",synthesizer:null,canvas:null,timer:null,note:null,playing:!1,paused:!1,pauseOrResume:"Pause",cmajcolors:["#F32F01","#E38F04","#FEF200","#AAEC09","#25A9EF","#B43EF7","#FB1EE5"],cmajor:["C3","D3","E3","F3","G3","A3","B3"],score:{correct:0,wrong:0,startedAt:0,endedAt:0,answers:[]},rootPath:"/synaesthete-learning/"}),methods:{keyPressed(t){this.$emit("keyPressed",t),this.playing&&this.synthesizer.playTone(t)},color(){document.getElementById("canv").style.opacity=1,this.canvas.fillStyle=this.cmajcolors[this.note],this.canvas.fillRect(0,0,400,400)},game(){this.canvas.fillStyle="#FFFFFF",this.canvas.fillRect(0,0,400,400),this.note=Math.floor(7*Math.random()),this.synthesizer.playTone(this.cmajor[this.note]),setTimeout(this.color,2e3)},play(){let t=new Date;this.timer=t.getTime(),this.game()},start(){document.getElementById("canv").style.opacity=0,this.paused||(this.playing=!0,this.play(),this.score.startedAt=(new Date).getTime())},pause(){this.paused=!this.paused,this.paused?this.pauseOrResume="Resume":(this.start(),this.pauseOrResume="Pause")},end(){let t=(new Date).getTime();this.playing=!1,window.localStorage.setItem(t,JSON.stringify(this.score))},answer(t){this.playing=!1,this.cmajor[this.note].includes(t.target.parentElement.id)?this.score.correct+=1:this.score.wrong+=1,this.score.answers.push({selectedNote:t.target.parentElement.id,correctNote:this.cmajor[this.note],timeAnswered:(new Date).getTime()}),setTimeout(this.start,2e3)},enterEl(t,e){e()},leaveEl(t,e){e()}},mounted(){var t=document.getElementById("canv").getContext("2d");this.canvas=t},created(){this.synthesizer=new n.a("triangle")}}},158:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3);e.default={name:"sidebar",data:()=>({application:"Music",brand:"Synaesthesia",menu:n.b}),methods:{onVersionSelect(t){}}}},160:function(t,e){},161:function(t,e){},162:function(t,e){},163:function(t,e,s){var n={"./af":4,"./af.js":4,"./ar":12,"./ar-dz":5,"./ar-dz.js":5,"./ar-kw":6,"./ar-kw.js":6,"./ar-ly":7,"./ar-ly.js":7,"./ar-ma":8,"./ar-ma.js":8,"./ar-ps":9,"./ar-ps.js":9,"./ar-sa":10,"./ar-sa.js":10,"./ar-tn":11,"./ar-tn.js":11,"./ar.js":12,"./az":13,"./az.js":13,"./be":14,"./be.js":14,"./bg":15,"./bg.js":15,"./bm":16,"./bm.js":16,"./bn":18,"./bn-bd":17,"./bn-bd.js":17,"./bn.js":18,"./bo":19,"./bo.js":19,"./br":20,"./br.js":20,"./bs":21,"./bs.js":21,"./ca":22,"./ca.js":22,"./cs":23,"./cs.js":23,"./cv":24,"./cv.js":24,"./cy":25,"./cy.js":25,"./da":26,"./da.js":26,"./de":29,"./de-at":27,"./de-at.js":27,"./de-ch":28,"./de-ch.js":28,"./de.js":29,"./dv":30,"./dv.js":30,"./el":31,"./el.js":31,"./en-au":32,"./en-au.js":32,"./en-ca":33,"./en-ca.js":33,"./en-gb":34,"./en-gb.js":34,"./en-ie":35,"./en-ie.js":35,"./en-il":36,"./en-il.js":36,"./en-in":37,"./en-in.js":37,"./en-nz":38,"./en-nz.js":38,"./en-sg":39,"./en-sg.js":39,"./eo":40,"./eo.js":40,"./es":44,"./es-do":41,"./es-do.js":41,"./es-mx":42,"./es-mx.js":42,"./es-us":43,"./es-us.js":43,"./es.js":44,"./et":45,"./et.js":45,"./eu":46,"./eu.js":46,"./fa":47,"./fa.js":47,"./fi":48,"./fi.js":48,"./fil":49,"./fil.js":49,"./fo":50,"./fo.js":50,"./fr":53,"./fr-ca":51,"./fr-ca.js":51,"./fr-ch":52,"./fr-ch.js":52,"./fr.js":53,"./fy":54,"./fy.js":54,"./ga":55,"./ga.js":55,"./gd":56,"./gd.js":56,"./gl":57,"./gl.js":57,"./gom-deva":58,"./gom-deva.js":58,"./gom-latn":59,"./gom-latn.js":59,"./gu":60,"./gu.js":60,"./he":61,"./he.js":61,"./hi":62,"./hi.js":62,"./hr":63,"./hr.js":63,"./hu":64,"./hu.js":64,"./hy-am":65,"./hy-am.js":65,"./id":66,"./id.js":66,"./is":67,"./is.js":67,"./it":69,"./it-ch":68,"./it-ch.js":68,"./it.js":69,"./ja":70,"./ja.js":70,"./jv":71,"./jv.js":71,"./ka":72,"./ka.js":72,"./kk":73,"./kk.js":73,"./km":74,"./km.js":74,"./kn":75,"./kn.js":75,"./ko":76,"./ko.js":76,"./ku":78,"./ku-kmr":77,"./ku-kmr.js":77,"./ku.js":78,"./ky":79,"./ky.js":79,"./lb":80,"./lb.js":80,"./lo":81,"./lo.js":81,"./lt":82,"./lt.js":82,"./lv":83,"./lv.js":83,"./me":84,"./me.js":84,"./mi":85,"./mi.js":85,"./mk":86,"./mk.js":86,"./ml":87,"./ml.js":87,"./mn":88,"./mn.js":88,"./mr":89,"./mr.js":89,"./ms":91,"./ms-my":90,"./ms-my.js":90,"./ms.js":91,"./mt":92,"./mt.js":92,"./my":93,"./my.js":93,"./nb":94,"./nb.js":94,"./ne":95,"./ne.js":95,"./nl":97,"./nl-be":96,"./nl-be.js":96,"./nl.js":97,"./nn":98,"./nn.js":98,"./oc-lnc":99,"./oc-lnc.js":99,"./pa-in":100,"./pa-in.js":100,"./pl":101,"./pl.js":101,"./pt":103,"./pt-br":102,"./pt-br.js":102,"./pt.js":103,"./ro":104,"./ro.js":104,"./ru":105,"./ru.js":105,"./sd":106,"./sd.js":106,"./se":107,"./se.js":107,"./si":108,"./si.js":108,"./sk":109,"./sk.js":109,"./sl":110,"./sl.js":110,"./sq":111,"./sq.js":111,"./sr":113,"./sr-cyrl":112,"./sr-cyrl.js":112,"./sr.js":113,"./ss":114,"./ss.js":114,"./sv":115,"./sv.js":115,"./sw":116,"./sw.js":116,"./ta":117,"./ta.js":117,"./te":118,"./te.js":118,"./tet":119,"./tet.js":119,"./tg":120,"./tg.js":120,"./th":121,"./th.js":121,"./tk":122,"./tk.js":122,"./tl-ph":123,"./tl-ph.js":123,"./tlh":124,"./tlh.js":124,"./tr":125,"./tr.js":125,"./tzl":126,"./tzl.js":126,"./tzm":128,"./tzm-latn":127,"./tzm-latn.js":127,"./tzm.js":128,"./ug-cn":129,"./ug-cn.js":129,"./uk":130,"./uk.js":130,"./ur":131,"./ur.js":131,"./uz":133,"./uz-latn":132,"./uz-latn.js":132,"./uz.js":133,"./vi":134,"./vi.js":134,"./x-pseudo":135,"./x-pseudo.js":135,"./yo":136,"./yo.js":136,"./zh-cn":137,"./zh-cn.js":137,"./zh-hk":138,"./zh-hk.js":138,"./zh-mo":139,"./zh-mo.js":139,"./zh-tw":140,"./zh-tw.js":140};function a(t){return s(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=163},167:function(t,e,s){s(162);var n=s(1)(s(152),s(177),"data-v-5ee3f746",null);t.exports=n.exports},168:function(t,e,s){var n=s(1)(s(153),s(174),null,null);t.exports=n.exports},169:function(t,e,s){s(161);var n=s(1)(s(154),s(175),null,null);t.exports=n.exports},170:function(t,e,s){var n=s(1)(s(155),s(172),null,null);t.exports=n.exports},171:function(t,e,s){var n=s(1)(s(158),s(179),null,null);t.exports=n.exports},172:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overview"},[e("h3",[this._v(" "+this._s(this.msg)+" ")])])},staticRenderFns:[]}},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keen-docs",attrs:{id:"app"}},[s("side-bar",{staticClass:"is-desktop"}),t._v(" "),s("transition",{attrs:{name:"transition-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSidebar,expression:"showSidebar"}],staticClass:"keen-docs-mobile-sidebar__backdrop",on:{click:function(e){t.showSidebar=!1}}})]),t._v(" "),s("transition",{attrs:{name:"transition-slide"}},[s("side-bar",{directives:[{name:"show",rawName:"v-show",value:t.showSidebar,expression:"showSidebar"}],staticClass:"is-mobile"})],1),t._v(" "),s("div",{staticClass:"keen-docs-content__toolbar"},[s("div",{staticClass:"keen-docs-content__toolbar-content"},[s("ui-icon-button",{staticClass:"keen-docs-content__toolbar-menu-button",attrs:{color:"white",type:"clear"},on:{click:function(e){t.showSidebar=!0}}},[s("ui-icon",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M3 6h18v2.016H3V6zm0 6.984v-1.97h18v1.97H3zM3 18v-2.016h18V18H3z"}})])])],1),t._v(" "),s("h1",{staticClass:"keen-docs-content__toolbar-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),t.$route.meta.sourceUrl?s("a",{staticClass:"keen-docs-content__toolbar-action",attrs:{rel:"noopener",target:"_blank",href:"https://github.com/djoq/vuex-boilerplate/blob/master/src/"+t.$route.meta.sourceUrl}},[t._v("View Source")]):t._e()],1)]),t._v(" "),s("div",{ref:"pageContent",staticClass:"keen-docs-content__page-content is-desktop"},[s("router-view")],1)],1)},staticRenderFns:[]}},174:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry"},[e("h3",[this._v(" "+this._s(this.msg)+" ")]),this._v(" "),e("a",{attrs:{href:"/synaesthete-learning/#/pitch-vue"}},[this._v("Pitch Trainer")])])},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["key",t.type],attrs:{"data-tone":t.tone},on:{mousedown:t.onPressedKey,touchstart:t.onPressedKey,mouseup:t.onReleasedKey,touchend:t.onReleasedKey}},["C3"===t.tone?s("span"):t._e()])},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pitch"},[s("h3",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),t._m(0),t._v(" "),s("h4",[t._v(" Score: "+t._s(t.score.correct)+" / "+t._s(t.score.correct+t.score.wrong))]),t._v(" "),s("div",{staticClass:"grid-container border"},[s("div",{staticClass:"item1"},[s("ui-button",{staticStyle:{display:"inline-flex"},attrs:{color:"primary"},on:{click:t.start}},[t._v(" Start ")]),t._v(" "),s("ui-button",{staticStyle:{display:"inline-flex"},attrs:{color:"orange"},on:{click:t.pause}},[t._v(" "+t._s(t.pauseOrResume)+" ")]),t._v(" "),s("ui-button",{staticStyle:{display:"inline-flex"},attrs:{color:"red"},on:{click:t.end}},[t._v(" End and Save ")]),t._v(" "),s("hr"),t._v(" "),s("transition",{attrs:{name:"fade",css:!1},on:{enter:t.enterEl,leave:t.leaveEl}},[s("canvas",{attrs:{id:"canv",width:"400",height:"259"}})]),t._v(" "),s("img",{attrs:{src:t.rootPath+"static/chakras.jpeg",width:"400"}})],1),t._v(" "),s("div",{staticClass:"item2"},[s("ui-button",{attrs:{color:"red",id:"C"},on:{click:t.answer}},[t._v(" C ")]),t._v(" "),s("ui-button",{attrs:{color:"orange",id:"D"},on:{click:t.answer}},[t._v(" D ")]),t._v(" "),s("ui-button",{attrs:{id:"E"},on:{click:t.answer}},[t._v(" E ")]),t._v(" "),s("ui-button",{attrs:{color:"green",id:"F"},on:{click:t.answer}},[t._v(" F ")]),t._v(" "),s("ui-button",{attrs:{color:"primary",id:"G"},on:{click:t.answer}},[t._v(" G ")]),t._v(" "),s("ui-button",{attrs:{color:"accent",id:"A"},on:{click:t.answer}},[t._v(" A ")]),t._v(" "),s("ui-button",{attrs:{id:"B"},on:{click:t.answer}},[t._v(" B ")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Instructions: ")]),this._v(" Try to match the note to the color prior to the color appearing.")])}]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel"},[s("div",{staticClass:"container"},[s("div",{staticClass:"carousel ORcarousel--vertical"},[s("div",{staticClass:"carousel__container"},[s("transition-group",{attrs:{name:"list-complete"}},t._l(t.items,function(e){return s("div",{key:e,staticClass:"carousel-item"},[t._t(e)],2)}),0)],1),t._v(" "),s("div",{staticClass:"carousel__controll"},[s("a",{attrs:{href:"#/"}},[s("i",{staticClass:"material-icons left-arrow",on:{click:t.prev}},[t._v("keyboard_arrow_left")])]),t._v(" "),s("a",{attrs:{href:"#/"}},[s("i",{staticClass:"material-icons right-arrow",on:{click:t.next}},[t._v("keyboard_arrow_right")])])])])])])},staticRenderFns:[]}},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"analytics"},[s("h3",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),s("h4",{staticClass:"page__demo-title"},[t._v("Select a report to view. ")]),t._v(" "),s("div",{staticClass:"page__demo-group"},[s("ui-button",{attrs:{"has-dropdown":"",size:t.size}},[s("div",{staticClass:"keen-docs__custom-popover-content",attrs:{slot:"dropdown"},slot:"dropdown"},[s("p",[s("b",[t._v("Default Report ")]),t._v(" here!")]),t._v(" "),s("p",[t._v("More reports available soon, here is the percentage correct!")])]),t._v("\n\n      Click to select metric type\n    ")])],1),t._v(" "),s("canvas",{attrs:{id:"myChart"}}),t._v(" "),s("div",[s("h4",[t._v(" Saved Responses ")]),t._v(" "),t._l(t.data,function(e,n){e.correct,e.wrong;return s("li",[t._v("\n      "+t._s(t.displayData(n,t.data))+"\n    ")])}),t._v(" "),s("ui-button",{staticStyle:{display:"inline-flex"},attrs:{color:"primary"},on:{click:t.clearStorage}},[t._v(" Clear Storage ")])],2)])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"keen-docs-sidebar"},[s("div",{staticClass:"keen-docs-sidebar__header"},[s("span",{staticClass:"keen-docs-sidebar__header-brand"},[t._v(t._s(t.brand))]),t._v(" "),s("a",{staticClass:"keen-docs-sidebar__header-version",attrs:{href:"#/",rel:"noopener",title:"View application"}},[t._v(t._s(t.application))])]),t._v(" "),s("div",{staticClass:"keen-docs-sidebar__scrollable"},[t._m(0),t._v(" "),s("div",{staticClass:"keen-docs-sidebar__version-select"},[s("ui-select",{attrs:{options:["Music"]},on:{select:t.onVersionSelect},model:{value:t.application,callback:function(e){t.application=e},expression:"application"}},[t._v("Version")])],1),t._v(" "),s("ul",{staticClass:"keen-docs-sidebar__menu"},[s("li",{staticClass:"keen-docs-sidebar__menu-section"}),t._v(" "),t._l(t.menu,function(e){return s("li",{key:e.title,staticClass:"keen-docs-sidebar__menu-section"},[s("div",{staticClass:"keen-docs-sidebar__menu-section-header"},[t._v(t._s(e.title))]),t._v(" "),s("ul",{staticClass:"keen-docs-sidebar__menu-section-links"},t._l(e.menu,function(e){return s("li",{key:e.path},[s("router-link",{staticClass:"keen-docs-sidebar__menu-item",attrs:{exact:"",to:e.path}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1)}),0)])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keen-docs-sidebar__description"},[e("p",[this._v("A collection of essential learning modules by way of synesthesia.")])])}]}},3:function(t,e,s){"use strict";s.d(e,"b",function(){return l}),s.d(e,"a",function(){return u});var n=s(168),a=s.n(n),i=s(142),o=s.n(i),r=s(141),c=s.n(r);const l=[{title:"Modules",menu:[{path:"/home",title:"Home",component:a.a,sourceUrl:"components/Entry.vue"},{path:"/pitch-vue",title:"Pitch",component:o.a,sourceUrl:"components/PitchVue.vue"},{path:"/Performance",title:"Performance",component:c.a,sourceUrl:"components/Performance"}]}],u=l.reduce(function(t,e){var s=e.menu.map(function(t){return{path:t.path,component:t.component,meta:{section:e.title,title:t.title,sourceUrl:t.sourceUrl}}});return t.concat(s)},[]);u.unshift({path:"/",redirect:"/home"}),u.push({path:"*",redirect:"/over-vue"})}},[149]);