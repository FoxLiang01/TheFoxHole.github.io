(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-672f34be","chunk-1e4618cd","chunk-2d230c18","chunk-2d0b6974"],{"1e8b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{maxlength:"30"},model:{value:e.user.nickName,callback:function(t){e.$set(e.user,"nickName",t)},expression:"user.nickName"}})],1),s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{maxlength:"11"},model:{value:e.user.phonenumber,callback:function(t){e.$set(e.user,"phonenumber",t)},expression:"user.phonenumber"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{maxlength:"50"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("el-form-item",{attrs:{label:"性别"}},[s("el-radio-group",{model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[s("el-radio",{attrs:{label:"0"}},[e._v("男")]),s("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],o=s("c0c7"),i={props:{user:{type:Object}},data:function(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(o["l"])(e.user).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},l=i,n=s("2877"),c=Object(n["a"])(l,r,a,!1,null,null,null);t["default"]=c.exports},"1fcc":function(e,t,s){"use strict";s("d818")},"4c1b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:24}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("个人信息")])]),s("div",[s("div",{staticClass:"text-center"},[s("userAvatar",{attrs:{user:e.user}})],1),s("ul",{staticClass:"list-group list-group-striped"},[s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userName))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.phonenumber))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属部门 "),e.user.dept?s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.dept.deptName)+" / "+e._s(e.postGroup))]):e._e()],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.roleGroup))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"date"}}),e._v("创建日期 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.createTime))])],1)])])])],1),s("el-col",{attrs:{span:18,xs:24}},[s("el-card",[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("基本资料")])]),s("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[s("userInfo",{attrs:{user:e.user}})],1),s("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[s("resetPwd")],1)],1)],1)],1)],1)],1)},a=[],o=s("9429"),i=s("1e8b"),l=s("ee46"),n=s("c0c7"),c={name:"Profile",components:{userAvatar:o["default"],userInfo:i["default"],resetPwd:l["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo"}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;Object(n["g"])().then((function(t){e.user=t.data,e.roleGroup=t.roleGroup,e.postGroup=t.postGroup}))}}},u=c,p=s("2877"),d=Object(p["a"])(u,r,a,!1,null,null,null);t["default"]=d.exports},9429:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"user-info-head",on:{click:function(t){return e.editCropper()}}},[s("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"}})]),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t},opened:e.modalOpened,close:e.closeDialog}},[s("el-row",[s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e.visible?s("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox},on:{realTime:e.realTime}}):e._e()],1),s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[s("div",{staticClass:"avatar-upload-preview"},[s("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),s("br"),s("el-row",[s("el-col",{attrs:{lg:2,md:2}},[s("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[s("el-button",{attrs:{size:"small"}},[e._v(" 选择 "),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),s("el-col",{attrs:{lg:{span:1,offset:2},md:2}},[s("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},md:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),s("el-col",{attrs:{lg:{span:2,offset:6},md:2}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},a=[],o=s("4360"),i=s("7e79"),l=s("c0c7"),n={components:{VueCropper:i["VueCropper"]},props:{user:{type:Object}},data:function(){return{open:!1,visible:!1,title:"修改头像",options:{img:o["a"].getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{editCropper:function(){this.open=!0},modalOpened:function(){this.visible=!0},requestUpload:function(){},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},changeScale:function(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload:function(e){var t=this;if(-1==e.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{var s=new FileReader;s.readAsDataURL(e),s.onload=function(){t.options.img=s.result}}},uploadImg:function(){var e=this;this.$refs.cropper.getCropBlob((function(t){var s=new FormData;s.append("avatarfile",t),Object(l["n"])(s).then((function(t){e.open=!1,e.options.img="/prod-api"+t.imgUrl,o["a"].commit("SET_AVATAR",e.options.img),e.$modal.msgSuccess("修改成功"),e.visible=!1}))}))},realTime:function(e){this.previews=e},closeDialog:function(){this.options.img=o["a"].getters.avatar,this.visible=!1}}},c=n,u=(s("1fcc"),s("2877")),p=Object(u["a"])(c,r,a,!1,null,"7aa4c71c",null);t["default"]=p.exports},d818:function(e,t,s){},ee46:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[s("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[s("el-input",{attrs:{placeholder:"请确认新密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],o=(s("d9e2"),s("c0c7")),i={data:function(){var e=this,t=function(t,s,r){e.user.newPassword!==s?r(new Error("两次输入的密码不一致")):r()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:t,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(o["m"])(e.user.oldPassword,e.user.newPassword).then((function(t){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},l=i,n=s("2877"),c=Object(n["a"])(l,r,a,!1,null,null,null);t["default"]=c.exports}}]);