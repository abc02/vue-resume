webpackJsonp([1],Array(26).concat([function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,r){function s(e){r(88)}var n=r(3)(r(53),r(105),s,null,null);e.exports=n.exports},,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(65),n=r.n(s),o=r(101),a=r.n(o),i=r(96),c=r.n(i),l=r(95),u=r.n(l),v=r(97),p=r.n(v),f=r(23),m=r.n(f),d={currentUser:null,objectId:null,currentTab:0,profile:{name:"",citry:"",birth:""},workHistory:[{company:"",content:""}],projects:[{name:"",content:""}],school:[{name:"",major:""}],contact:{phone:"",wechat:"",email:""}};t.default={components:{Topbar:a.a,NavEditor:c.a,Editor:u.a,Preview:p.a},data:function(){return{isPreviewNode:!1,resume:d}},methods:{isPreview:function(){this.isPreviewNode=!this.isPreviewNode},saveData:function(){console.log("data",this.resume.id),this.resume.id?this.updataLeancloud():this.saveInitData()},saveInitData:function(){var e=this;console.log("saveData");var t=n()(this.resume),r=m.a.Object.extend("resumefile"),s=new r,o=new m.a.ACL;o.setReadAccess(m.a.User.current(),!0),o.setWriteAccess(m.a.User.current(),!0),s.set("resumefile",t),s.setACL(o),s.save().then(function(t){e.resume.id=t.id,console.log("objectId is "+t.id)},function(e){console.error(e)})},readOldData:function(){console.log("readOldData");var e=window.localStorage.getItem("myresume"),t=JSON.parse(e);this.resume=t||d},readLeancloud:function(e){var t=this;if(this.resume.currentUser=e,e||(this.resume=d),console.log(e),e){new m.a.Query("resumefile").find().then(function(e){var r=e[0],s=r.id;console.log(r,s),t.resume=JSON.parse(r.attributes.resumefile),t.resume.id=s},function(e){console.error(e)})}},updataLeancloud:function(){var e=m.a.Object.createWithoutData("resumefile",this.resume.id),t=n()(this.resume);e.set("resumefile",t),e.save()}},created:function(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["buttonType"],methods:{emptyData:function(){var e=this.buttonType.type;(0,this.buttonType.callBlacks[0])(e)},addData:function(){var e=this.buttonType.type;(0,this.buttonType.callBlacks[1])(e)},removeData:function(e){this.projects.splice(e,1)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["contact"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(98),n=r.n(s),o=r(102),a=r.n(o),i=r(99),c=r.n(i),l=r(100),u=r.n(l),v=r(94),p=r.n(v),f=r(93),m=r.n(f);t.default={props:["resume"],data:function(){return{show:!0,porfileButton:{type:"profile",msg:["清空"],callBlacks:[this.emptyData]},workHistoryButton:{type:"workHistory",msg:["清空","新增"],callBlacks:[this.emptyData,this.addData]},projectsButton:{type:"projects",msg:["清空","新增"],callBlacks:[this.emptyData,this.addData]},schoolButton:{type:"school",msg:["清空","新增"],callBlacks:[this.emptyData,this.addData]},contactButton:{type:"contact",msg:["清空"],callBlacks:[this.emptyData]}}},components:{ProfileEditor:n.a,WorkHistoryEditor:a.a,ProjectEditor:c.a,SchoolEditor:u.a,ContactEditor:p.a,ButtonGroup:m.a},methods:{addData:function(e){var t=this.resume[e];if(Array.isArray(t))switch(e){case"workHistory":t.push({company:"",content:""});break;case"projects":t.push({name:"",content:""});break;case"school":t.push({name:"",major:""})}},emptyData:function(e){var t=this.resume[e];if(Array.isArray(t))console.log("arr"),t.map(function(e){for(var t in e)e[t]=""});else{console.log("obj");for(var r in t)t[r]=""}},test:function(){console.log("transitionend ")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resume"],data:function(){return{icons:["card","works","skill","school","phone"]}},methods:{preview:function(){this.$emit("preview")},saveData:function(){this.$emit("saveData")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["resume"],methods:{filter:function(e){var t=this;return e.filter(function(e){return!t.isEmpty(e)})},isEmpty:function(e){var t=!0;for(var r in e)if(e[r]){t=!1;break}return t}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["profile"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["projects"],methods:{removeProject:function(e){this.projects.splice(e,1)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["school"],methods:{removeSchool:function(e){this.school.splice(e,1)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(23),n=r.n(s);n.a.init({appId:"u4iB7Lu1Pe8XqJsITRwFFhV5-gzGzoHsz",appKey:"GPkePG17AlJGYunRvLYtpoEj"}),t.default={data:function(){return{currentUser:null,formVisible:!1,isLogin:null,labelPosition:"right",formData:{user:"",pass:""}}},methods:{logInOrReg:function(e){this.formVisible=!this.formVisible,"login"===e&&(this.isLogin=!0),"reg"==e&&(this.isLogin=!1)},logOrRegEvet:function(e){e?this.loginUp():this.regUp()},regUp:function(){var e=this,t=new n.a.User;t.setUsername(this.formData.user),t.setPassword(this.formData.pass),t.signUp().then(function(t){console.log("注册成功: "+t),e.formVisible=!1},function(e){alert("已被注册",e)})},loginUp:function(){var e=this;n.a.User.logIn(this.formData.user,this.formData.pass).then(function(t){console.log("登录成功"),e.currentUser=e.getCurrentUser(),e.$emit("logined",e.currentUser)},function(e){alert("登录失败")})},logOut:function(){n.a.User.logOut(),this.formVisible=!1,this.currentUser=n.a.User.current(),this.$emit("logined",this.currentUser)},getCurrentUser:function(){var e=n.a.User.current(),t=e.id,r=e.createdAt;return{id:t,username:e.attributes.username,createdAt:r}},fecthResume:function(){}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["workHistory"],methods:{removeWorkHistory:function(e){this.workHistory.splice(e,1)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=r(30),o=r.n(n),a=r(28),i=(r.n(a),r(29)),c=(r.n(i),r(26)),l=(r.n(c),r(25)),u=r.n(l),v=r(27);r.n(v);s.default.use(u.a),s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App />",components:{App:o.a}})},,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,r){function s(e){r(87)}var n=r(3)(r(54),r(104),s,null,null);e.exports=n.exports},function(e,t,r){var s=r(3)(r(55),r(106),null,null,null);e.exports=s.exports},function(e,t,r){function s(e){r(86)}var n=r(3)(r(56),r(103),s,null,null);e.exports=n.exports},function(e,t,r){function s(e){r(89)}var n=r(3)(r(57),r(108),s,null,null);e.exports=n.exports},function(e,t,r){function s(e){r(91)}var n=r(3)(r(58),r(112),s,null,null);e.exports=n.exports},function(e,t,r){var s=r(3)(r(59),r(111),null,null,null);e.exports=s.exports},function(e,t,r){var s=r(3)(r(60),r(107),null,null,null);e.exports=s.exports},function(e,t,r){var s=r(3)(r(61),r(109),null,null,null);e.exports=s.exports},function(e,t,r){function s(e){r(90)}var n=r(3)(r(62),r(110),s,null,null);e.exports=n.exports},function(e,t,r){var s=r(3)(r(63),r(113),null,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"editor"}},[r("ol",{staticClass:"panes"},[r("transition",{attrs:{"enter-active-class":"animated bounceInLeft"},on:{transitionend:e.test}},[r("li",{directives:[{name:"show",rawName:"v-show",value:0===e.resume.currentTab,expression:"resume.currentTab === 0"}],class:{acitve:0===e.resume.currentTab}},[r("ProfileEditor",{attrs:{profile:e.resume.profile}}),e._v(" "),r("ButtonGroup",{attrs:{buttonType:e.porfileButton}})],1)]),e._v(" "),r("transition",{attrs:{"enter-active-class":"animated bounceInLeft"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:1===e.resume.currentTab,expression:"resume.currentTab ===1"}],class:{acitve:1===e.resume.currentTab}},[r("WorkHistoryEditor",{attrs:{workHistory:e.resume.workHistory}}),e._v(" "),r("ButtonGroup",{attrs:{buttonType:e.workHistoryButton}})],1)]),e._v(" "),r("transition",{attrs:{"enter-active-class":"animated bounceInLeft"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:2===e.resume.currentTab,expression:"resume.currentTab === 2"}],class:{acitve:2===e.resume.currentTab}},[r("ProjectEditor",{attrs:{projects:e.resume.projects}}),e._v(" "),r("ButtonGroup",{attrs:{buttonType:e.projectsButton}})],1)]),e._v(" "),r("transition",{attrs:{"enter-active-class":"animated bounceInLeft"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:3===e.resume.currentTab,expression:"resume.currentTab ===3"}],class:{acitve:3===e.resume.currentTab}},[r("SchoolEditor",{attrs:{school:e.resume.school}}),e._v(" "),r("ButtonGroup",{attrs:{buttonType:e.schoolButton}})],1)]),e._v(" "),r("transition",{attrs:{"enter-active-class":"animated bounceInLeft"}},[r("li",{directives:[{name:"show",rawName:"v-show",value:4===e.resume.currentTab,expression:"resume.currentTab ===4"}],class:{acitve:4===e.resume.currentTab}},[r("ContactEditor",{attrs:{contact:e.resume.contact}}),e._v(" "),r("ButtonGroup",{attrs:{buttonType:e.contactButton}})],1)])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"button-container"},[r("button",{staticClass:"empty",on:{click:e.emptyData}},[r("span",[e._v(e._s(e.buttonType.msg[0]))])]),e._v(" "),e.buttonType.msg.length>1?r("button",{staticClass:"added",on:{click:e.addData}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-save"}})]),e._v(" "),r("span",[e._v(e._s(e.buttonType.msg[1]))])]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{previewNode:e.isPreviewNode},attrs:{id:"app"}},[r("transition",{attrs:{tag:"div","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft",appear:""}},[r("NavEditor",{directives:[{name:"show",rawName:"v-show",value:!e.isPreviewNode,expression:"!isPreviewNode"}],staticClass:"naveditor",attrs:{id:"naveditor",resume:e.resume},on:{preview:e.isPreview,saveData:e.saveData}})],1),e._v(" "),r("div",{staticClass:"container"},[r("transition",{attrs:{"enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[r("Topbar",{directives:[{name:"show",rawName:"v-show",value:!e.isPreviewNode,expression:"!isPreviewNode"}],staticClass:"topbar",attrs:{id:"topbar"},on:{logined:e.readLeancloud}})],1),e._v(" "),r("main",[r("transition",{attrs:{"enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[r("Editor",{directives:[{name:"show",rawName:"v-show",value:!e.isPreviewNode,expression:"!isPreviewNode"}],staticClass:"editor",attrs:{id:"editor",resume:e.resume},on:{saveData:e.saveData}})],1),e._v(" "),r("Preview",{staticClass:"preview",attrs:{id:"preview",resume:e.resume}})],1),e._v(" "),r("div",{attrs:{id:"exitPreview"},on:{click:e.isPreview}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true "}},[r("use",{attrs:{"xlink:href":"#icon-exit"}})])])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("联系方式")]),e._v(" "),r("el-form",[r("div",{staticClass:"container"},[r("el-form-item",{attrs:{label:"手机"}},[r("el-input",{attrs:{placeholder:"请填写手机号码"},model:{value:e.contact.phone,callback:function(t){e.contact.phone=t},expression:"contact.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"微信"}},[r("el-input",{attrs:{placeholder:"请填写微信号"},model:{value:e.contact.wechat,callback:function(t){e.contact.wechat=t},expression:"contact.wechat"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{attrs:{placeholder:"请填写电子邮箱"},model:{value:e.contact.email,callback:function(t){e.contact.email=t},expression:"contact.email"}})],1)],1)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("前端项目")]),e._v(" "),r("el-form",e._l(e.projects,function(t,s){return r("div",{staticClass:"container"},[r("el-form-item",{attrs:{label:"项目名称"}},[r("el-input",{attrs:{placeholder:"请填写项目名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"item.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目内容"}},[r("el-input",{attrs:{placeholder:"请填写项目内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"item.content"}})],1),e._v(" "),e.projects.length>1?r("i",{staticClass:"el-icon-circle-cross",on:{click:function(t){e.removeProject(s)}}}):e._e()],1)}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"naveditor"}},[r("ol",e._l(e.icons,function(t,s){return r("li",{class:{active:e.resume.currentTab===s},on:{click:function(t){e.resume.currentTab=s}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-"+t}})])])})),e._v(" "),r("ol",[r("li",{directives:[{name:"show",rawName:"v-show",value:e.resume.currentUser,expression:"resume.currentUser"}],staticClass:"save",attrs:{id:"save"},on:{click:e.saveData}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-save"}})])]),e._v(" "),r("li",{staticClass:"preview",attrs:{id:"preview"},on:{click:e.preview}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-preview"}})])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("学习经历")]),e._v(" "),r("el-form",e._l(e.school,function(t,s){return r("div",{staticClass:"container"},[r("el-form-item",{attrs:{label:"学校"}},[r("el-input",{attrs:{placeholder:"请填写学校名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"item.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"专业"}},[r("el-input",{attrs:{placeholder:"请填写专业名称"},model:{value:t.major,callback:function(e){t.major=e},expression:"item.major"}})],1),e._v(" "),e.school.length>1?r("i",{staticClass:"el-icon-circle-cross",on:{click:function(t){e.removeSchool(s)}}}):e._e()],1)}))],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"topbar"}},[r("h2",[e._v("Resume")]),e._v(" "),e.currentUser?r("div",{staticClass:"user-group"},[r("el-button",{attrs:{type:"text"}},[e._v(e._s(e.currentUser.username))]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:e.logOut}},[e._v("注 销")])],1):r("div",{staticClass:"login-group"},[r("el-button",{on:{click:function(t){e.logInOrReg("login")}}},[e._v("登 录")]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(t){e.logInOrReg("reg")}}},[e._v("注 册")]),e._v(" "),r("el-dialog",{attrs:{visible:e.formVisible,size:"smail"},on:{"update:visible":function(t){e.formVisible=t}}},[r("span",{slot:"title"},[e._v("\n                "+e._s(e.isLogin?"登录":"注册")+"\n            ")]),e._v(" "),r("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"60px",model:e.formData}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.formData.user,callback:function(t){e.formData.user=t},expression:"formData.user"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.formData.pass,callback:function(t){e.formData.pass=t},expression:"formData.pass"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",slot:"footer"},[r("el-button",{on:{click:function(t){e.formVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.logOrRegEvet(e.isLogin)}}},[e._v(e._s(e.isLogin?"登 录":"注 册"))])],1)],1)],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(" 个人信息")]),e._v(" "),r("el-form",[r("div",{staticClass:"container"},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{attrs:{placeholder:"请填写姓名"},model:{value:e.profile.name,callback:function(t){e.profile.name=t},expression:"profile.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市"}},[r("el-input",{attrs:{placeholder:"请填写所在城市"},model:{value:e.profile.citry,callback:function(t){e.profile.citry=t},expression:"profile.citry"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"出生年月"}},[r("el-input",{attrs:{placeholder:"请填写出生年月日"},model:{value:e.profile.birth,callback:function(t){e.profile.birth=t},expression:"profile.birth"}})],1)],1)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"preview"}},[r("section",{staticClass:"profile"},[r("h1",[e._v(e._s(e.resume.profile.name||"请填写姓名"))]),e._v(" "),r("p",[r("strong",[e._v(e._s(e.resume.profile.citry||"请填写城市")+" ")]),e._v("|\n            "),r("small",[e._v(e._s(e.resume.profile.birth||"请填写出生年月"))])])]),e._v(" "),r("div",{staticClass:"container"},[e.filter(e.resume.workHistory).length>0?r("section",{staticClass:"workHistory"},[r("h2",[e._v("工作经历")]),e._v(" "),r("ul",e._l(e.resume.workHistory,function(t){return r("li",[r("h3",[e._v(e._s(t.company)+" ")]),e._v(" "),r("span",[e._v(e._s(t.content))])])}))]):e._e(),e._v(" "),e.filter(e.resume.projects).length>0?r("section",{staticClass:"projects"},[r("h2",[e._v("前端项目")]),e._v(" "),r("ul",e._l(e.filter(e.resume.projects),function(t){return r("li",[r("h3",[e._v(e._s(t.name)+" ")]),e._v(" "),r("span",[e._v(e._s(t.content))])])}))]):e._e(),e._v(" "),r("div",{staticClass:"split"}),e._v(" "),e.filter(e.resume.school).length>0?r("section",{staticClass:"school"},[r("h2",[e._v("学习经历")]),e._v(" "),r("ul",e._l(e.filter(e.resume.school),function(t){return r("li",[r("h3",[e._v(e._s(t.name))]),e._v(" "),r("span",[e._v(" "+e._s(t.major))])])}))]):e._e(),e._v(" "),r("section",{staticClass:"contact"},[r("h2",[e._v("联系方式")]),e._v(" "),r("p",[e._v("手机:\n                "),r("span",[e._v(e._s(e.resume.contact.phone||"请填写手机号码"))])]),e._v(" "),r("p",[e._v("微信:\n                "),r("span",[e._v(e._s(e.resume.contact.wechat||"请填写微信号码"))])]),e._v(" "),r("p",[e._v("邮箱:\n                "),r("span",[e._v(e._s(e.resume.contact.email||"请填写电子邮箱"))])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("工作经历")]),e._v(" "),r("el-form",e._l(e.workHistory,function(t,s){return r("div",{staticClass:"container"},[r("el-form-item",{attrs:{label:"公司"}},[r("el-input",{attrs:{placeholder:"请填写公司名称"},model:{value:t.company,callback:function(e){t.company=e},expression:"work.company"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工作内容"}},[r("el-input",{attrs:{placeholder:"请填写岗位名称"},model:{value:t.content,callback:function(e){t.content=e},expression:"work.content"}})],1),e._v(" "),e.workHistory.length>1?r("i",{staticClass:"el-icon-circle-cross",on:{click:function(t){e.removeWorkHistory(s)}}}):e._e()],1)}))],1)},staticRenderFns:[]}}]),[64]);
//# sourceMappingURL=app.5c26a33f29187657cd22.js.map