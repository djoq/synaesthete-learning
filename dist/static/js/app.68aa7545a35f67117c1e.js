webpackJsonp([0],[,,function(t,e,s){"use strict";s.d(e,"b",function(){return r}),s.d(e,"a",function(){return c});var i=s(27),n=s.n(i),o=s(3),a=s.n(o);const r=[{title:"Modules",menu:[{path:"/home",title:"Home",component:n.a,sourceUrl:"components/Entry.vue"},{path:"/pitch-vue",title:"Pitch",component:a.a,sourceUrl:"components/PitchVue.vue"}]}],c=r.reduce(function(t,e){var s=e.menu.map(function(t){return{path:t.path,component:t.component,meta:{section:e.title,title:t.title,sourceUrl:t.sourceUrl}}});return t.concat(s)},[]);c.unshift({path:"/",redirect:"/home"}),c.push({path:"*",redirect:"/over-vue"})},function(t,e,s){s(22);var i=s(0)(s(17),s(36),null,null);t.exports=i.exports},function(t,e,s){"use strict";var i=s(29),n=s.n(i),o=s(26),a=s.n(o),r=s(30),c=s.n(r),l=s(3),u=s.n(l),d={overVue:n.a,sideBar:c.a,carousel:a.a,pitch:u.a};e.a=d},function(t,e){},,function(t,e,s){s(19);var i=s(0)(s(12),s(32),null,null);t.exports=i.exports},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9),n=s.n(i),o=s(7),a=s.n(o),r=s(8),c=s(2),l=s(6),u=(s.n(l),s(5)),d=(s.n(u),s(4));n.a.config.productionTip=!1,n.a.component("About",d.a.overVue),n.a.component("Carousel",d.a.carousel),n.a.component("Test",d.a.Test),n.a.component("Test",d.a.Test),n.a.component("Pitch",d.a.Pitch),n.a.component("side-bar",d.a.sideBar),n.a.component("ui-button",l.UiButton),n.a.component("ui-modal",l.UiModal),n.a.component("ui-tab",l.UiTab),n.a.component("ui-tabs",l.UiTabs),n.a.component("ui-textbox",l.UiTextbox),n.a.component("ui-icon",l.UiIcon),n.a.component("ui-select",l.UiSelect),n.a.component("ui-icon-button",l.UiIconButton),n.a.use(r.a);const h=new r.a({routes:c.a,linkActiveClass:"is-active"});new n.a({el:"#app",mounted:function(){console.log("[MAIN::MOUNTED]",window.location)},router:h,template:"<App/>",components:{App:a.a,UiTab:l.UiTab,UiTabs:l.UiTabs,UiButton:l.UiButton}})},function(t,e,s){"use strict";e.a=class{constructor(t){this.C1_HZ_VALUE=32.7,this.audioContext=new AudioContext,this.oscillator=void 0,this.gainNode=void 0,this.oscillatorType=t,this.keyRange=["C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5"],this.detuneRange=this.keyRange.reduce(function(t,e,s){return t[e]=100*s,t},{})}playTone(t){this.createDevices(),this.setTone(t),this.setOscillatorType(this.oscillatorType),this.connectDevices(),this.setGainNode(1),this.oscillator.start(this.audioContext.currentTime),this.fxFadeOut(2)}stopTone(){console.log(this.oscillator),this.oscillator.stop(this.audioContext.currentTime)}createDevices(){this.gainNode=this.audioContext.createGain(),this.oscillator=this.audioContext.createOscillator()}connectDevices(){this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)}setTone(t){this.oscillator.frequency.value=this.C1_HZ_VALUE,this.oscillator.detune.value=this.detuneRange[t]}setOscillatorType(t){this.oscillator.type=t}setGainNode(t){this.gainNode.gain.setValueAtTime(t,this.audioContext.currentTime)}fxFadeOut(t){this.gainNode.gain.linearRampToValueAtTime(0,this.audioContext.currentTime+t),this.oscillator.stop(this.audioContext.currentTime+t)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:()=>({showSidebar:!1,description:"Project for learning"}),watch:{$route(){this.updatePageTitle(),this.$nextTick(()=>{this.$refs.pageContent.scrollTop=0,this.showSidebar=!1})}},mounted(){this.updatePageTitle()},methods:{updatePageTitle(){document.title=this.$route.meta.title+" | "+this.description}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"carousel",props:{length:{type:Number,required:!0}},data(){return{items:Array.from({length:this.length},(t,e)=>e+1),nextNum:this.$slots.length+1}},methods:{prev:function(){var t=this.items.pop();this.items.splice(0,0,t)},next:function(){var t=this.items.shift();this.items.push(t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"entry",data:()=>({msg:"Module List"})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String},tone:{type:String}},methods:{onPressedKey(t){this.$emit("keyPressed",t.target.dataset.tone)},onReleasedKey(){this.$emit("keyReleased")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"overview",data:()=>({msg:"Overview"})}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(11),n=s(28),o=s.n(n);e.default={name:"Pitch",components:{Key:o.a},data:()=>({msg:"Learning pitch through color associations",synthesizer:null,canvas:null,timer:null,note:null,playing:!1,cmajcolors:["#F32F01","#E38F04","#FEF200","#AAEC09","#25A9EF","#B43EF7","#FB1EE5"],cmajor:["C3","D3","E3","F3","G3","A3","B3"],score:{right:0,wrong:0}}),methods:{keyPressed(t){this.$emit("keyPressed",t),this.synthesizer.playTone(t)},color(){document.getElementById("canv").style.opacity=1,this.canvas.fillStyle=this.cmajcolors[this.note],this.canvas.fillRect(0,0,400,400)},game(){this.canvas.fillStyle="#FFFFFF",this.canvas.fillRect(0,0,400,400),this.note=Math.floor(7*Math.random()),this.synthesizer.playTone(this.cmajor[this.note]),setTimeout(this.color,2e3)},play(){let t=new Date;this.timer=t.getTime(),this.game()},start(){document.getElementById("canv").style.opacity=0,this.playing=!0,this.play()},answer(t){let e=new Date;this.playing=!1;var s=e.getTime()-this.timer;console.log("time to answer ->",s),console.log("chose ->",t.target.parentElement.id),this.cmajor[this.note].includes(t.target.parentElement.id)?this.score.right+=1:this.score.wrong+=1,setTimeout(this.start,2e3)},enterEl(t,e){e()},leaveEl(t,e){e()}},mounted(){var t=document.getElementById("canv").getContext("2d");this.canvas=t},created(){this.synthesizer=new i.a("triangle")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2);e.default={name:"sidebar",data:()=>({application:"app1",brand:"synaesthesia",menu:i.b}),methods:{onVersionSelect(t){}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,s){s(21);var i=s(0)(s(13),s(35),"data-v-5ee8c219",null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(14),s(33),null,null);t.exports=i.exports},function(t,e,s){s(20);var i=s(0)(s(15),s(34),null,null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(16),s(37),null,null);t.exports=i.exports},function(t,e,s){var i=s(0)(s(18),s(31),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("aside",{staticClass:"keen-docs-sidebar"},[s("div",{staticClass:"keen-docs-sidebar__header"},[s("span",{staticClass:"keen-docs-sidebar__header-brand"},[t._v(t._s(t.brand))]),t._v(" "),s("a",{staticClass:"keen-docs-sidebar__header-version",attrs:{href:"#/",rel:"noopener",title:"View application"}},[t._v(t._s(t.application))])]),t._v(" "),s("div",{staticClass:"keen-docs-sidebar__scrollable"},[t._m(0),t._v(" "),s("div",{staticClass:"keen-docs-sidebar__version-select"},[s("ui-select",{attrs:{options:["app1"]},on:{select:t.onVersionSelect},model:{value:t.application,callback:function(e){t.application=e},expression:"application"}},[t._v("Version")])],1),t._v(" "),s("ul",{staticClass:"keen-docs-sidebar__menu"},[s("li",{staticClass:"keen-docs-sidebar__menu-section"}),t._v(" "),t._l(t.menu,function(e){return s("li",{key:e.title,staticClass:"keen-docs-sidebar__menu-section"},[s("div",{staticClass:"keen-docs-sidebar__menu-section-header"},[t._v(t._s(e.title))]),t._v(" "),s("ul",{staticClass:"keen-docs-sidebar__menu-section-links"},t._l(e.menu,function(e){return s("li",{key:e.path},[s("router-link",{staticClass:"keen-docs-sidebar__menu-item",attrs:{exact:"",to:e.path}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])],1)}),0)])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keen-docs-sidebar__description"},[e("p",[this._v("A collection of essential learning modules by way of synesthesia.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keen-docs",attrs:{id:"app"}},[s("side-bar",{staticClass:"is-desktop"}),t._v(" "),s("transition",{attrs:{name:"transition-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showSidebar,expression:"showSidebar"}],staticClass:"keen-docs-mobile-sidebar__backdrop",on:{click:function(e){t.showSidebar=!1}}})]),t._v(" "),s("transition",{attrs:{name:"transition-slide"}},[s("side-bar",{directives:[{name:"show",rawName:"v-show",value:t.showSidebar,expression:"showSidebar"}],staticClass:"is-mobile"})],1),t._v(" "),s("div",{staticClass:"keen-docs-content__toolbar"},[s("div",{staticClass:"keen-docs-content__toolbar-content"},[s("ui-icon-button",{staticClass:"keen-docs-content__toolbar-menu-button",attrs:{color:"white",type:"clear"},on:{click:function(e){t.showSidebar=!0}}},[s("ui-icon",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M3 6h18v2.016H3V6zm0 6.984v-1.97h18v1.97H3zM3 18v-2.016h18V18H3z"}})])])],1),t._v(" "),s("h1",{staticClass:"keen-docs-content__toolbar-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),t.$route.meta.sourceUrl?s("a",{staticClass:"keen-docs-content__toolbar-action",attrs:{rel:"noopener",target:"_blank",href:"https://github.com/djoq/vuex-boilerplate/blob/master/src/"+t.$route.meta.sourceUrl}},[t._v("View Source")]):t._e()],1)]),t._v(" "),s("div",{ref:"pageContent",staticClass:"keen-docs-content__page-content is-desktop"},[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"entry"},[e("h3",[this._v(" "+this._s(this.msg)+" ")]),this._v(" "),e("a",{attrs:{href:"/#/pitch-vue"}},[this._v("Pitch Trainer")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["key",t.type],attrs:{"data-tone":t.tone},on:{mousedown:t.onPressedKey,touchstart:t.onPressedKey,mouseup:t.onReleasedKey,touchend:t.onReleasedKey}},["C3"===t.tone?s("span"):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carousel"},[s("div",{staticClass:"container"},[s("div",{staticClass:"carousel ORcarousel--vertical"},[s("div",{staticClass:"carousel__container"},[s("transition-group",{attrs:{name:"list-complete"}},t._l(t.items,function(e){return s("div",{key:e,staticClass:"carousel-item"},[t._t(e)],2)}),0)],1),t._v(" "),s("div",{staticClass:"carousel__controll"},[s("a",{attrs:{href:"#/"}},[s("i",{staticClass:"material-icons left-arrow",on:{click:t.prev}},[t._v("keyboard_arrow_left")])]),t._v(" "),s("a",{attrs:{href:"#/"}},[s("i",{staticClass:"material-icons right-arrow",on:{click:t.next}},[t._v("keyboard_arrow_right")])])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pitch"},[s("h3",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),t._m(0),t._v(" "),s("h4",[t._v(" Score: "+t._s(t.score.right)+" / "+t._s(t.score.right+t.score.wrong))]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("ui-button",{staticStyle:{display:"inline-flex"},attrs:{color:"primary"},on:{click:t.start}},[t._v(" Start ")]),t._v(" "),s("hr"),t._v(" "),s("transition",{attrs:{name:"fade",css:!1},on:{enter:t.enterEl,leave:t.leaveEl}},[s("canvas",{attrs:{id:"canv",width:"400",height:"256"}})]),t._v(" "),s("img",{attrs:{src:"/static/chakras.jpeg",width:"400"}}),t._v(" "),s("hr"),t._v(" "),s("div",[s("ui-button",{attrs:{color:"red",id:"C"},on:{click:t.answer}},[t._v(" C ")]),t._v(" "),s("ui-button",{attrs:{color:"orange",id:"D"},on:{click:t.answer}},[t._v(" D ")]),t._v(" "),s("ui-button",{attrs:{id:"E"},on:{click:t.answer}},[t._v(" E ")]),t._v(" "),s("ui-button",{attrs:{color:"green",id:"F"},on:{click:t.answer}},[t._v(" F ")]),t._v(" "),s("ui-button",{attrs:{color:"primary",id:"G"},on:{click:t.answer}},[t._v(" G ")]),t._v(" "),s("ui-button",{attrs:{color:"accent",id:"A"},on:{click:t.answer}},[t._v(" A ")]),t._v(" "),s("ui-button",{attrs:{id:"B"},on:{click:t.answer}},[t._v(" B ")])],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Instructions: ")]),this._v(" Try to match the note to the color prior to the color appearing.")])}]}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overview"},[e("h3",[this._v(" "+this._s(this.msg)+" ")])])},staticRenderFns:[]}}],[10]);