(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(8956)}])},8956:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return et}});var l=a(5893),n=a(9008),s=a.n(n),o=a(7294),i=a(1496),r=a(1796),d=a(2293),c=a(155),p=a(6154),h=a(3946),u=a(5861),m=a(787),x=a(5819),g=a(517),b=a(1903),f=a(3321);let j=e=>{let[t,a]=(0,o.useState)(e),l=(0,o.useCallback)(e=>{a(e.target.value)},[]);return[t,l,a]};var Z=a(6540),v=a(2761),y=a(8201),k=a(7976),C=a(7469),w=a(7357);let S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function I(e){let{setIsLoggedIn:t,setModalOpen:a,userId:n,setUserId:s,userName:i,setUserName:r}=e,d="".concat("http://15.164.224.172:8080","/signups"),[c,h]=j(""),[m,x]=(0,o.useState)(!1),[g,Z]=j(""),[v,y]=j(""),[k,I]=j(""),[W,z]=(0,o.useState)(!1);(0,o.useCallback)(e=>{I(e.target.value),z(e.target.value!==v)},[v,I]);let N=e=>{let t=!1;if(e){let a=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(e);t=!!a}else t=!1;return t},P=()=>{a(!1)},F=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),v!==k?z(!0):N(c)?p.Z.post(d,{email:c,name:g,password:v},{headers:{"Content-Type":"application/json"}}).then(e=>{t(!0),s(e.data.userId),r(e.data.userName)}).catch(e=>{"already exist"==e.response.data.message?alert("이미 존재하는 이메일입니다."):alert("회원가입이 정상적으로 되지 않았습니다.")}):x(!0)},[c,v,k,t,g]);return(0,l.jsx)(C.Z,{open:!0,onClose:P,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:F,sx:S,children:[(0,l.jsx)(u.Z,{component:"h1",variant:"h5",sx:{textAlign:"center"},children:"회원가입"}),(0,l.jsx)(b.Z,{label:"이메일",name:"user-email",sx:{marginTop:3},fullWidth:!0,type:"email",value:c,required:!0,onChange:h}),m&&(0,l.jsx)("span",{style:{color:"red"},children:"Email 형식이 잘못되었습니다"}),(0,l.jsx)(b.Z,{label:"이름",name:"user-nick",sx:{marginTop:3},fullWidth:!0,value:g,required:!0,onChange:Z}),(0,l.jsx)(b.Z,{label:"비밀번호",fullWidth:!0,name:"user-password",sx:{marginTop:3},type:"password",value:v,required:!0,onChange:y}),(0,l.jsx)(b.Z,{label:"비밀번호체크",fullWidth:!0,name:"user-password-check",sx:{marginTop:3},type:"password",value:k,required:!0,onChange:I}),W&&(0,l.jsx)("span",{style:{color:"red"},children:"비밀번호가 일치하지 않습니다"}),(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})}var W=a(4054),z=a(3841),N=a(315),P=a(5675),F=a.n(P);let E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function T(e){let[t,a]=(0,o.useState)({name:""});(0,o.useRef)();let n="".concat("http://15.164.224.172:8080","/uploads"),[s,i]=(0,o.useState)(),[r,d]=o.useState(""),[c,h]=(0,o.useState)(!1),[m,g]=(0,o.useState)(!1),[Z,v]=j(""),[y,k]=j(""),[S,I]=j(""),[P,T]=j(""),[L,D]=o.useState(!1),A="".concat("http://15.164.224.172:8080","/getHash"),[_,q]=(0,o.useState)({title:"",desc:"",photos:[null]}),O=()=>{e.setuploadModalOpen(!1)},{title:U,desc:B,photos:M}=_,V=()=>{D(!1)};(0,o.useRef)(null);let[G,H]=o.useState("상의"),[X,$]=o.useState("23SS"),[J,K,Q]=j(""),Y=e=>{H(e.target.value)},ee=e=>{$(e.target.value)},et=e=>{ea(e.target.files)},ea=e=>{let t=[];if(void 0!=e){if(e.length>1)alert("이미지는 1개만 넣어주세요");else{h(!0);for(let a=0;a<e.length;a++){let l=e[a];i(e[a]);let n=new FileReader;n.readAsDataURL(l),n.addEventListener("load",()=>{let e={name:l.name,type:l.type,size:l.size,src:n.result};t.push(e),q({..._,photos:[...M,...t]})})}}}},el=e=>{e.target.parentElement,q({..._,photos:[...M.slice(0,1),...M.slice(2)]}),h(!1)},en=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),g(!0)},[]),es=(0,o.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),g(!1)},[]),eo=e=>{e.preventDefault(),e.stopPropagation();let t=e.dataTransfer,a=null==t?void 0:t.files;g(!1),ea(a)};(0,o.useCallback)(e=>{e.preventDefault()},[]);let ei="".concat("http://15.164.224.172:8080","/USERINFO"),[er,ed]=(0,o.useState)({name:""}),[ec,ep]=o.useState({data:[{name:""}]});(0,o.useEffect)(()=>{console.log(e.userId),console.log(e.userName),p.Z.get(ei,{}).then(e=>{ed(e.data)}).catch(e=>{console.log(e)})},[e.userId]);let eh=(0,o.useCallback)(()=>{p.Z.get(A).then(e=>{console.log(e),D(!0),ep(e)}).catch(e=>{alert("포스팅 불러오기 정상적으로 되지 않았습니다.")})},[]),eu=t=>{if(console.log("!"),""==S)t.preventDefault(),t.stopPropagation(),alert("브랜드입력 필수");else if(void 0==s)t.preventDefault(),t.stopPropagation(),alert("이미지 필수");else{location.reload(),t.preventDefault(),t.stopPropagation(),console.log("submit"),console.log(e.userId),console.log(e.userName);let a=new FormData;a.append("image",s),a.append("userId",e.userId),a.append("userName",e.userName),a.append("brand",S),a.append("link",P),a.append("category",G),a.append("season",X),a.append("hashtag",J),a.append("reason",y),p.Z.post(n,a).then(e=>{console.log(e),location.reload()}).catch(e=>{console.log(e),location.reload()})}};return(0,l.jsxs)(l.Fragment,{children:[L&&(0,l.jsx)(C.Z,{open:!0,onClose:V,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:E,children:[(0,l.jsx)("div",{style:{height:"300px",overflow:"overlay"},children:ec.data.map((e,t)=>(0,l.jsxs)("li",{style:{listStyle:"none"},children:[" ","#",e.name]},t))}),(0,l.jsx)(f.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",onClick:V,children:"확인"})]})}),(0,l.jsx)(C.Z,{open:!0,onClose:O,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:eu,sx:R,children:[(0,l.jsx)(u.Z,{sx:{textAlign:"center"},component:"h1",variant:"h5",children:"업로드"}),(0,l.jsx)(b.Z,{required:!0,label:"브랜드",fullWidth:!0,sx:{marginTop:"5px"},name:"user-brand",type:"text",value:S,variant:"standard",onChange:I}),(0,l.jsx)(b.Z,{label:"Link",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:P,required:!0,variant:"standard",onChange:T}),(0,l.jsx)(b.Z,{label:"선정이유",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:y,required:!0,variant:"standard",onChange:k}),(0,l.jsxs)(W.Z,{sx:{width:"40%",marginRight:"10%",marginTop:"25px"},children:[(0,l.jsx)(z.Z,{id:"demo-simple-select-label",children:"상의"}),(0,l.jsxs)(N.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"상의",value:G,label:"카테고리",required:!0,onChange:Y,children:[(0,l.jsx)(x.Z,{value:"상의",children:"상의"}),(0,l.jsx)(x.Z,{value:"하의",children:"하의"}),(0,l.jsx)(x.Z,{value:"아우터",children:"아우터"}),(0,l.jsx)(x.Z,{value:"디테일",children:"디테일"}),(0,l.jsx)(x.Z,{value:"이미지",children:"이미지"}),(0,l.jsx)(x.Z,{value:"악세사리",children:"악세사리"})]})]}),(0,l.jsxs)(W.Z,{sx:{width:"40%",marginTop:"25px"},children:[(0,l.jsx)(z.Z,{id:"demo-simple-select-label",children:"23SS"}),(0,l.jsxs)(N.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"23SS",value:X,label:"시즌",required:!0,onChange:ee,children:[(0,l.jsx)(x.Z,{value:"23SS",children:"23SS"}),(0,l.jsx)(x.Z,{value:"23FW",children:"23FW"})]})]}),(0,l.jsx)(b.Z,{id:"standard-basic",sx:{marginTop:"30px"},value:J,onChange:K,fullWidth:!0,label:"해시태그입력 #검정 #반팔 ",variant:"outlined"}),(0,l.jsx)(f.Z,{variant:"contained",sx:{whiteSpace:"nowrap",marginRight:"5px",marginTop:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:eh,children:"#목록"}),(0,l.jsx)("div",{className:"file-upload",style:{marginTop:"10px"},children:(0,l.jsxs)("div",{className:"custom-form-group",children:[!c&&(0,l.jsxs)("div",{className:m?"custom-file-drop-area highlight":"custom-file-drop-area",onDragEnter:en,onDragOver:en,onDragLeave:es,onDrop:eo,children:[(0,l.jsx)("input",{type:"file",name:"photos",placeholder:"Enter photos",multiple:!1,id:"filephotos",onChange:et}),(0,l.jsx)("label",{htmlFor:"filephotos",children:"Drag & Drop"})]}),(0,l.jsx)("div",{className:"custom-file-preview",children:M.length>0&&M.map((e,t)=>0!=t?(0,l.jsxs)("div",{className:"prev-img",children:[(0,l.jsx)("span",{onClick:el,children:"\xd7"}),e&&(0,l.jsx)(F(),{src:e.src,alt:e.name})]},t):(0,l.jsx)(l.Fragment,{}))})]})}),(0,l.jsx)("button",{id:"submit_bt",style:{display:"none"},type:"submit"}),(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})]})}let L={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function D(e){let{setIsLoggedIn:t,setloginModalOpen:a,userId:n,setUserId:s,userName:i,setUserName:r}=e,d="".concat("http://15.164.224.172:8080","/login"),[c,h]=j(""),[m,x]=j(""),[g,Z]=(0,o.useState)({id:0,name:null}),v=()=>{a(!1)},y=(0,o.useCallback)(e=>{e.preventDefault(),""==c?alert("이메일을 입력해주세요"):""==m?alert("비밀번호를 입력해주세요"):p.Z.post(d,{email:c,password:m},{headers:{"Content-Type":"application/json"}}).then(e=>{Z(e.data.data),t(!0),s(e.data.data.id),r(e.data.data.name),console.log(e.data.data)}).catch(e=>{alert("로그인 정보가 일치하지 않습니다."),console.log(e)})},[c,m,t]);return(0,l.jsx)(C.Z,{open:!0,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:y,sx:L,children:[(0,l.jsx)(u.Z,{component:"h1",variant:"h5",children:"로그인"}),(0,l.jsx)(b.Z,{label:"이메일",name:"user-email",fullWidth:!0,type:"email",value:c,required:!0,variant:"standard",onChange:h}),(0,l.jsx)(b.Z,{label:"비밀번호",name:"user-nick",type:"password",fullWidth:!0,value:m,required:!0,variant:"standard",onChange:x}),(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"로그인"})]})})}let A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function _(e){let{isLoggedIn:t,setIsLoggedIn:a,setPost:n,userId:s,setUserId:i,userName:r,setUserName:m}=e,S="".concat("http://15.164.224.172:8080","/hashtagsearch"),W="".concat("http://15.164.224.172:8080","/getHash"),z="".concat("http://15.164.224.172:8080","/loadpost"),[N,P]=o.useState(!1),[F,E]=o.useState(!1),[R,L]=j(""),[_,q]=o.useState(null),[O,U]=o.useState(null),[B,M]=o.useState(""),[V,G]=o.useState(""),H=(0,o.useRef)(null),[X,$]=o.useState(!1),[J,K]=o.useState(!1),[Q,Y]=o.useState({data:[{name:""}]}),ee=()=>{K(!1)};(0,o.useEffect)(()=>{H.current&&H.current.focus()},[]);let et=()=>{$(!0)},ea=()=>{E(!0)},el=Boolean(_),en=Boolean(O),es=()=>{U(null)},eo=()=>{q(null),es()},ei=(0,o.useCallback)(()=>{p.Z.get("".concat("http://15.164.224.172:8080","/logout")).then(e=>{"ok"==e.data.message&&a(!1),E(!1)}).catch(e=>{alert("서버와 연결 끊겼네요. 새로고침.!")})},[a]),er=(0,o.useCallback)(()=>{t?P(!0):E(!0)},[t]),ed=e=>{U(e.currentTarget)},ec=(0,o.useCallback)(()=>{alert("준비중입니다.")},[]),ep=o.useCallback(e=>{if(""==R)p.Z.get(z).then(e=>{n(e.data)}).catch(e=>{alert("포스팅 불러오기 정상적으로 되지 않았습니다.")});else if(R.split("#").length<2)alert("태그 앞에 #를 붙여주세요");else{let t=R.toUpperCase();e.preventDefault(),e.stopPropagation(),p.Z.post(S,{hashtags:t,category:B,season:V},{headers:{"Content-Type":"application/json"}}).then(e=>{n(e.data)}).catch(e=>{alert("해시태그 포함된 포스팅이 없습니다."),console.log(e)})}},[R,n,B,V]),eh=(0,o.useCallback)(()=>{p.Z.get(W).then(e=>{console.log(e),K(!0),Y(e)}).catch(e=>{alert("포스팅 불러오기 정상적으로 되지 않았습니다.")})},[]),eu="primary-search-account-menu",em=(0,l.jsxs)(g.Z,{anchorEl:_,anchorOrigin:{vertical:"top",horizontal:"right"},id:eu,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:el,onClose:eo,children:[(0,l.jsx)(x.Z,{onClick:eo,children:"Profile"}),(0,l.jsx)(x.Z,{onClick:eo,children:"My account"})]}),ex="primary-search-account-menu-mobile",eg=(0,l.jsx)(g.Z,{anchorEl:O,anchorOrigin:{vertical:"top",horizontal:"right"},id:ex,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:en,onClose:es,children:(0,l.jsx)(x.Z,{children:(0,l.jsx)("p",{children:"만드는 중입니다"})})});return(0,l.jsxs)(w.Z,{sx:{flexGrow:1},children:[!t&&X&&(0,l.jsx)(I,{setIsLoggedIn:a,setModalOpen:$,userId:s,setUserId:i,userName:r,setUserName:m}),t&&N&&(0,l.jsx)(T,{setuploadModalOpen:P,userId:s,setUserId:i,userName:r,setUserName:m}),!t&&F&&(0,l.jsx)(D,{setIsLoggedIn:a,setloginModalOpen:E,userId:s,setUserId:i,userName:r,setUserName:m}),J&&(0,l.jsx)(C.Z,{open:!0,onClose:ee,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:A,children:[(0,l.jsx)("div",{style:{height:"300px",overflow:"overlay"},children:Q.data.map((e,t)=>(0,l.jsxs)("li",{style:{listStyle:"none"},children:[" #",e.name]},t))}),(0,l.jsx)(f.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",onClick:ee,children:"확인"})]})}),(0,l.jsx)(d.Z,{position:"static",style:{backgroundColor:"#FFF",color:"#000"},children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(f.Z,{variant:"contained",sx:{whiteSpace:"nowrap",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:eh,children:"#목록"}),(0,l.jsx)(u.Z,{noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}}}),(0,l.jsx)(w.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsxs)("form",{onSubmit:ep,style:{width:"70%",flex:"auto",marginLeft:"15%"},children:[(0,l.jsx)(h.Z,{type:"submit","aria-label":"search",sx:{display:{xs:"none",md:"inline-block"}},children:(0,l.jsx)(v.Z,{style:{fill:"#9A9A9A"}})}),(0,l.jsx)(b.Z,{id:"search-bar",className:"text",sx:{display:"inline-block",width:"80%"},value:R,onChange:L,label:"#상의 #검정",variant:"outlined",placeholder:"Search...",size:"small",inputRef:H})]}),(0,l.jsx)(w.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsxs)(w.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(h.Z,{size:"large",edge:"end",sx:{marginRight:"10px"},"aria-label":"account of current user","aria-haspopup":"false",color:"primary",onClick:er,children:(0,l.jsx)(Z.Z,{})})}),t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"100%",marginRight:"5px",fontWeight:"bold",display:"inline-block",whiteSpace:"nowrap"},size:"small",onClick:ei,children:"로그아웃"}),(0,l.jsx)(h.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":eu,"aria-haspopup":"true",color:"primary",onClick:ec,children:(0,l.jsx)(y.Z,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:ea,children:"로그인"}),(0,l.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",fontWeight:"bold",display:"inline-block"},onClick:et,size:"small",children:"가입"})]})]}),(0,l.jsx)(w.Z,{sx:{display:{xs:"flex",md:"none"},float:"right"},children:(0,l.jsx)(h.Z,{size:"large","aria-label":"show more","aria-controls":ex,"aria-haspopup":"true",onClick:ed,color:"primary",children:(0,l.jsx)(k.Z,{})})})]})}),eg,em]})}(0,i.ZP)("div")(e=>{let{theme:t}=e;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,r.Fq)("#F8F8F8",.73),"&:hover":{backgroundColor:(0,r.Fq)("#F8F8F8",.33)},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{marginLeft:t.spacing(3),width:"auto"}}}),(0,i.ZP)("div")(e=>{let{theme:t}=e;return{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}),(0,i.ZP)(m.ZP)(e=>{let{theme:t}=e;return{color:"inherit","& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"},height:"40%"}}});var q=a(629),O=a(6242),U=a(4267),B=a(3965),M=a(1733),V=a(7957),G=a(9974),H=a(2023),X=a(6868),$=a(1811);let J={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function K(e){let[t,a]=(0,o.useState)(""),[n,s]=(0,o.useState)(""),i="".concat("http://15.164.224.172:8080","/hashtagsearch"),r="".concat("http://15.164.224.172:8080","/deletpost/").concat(e.id),[d,c]=o.useState(!1),h=()=>{c(!1)},m=(0,o.useCallback)(()=>{e.isLoggedIn?c(!0):alert("로그인 해주세요")},[r,e]),x=(0,o.useCallback)(()=>{alert("준비중입니다.")},[]),g=(0,o.useCallback)(t=>{t.preventDefault(),t.stopPropagation(),e.isLoggedIn?p.Z.post(r,{}).then(t=>{let a=e.posts.filter(t=>t.id!==e.id);e.setPost(a),c(!1)}).catch(e=>{console.log(e),alert("버그 발생!")}):alert("로그인 해주세요")},[e.isLoggedIn,e.posts]),b=(0,o.useCallback)(()=>{alert("만드는 중입니다..")},[]);(0,o.useEffect)(()=>{a(e.category),s("23SS")},[e.category]);let j=o.useCallback((t,a)=>{t.preventDefault(),t.stopPropagation(),p.Z.post(i,{hashtags:"#"+a},{headers:{"Content-Type":"application/json"}}).then(t=>{e.setPost(t.data)}).catch(e=>{alert("해시태그 포함된 포스팅이 없습니다."),console.log(e)})},[]);return(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)(C.Z,{open:!0,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:g,sx:J,children:[(0,l.jsx)(u.Z,{component:"h2",variant:"h5",sx:{textAlign:"center",marginBottom:"15px"},children:"정말 삭제하시겠습니까?"}),(0,l.jsx)(f.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,width:"40%",marginLeft:"5%",marginRight:"10%"},size:"large",children:"삭제"}),(0,l.jsx)(f.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,width:"40%"},size:"large",onClick:h,children:"취소"})]})}),(0,l.jsxs)(O.Z,{sx:{maxWidth:"15",marginTop:"20px",boxShadow:"none"},children:[(0,l.jsxs)(G.Z,{href:"".concat(e.link),target:"_blank",children:[(0,l.jsx)(B.Z,{component:"img",height:"400",image:"../".concat(e.src),alt:"green iguana"}),(0,l.jsxs)(U.Z,{children:[(0,l.jsx)(u.Z,{children:(0,l.jsxs)("span",{style:{fontWeight:900,fontSize:"130%",marginBottom:"4%"},children:[e.name[0],"_","".concat(e.brand)]})}),(0,l.jsx)(u.Z,{sx:{fontWeight:900,marginBottom:"1%"},variant:"subtitle2",color:"text.secondary",children:"참고할 부분"}),(0,l.jsx)(u.Z,{sx:{marginBottom:"1%"},variant:"body2",color:"text.secondary",children:e.reason})]})]}),(0,l.jsxs)(H.Z,{children:[(0,l.jsxs)("div",{style:{width:"100%",display:"inline-block",marginBottom:"5px"},children:[(0,l.jsxs)("div",{style:{width:"20%",marginBottom:"3%",verticalAlign:"center",display:"inline-block"},children:[(0,l.jsx)($.Z,{onClick:()=>alert("준비중입니다"),sx:{opacity:"40%"}}),(0,l.jsx)("span",{style:{position:"relative",top:"-7px",marginLeft:"5px",color:"#A6A6A6"},children:"0"})]}),(0,l.jsxs)("div",{style:{width:"60%",marginBottom:"3%",display:"inline-block",float:"right"},children:[(0,l.jsx)(M.Z,{id:"delicon",onClick:m,sx:{marginRight:"10px",opacity:"40%",float:"right"}}),(0,l.jsx)(V.Z,{id:"editicon",onClick:b,sx:{marginRight:"10px",opacity:"40%",float:"right"}}),(0,l.jsx)(X.Z,{id:"copyicon",onClick:x,sx:{marginRight:"10px",opacity:"40%",float:"right"}})]})]}),e.hashtags.map((e,t)=>(0,l.jsxs)("div",{style:{margin:"2px"},children:[(0,l.jsx)("div",{className:"Tag".concat(parseInt(e.PostHashtag.HashtagId)%8," Tag"),style:{display:"inline-block",margin:"2px"},onClick:t=>{j(t,e.name)},children:(0,l.jsxs)("a",{href:"",children:["#",e.name]})})," ","\xa0"]},t))]})]})]})}var Q=a(6886);let Y=(0,i.ZP)(q.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary}});function ee(e){let{setIsLoggedIn:t,isLoggedIn:a,setPost:n,posts:s}=e;return(0,l.jsx)(w.Z,{sx:{flexGrow:1},children:(0,l.jsx)(Q.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:s.map((e,o)=>(0,l.jsx)(Q.ZP,{item:!0,xs:6,sm:4,md:3,lg:4,children:(0,l.jsx)(Y,{children:(0,l.jsxs)("li",{style:{maxWidth:"320px",display:"inline-block"},children:[(0,l.jsx)(K,{isLoggedIn:a,setIsLoggedIn:t,name:e.name,index:o,setPost:n,posts:s,id:e.id,category:e.category,brand:e.brand,src:e.Images[0].src,link:e.link,season:e.season,hashtags:e.Hashtags,reason:e.reason})," "]})})},o))})})}function et(){let[e,t]=o.useState(!1),[a,n]=(0,o.useState)([]),[i,r]=(0,o.useState)(""),[d,c]=(0,o.useState)(""),h="".concat("http://15.164.224.172:8080","/loadpost"),u=(0,o.useCallback)(()=>{p.Z.get(h).then(e=>{n(e.data)}).catch(e=>{alert("로딩이 정상적으로 되지 않았습니다."),n([]),console.log(e)})},[n]);(0,o.useEffect)(()=>{u()},[u]);let m="".concat("http://15.164.224.172:8080","/logincheck");return(0,o.useEffect)(()=>{p.Z.get(m).then(e=>{e.data.login&&t(!0)}).catch(e=>{console.log(e)})},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:"Crump REF"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,l.jsxs)("div",{style:{margin:"auto",width:"80%"},children:[(0,l.jsx)("a",{onClick:u,children:(0,l.jsx)("h1",{id:"title",children:"CRUMP REFERENCE"})}),(0,l.jsx)("div",{style:{marginBottom:"40px"},children:(0,l.jsx)(_,{isLoggedIn:e,setIsLoggedIn:t,setPost:n,userId:i,setUserId:r,userName:d,setUserName:c})}),(0,l.jsx)(ee,{isLoggedIn:e,setIsLoggedIn:t,setPost:n,posts:a})]})]})}}},function(e){e.O(0,[789,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);