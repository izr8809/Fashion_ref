(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8956)}])},8956:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return J}});var l=t(5893),s=t(9008),n=t.n(s),o=t(7294),r=t(1496),i=t(1796),d=t(2293),c=t(7357),p=t(155),h=t(6154),u=t(3946),m=t(5861),g=t(787),x=t(5819),f=t(517),b=t(1903),j=t(3321);let Z=e=>{let[a,t]=(0,o.useState)(e),l=(0,o.useCallback)(e=>{t(e.target.value)},[]);return[a,l,t]};var v=t(6540),y=t(2761),k=t(8201),C=t(7976),w=t(7469);let S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function I(e){let{setIsLoggedIn:a,setModalOpen:t,userId:s,setUserId:n,userName:r,setUserName:i}=e,d="".concat("http://localhost:8080","/signups"),[p,u]=Z(""),[g,x]=(0,o.useState)(!1),[f,v]=Z(""),[y,k]=Z(""),[C,I]=Z(""),[N,P]=(0,o.useState)(!1);(0,o.useCallback)(e=>{I(e.target.value),P(e.target.value!==y)},[y,I]);let W=e=>{let a=!1;if(e){let t=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(e);a=!!t}else a=!1;return a},E=()=>{t(!1)},F=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),y!==C?P(!0):W(p)?h.Z.post(d,{email:p,name:f,password:y},{headers:{"Content-Type":"application/json"}}).then(e=>{a(!0),n(e.data.userId),i(e.data.userName)}).catch(e=>{"already exist"==e.response.data.message?alert("이미 존재하는 이메일입니다."):alert("회원가입이 정상적으로 되지 않았습니다.")}):x(!0)},[p,y,C,a,f]);return(0,l.jsx)(w.Z,{open:!0,onClose:E,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:F,sx:S,children:[(0,l.jsx)(m.Z,{component:"h1",variant:"h5",sx:{textAlign:"center"},children:"회원가입"}),(0,l.jsx)(b.Z,{label:"이메일",name:"user-email",sx:{marginTop:3},fullWidth:!0,type:"email",value:p,required:!0,onChange:u}),g&&(0,l.jsx)("span",{style:{color:"red"},children:"Email 형식이 잘못되었습니다"}),(0,l.jsx)(b.Z,{label:"이름",name:"user-nick",sx:{marginTop:3},fullWidth:!0,value:f,required:!0,onChange:v}),(0,l.jsx)(b.Z,{label:"비밀번호",fullWidth:!0,name:"user-password",sx:{marginTop:3},type:"password",value:y,required:!0,onChange:k}),(0,l.jsx)(b.Z,{label:"비밀번호체크",fullWidth:!0,name:"user-password-check",sx:{marginTop:3},type:"password",value:C,required:!0,onChange:I}),N&&(0,l.jsx)("span",{style:{color:"red"},children:"비밀번호가 일치하지 않습니다"}),(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})}var N=t(4054),P=t(3841),W=t(315),E=t(5675),F=t.n(E);let z={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function T(e){let[a,t]=(0,o.useState)({name:""}),s="".concat("http://localhost:8080","/uploads"),[n,r]=(0,o.useState)(),[i,d]=o.useState(""),[p,u]=(0,o.useState)(!1),[g,f]=(0,o.useState)(!1),[v,y]=Z(""),[k,C]=Z(""),[S,I]=Z(""),[E,T]=Z(""),[D,L]=(0,o.useState)({title:"",desc:"",photos:[null]}),R=()=>{e.setuploadModalOpen(!1)},{title:_,desc:q,photos:A}=D,[O,U]=o.useState(""),[M,B]=o.useState(""),[G,H,V]=Z(""),X=e=>{U(e.target.value)},$=e=>{B(e.target.value)},J=e=>{K(e.target.files)},K=e=>{let a=[];if(void 0!=e){if(e.length>1)alert("이미지는 1개만 넣어주세요");else{u(!0);for(let t=0;t<e.length;t++){let l=e[t];r(e[t]);let s=new FileReader;s.readAsDataURL(l),s.addEventListener("load",()=>{let e={name:l.name,type:l.type,size:l.size,src:s.result};a.push(e),L({...D,photos:[...A,...a]})})}}}},Q=e=>{e.target.parentElement,L({...D,photos:[...A.slice(0,1),...A.slice(2)]}),u(!1)},Y=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),f(!0)},[]),ee=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),f(!1)},[]),ea=e=>{e.preventDefault(),e.stopPropagation();let a=e.dataTransfer,t=null==a?void 0:a.files;f(!1),K(t)};(0,o.useCallback)(e=>{e.preventDefault()},[]);let et="".concat("http://localhost:8080","/USERINFO"),[el,es]=(0,o.useState)({name:""});(0,o.useEffect)(()=>{console.log(e.userId),console.log(e.userName),h.Z.get(et,{}).then(e=>{es(e.data)}).catch(e=>{console.log(e)})},[e.userId]);let en=(0,o.useCallback)(a=>{if(""==O||""==M)a.preventDefault(),a.stopPropagation(),alert("카테고리, 시즌 필수");else if(""==S)a.preventDefault(),a.stopPropagation(),alert("브랜드입력 필수");else if(void 0==n)a.preventDefault(),a.stopPropagation(),alert("이미지 필수");else{console.log("submit"),console.log(e.userId),console.log(e.userName);let a=new FormData;a.append("image",n),a.append("userId",e.userId),a.append("userName",e.userName),a.append("brand",S),a.append("link",E),a.append("category",O),a.append("season",M),a.append("hashtag",G),a.append("reason",k),h.Z.post(s,a).then(e=>{console.log(e)}).catch(e=>{console.log(e)})}},[S,E,v,n,O,G,M]);return(0,l.jsx)(w.Z,{open:!0,onClose:R,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:en,sx:z,children:[(0,l.jsx)(m.Z,{sx:{textAlign:"center"},component:"h1",variant:"h5",children:"업로드"}),(0,l.jsx)(b.Z,{required:!0,label:"브랜드",fullWidth:!0,sx:{marginTop:"5px"},name:"user-brand",type:"text",value:S,variant:"standard",onChange:I}),(0,l.jsx)(b.Z,{label:"Link",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:E,required:!0,variant:"standard",onChange:T}),(0,l.jsx)(b.Z,{label:"선정이유",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:k,required:!0,variant:"standard",onChange:C}),(0,l.jsxs)(N.Z,{sx:{width:"40%",marginRight:"10%",marginTop:"25px"},children:[(0,l.jsx)(P.Z,{id:"demo-simple-select-label",children:"카테고리"}),(0,l.jsxs)(W.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:O,label:"category",required:!0,onChange:X,children:[(0,l.jsx)(x.Z,{value:"상의",children:"상의"}),(0,l.jsx)(x.Z,{value:"하의",children:"하의"}),(0,l.jsx)(x.Z,{value:"아우터",children:"아우터"}),(0,l.jsx)(x.Z,{value:"디테일",children:"디테일"}),(0,l.jsx)(x.Z,{value:"이미지",children:"이미지"}),(0,l.jsx)(x.Z,{value:"악세사리",children:"악세사리"})]})]}),(0,l.jsxs)(N.Z,{sx:{width:"40%",marginTop:"25px"},children:[(0,l.jsx)(P.Z,{id:"demo-simple-select-label",children:"시즌"}),(0,l.jsxs)(W.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:M,label:"season",required:!0,onChange:$,children:[(0,l.jsx)(x.Z,{value:"23SS",children:"23SS"}),(0,l.jsx)(x.Z,{value:"23FW",children:"23FW"})]})]}),(0,l.jsx)(b.Z,{id:"standard-basic",sx:{marginTop:"30px"},value:G,onChange:H,fullWidth:!0,label:"해시태그입력 #검정 #반팔 ",variant:"outlined"}),(0,l.jsx)("div",{className:"file-upload",style:{marginTop:"6px"},children:(0,l.jsxs)("div",{className:"custom-form-group",children:[!p&&(0,l.jsxs)("div",{className:g?"custom-file-drop-area highlight":"custom-file-drop-area",onDragEnter:Y,onDragOver:Y,onDragLeave:ee,onDrop:ea,children:[(0,l.jsx)("input",{type:"file",name:"photos",placeholder:"Enter photos",multiple:!1,id:"filephotos",onChange:J}),(0,l.jsx)("label",{htmlFor:"filephotos",children:"Drag & Drop"})]}),(0,l.jsx)("div",{className:"custom-file-preview",children:A.length>0&&A.map((e,a)=>0!=a?(0,l.jsxs)("div",{className:"prev-img",children:[(0,l.jsx)("span",{onClick:Q,children:"\xd7"}),e&&(0,l.jsx)(F(),{src:e.src,alt:e.name})]},a):(0,l.jsx)(l.Fragment,{}))})]})}),(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})}let D={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function L(e){let{setIsLoggedIn:a,setloginModalOpen:t,userId:s,setUserId:n,userName:r,setUserName:i}=e,d="".concat("http://localhost:8080","/login"),[p,u]=Z(""),[g,x]=Z(""),[f,v]=(0,o.useState)({id:0,name:null}),y=()=>{t(!1)},k=(0,o.useCallback)(e=>{e.preventDefault(),""==p?alert("이메일을 입력해주세요"):""==g?alert("비밀번호를 입력해주세요"):h.Z.post(d,{email:p,password:g},{headers:{"Content-Type":"application/json"}}).then(e=>{v(e.data.data),a(!0),n(e.data.data.id),i(e.data.data.name),console.log(e.data.data)}).catch(e=>{alert("로그인 정보가 일치하지 않습니다."),console.log(e)})},[p,g,a]);return(0,l.jsx)(w.Z,{open:!0,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(c.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:k,sx:D,children:[(0,l.jsx)(m.Z,{component:"h1",variant:"h5",children:"로그인"}),(0,l.jsx)(b.Z,{label:"이메일",name:"user-email",fullWidth:!0,type:"email",value:p,required:!0,variant:"standard",onChange:u}),(0,l.jsx)(b.Z,{label:"비밀번호",name:"user-nick",type:"password",fullWidth:!0,value:g,required:!0,variant:"standard",onChange:x}),(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"로그인"})]})})}function R(e){let{isLoggedIn:a,setIsLoggedIn:t,setPost:s,userId:n,setUserId:r,userName:i,setUserName:g}=e,w="".concat("http://localhost:8080","/hashtagsearch"),S="".concat("http://localhost:8080","/loadpost"),[N,P]=o.useState(!1),[W,E]=o.useState(!1),[F,z]=o.useState(!1),[D,R]=Z(""),[_,q]=o.useState(null),[A,O]=o.useState(null),[U,M]=o.useState(""),[B,G]=o.useState(""),H=(0,o.useRef)(null);(0,o.useEffect)(()=>{H.current&&H.current.focus()},[]);let V=()=>{P(!0)},X=()=>{z(!0)},$=Boolean(_),J=Boolean(A),K=()=>{O(null)},Q=()=>{q(null),K()},Y=(0,o.useCallback)(()=>{h.Z.get("".concat("http://localhost:8080","/logout")).then(e=>{"ok"==e.data.message&&t(!1),z(!1)}).catch(e=>{alert("서버와 연결 끊겼네요. 새로고침.!")})},[t]),ee=(0,o.useCallback)(()=>{a?E(!0):z(!0)},[a]),ea=e=>{O(e.currentTarget)},et=(0,o.useCallback)(()=>{alert("준비중입니다.")},[]),el=o.useCallback(e=>{if(""==D)h.Z.get(S).then(e=>{s(e.data)}).catch(e=>{alert("포스팅 불러오기 정상적으로 되지 않았습니다.")});else if(D.split("#").length<2)alert("태그 앞에 #를 붙여주세요");else{let a=D.toUpperCase();e.preventDefault(),e.stopPropagation(),h.Z.post(w,{hashtags:a,category:U,season:B},{headers:{"Content-Type":"application/json"}}).then(e=>{s(e.data)}).catch(e=>{alert("해시태그 포함된 포스팅이 없습니다."),console.log(e)})}},[D,s,U,B]),es="primary-search-account-menu",en=(0,l.jsxs)(f.Z,{anchorEl:_,anchorOrigin:{vertical:"top",horizontal:"right"},id:es,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:$,onClose:Q,children:[(0,l.jsx)(x.Z,{onClick:Q,children:"Profile"}),(0,l.jsx)(x.Z,{onClick:Q,children:"My account"})]}),eo="primary-search-account-menu-mobile",er=(0,l.jsx)(f.Z,{anchorEl:A,anchorOrigin:{vertical:"top",horizontal:"right"},id:eo,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:J,onClose:K,children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("p",{children:"만드는 중입니다"})})});return(0,l.jsxs)(c.Z,{sx:{flexGrow:1},children:[!a&&N&&(0,l.jsx)(I,{setIsLoggedIn:t,setModalOpen:P,userId:n,setUserId:r,userName:i,setUserName:g}),a&&W&&(0,l.jsx)(T,{setuploadModalOpen:E,userId:n,setUserId:r,userName:i,setUserName:g}),!a&&F&&(0,l.jsx)(L,{setIsLoggedIn:t,setloginModalOpen:z,userId:n,setUserId:r,userName:i,setUserName:g}),(0,l.jsx)(d.Z,{position:"static",style:{backgroundColor:"#FFF",color:"#000"},children:(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(m.Z,{noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}}}),(0,l.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsxs)("form",{onSubmit:el,style:{width:"70%",flex:"auto",marginLeft:"15%"},children:[(0,l.jsx)(u.Z,{type:"submit","aria-label":"search",sx:{display:{xs:"none",md:"inline-block"}},children:(0,l.jsx)(y.Z,{style:{fill:"#9A9A9A"}})}),(0,l.jsx)(b.Z,{id:"search-bar",className:"text",sx:{display:"inline-block",width:"80%"},value:D,onChange:R,label:"#상의 #검정",variant:"outlined",placeholder:"Search...",size:"small",inputRef:H})]}),(0,l.jsx)(c.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsxs)(c.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.Z,{size:"large",edge:"end",sx:{marginRight:"10px"},"aria-label":"account of current user","aria-haspopup":"false",color:"primary",onClick:ee,children:(0,l.jsx)(v.Z,{})})}),a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"100%",marginRight:"5px",fontWeight:"bold",display:"inline-block",whiteSpace:"nowrap"},size:"small",onClick:Y,children:"로그아웃"}),(0,l.jsx)(u.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":es,"aria-haspopup":"true",color:"primary",onClick:et,children:(0,l.jsx)(k.Z,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:X,children:"로그인"}),(0,l.jsx)(j.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",fontWeight:"bold",display:"inline-block"},onClick:V,size:"small",children:"가입"})]})]}),(0,l.jsx)(c.Z,{sx:{display:{xs:"flex",md:"none"},float:"right"},children:(0,l.jsx)(u.Z,{size:"large","aria-label":"show more","aria-controls":eo,"aria-haspopup":"true",onClick:ea,color:"primary",children:(0,l.jsx)(C.Z,{})})})]})}),er,en]})}(0,r.ZP)("div")(e=>{let{theme:a}=e;return{position:"relative",borderRadius:a.shape.borderRadius,backgroundColor:(0,i.Fq)("#F8F8F8",.73),"&:hover":{backgroundColor:(0,i.Fq)("#F8F8F8",.33)},marginRight:a.spacing(2),marginLeft:0,width:"100%",[a.breakpoints.up("sm")]:{marginLeft:a.spacing(3),width:"auto"}}}),(0,r.ZP)("div")(e=>{let{theme:a}=e;return{padding:a.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),(0,r.ZP)(g.ZP)(e=>{let{theme:a}=e;return{color:"inherit","& .MuiInputBase-input":{padding:a.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(a.spacing(4),")"),transition:a.transitions.create("width"),width:"100%",[a.breakpoints.up("md")]:{width:"20ch"},height:"40%"}}});var _=t(629),q=t(6242),A=t(4267),O=t(3965),U=t(1733),M=t(7957),B=t(9974),G=t(2023);function H(e){let[a,t]=(0,o.useState)(""),[s,n]=(0,o.useState)(""),r="".concat("http://localhost:8080","/hashtagsearch"),i="".concat("http://localhost:8080","/deletpost/").concat(e.id),d=(0,o.useCallback)(()=>{e.isLoggedIn?h.Z.post(i,{}).then(a=>{let t=e.posts.filter(a=>a.id!==e.id);e.setPost(t)}).catch(e=>{console.log(e)}):alert("로그인 해주세요")},[i,e]),c=(0,o.useCallback)(()=>{alert("만드는 중입니다..")},[]);(0,o.useEffect)(()=>{t(e.category),n("23SS")},[e.category]);let p=o.useCallback((a,t)=>{a.preventDefault(),a.stopPropagation(),h.Z.post(r,{hashtags:"#"+t},{headers:{"Content-Type":"application/json"}}).then(a=>{e.setPost(a.data)}).catch(e=>{alert("해시태그 포함된 포스팅이 없습니다."),console.log(e)})},[]);return(0,l.jsxs)(q.Z,{sx:{maxWidth:"15",marginTop:"20px",boxShadow:"none"},children:[(0,l.jsxs)(B.Z,{href:"".concat(e.link),target:"_blank",children:[(0,l.jsx)(O.Z,{component:"img",height:"300",image:"../".concat(e.src),alt:"green iguana"}),(0,l.jsxs)(A.Z,{children:[(0,l.jsx)(m.Z,{children:(0,l.jsxs)("span",{style:{fontWeight:900,fontSize:"130%",marginBottom:"4%"},children:[e.name[0],"_","".concat(e.brand)]})}),(0,l.jsx)(m.Z,{sx:{fontWeight:900,marginBottom:"1%"},variant:"subtitle2",color:"text.secondary",children:"참고할 부분"}),(0,l.jsx)(m.Z,{sx:{marginBottom:"1%"},variant:"body2",color:"text.secondary",children:e.reason})]})]}),(0,l.jsxs)(G.Z,{children:[(0,l.jsxs)("div",{style:{width:"100%",marginBottom:"3%"},children:[(0,l.jsx)(M.Z,{id:"editicon",onClick:c}),(0,l.jsx)(U.Z,{id:"delicon",onClick:d})]}),e.hashtags.map((e,a)=>(0,l.jsxs)("div",{style:{margin:"2px"},children:[(0,l.jsx)("div",{className:"Tag".concat(parseInt(e.PostHashtag.HashtagId)%8," Tag"),style:{display:"inline-block",margin:"2px"},onClick:a=>{p(a,e.name)},children:(0,l.jsxs)("a",{href:"",children:["#",e.name]})})," ","\xa0"]},a))]})]})}var V=t(6886);let X=(0,r.ZP)(_.Z)(e=>{let{theme:a}=e;return{backgroundColor:"dark"===a.palette.mode?"#1A2027":"#fff",...a.typography.body2,padding:a.spacing(2),textAlign:"center",color:a.palette.text.secondary}});function $(e){let{setIsLoggedIn:a,isLoggedIn:t,setPost:s,posts:n}=e;return(0,l.jsx)(c.Z,{sx:{flexGrow:1},children:(0,l.jsx)(V.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.map((e,o)=>(0,l.jsx)(V.ZP,{item:!0,xs:6,sm:4,md:3,lg:4,children:(0,l.jsx)(X,{children:(0,l.jsxs)("li",{style:{maxWidth:"320px",display:"inline-block"},children:[(0,l.jsx)(H,{isLoggedIn:t,setIsLoggedIn:a,name:e.name,index:o,setPost:s,posts:n,id:e.id,category:e.category,brand:e.brand,src:e.Images[0].src,link:e.link,season:e.season,hashtags:e.Hashtags,reason:e.reason})," "]})})},o))})})}function J(){let[e,a]=o.useState(!1),[t,s]=(0,o.useState)([]),[r,i]=(0,o.useState)(""),[d,c]=(0,o.useState)(""),p="".concat("http://localhost:8080","/loadpost"),u=(0,o.useCallback)(()=>{h.Z.get(p).then(e=>{s(e.data)}).catch(e=>{alert("로딩이 정상적으로 되지 않았습니다."),s([]),console.log(e)})},[s]);(0,o.useEffect)(()=>{u()},[u]);let m="".concat("http://localhost:8080","/logincheck");return(0,o.useEffect)(()=>{h.Z.get(m).then(e=>{e.data.login&&a(!0)}).catch(e=>{console.log(e)})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n(),{children:[(0,l.jsx)("title",{children:"Crump REF"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,l.jsxs)("div",{style:{margin:"auto",width:"80%"},children:[(0,l.jsx)("a",{onClick:u,children:(0,l.jsx)("h1",{id:"title",children:"CRUMP REFERENCE"})}),(0,l.jsx)("div",{style:{marginBottom:"40px"},children:(0,l.jsx)(R,{isLoggedIn:e,setIsLoggedIn:a,setPost:s,userId:r,setUserId:i,userName:d,setUserName:c})}),(0,l.jsx)($,{isLoggedIn:e,setIsLoggedIn:a,setPost:s,posts:t})]})]})}}},function(e){e.O(0,[594,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);