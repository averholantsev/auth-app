(this["webpackJsonpauth-app"]=this["webpackJsonpauth-app"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),l=n(48),c=n(35),s=n(36),u=n(66),d=n.n(u),p=(n(97),n(30)),m=(n(98),n(37)),h=n(17),f=n(34),b=n(19),g=n(39),v=n(40),w=n(44),j=n(67),E=n.n(j).a.create({baseURL:"https://demo0163282.mockable.io/"}),O=n(21),x=n(22);function k(){var e=Object(O.a)(["\n  margin-top: 66px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: 0.16px;\n  color: rgba(0, 0, 0, 0.54);\n"]);return k=function(){return e},e}function y(){var e=Object(O.a)(["\n  float: right;\n\n  @media (max-width: 389px) {\n    width: 125px;\n    text-align: right;\n  }\n"]);return y=function(){return e},e}function M(){var e=Object(O.a)(["\n  float: left;\n"]);return M=function(){return e},e}function C(){var e=Object(O.a)(["\n  color: #2f80ed;\n  font-size: 14px;\n  text-decoration: none;\n\n  :hover {\n    text-decoration: underline;\n  }\n"]);return C=function(){return e},e}function F(){var e=Object(O.a)(["\n  display: block;\n"]);return F=function(){return e},e}function S(){var e=Object(O.a)(["\n  padding: 0;\n  margin: 0 0 20px 0;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 18px;\n"]);return S=function(){return e},e}function A(){var e=Object(O.a)(["\n  background-color: #e10050;\n  border-radius: 100%;\n  display: block;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n"]);return A=function(){return e},e}function H(){var e=Object(O.a)(["\n  position: inherit;\n  padding-top: 72px;\n  padding-bottom: 15px;\n"]);return H=function(){return e},e}function T(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  margin-top: 10%;\n  padding: 0 28px;\n\n  @media (min-width: 390px) {\n    width: 380px;\n    padding: 0;\n    margin-top: 5%;\n  }\n"]);return T=function(){return e},e}var V=x.a.div(T()),B=x.a.div(H()),J=x.a.div(A()),W=x.a.h1(S()),z=x.a.div(F()),I=x.a.a(C()),U=Object(x.a)(I)(M()),$=Object(x.a)(I)(y()),L=x.a.p(k()),P=n(71),_=n.n(P),D=n(145),N=n(5),R=Object(N.a)({root:{margin:"10px 0",width:"100%","&:hover label.MuiInputLabel-outlined":{color:"rgba(0, 0, 0, 0.87)"},"&:hover label.Mui-focused":{color:"#2196F3"},"& label.Mui-focused":{color:"#2196F3"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(0, 0, 0, 0.36)"},"&:hover fieldset":{borderColor:"rgba(0, 0, 0, 0.87)"},"&.Mui-focused fieldset":{borderColor:"#2196F3"}}}})(D.a),q=function(e){return r.a.createElement(R,Object.assign({variant:"outlined"},e))},G=n(143),K=Object(N.a)({root:{width:"100%",textTransform:"none",margin:"30px 0 10px 0",backgroundColor:"#2196F3","&:hover":{backgroundColor:"#2F80ED"}}})(G.a),Q=function(e){return r.a.createElement(K,Object.assign({variant:"contained",color:"primary"},e),e.children)},X=n(148),Y=n(147),Z=Object(N.a)({root:{float:"left"}})(X.a),ee=Object(N.a)({root:{color:"rgba(0, 0, 0, 0.54)","&$checked":{color:"#2196F3"}},checked:{}})((function(e){return r.a.createElement(Y.a,Object.assign({color:"default"},e))})),te=function(e){return r.a.createElement(Z,Object.assign({control:r.a.createElement(ee,{value:"rememberMe",color:"default"})},e))},ne=n(146),ae=Object(N.a)({root:{marginBottom:"10px"}})(ne.a),re=function(e){return r.a.createElement(ae,e,e.children)},oe={jwt:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"JWT_AUTH":return Object(m.a)({},e,{jwt:t.jwt});default:return e}},le=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",rememberMe:!1,validateFields:{email:!1,password:!1},fieldValidationErrors:{email:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!",password:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"},willSend:!0,resError:!1,errorMessage:""},n.inputHandler=function(e){var t=e.target.name,a=e.target.value;n.validation(t,a),n.setState(Object(h.a)({},t,a))},n.validation=function(e,t){var a=Object(m.a)({},n.state.validateFields),r=Object(m.a)({},n.state.fieldValidationErrors);switch(e){case"email":a.email=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(t),0===t.length?r.email="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!":r.email="\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0447\u0442\u044b";break;case"password":a.password=t.length>=6,0===t.length?r.password="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!":r.password="\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}n.setState({validateFields:a,fieldValidationErrors:r})},n.checkboxHandler=function(){var e=n.state.rememberMe;n.setState({rememberMe:!e})},n.formSenderHandler=function(){var e={email:n.state.email,password:n.state.password,rememberMe:n.state.rememberMe};n.state.validateFields.email&&n.state.validateFields.password?(n.setState({willSend:!0}),E.post("/314145ed-4ccd-46fd-a1f9-f5b83468e714",e).then((function(e){n.props.onAuthAccepted(e.data.jwt),n.props.history.push("/auth-app/next-page")})).catch((function(e){401===e.response.status?n.setState({resError:!0,errorMessage:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443"}):n.setState({resError:!0,errorMessage:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"})}))):n.setState({willSend:!1})},n}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=!1,t=!1;return this.state.willSend||(e=!this.state.validateFields.email,t=!this.state.validateFields.password),r.a.createElement(V,null,r.a.createElement("form",null,r.a.createElement(B,null,r.a.createElement(J,null,r.a.createElement("img",{src:_.a,alt:"auth-lock"}))),r.a.createElement(W,null,"\u0412\u0445\u043e\u0434 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),this.state.resError?r.a.createElement(re,{severity:"error"},this.state.errorMessage):null,r.a.createElement(q,{key:"email",id:"email",label:"\u041f\u043e\u0447\u0442\u0430",name:"email",error:e,helperText:e?this.state.fieldValidationErrors.email:null,onChange:this.inputHandler,value:this.state.email}),r.a.createElement(q,{key:"password",id:"password",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",error:t,helperText:t?this.state.fieldValidationErrors.password:null,onChange:this.inputHandler,value:this.state.password}),r.a.createElement(te,{id:"rememberMe",label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f",name:"rememberMe",onChange:this.checkboxHandler,checked:this.state.rememberMe}),r.a.createElement(Q,{onClick:this.formSenderHandler},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement(z,null,r.a.createElement(U,{href:"/#"},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),r.a.createElement($,{href:"/#"},"\u0415\u0449\u0451 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(L,null,"Copyright\xa9 \u0412\u0430\u0448 \u0441\u0430\u0439\u0442 2019.")))}}]),t}(a.Component),ce=Object(c.b)(null,(function(e){return{onAuthAccepted:function(t){return e({type:"JWT_AUTH",jwt:t})}}}))(le),se=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).backToAuthPage=function(){n.props.history.goBack()},n}return Object(w.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement(re,null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430, \u0432\u0430\u0448 jwt: ",this.props.jwt),r.a.createElement(Q,{onClick:this.backToAuthPage},"\u041d\u0430\u0437\u0430\u0434"))}}]),t}(a.Component),ue=Object(c.b)((function(e){return{jwt:e.jwt}}))(se),de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{from:"/",to:"/auth-app/"}),r.a.createElement(p.b,{path:"/auth-app/",exact:!0,component:ce}),r.a.createElement(p.b,{path:"/auth-app/next-page",exact:!0,component:ue}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=Object(s.c)(ie,Object(s.a)(d.a)),me=r.a.createElement(c.a,{store:pe},r.a.createElement(l.a,null,r.a.createElement(de,null)));i.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,n){e.exports=n.p+"static/media/icon.9ffdbb2e.svg"},88:function(e,t,n){e.exports=n(115)},97:function(e,t,n){},98:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.26d84289.chunk.js.map