(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(8956)}])},8956:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return $}});var t=l(5893),n=l(9008),s=l.n(n),o=l(7294),i=l(1496),r=l(1796),d=l(2293),c=l(7357),h=l(155),p=l(6154),u=l(3946),g=l(5861),x=l(787),m=l(8139),j=l(4054),b=l(3841),f=l(315),Z=l(5819),v=l(517),y=l(1903),k=l(3321);let C=e=>{let[a,l]=(0,o.useState)(e),t=(0,o.useCallback)(e=>{l(e.target.value)},[]);return[a,t,l]};var w=l(6540),S=l(2761),W=l(8201),F=l(6448),P=l(5817),T=l(7976),E=l(5316);let D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function z(e){let{setIsLoggedIn:a,setModalOpen:l}=e,[n,s]=C(""),[i,r]=C(""),[d,h]=C(""),[u,x]=C(""),[m,j]=(0,o.useState)(!1);(0,o.useCallback)(e=>{x(e.target.value),j(e.target.value!==d)},[d,x]);let b=()=>{l(!1)},f=(0,o.useCallback)(e=>{if(d!==u)return j(!0);e.preventDefault(),console.log(n,i,d),p.Z.post("http://15.164.224.172:8080/signups",{email:n,name:i,password:d},{headers:{"Content-Type":"application/json"}}).then(e=>{console.log(e),console.log("singupDB!"),console.log(e.data),a(!0)}).catch(e=>{alert("회원가입이 정상적으로 되지 않았습니다."),console.log(e)})},[n,d,u,a,i]);return(0,t.jsx)(E.Z,{open:!0,onClose:b,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:f,sx:D,children:[(0,t.jsx)(g.Z,{component:"h1",variant:"h5",children:"회원가입"}),(0,t.jsx)(y.Z,{label:"이메일",name:"user-email",fullWidth:!0,type:"email",value:n,required:!0,onChange:s}),(0,t.jsx)(y.Z,{label:"이름",name:"user-nick",fullWidth:!0,value:i,required:!0,onChange:r}),(0,t.jsx)(y.Z,{label:"비밀번호",fullWidth:!0,name:"user-password",type:"password",value:d,required:!0,onChange:h}),(0,t.jsx)(y.Z,{label:"비밀번호체크",fullWidth:!0,name:"user-password-check",type:"password",value:u,required:!0,onChange:x}),m&&(0,t.jsx)("span",{children:"비밀번호가 일치하지 않습니다."}),(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"회원가입"})]})})}var N=l(5675),I=l.n(N);let R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function q(e){let{setuploadModalOpen:a}=e,[l,n]=(0,o.useState)({name:""}),[s,i]=(0,o.useState)(),[r,d]=o.useState(""),[h,u]=(0,o.useState)(!1),[x,m]=(0,o.useState)(!1),[v,w]=C(""),[S,W]=C(""),[F,P]=C(""),[T,D]=C(""),[z,N]=(0,o.useState)({title:"",desc:"",photos:[null]}),q=()=>{a(!1)},{title:_,desc:L,photos:O}=z,[M,B]=o.useState(""),[A,G]=o.useState(""),[U,V,X]=C(""),H=e=>{B(e.target.value)},J=e=>{G(e.target.value)},K=e=>{Q(e.target.files)},Q=e=>{let a=[];if(void 0!=e){if(e.length>1)alert("이미지는 1개만 넣어주세요");else{u(!0);for(let l=0;l<e.length;l++){let t=e[l];i(e[l]),console.log(e[l]);let n=new FileReader;n.readAsDataURL(t),n.addEventListener("load",()=>{let e={name:t.name,type:t.type,size:t.size,src:n.result};a.push(e),N({...z,photos:[...O,...a]})})}}}},Y=e=>{let a=e.target.parentElement;console.log(null==a?void 0:a.dataset),console.log(1),N({...z,photos:[...O.slice(0,1),...O.slice(2)]}),console.log(O),u(!1)},$=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),m(!0)},[]),ee=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),console.log("leave"),m(!1)},[]),ea=e=>{e.preventDefault(),e.stopPropagation();let a=e.dataTransfer,l=null==a?void 0:a.files;m(!1),Q(l)};(0,o.useCallback)(e=>{e.preventDefault()},[]);let[el,et]=(0,o.useState)({name:""});(0,o.useEffect)(()=>{p.Z.get("http://15.164.224.172:8080/USERINFO",{}).then(e=>{console.log(e.data),et(e.data)}).catch(e=>{console.log(e)})},[]);let en=(0,o.useCallback)(e=>{if(""==M||""==A)e.preventDefault(),e.stopPropagation(),alert("카테고리, 시즌 필수");else if(""==F||""==T)e.preventDefault(),e.stopPropagation(),alert("브랜드, 링크 입력 필수");else if(void 0==s)e.preventDefault(),e.stopPropagation(),alert("이미지 필수");else{e.preventDefault(),e.stopPropagation(),console.log(s);let a=new FormData;a.append("image",s),a.append("nickname",v),a.append("brand",F),a.append("link",T),a.append("category",M),a.append("season",A),a.append("hashtag",U),alert(a),p.Z.post("http://15.164.224.172:8080/uploads",a).then(e=>{console.log("result"),console.log(e)}).catch(e=>{console.log(e)})}},[]);return(0,t.jsx)(E.Z,{open:!0,onClose:q,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:en,sx:R,children:[(0,t.jsx)(g.Z,{sx:{textAlign:"center"},component:"h1",variant:"h5",children:"업로드"}),(0,t.jsx)(y.Z,{required:!0,label:"브랜드",fullWidth:!0,sx:{marginTop:"5px"},name:"user-brand",type:"text",value:F,variant:"standard",onChange:P}),(0,t.jsx)(y.Z,{label:"Link",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:T,required:!0,variant:"standard",onChange:D}),(0,t.jsx)(y.Z,{label:"선정이유",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:S,required:!0,variant:"standard",onChange:W}),(0,t.jsxs)(j.Z,{sx:{width:"40%",marginRight:"10%",marginTop:"25px"},children:[(0,t.jsx)(b.Z,{id:"demo-simple-select-label",children:"카테고리"}),(0,t.jsxs)(f.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:M,label:"category",required:!0,onChange:H,children:[(0,t.jsx)(Z.Z,{value:10,children:"상의"}),(0,t.jsx)(Z.Z,{value:20,children:"하의"}),(0,t.jsx)(Z.Z,{value:30,children:"아우터"}),(0,t.jsx)(Z.Z,{value:40,children:"디테일"}),(0,t.jsx)(Z.Z,{value:50,children:"이미지"}),(0,t.jsx)(Z.Z,{value:60,children:"악세사리"})]})]}),(0,t.jsxs)(j.Z,{sx:{width:"40%",marginTop:"25px"},children:[(0,t.jsx)(b.Z,{id:"demo-simple-select-label",children:"시즌"}),(0,t.jsxs)(f.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:A,label:"season",required:!0,onChange:J,children:[(0,t.jsx)(Z.Z,{value:10,children:"23SS"}),(0,t.jsx)(Z.Z,{value:20,children:"23FW"})]})]}),(0,t.jsx)(y.Z,{id:"standard-basic",sx:{marginTop:"30px"},value:U,onChange:V,fullWidth:!0,label:"해시태그입력 #검정 #반팔 ",variant:"outlined"}),(0,t.jsx)("div",{className:"file-upload",style:{marginTop:"6px"},children:(0,t.jsxs)("div",{className:"custom-form-group",children:[!h&&(0,t.jsxs)("div",{className:x?"custom-file-drop-area highlight":"custom-file-drop-area",onDragEnter:$,onDragOver:$,onDragLeave:ee,onDrop:ea,children:[(0,t.jsx)("input",{type:"file",name:"photos",placeholder:"Enter photos",multiple:!1,id:"filephotos",onChange:K}),(0,t.jsx)("label",{htmlFor:"filephotos",children:"Drag & Drop"})]}),(0,t.jsx)("div",{className:"custom-file-preview",children:O.length>0&&O.map((e,a)=>0!=a?(0,t.jsxs)("div",{className:"prev-img",children:[(0,t.jsx)("span",{onClick:Y,children:"\xd7"}),e&&(0,t.jsx)(I(),{src:e.src,alt:e.name})]},a):(0,t.jsx)(t.Fragment,{}))})]})}),(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})}let _={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function L(e){let{setIsLoggedIn:a,setloginModalOpen:l}=e,[n,s]=C(""),[i,r]=C(""),[d,h]=(0,o.useState)({id:0,name:null}),u=()=>{l(!1)},x=(0,o.useCallback)(e=>{e.preventDefault(),console.log("signup"),console.log(i),console.log(n),p.Z.post("http://15.164.224.172:8080/login",{email:n,password:i},{headers:{"Content-Type":"application/json"}}).then(e=>{console.log(e),console.log("singupDB!"),console.log(e.data.data),h(e.data.data),a(!0)}).catch(e=>{alert("로그인이 정상적으로 되지 않았습니다."),console.log(e)})},[n,i,a]);return console.log(d),(0,t.jsx)(E.Z,{open:!0,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,t.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:x,sx:_,children:[(0,t.jsx)(g.Z,{component:"h1",variant:"h5",children:"로그인"}),(0,t.jsx)(y.Z,{label:"이메일",name:"user-email",fullWidth:!0,type:"email",value:n,required:!0,variant:"standard",onChange:s}),(0,t.jsx)(y.Z,{label:"비밀번호",name:"user-nick",fullWidth:!0,value:i,required:!0,variant:"standard",onChange:r}),(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"로그인"})]})})}function O(e){let{isLoggedIn:a,setIsLoggedIn:l,setPost:n}=e,[s,i]=o.useState(!1),[r,x]=o.useState(!1),[E,D]=o.useState(!1),[N,I]=C(""),[R,_]=o.useState(null),[O,M]=o.useState(null),[B,A]=o.useState(""),[G,U]=o.useState(""),V=e=>{A(e.target.value)},X=e=>{U(e.target.value)},H=()=>{i(!0)},J=()=>{D(!0)},K=Boolean(R),Q=Boolean(O),Y=e=>{_(e.currentTarget)},$=()=>{M(null)},ee=()=>{_(null),$()},ea=(0,o.useCallback)(()=>{p.Z.get("http://localhost:3065/logout").then(e=>{"ok"==e.data.message&&l(!1),D(!1)}).catch(e=>{})},[l]),el=(0,o.useCallback)(()=>{a?x(!0):D(!0)},[a]),et=e=>{M(e.currentTarget)},en=o.useCallback(e=>{""==N?p.Z.get("http://localhost:3065/loadpost").then(e=>{n(e.data)}).catch(e=>{alert("포스팅 불러오기 정상적으로 되지 않았습니다."),console.log(e)}):N.split("#").length<2?alert("태그 앞에 #를 붙여주세요"):(e.preventDefault(),e.stopPropagation(),p.Z.post("http://localhost:3065/hashtagsearch",{hashtags:N,category:B,season:G},{headers:{"Content-Type":"application/json"}}).then(e=>{console.log("----------------------------"),console.log(e.data),n(e.data)}).catch(e=>{alert("로그인이 정상적으로 되지 않았습니다."),console.log(e)}))},[N,n]),es="primary-search-account-menu",eo=(0,t.jsxs)(v.Z,{anchorEl:R,anchorOrigin:{vertical:"top",horizontal:"right"},id:es,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:K,onClose:ee,children:[(0,t.jsx)(Z.Z,{onClick:ee,children:"Profile"}),(0,t.jsx)(Z.Z,{onClick:ee,children:"My account"})]}),ei="primary-search-account-menu-mobile",er=(0,t.jsxs)(v.Z,{anchorEl:O,anchorOrigin:{vertical:"top",horizontal:"right"},id:ei,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Q,onClose:$,children:[(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(u.Z,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:(0,t.jsx)(m.Z,{badgeContent:4,color:"error",children:(0,t.jsx)(F.Z,{})})}),(0,t.jsx)("p",{children:"Messages"})]}),(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(u.Z,{size:"large",color:"inherit",children:(0,t.jsx)(m.Z,{badgeContent:17,color:"error",children:(0,t.jsx)(P.Z,{})})}),(0,t.jsx)("p",{children:"Notifications"})]}),(0,t.jsxs)(Z.Z,{onClick:Y,children:[(0,t.jsx)(u.Z,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,t.jsx)(W.Z,{})}),(0,t.jsx)("p",{children:"Profile"})]})]});return(0,t.jsxs)(c.Z,{sx:{flexGrow:1},children:[!a&&s&&(0,t.jsx)(z,{setIsLoggedIn:l,setModalOpen:i}),a&&r&&(0,t.jsx)(q,{setuploadModalOpen:x}),!a&&E&&(0,t.jsx)(L,{setIsLoggedIn:l,setloginModalOpen:D}),(0,t.jsx)(d.Z,{position:"static",style:{backgroundColor:"#FFF",color:"#000"},children:(0,t.jsxs)(h.Z,{children:[(0,t.jsx)(g.Z,{noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}}}),(0,t.jsxs)(j.Z,{variant:"standard",sx:{m:1,minWidth:120,marginBottom:"1%",marginRight:"5px",marginTop:"-5px"},children:[(0,t.jsx)(b.Z,{id:"demo-simple-select-standard-label",children:"카테고리"}),(0,t.jsxs)(f.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",sx:{display:"inline-block"},required:!0,value:B,label:"category",onChange:V,children:[(0,t.jsx)(Z.Z,{value:"상의",children:"상의"}),(0,t.jsx)(Z.Z,{value:"하의",children:"하의"}),(0,t.jsx)(Z.Z,{value:"아우터",children:"아우터"}),(0,t.jsx)(Z.Z,{value:"디테일",children:"디테일"}),(0,t.jsx)(Z.Z,{value:"이미지",children:"이미지"}),(0,t.jsx)(Z.Z,{value:"악세사리",children:"악세사리"})]})]}),(0,t.jsxs)(j.Z,{variant:"standard",sx:{m:1,minWidth:120,marginBottom:"1%",marginRight:"25px",marginTop:"-5px"},children:[(0,t.jsx)(b.Z,{id:"demo-simple-select-standard-label",children:"시즌"}),(0,t.jsxs)(f.Z,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",sx:{display:"inline-block"},value:G,label:"season",required:!0,onChange:X,children:[(0,t.jsx)(Z.Z,{value:"23SS",children:"23SS"}),(0,t.jsx)(Z.Z,{value:"23FW",children:"23FW"})]})]}),(0,t.jsxs)("form",{onSubmit:en,style:{width:"50%"},children:[(0,t.jsx)(u.Z,{type:"submit","aria-label":"search",children:(0,t.jsx)(S.Z,{style:{fill:"#9A9A9A"}})}),(0,t.jsx)(y.Z,{id:"search-bar",className:"text",sx:{display:"inline-block",width:"80%"},value:N,onChange:I,label:"#상의 #검정",variant:"outlined",placeholder:"Search...",size:"small"})]}),(0,t.jsx)(c.Z,{sx:{flexGrow:1}}),(0,t.jsxs)(c.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u.Z,{size:"large",edge:"end",sx:{marginRight:"10px"},"aria-label":"account of current user","aria-haspopup":"false",color:"primary",onClick:el,children:(0,t.jsx)(w.Z,{})})}),a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"100%",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:ea,children:"로그아웃"}),(0,t.jsx)(u.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":es,"aria-haspopup":"true",color:"primary",children:(0,t.jsx)(W.Z,{})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:J,children:"로그인"}),(0,t.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",fontWeight:"bold",display:"inline-block"},onClick:H,size:"small",children:"가입"})]})]}),(0,t.jsx)(c.Z,{sx:{display:{xs:"flex",md:"none"}},children:(0,t.jsx)(u.Z,{size:"large","aria-label":"show more","aria-controls":ei,"aria-haspopup":"true",onClick:et,color:"primary",children:(0,t.jsx)(T.Z,{})})})]})}),er,eo]})}(0,i.ZP)("div")(e=>{let{theme:a}=e;return{position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:(0,r.Fq)("#F8F8F8",.73),"&:hover":{backgroundColor:(0,r.Fq)("#F8F8F8",.33)},marginRight:a.spacing(2),marginLeft:0,width:"100%",[a.breakpoints.up("sm")]:{marginLeft:a.spacing(3),width:"auto"}}}),(0,i.ZP)("div")(e=>{let{theme:a}=e;return{padding:a.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),(0,i.ZP)(x.ZP)(e=>{let{theme:a}=e;return{color:"inherit","& .MuiInputBase-input":{padding:a.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(a.spacing(4),")"),transition:a.transitions.create("width"),width:"100%",[a.breakpoints.up("md")]:{width:"20ch"},height:"40%"}}});var M=l(629),B=l(6242),A=l(4267),G=l(3965),U=l(1733),V=l(7957),X=l(9974),H=l(2023);function J(e){let[a,l]=(0,o.useState)(""),[n,s]=(0,o.useState)(""),i="http://localhost:3065/deletpost/".concat(e.id),r=(0,o.useCallback)(()=>{p.Z.post(i,{}).then(a=>{console.log(e.id);let l=e.posts.filter(a=>a.id!==e.id);e.setPost(l),console.log(l)}).catch(e=>{console.log(e)})},[i,e]),d=(0,o.useCallback)(()=>{alert("만드는 중입니다..")},[]);return console.log("rendered"),(0,o.useEffect)(()=>{10==e.category?l("상의"):20==e.category?l("하의"):30==e.category?l("아우터"):40==e.category?l("디테일"):50==e.category?l("이미지"):60==e.category&&l("악세사리"),10==e.season?s("23SS"):20==e.category&&s("23FW")},[e.category,e.category]),(0,t.jsxs)(B.Z,{sx:{maxWidth:"15",marginTop:"20px",boxShadow:"none"},children:[(0,t.jsxs)(X.Z,{href:"".concat(e.link),target:"_blank",children:[(0,t.jsx)(G.Z,{component:"img",height:"100%",image:"../".concat(e.src),alt:"green iguana"}),(0,t.jsxs)(A.Z,{children:[(0,t.jsxs)("span",{style:{fontWeight:900,fontSize:"130%"},children:[e.name,"_","".concat(e.brand),"_ ",e.id]}),(0,t.jsxs)(g.Z,{variant:"body2",color:"text.secondary",children:["선정이유 ",e.reason]})]})]}),(0,t.jsxs)(H.Z,{children:[(0,t.jsxs)("div",{style:{width:"100%"},children:[(0,t.jsx)(V.Z,{id:"editicon",onClick:d}),(0,t.jsx)(U.Z,{id:"delicon",onClick:r})]}),(0,t.jsxs)("div",{style:{margin:"2px"},children:[(0,t.jsx)("div",{className:"Tag".concat(e.category/10," Tag"),style:{display:"inline-block",margin:"2px"},children:(0,t.jsxs)("a",{href:"",children:["#",n]})})," ","\xa0"]}),(0,t.jsxs)("div",{style:{margin:"2px"},children:[(0,t.jsx)("div",{className:"Tag1 Tag",style:{display:"inline-block",margin:"2px"},children:(0,t.jsxs)("a",{href:"",children:["#",a]})})," ","\xa0"]}),e.hashtags.map((e,a)=>(0,t.jsxs)("div",{style:{margin:"2px"},children:[(0,t.jsx)("div",{className:"Tag".concat(parseInt(e.id)%8," Tag"),style:{display:"inline-block",margin:"2px"},children:(0,t.jsxs)("a",{href:"",children:["#",e.name]})})," ","\xa0"]},a))]})]})}var K=l(6886);let Q=(0,i.ZP)(M.Z)(e=>{let{theme:a}=e;return{backgroundColor:"dark"===a.palette.mode?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(2),textAlign:"center",color:a.palette.text.secondary}});function Y(e){let{setPost:a,posts:l}=e;return(0,t.jsx)(c.Z,{sx:{flexGrow:1},children:(0,t.jsx)(K.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:l.map((e,n)=>(0,t.jsx)(K.ZP,{item:!0,xs:6,sm:4,md:2.4,lg:4,children:(0,t.jsx)(Q,{children:(0,t.jsxs)("li",{style:{maxWidth:"320px",display:"inline-block"},children:[(0,t.jsx)(J,{name:e.name,index:n,setPost:a,posts:l,id:e.id,category:e.category,brand:e.brand,src:e.Images[0].src,link:e.link,season:e.season,hashtags:e.Hashtags,reason:e.reason})," "]})})},n))})})}function $(){let[e,a]=o.useState(!1),[l,n]=(0,o.useState)([]),i=(0,o.useCallback)(()=>{p.Z.get("http://15.164.224.172:8080/loadpost").then(e=>{console.log(e.data),n(e.data)}).catch(e=>{alert("로그인이 정상적으로 되지 않았습니다.?"),console.log(e)})},[n]);return(0,o.useEffect)(()=>{i()},[i]),(0,o.useEffect)(()=>{p.Z.get("http://15.164.224.172:8080/logincheck").then(e=>{console.log(e.data.login),e.data.login&&a(!0)}).catch(e=>{console.log(e)})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s(),{children:[(0,t.jsx)("title",{children:"Crump REF"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsxs)("div",{style:{margin:"auto",width:"80%"},children:[(0,t.jsx)("a",{onClick:i,children:(0,t.jsx)("h1",{id:"title",children:"CRUMP REFERENCE"})}),(0,t.jsx)("div",{style:{marginBottom:"40px"},children:(0,t.jsx)(O,{isLoggedIn:e,setIsLoggedIn:a,setPost:n})}),(0,t.jsx)(Y,{setPost:n,posts:l})]})]})}}},function(e){e.O(0,[260,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);