(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-273fce5a"],{"00b3":function(t,e,s){"use strict";s("2ce7")},"2ce7":function(t,e,s){},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view-login"},[s("div",{staticClass:"login-content"},[s("div",{staticStyle:{color:"white","font-size":"64px"}},[t._v("PixivCool")]),s("el-form",{ref:"login-form",attrs:{model:t.form_data,rules:t.rules}},[s("el-card",{staticClass:"login-content-card",attrs:{"body-style":"display: flex;flex-direction: column;"}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{staticClass:"login-content-card-item",attrs:{placeholder:"pixiv ID或邮箱",clearable:""},model:{value:t.form_data.username,callback:function(e){t.$set(t.form_data,"username",e)},expression:"form_data.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{staticClass:"login-content-card-item",attrs:{placeholder:"密码","show-password":""},model:{value:t.form_data.password,callback:function(e){t.$set(t.form_data,"password",e)},expression:"form_data.password"}})],1),s("el-button",{staticClass:"login-content-card-item",attrs:{type:"primary","native-type":"submit"},on:{click:t.formPost}},[t._v("登陆 ")]),s("el-button",{staticClass:"login-content-card-item",attrs:{type:"success"}},[t._v("未持有账号的用户请点这里")])],1)],1)],1)])},r=[],o={name:"Login",data(){return{background_img_array:[],form_data:{username:"",password:""},rules:{username:[{required:!0,message:"请输入pixiv ID或邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1}},mounted(){},methods:{formPost(){this.$refs["login-form"].validate(t=>{t&&this.login()})},login(){this.$loading({lock:!0,text:"登录中"});let t={client_id:"MOBrBDS8blbauoSck0ZfDbtuzpyT",client_secret:"lsACyCD94FhDUtGTXi3QzcFE2uU1hqtDaKeqrdwj",grant_type:"password",username:this.form_data.username,password:this.form_data.password,device_token:"pixiv",get_secure_url:!0,include_policy:!0};this.$http.post(this.pixiv.URL_OAUTH+"/auth/token",t).then(t=>{this.$loading().close();let e=this._.get(t,"data.response");e&&(this.app.setUser(e),0!==this.app.firstRouter.indexOf("/login")&&(this.app.firstRouter="/"),this.$router.replace(this.app.firstRouter).catch(t=>t))}).catch(t=>{this.$loading().close();let e=this._.get(t,"response.data.errors.system.message");e&&this.$alert(e,"登陆错误",{confirmButtonText:"我知道了",type:"error",showClose:!1,closeOnClickModal:!1})})}}},i=o,l=(s("00b3"),s("2877")),n=Object(l["a"])(i,a,r,!1,null,"22c204a3",null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-273fce5a.bbf78b5d.js.map