(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){e.exports=a(346)},153:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(22),i=a.n(o),r=(a(153),a(27)),l=a(17),c=a(18),u=a(20),m=a(19),p=a(21),d=a(352),h=a(351),g=a(35),f=a.n(g),v=a(350),b=a(14),E=a(130),S=a.n(E),k=a(131),O=a.n(k),C=a(25),w=a.n(C),j=a(28),y=a.n(j),L=a(41),x=a.n(L),A=a(132),N=a.n(A),T=a(33),B=a.n(T),I=a(127),W=a.n(I),D=a(349),M=a(129),F=a.n(M),R=a(80),P=a.n(R),U=a(81),z=a.n(U),J={"/":"Home","/about":"Developers","/autoarkaive":"Application"},V=Object(b.withStyles)({list:{width:250},fullList:{width:"auto"},link:{textDecoration:"none"}})(function(e){var t=s.a.createElement("div",{className:e.classes.list},s.a.createElement(P.a,null,e.routes.map(function(t){return s.a.createElement(D.a,{className:e.classes.link,to:t,key:t},s.a.createElement(z.a,{button:!0},s.a.createElement(w.a,null,J[t])))})));return s.a.createElement(F.a,{open:e.open,onClose:e.toggleSideBar},s.a.createElement("div",{tabIndex:0,role:"button",onClick:e.toggleSideBar,onKeyDown:e.toggleSideBar},t))}),q=a(60),G=a.n(q),H=a(59),_=a.n(H),K=a(57),X=a.n(K),$=a(58),Q=a.n($),Y=a(61),Z=a.n(Y),ee=a(42),te=a.n(ee),ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){return function(t){t.preventDefault(),a.setState(Object(r.a)({},e,t.target.value))}},a.handleSubmit=function(e){e.preventDefault();var t=a.state;a.props.submit(t)},a.state={},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.inputs.forEach(function(t){e.setState(Object(r.a)({},t,""))})}},{key:"render",value:function(){var e=this,t=this.props.spinnerCondition?s.a.createElement(B.a,{className:this.props.classes.progress,color:"primary",size:50}):s.a.createElement(X.a,null,s.a.createElement(Q.a,null,this.props.instructions),this.props.inputs.map(function(t,a){return s.a.createElement(te.a,{label:t,className:e.props.classes.textField,value:e.state[t],onChange:e.handleChange(t),margin:"normal",variant:"outlined",key:a})}),s.a.createElement(_.a,null,s.a.createElement(y.a,{onClick:this.props.handleClose,color:"primary"},"Cancel"),s.a.createElement(y.a,{onClick:this.handleSubmit,color:"primary"},"Submit")));return s.a.createElement("div",null,s.a.createElement(G.a,{open:this.props.open,onClose:this.props.handleClose},s.a.createElement(Z.a,null,this.props.title),t))}}]),t}(n.Component),ne=Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200},progress:{margin:2*e.spacing.unit,animationDuration:"550ms"}}})(ae),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleLogin=function(e){var t=e.profileObj.email,n=e.profileObj.name;a.setState({name:n}),f.a.get(ot,{params:{command:"checkUser",email:t}}).then(function(e){e.data.arkaiveAcccountExists?a.props.onLogin(t,n):a.handleFormOpen()})},a.handleArkaiveLogin=function(e){a.setState({arkaiveLoggingIn:!0}),f.a.get(ot,{params:{command:"addUser",arkaive_username:e.email,arkaive_password:e.password,fullname:"",picUrl:"none",email:e.email}}).then(function(t){a.setState({arkaiveLoggingIn:!1}),(t=t.data).isValidArkaiveAccount?a.props.onLogin(e.email,a.state.name):alert("Error: Invalid Arkaive account info!")}),a.setState({arkaiveLoginModalOpen:!1})},a.handleLogout=function(){a.props.history.push("/"),a.props.onLogout()},a.toggleSideBar=function(){a.setState({sideBarOpen:!a.state.sideBarOpen})},a.handleFormOpen=function(){a.setState({arkaiveLoginModalOpen:!0})},a.handleFormClose=function(){a.setState({arkaiveLoginModalOpen:!1})},a.state={loggedIn:a.props.loggedIn,routes:a.props.routes,sideBarOpen:!1,arkaiveLoginModalOpen:!1,arkaiveLoggingIn:!1,name:null},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.loggedIn!==this.state.loggedIn&&this.setState({loggedIn:e.loggedIn,routes:e.routes})}},{key:"render",value:function(){var e=this,t=this.state.loggedIn?s.a.createElement(y.a,{color:"inherit",onClick:this.handleLogout},"Logout"):s.a.createElement(W.a,{clientId:"136499966885-afs40lb1al0qk7qrm36sgd2lk50k7g1a.apps.googleusercontent.com",onSuccess:function(t){return e.handleLogin(t)},buttonText:"Login",className:this.props.classes.loginButton});return t=this.state.arkaiveLoginModalOpen?s.a.createElement(B.a,{className:this.props.classes.progress,color:"inherit",size:24}):t,s.a.createElement("div",{className:this.props.classes.root},s.a.createElement(S.a,{position:"static"},s.a.createElement(O.a,null,s.a.createElement(x.a,{className:this.props.classes.menuButton,color:"inherit",onClick:this.toggleSideBar},s.a.createElement(N.a,null)),s.a.createElement(w.a,{variant:"h6",color:"inherit",className:this.props.classes.grow},"AutoArkaive"),t,s.a.createElement(ne,{open:this.state.arkaiveLoginModalOpen,handleClose:this.handleFormClose,title:"Arkaive Login",instructions:"Please enter your Arkaive account credentials",submit:this.handleArkaiveLogin,inputs:["email","password"],spinnerCondition:this.state.arkaiveLoggingIn}))),s.a.createElement(V,{open:this.state.sideBarOpen,toggleSideBar:this.toggleSideBar,routes:this.state.routes}))}}]),t}(n.Component),oe=Object(v.a)(Object(b.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},loginButton:{fontSize:15,border:0,background:"none",color:"white",boxShadow:"none",borderRadius:0,padding:10,fontFamily:"Roboto",textTransform:"uppercase",cursor:"pointer"},progress:{margin:2*e.spacing.unit,animationDuration:"550ms"}}})(se)),ie=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w.a,{className:this.props.classes.logo,component:"h1"},"AutoArkaive"))}}]),t}(n.Component),re=Object(b.withStyles)(function(e){return{logo:{fontSize:60}}})(ie),le=a(85),ce=a.n(le),ue=a(5),me=a.n(ue),pe=a(135),de=a.n(pe),he=a(136),ge=a.n(he),fe=a(137),ve=a.n(fe),be=a(138),Ee=a.n(be),Se=a(139),ke=a.n(Se),Oe=a(141),Ce=a.n(Oe),we=a(140),je=a.n(we),ye=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({expanded:!a.state.expanded})},a.state={expanded:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(de.a,{className:this.props.classes.card},s.a.createElement(ge.a,{title:this.props.name,subheader:this.props.role}),s.a.createElement(ve.a,{className:this.props.classes.cardMedia,title:this.props.name,image:this.props.imgSrc}),s.a.createElement(Ee.a,null,s.a.createElement(w.a,{component:"p"},this.props.shortBio)),s.a.createElement(ke.a,{className:this.props.classes.actions,disableActionSpacing:!0},s.a.createElement(x.a,{className:me()(this.props.classes.expand,Object(r.a)({},this.props.classes.expandOpen,this.state.expanded)),onClick:this.handleClick},s.a.createElement(je.a,null))),s.a.createElement(Ce.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},s.a.createElement(w.a,{component:"p"},this.props.roleDescription))))}}]),t}(n.Component),Le=Object(b.withStyles)(function(e){return{card:{maxWidth:400},cardMedia:{height:0,paddingTop:"90%"},actions:{display:"flex"},expand:Object(r.a)({transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},e.breakpoints.up("sm"),{marginRight:-8}),expandOpen:{transform:"rotate(180deg)"}}})(ye),xe=[{name:"Addison A.",role:"Design and Frontend",roleDescription:"test",bio:"test",image:"../images/images/addison.jpg"},{name:"Anna S.",role:"Backend",roleDescription:"test",bio:"test",image:"../images/images/addison.jpg"},{name:"Jamie S.",role:"Backend",roleDescription:"test",bio:"test",image:"../images/images/jamie.jpg"},{name:"Josh M.",role:"Fullstack",roleDescription:"test",bio:"test",image:"../images/images/joshmin.jpg"},{name:"Sai A.",role:"Backend",roleDescription:"test",bio:"test",image:"../images/images/sai.jpg"}],Ae=Object(b.withStyles)(function(e){return{root:{width:"80%",marginLeft:"10%"},grid:{marginTop:5*e.spacing.unit}}})(function(e){return s.a.createElement("div",{className:e.classes.root},s.a.createElement(ce.a,{className:e.classes.grid,container:!0,spacing:24},xe.map(function(e,t){return s.a.createElement(ce.a,{item:!0,xs:!0,key:t},s.a.createElement(Le,{name:e.name,role:e.role,roleDescription:e.roleDescription,shortBio:e.bio,imgSrc:e.image}))})))}),Ne=a(146),Te=a.n(Ne),Be=a(83),Ie=a.n(Be),We=a(82),De=a.n(We),Me=a(84),Fe=a.n(Me),Re=a(86),Pe=a.n(Re),Ue=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClassChange=function(e){a.setState(Object(r.a)({},e.target.name,e.target.value))},a.handleTextChange=function(e){return function(t){t.preventDefault(),a.setState(Object(r.a)({},e,t.target.value))}},a.handleSubmit=function(e){e.preventDefault();var t=a.state;a.props.submit(t)},a.state={class:""},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=[];this.props.classList.forEach(function(t){return e.push({class:t.class,code:t.code})});var t=this.props.spinnerCondition?s.a.createElement(B.a,{className:this.props.classes.progress,color:"primary",size:50}):s.a.createElement(X.a,{className:this.props.classes.root},s.a.createElement(Q.a,null,this.props.instructions),s.a.createElement("form",null,s.a.createElement(Ie.a,{className:this.props.classes.formControl},s.a.createElement(De.a,{htmlFor:"class"},"Class"),s.a.createElement(Fe.a,{onChange:this.handleClassChange,inputProps:{name:"class"},value:this.state.class},s.a.createElement(Pe.a,{value:""},s.a.createElement("em",null)),e.map(function(e,t){return s.a.createElement(Pe.a,{key:t,value:"".concat(e.class," ").concat(e.code)},e.class," - ",e.code)}))),s.a.createElement("div",null),s.a.createElement(te.a,{className:this.props.classes.textField,label:"Start Time",type:"time",defaultValue:"00:00",inputProps:{step:300},onChange:this.handleTextChange("Start Time")}),s.a.createElement(te.a,{className:this.props.classes.textField,label:"End Time",type:"time",defaultValue:"00:00",inputProps:{step:300},onChange:this.handleTextChange("End Time")}),s.a.createElement("div",null),s.a.createElement(te.a,{className:this.props.classes.addressTextField,label:"Address",onChange:this.handleTextChange("Address")})),s.a.createElement(_.a,null,s.a.createElement(y.a,{onClick:this.props.handleClose,color:"primary"},"Cancel"),s.a.createElement(y.a,{onClick:this.handleSubmit,color:"primary"},"Submit")));return s.a.createElement("div",null,s.a.createElement(G.a,{open:this.props.open,onClose:this.props.handleClose},s.a.createElement(Z.a,null,this.props.title),t))}}]),t}(n.Component),ze=Object(b.withStyles)(function(e){return{root:{maxWidth:450},container:{display:"flex",flexWrap:"wrap"},dense:{marginTop:16},menu:{width:200},progress:{margin:2*e.spacing.unit,animationDuration:"550ms"},textField:{marginTop:2*e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit,minWidth:200},addressTextField:{marginTop:2*e.spacing.unit,marginLeft:e.spacing.unit,marginRight:e.spacing.unit,minWidth:200,width:"100%"},formControl:{margin:e.spacing.unit,width:"100%"}}})(Ue),Je=a(142),Ve=a.n(Je),qe=a(144),Ge=a.n(qe),He=a(29),_e=a.n(He),Ke=a(143),Xe=a.n(Ke),$e=a(145),Qe=a.n($e),Ye=a(34),Ze=a.n(Ye),et=Object(b.withStyles)(function(e){return{root:{width:"80%",marginTop:5*e.spacing.unit,overflowX:"auto",marginLeft:"10%"},table:{minWidth:700}}})(function(e){return s.a.createElement(Ze.a,{className:e.classes.root},s.a.createElement(Ve.a,{className:e.classes.table},s.a.createElement(Xe.a,null,s.a.createElement(_e.a,null,"Class"),s.a.createElement(_e.a,null,"Location"),s.a.createElement(_e.a,null,"Time"),s.a.createElement(_e.a,null,"Course Code")),s.a.createElement(Ge.a,null,e.classList.map(function(e,t){return s.a.createElement(Qe.a,{key:t},s.a.createElement(_e.a,{scope:"row"},e.class),s.a.createElement(_e.a,{scope:"row"},e.location),s.a.createElement(_e.a,{scope:"row"},e.time),s.a.createElement(_e.a,{scope:"row"},e.code))}))))}),tt="0ai9qdntEc0rkNBwAprbHsVAbWpgVOMM",at=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).hydrateStateWithLocalStorage=function(){a.setState({email:localStorage.getItem("email").replace(/['"]+/g,""),name:localStorage.getItem("name").replace(/['"]+/g,"")})},a.handleClick=function(){a.setState({formModalOpen:!0})},a.handleSubmit=function(e){a.setState({addingClass:!0});var t=e.class.split(" ")[0],n=e.class.split(" ")[1],s=e["Start Time"],o=e["End Time"],i=e.Address;f.a.get("http://www.mapquestapi.com/geocoding/v1/address?key=".concat(tt,"&location=").concat(i)).then(function(e){var i=(e=e.data.results[0].locations[0].latLng).lat,r=e.lng;f.a.get(ot,{params:{command:"addClass",email:a.state.email,fullname:a.state.name,classname:t,courseCode:n,checkinStartTime:s,checkinEndTime:o,latitude:i,longitude:r,altitude:60}}).then(function(e){(e=e.data).classWasAdded?a.fetchClasses():alert("Error: Could not add class!")})}),a.setState({formModalOpen:!1,addingClass:!1})},a.fetchClasses=function(){a.setState({fetchingClasses:!0}),f.a.get(ot,{params:{command:"fetchClasses",email:a.state.email}}).then(function(e){e=e.data,console.log(e),a.setState({classList:e.classes,fetchingClasses:!1})})},a.handleFormClose=function(){a.setState({formModalOpen:!1})},a.state={email:null,name:null,fetchingClasses:!0,formModalOpen:!1,addingClass:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.hydrateStateWithLocalStorage()}},{key:"componentDidMount",value:function(){this.setState({fetchingClasses:!0}),this.fetchClasses()}},{key:"render",value:function(){var e=this.state.fetchingClasses?s.a.createElement("div",{className:this.props.classes.loading},s.a.createElement(B.a,{className:this.props.classes.progress,color:"primary",size:60})):s.a.createElement("div",null,s.a.createElement(et,{classList:this.state.classList}),s.a.createElement(x.a,{className:this.props.classes.iconButton,onClick:this.handleClick},s.a.createElement(Te.a,{className:this.props.classes.icon})),s.a.createElement(ze,{open:this.state.formModalOpen,title:"Add a class",instructions:"",submit:this.handleSubmit,handleClose:this.handleFormClose,classList:this.state.classList,spinnerCondition:this.state.addingClass}));return s.a.createElement(s.a.Fragment,null,e)}}]),t}(n.Component),nt={"/":re,"/about":Ae,"/autoarkaive":Object(b.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit,animationDuration:"550ms"},loading:{marginTop:"25%",textAlign:"center"},iconButton:{position:"fixed",bottom:0,right:0,marginRight:"2%",marginBottom:"2%",width:60,height:60},icon:{width:40,height:40}}})(at)},st=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).hydrateStateWithLocalStorage=function(){for(var e in a.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{t=JSON.parse(t),a.setState(Object(r.a)({},e,t))}catch(n){console.log(n)}}},a.viewStorage=function(){for(var e in a.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);console.log("".concat(e," : ").concat(t))}},a.saveStateToLocalStorage=function(){for(var e in a.state)localStorage.setItem(e,JSON.stringify(a.state[e]))},a.handleLogin=function(e,t){a.setState({email:e,name:t,loggedIn:!0,routes:["/","/about","/autoarkaive"]}),a.saveStateToLocalStorage()},a.handleLogout=function(){a.setState({email:null,name:null,loggedIn:!1,routes:["/","/about"]}),a.saveStateToLocalStorage()},a.state={loggedIn:!1,email:null,name:null,routes:["/","/about"]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.hydrateStateWithLocalStorage(),window.addEventListener("beforeunload",this.saveStateToLocalStorage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.saveStateToLocalStorage)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(oe,{loggedIn:this.state.loggedIn,routes:this.state.routes,onLogin:this.handleLogin,onLogout:this.handleLogout}),this.state.routes.map(function(e){return s.a.createElement(h.a,{key:e,exact:!0,path:e,component:nt[e]})}))))}}]),t}(n.Component),ot="http://localhost:8080/AutoArkaive/UtilityServlet",it=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(st,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");it?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):rt(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):rt(t,e)})}}()}},[[148,2,1]]]);
//# sourceMappingURL=main.838eff32.chunk.js.map