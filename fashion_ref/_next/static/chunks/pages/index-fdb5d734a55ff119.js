(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7954)}])},7954:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return eh},default:function(){return ex}});var l=a(5893),n=a(9008),s=a.n(n),i=a(7294),o=a(2293),r=a(155),d=a(3946),c=a(5861),p=a(5819),u=a(517),h=a(3321),x=a(6540),m=a(8201),g=a(7976);let f=e=>{let[t,a]=(0,i.useState)(e),l=(0,i.useCallback)(e=>{a(e.target.value)},[]);return[t,l,a]};var b=a(6154),j=a(1903),v=a(7469),y=a(7357),Z=a(9473),k=a(6572),C=a(3454);let w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function S(e){let{setIsModalOpen:t,isModalOpen:a,userId:n,setUserId:s,userName:o,setUserName:r}=e,d=(0,Z.I0)(),p="".concat(C.env.NEXT_PUBLIC_API,"/signups"),[u,x]=f(""),[m,g]=(0,i.useState)(!1),[S,I]=f(""),[E,D]=f(""),[z,W]=f(""),[F,T]=(0,i.useState)(!1);(0,i.useCallback)(e=>{W(e.target.value),T(e.target.value!==E)},[E,W]);let P=e=>{let t=!1;if(e){let a=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(e);t=!!a}else t=!1;return t},B=()=>{t(!1)},N=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),E!==z?T(!0):P(u)?b.Z.post(p,{email:u,name:S,password:E},{headers:{"Content-Type":"application/json"}}).then(e=>{d((0,k.tP)()),s(e.data.userId),r(e.data.userName),B()}).catch(e=>{"already exist"==e.response.data.message?alert("이미 존재하는 이메일입니다."):alert("회원가입이 정상적으로 되지 않았습니다.")}):g(!0)},[p,d,s,r,u,E,z,S]);return(0,l.jsx)(v.Z,{open:!0,onClose:B,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:N,sx:w,children:[(0,l.jsx)(c.Z,{component:"h1",variant:"h5",sx:{textAlign:"center"},children:"회원가입"}),(0,l.jsx)(j.Z,{label:"이메일",name:"user-email",sx:{marginTop:3},fullWidth:!0,type:"email",value:u,required:!0,onChange:x}),m&&(0,l.jsx)("span",{style:{color:"red"},children:"Email 형식이 잘못되었습니다"}),(0,l.jsx)(j.Z,{label:"이름",name:"user-nick",sx:{marginTop:3},fullWidth:!0,value:S,required:!0,onChange:I}),(0,l.jsx)(j.Z,{label:"비밀번호",fullWidth:!0,name:"user-password",sx:{marginTop:3},type:"password",value:E,required:!0,onChange:D}),(0,l.jsx)(j.Z,{label:"비밀번호체크",fullWidth:!0,name:"user-password-check",sx:{marginTop:3},type:"password",value:z,required:!0,onChange:W}),F&&(0,l.jsx)("span",{style:{color:"red"},children:"비밀번호가 일치하지 않습니다"}),(0,l.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})}var I=a(4054),E=a(3841),D=a(315),z=a(8987),W=a(491);let F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function P(e){let t=(0,Z.I0)(),[a,n]=(0,i.useState)(!0),{user:s}=(0,Z.v9)(e=>e.user),{postArray:o}=(0,Z.v9)(e=>e.post),{hashtags:r}=(0,Z.v9)(e=>e.post),[d,u]=(0,i.useState)({name:""}),[x,m]=(0,i.useState)(),[g,b]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1),[w,S,P]=f(""),[B,N,A]=f(""),[_,R,O]=f(""),[M,q]=i.useState(!1),{addPostLoading:L}=(0,Z.v9)(e=>e.post),{addPostDone:V}=(0,Z.v9)(e=>e.post),{editPostDone:H}=(0,Z.v9)(e=>e.post),{editPostWithImagesDone:U}=(0,Z.v9)(e=>e.post),[G,X]=(0,i.useState)({title:"",desc:"",photos:[null]}),Y=(0,i.useCallback)(()=>{e.setuploadModalOpen(!1)},[]),{title:$,desc:J,photos:K}=G,Q=()=>{q(!1)};(0,i.useRef)(null);let[ee,et]=i.useState("상의"),[ea,el]=i.useState("23SS"),[en,es,ei]=f(""),[eo,er]=(0,i.useState)([]),ed=e=>{et(e.target.value)},ec=e=>{el(e.target.value)},ep=e=>{eu(e.target.files)},eu=e=>{let t=[],a=[];if(void 0!=e){b(!0);for(let l=0;l<e.length;l++){let n=e[l];a.push(n);let s=new FileReader;s.readAsDataURL(n),s.addEventListener("load",()=>{let e={name:n.name,type:n.type,size:n.size,src:s.result};t.push(e),X({...G,photos:[...K,...t]})})}m(a)}},eh=e=>{e.target.parentElement,X({...G,photos:[...K.slice(0,1),...K.slice(2)]}),2==G.photos.length&&b(!1)},ex=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),C(!0)},[]),em=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),C(!1)},[]),eg=e=>{e.preventDefault(),e.stopPropagation();let t=e.dataTransfer,a=null==t?void 0:t.files;C(!1),eu(a)},[ef,eb]=i.useState({data:[{name:""}]}),ej=(0,i.useCallback)(()=>{t({type:W.tG}),q(!0)},[t]),ev=(0,i.useCallback)(a=>{if(""==B)a.preventDefault(),a.stopPropagation(),alert("브랜드입력 필수");else if(a.preventDefault(),a.stopPropagation(),e.isEdit){var l,n;if(x){let a=new FormData;[].forEach.call(x,e=>{a.append("image",e)}),a.append("postId",null===(l=e.postId)||void 0===l?void 0:l.toString()),a.append("brand",B.replace(" ","")),a.append("link",_),a.append("category",ee),a.append("season",ea),a.append("hashtag",en),a.append("reason",w),t({type:W.yz,data:a})}else{if(1==G.photos.length){alert("이미지 필수");return}let a=new FormData;[].forEach.call(G.photos,(e,t)=>{0!=t&&a.append("imagePath",e.src)}),a.append("postId",null===(n=e.postId)||void 0===n?void 0:n.toString()),a.append("brand",B.replace(" ","")),a.append("link",_),a.append("category",ee),a.append("season",ea),a.append("hashtag",en),a.append("reason",w),t({type:W.s4,data:a})}}else{if(!x){alert("이미지 필수");return}let e=new FormData;[].forEach.call(x,t=>{e.append("image",t)}),e.append("userId",s.id),e.append("userName",s.userName),e.append("brand",B.replace(" ","")),e.append("link",_),e.append("category",ee),e.append("season",ea),e.append("hashtag",en),e.append("reason",w),t((0,W.q2)(e))}},[B,ee,ea,en,w,_,s,t,x,G.photos,e.isEdit,e.postId]);return(0,i.useEffect)(()=>{V&&(t({type:W.mN}),Y()),H&&(t({type:W.qb}),Y(),e.setIsEdit(!1),e.setImageIndex&&e.setImageIndex(0)),U&&(t({type:W.gP}),Y(),e.setIsEdit(!1),e.setImageIndex&&e.setImageIndex(0))},[V,t,Y,H,e.setIsEdit,U]),(0,i.useEffect)(()=>{if(console.log(e.isEdit),e.isEdit){let t=o.find(t=>t.id===e.postId);er(t.Images);let a="";t.Hashtags&&t.Hashtags.map(e=>a=a.concat("#".concat(null==e?void 0:e.name," ")));for(let e=0;e<t.Hashtags.length;e++)a.concat("#".concat(t.Hashtags[e].name," "));et(t.category),el(t.season),ei(a),A(t.brand),P(t.reason),O(t.link),b(!0),X({...G,photos:K.concat(t.Images)})}},[e.isEdit,o]),(0,l.jsxs)(l.Fragment,{children:[M&&(0,l.jsx)(v.Z,{open:!0,onClose:Q,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:F,children:[(0,l.jsx)("div",{className:"hashlistdiv",style:{height:"300px",overflow:"overlay"},children:r&&r.map((e,t)=>(0,l.jsxs)("li",{id:"hashlist",style:{listStyle:"none"},children:[" ","#",e.name]},t))}),(0,l.jsx)(h.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",onClick:Q,children:"확인"})]})}),(0,l.jsx)(v.Z,{open:!0,onClose:Y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:ev,sx:T,children:[(0,l.jsx)(c.Z,{sx:{textAlign:"center"},component:"h1",variant:"h5",children:"업로드"}),(0,l.jsx)(j.Z,{required:!0,label:"브랜드",fullWidth:!0,sx:{marginTop:"5px"},name:"user-brand",type:"text",value:B,variant:"standard",onChange:N}),(0,l.jsx)(j.Z,{label:"Link",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:_,required:!0,variant:"standard",onChange:R}),(0,l.jsx)(j.Z,{label:"선정이유",fullWidth:!0,sx:{marginTop:"5px"},name:"user-link",type:"text",value:w,required:!0,variant:"standard",onChange:S}),(0,l.jsxs)(I.Z,{sx:{width:"40%",marginRight:"10%",marginTop:"25px"},children:[(0,l.jsx)(E.Z,{id:"demo-simple-select-label",children:"상의"}),(0,l.jsxs)(D.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"상의",value:ee,label:"카테고리",required:!0,onChange:ed,children:[(0,l.jsx)(p.Z,{value:"상의",children:"상의"}),(0,l.jsx)(p.Z,{value:"하의",children:"하의"}),(0,l.jsx)(p.Z,{value:"아우터",children:"아우터"}),(0,l.jsx)(p.Z,{value:"디테일",children:"디테일"}),(0,l.jsx)(p.Z,{value:"이미지",children:"이미지"}),(0,l.jsx)(p.Z,{value:"악세사리",children:"악세사리"})]})]}),(0,l.jsxs)(I.Z,{sx:{width:"40%",marginTop:"25px"},children:[(0,l.jsx)(E.Z,{id:"demo-simple-select-label",children:"23SS"}),(0,l.jsxs)(D.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",defaultValue:"23SS",value:ea,label:"시즌",required:!0,onChange:ec,children:[(0,l.jsx)(p.Z,{value:"23SS",children:"23SS"}),(0,l.jsx)(p.Z,{value:"23FW",children:"23FW"})]})]}),(0,l.jsx)(j.Z,{id:"standard-basic",sx:{marginTop:"30px"},value:en,onChange:es,fullWidth:!0,label:"해시태그입력 #검정 #반팔 ",variant:"outlined"}),(0,l.jsx)(h.Z,{variant:"contained",sx:{whiteSpace:"nowrap",marginRight:"5px",marginTop:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:ej,children:"#목록"}),(0,l.jsx)("div",{className:"file-upload",style:{marginTop:"10px"},children:(0,l.jsxs)("div",{className:"custom-form-group",children:[!g&&(0,l.jsxs)("div",{className:k?"custom-file-drop-area highlight":"custom-file-drop-area",onDragEnter:ex,onDragOver:ex,onDragLeave:em,onDrop:eg,children:[(0,l.jsx)("input",{type:"file",name:"photos",placeholder:"Enter photos",multiple:!1,id:"filephotos",onChange:ep}),(0,l.jsx)("label",{htmlFor:"filephotos",children:"이미지를 드래그해서 넣어주세요"})]}),(0,l.jsx)("div",{className:"custom-file-preview",children:K.length>0&&K.map((e,t)=>0!=t?(0,l.jsxs)("div",{className:"prev-img",children:[(0,l.jsx)("span",{onClick:eh,children:"\xd7"}),e&&(0,l.jsx)("img",{src:e.src,alt:e.name})]},t):(0,l.jsx)(l.Fragment,{}))})]})}),(0,l.jsx)("button",{id:"submit_bt",style:{display:"none"},type:"submit"}),(0,l.jsx)(z.Z,{type:"submit",loading:L,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",children:"확인"})]})})]})}let B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function N(e){let{setloginModalOpen:t,loginModalOpen:a}=e,n=(0,Z.I0)(),[s,o]=(0,i.useState)(!0),{logInLoading:r}=(0,Z.v9)(e=>e.user),{logInError:d}=(0,Z.v9)(e=>e.user),[p,u]=f(""),[h,x]=f(""),m=()=>{t(!1)},g=(0,i.useCallback)(e=>{e.preventDefault(),""==p?alert("이메일을 입력해주세요"):""==h?alert("비밀번호를 입력해주세요"):n((0,k.tP)({email:p,password:h}))},[p,h,n]);return(0,i.useEffect)(()=>{r||s||t(!1),o(!1)},[r]),(0,l.jsx)(v.Z,{open:!0,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:g,sx:B,children:[(0,l.jsx)(c.Z,{component:"h1",variant:"h5",children:"로그인"}),(0,l.jsx)(j.Z,{label:"이메일",name:"user-email",fullWidth:!0,type:"email",value:p,required:!0,variant:"standard",onChange:u}),(0,l.jsx)(j.Z,{label:"비밀번호",name:"user-nick",type:"password",fullWidth:!0,value:h,required:!0,variant:"standard",onChange:x}),d&&(0,l.jsx)("span",{style:{marginTop:"10px",color:"#F73334"},children:" 로그인 정보가 일치하지 않습니다."}),(0,l.jsx)(z.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",loading:r,children:"로그인"})]})})}var A=a(2761);function _(e){let{}=e,[t,a]=f(""),n=(0,Z.I0)(),s=(0,i.useRef)(null);(0,i.useEffect)(()=>{s.current&&s.current.focus()},[]);let o=i.useCallback(e=>{if(""==t)n((0,W.HV)());else if(t.split("#").length<2)alert("태그 앞에 #를 붙여주세요");else{let a=t.toUpperCase();e.preventDefault(),e.stopPropagation(),n({type:W.fS,data:{hashtags:"#"+a}})}},[n,t]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:o,style:{width:"70%",flex:"auto",marginLeft:"15%"},children:[(0,l.jsx)(d.Z,{type:"submit","aria-label":"search",sx:{display:{xs:"none",md:"inline-block"}},children:(0,l.jsx)(A.Z,{style:{fill:"#9A9A9A"}})}),(0,l.jsx)(j.Z,{id:"search-bar",className:"text",sx:{display:"inline-block",width:"80%"},value:t,onChange:a,label:"#상의 #검정",variant:"outlined",placeholder:"Search...",size:"small",inputRef:s})]})})}var R=a(3454);let O={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function M(e){let{userId:t,setUserId:a,userName:n,setUserName:s}=e,{user:f}=(0,Z.v9)(e=>e.user),{logOutLoading:b}=(0,Z.v9)(e=>e.user),{hashtags:j}=(0,Z.v9)(e=>e.post),[C,w]=(0,i.useState)(!1),I=(0,Z.I0)();R.env.NEXT_PUBLIC_API;let[E,D]=i.useState(!1),[F,T]=i.useState(!1),[B,A]=i.useState(null),[M,q]=i.useState(null),[L,V]=i.useState(!1),[H,U]=i.useState(!1),G=()=>{U(!1)},X=()=>{V(!0)},Y=()=>{T(!0)},$=Boolean(B),J=Boolean(M),K=()=>{q(null)},Q=()=>{A(null),K()},ee=(0,i.useCallback)(()=>{I((0,k.vR)()),T(!1)},[I]),et=(0,i.useCallback)(()=>{f?D(!0):T(!0)},[f]),ea=e=>{q(e.currentTarget)},el=(0,i.useCallback)(()=>{alert("준비중입니다.")},[]),en=(0,i.useCallback)(()=>{I({type:W.tG}),U(!0)},[I]),es="primary-search-account-menu",ei=(0,l.jsxs)(u.Z,{anchorEl:B,anchorOrigin:{vertical:"top",horizontal:"right"},id:es,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:$,onClose:Q,children:[(0,l.jsx)(p.Z,{onClick:Q,children:"Profile"}),(0,l.jsx)(p.Z,{onClick:Q,children:"My account"})]}),eo="primary-search-account-menu-mobile",er=(0,l.jsx)(u.Z,{anchorEl:M,anchorOrigin:{vertical:"top",horizontal:"right"},id:eo,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:J,onClose:K,children:(0,l.jsx)(p.Z,{children:(0,l.jsx)("p",{children:"만드는 중입니다"})})});return(0,l.jsxs)(y.Z,{sx:{flexGrow:1},children:[!f&&L&&(0,l.jsx)(S,{isModalOpen:L,setIsModalOpen:V,userId:t,setUserId:a,userName:n,setUserName:s}),f&&E&&(0,l.jsx)(P,{setImageIndex:null,uploadModalOpen:E,setuploadModalOpen:D,isEdit:C,setIsEdit:w,postId:null}),!f&&F&&(0,l.jsx)(N,{loginModalOpen:F,setloginModalOpen:T}),H&&(0,l.jsx)(v.Z,{open:!0,onClose:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:O,children:[(0,l.jsx)("div",{className:"hashlistdiv",style:{height:"300px",overflow:"overlay"},children:j&&j.map((e,t)=>(0,l.jsxs)("li",{id:"hashlist",style:{listStyle:"none",marginBottom:"5px"},children:[" ","#",e.name]},e.id))}),(0,l.jsx)(h.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",onClick:G,children:"확인"})]})}),(0,l.jsx)(o.Z,{position:"static",style:{backgroundColor:"#FFF",color:"#000"},children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(h.Z,{variant:"contained",sx:{whiteSpace:"nowrap",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:en,children:"#목록"}),(0,l.jsx)(c.Z,{noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}}}),(0,l.jsx)(y.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsx)(_,{}),(0,l.jsx)(y.Z,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}}}),(0,l.jsxs)(y.Z,{sx:{display:{xs:"none",md:"flex"}},children:[(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(d.Z,{size:"large",edge:"end",sx:{marginRight:"10px"},"aria-label":"account of current user","aria-haspopup":"false",color:"primary",onClick:et,children:(0,l.jsx)(x.Z,{})})}),f?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(z.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"100%",marginRight:"5px",fontWeight:"bold",display:"inline-block",whiteSpace:"nowrap"},size:"small",onClick:ee,loading:b,children:"로그아웃"}),(0,l.jsx)(d.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":es,"aria-haspopup":"true",color:"primary",onClick:el,children:(0,l.jsx)(m.Z,{})})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",marginRight:"5px",fontWeight:"bold",display:"inline-block"},size:"small",onClick:Y,children:"로그인"}),(0,l.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{width:"40%",fontWeight:"bold",display:"inline-block"},onClick:X,size:"small",children:"가입"})]})]}),(0,l.jsx)(y.Z,{sx:{display:{xs:"flex",md:"none"},float:"right"},children:(0,l.jsx)(d.Z,{size:"large","aria-label":"show more","aria-controls":eo,"aria-haspopup":"true",onClick:ea,color:"primary",children:(0,l.jsx)(g.Z,{})})})]})}),er,ei]})}var q=a(1496),L=a(629),V=a(7297),H=a(6242),U=a(4267),G=a(3965),X=a(1733),Y=a(7957),$=a(2023),J=a(9974),K=a(6868),Q=a(1596),ee=a(3412),et=a(7802),ea=a(6111),el=a(1405);function en(){let e=(0,V.Z)(["\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  padding: 8px;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]);return en=function(){return e},e}let es={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},ei=(0,q.ZP)($.Z)(en());function eo(e){var t;let{logInDone:a}=(0,Z.v9)(e=>e.user),{user:n}=(0,Z.v9)(e=>e.user),{postArray:s}=(0,Z.v9)(e=>e.post),o=(0,Z.I0)(),[r,d]=(0,i.useState)(!1),[p,u]=(0,i.useState)(!1),[x,m]=(0,i.useState)((null===(t=e.likers)||void 0===t?void 0:t.length)||0),[g,f]=(0,i.useState)(!1),[b,j]=(0,i.useState)(!1),[k,C]=(0,i.useState)(0),[w,S]=i.useState(!1),[I,E]=i.useState(""),D=()=>{S(!1)},z=(0,i.useCallback)(()=>{n?(d(e=>!e),r?(o({type:W.VT,data:e.id}),m(e=>e-1)):(o({type:W.xD,data:e.id}),m(e=>e+1))):(alert("로그인 해주세요"),f(!0))},[n,r,e.id]),F=(0,i.useCallback)(()=>{n?S(!0):(alert("로그인 해주세요"),f(!0))},[n]),T=(0,i.useCallback)(()=>n?o({type:W.RR,data:e.id}):alert("로그인이 필요합니다."),[o,e.id,n]),B=(0,i.useCallback)(t=>(t.preventDefault(),t.stopPropagation(),n)?o({type:W.sV,data:e.id}):alert("로그인이 필요합니다."),[o,e.id,n]),A=(0,i.useCallback)(()=>{if(!n)return alert("로그인이 필요합니다.");j(!0),u(!0)},[e.id,n,j]);(0,i.useEffect)(()=>{void 0==e.Images[k]||E("../".concat(e.Images[k].src))},[e.Images,k]);let _=(0,i.useCallback)(()=>{k<e.Images.length&&C(e=>e+1)},[e.Images,k]),R=(0,i.useCallback)(()=>{k>0&&C(e=>e-1)},[k]),O=i.useCallback((e,t)=>{e.preventDefault(),e.stopPropagation(),o({type:W.fS,data:{hashtags:"#"+t}}),window.scrollTo({top:0,behavior:"smooth"})},[o,e]);return(0,i.useEffect)(()=>{if((null==n?void 0:n.data)&&e.likers){let t=e.likers.find(e=>e.id===(null==n?void 0:n.data.id));t?d(!0):d(!1)}},[e.likers,n,e.id,a]),(0,l.jsxs)(l.Fragment,{children:[b&&(0,l.jsx)(P,{setImageIndex:C,setuploadModalOpen:j,uploadModalOpen:b,isEdit:p,setIsEdit:u,postId:e.id}),g&&(0,l.jsx)(N,{loginModalOpen:g,setloginModalOpen:f}),w&&(0,l.jsx)(v.Z,{open:!0,onClose:D,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:B,sx:es,children:[(0,l.jsx)(c.Z,{component:"h2",variant:"h5",sx:{textAlign:"center",marginBottom:"15px"},children:"정말 삭제하시겠습니까?"}),(0,l.jsx)(h.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,width:"40%",marginLeft:"5%",marginRight:"10%"},size:"large",children:"삭제"}),(0,l.jsx)(h.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,width:"40%"},size:"large",onClick:D,children:"취소"})]})}),(0,l.jsxs)(H.Z,{sx:{maxWidth:"15",marginTop:"20px",boxShadow:"none",position:"relative"},children:[(0,l.jsx)(J.Z,{href:"".concat(e.link),target:"_blank",children:(0,l.jsx)(G.Z,{component:"img",height:"400",image:I})}),e.Images&&e.Images.length>1&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Q.Z,{onClick:_,style:{position:"absolute",top:"30%",right:"0%",zIndex:100,color:"#3D3D3D",cursor:"pointer"}}),(0,l.jsx)(et.Z,{style:{position:"absolute",top:"30%",right:"0%",color:"#B5B5B7"}}),(0,l.jsx)(ee.Z,{onClick:R,style:{position:"absolute",top:"30%",left:"0%",zIndex:100,color:"#3D3D3D",cursor:"pointer"}}),(0,l.jsx)(et.Z,{style:{position:"absolute",top:"30%",left:"0%",color:"#B5B5B7"}})]}),(0,l.jsxs)(U.Z,{children:[(0,l.jsxs)("div",{style:{width:"100%",marginBottom:"3%",display:"inline-block"},children:[(0,l.jsx)(K.Z,{id:"copyicon",onClick:T,sx:{":hover":{opacity:"50%"},cursor:"pointer",marginRight:"17px",opacity:"25%",width:"0.9em"}}),(0,l.jsx)(Y.Z,{id:"editicon",onClick:A,sx:{":hover":{opacity:"50%"},cursor:"pointer",opacity:"25%",width:"0.9em"}}),(0,l.jsx)(X.Z,{id:"delicon",onClick:F,sx:{":hover":{opacity:"50%"},cursor:"pointer",marginLeft:"17px",opacity:"25%",width:"0.9em"}})]}),(0,l.jsx)(c.Z,{children:(0,l.jsx)("span",{style:{fontWeight:900,fontSize:"130%",marginBottom:"4%"},children:"".concat(e.brand)})}),(0,l.jsx)(c.Z,{sx:{fontWeight:900,marginBottom:"2%"},variant:"subtitle2",color:"text.secondary",children:"참고할 부분"}),(0,l.jsx)(c.Z,{sx:{marginBottom:"1%"},variant:"body2",color:"text.secondary",children:e.reason})]}),(0,l.jsxs)(ei,{children:[(0,l.jsx)("div",{style:{width:"100%",display:"inline-block",marginBottom:"5px"},children:(0,l.jsxs)("div",{style:{width:"20%",marginBottom:"3%",verticalAlign:"center",display:"inline-block",float:"left"},children:[r?(0,l.jsx)(ea.Z,{onClick:z,sx:{cursor:"pointer",opacity:"80%",color:"#FF3040"}}):(0,l.jsx)(el.Z,{onClick:z,sx:{cursor:"pointer",opacity:"40%"}}),(0,l.jsx)("span",{style:{position:"relative",top:"-7px",marginLeft:"5px",color:"#A6A6A6"},children:x||0})]})}),e.hashtags.map((e,t)=>(0,l.jsxs)("div",{style:{margin:"2px"},children:[(0,l.jsx)("div",{className:"Tag".concat(e.PostHashtag.HashtagId%8," Tag"),style:{display:"inline-block",margin:"2px"},onClick:t=>{O(t,e.name)},children:(0,l.jsxs)("a",{href:"",children:["#",e.name]})})," ","\xa0"]},t)),(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsxs)("span",{style:{float:"left",color:"#A6A6A6",fontSize:"80%",marginTop:"10px"},children:["작성자 : ",e.name]})})]})]})]})}var er=a(6886);let ed=(0,q.ZP)(L.Z)(e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(2),textAlign:"center",color:t.palette.text.secondary}});function ec(e){let{}=e,{postArray:t}=(0,Z.v9)(e=>e.post);return(0,i.useEffect)(()=>{},[t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(y.Z,{sx:{flexGrow:1},children:(0,l.jsx)(er.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:t&&t.map((e,t)=>(0,l.jsx)(er.ZP,{item:!0,xs:6,sm:4,md:3,lg:4,children:(0,l.jsx)(ed,{children:(0,l.jsxs)("li",{style:{maxWidth:"320px",display:"inline-block"},children:[(0,l.jsx)(eo,{index:t,name:e.name,id:e.id,likers:e.Likers,category:e.category,brand:e.brand,Images:e.Images,link:e.link,season:e.season,hashtags:e.Hashtags,reason:e.reason})," "]})})},e.id))})})})}let ep={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function eu(e){let{}=e,[t,a]=f("");(0,Z.I0)(),(0,i.useRef)(null);let[n,s]=(0,i.useState)(!1),o=()=>{s(!1)};return(0,i.useEffect)(()=>{new Date().getDate()-30==0&&s(!0)},[]),(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsx)(v.Z,{open:!0,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(y.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:ep,children:[(0,l.jsx)("h1",{children:" 3.30 업데이트 안내 \uD83D\uDC07"}),(0,l.jsx)("p",{style:{marginTop:"-20px",marginBottom:"20px",color:"#7F7F7F"},children:" *하루동안 떠요"}),(0,l.jsx)("h2",{style:{marginBottom:"10px"},children:" 기능 추가 목록 (5가지) "}),(0,l.jsxs)("ol",{type:"1",children:[(0,l.jsx)("li",{style:{marginBottom:"10px"},children:" 게시글 복제 "}),(0,l.jsx)("li",{style:{marginBottom:"10px"},children:"  게시글 수정 \uD83D\uDCCC "}),(0,l.jsx)("li",{style:{marginBottom:"10px"},children:"  좋아요  "}),(0,l.jsx)("li",{style:{marginBottom:"10px"},children:"  사진 업로드 여러장 가능 \uD83D\uDCCC "}),(0,l.jsx)("li",{style:{marginBottom:"10px"},children:"  작성자 이름 & 브랜드 이름으로 게시물 검색 "})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)(h.Z,{fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},size:"large",onClick:o,children:"확인"})]})})})}var eh=!0;function ex(){let{user:e}=(0,Z.v9)(e=>e.user),{loadPostLoading:t}=(0,Z.v9)(e=>e.post),{onInfiniteScroll:a}=(0,Z.v9)(e=>e.post),{hasMorePost:n}=(0,Z.v9)(e=>e.post),{postArray:o}=(0,Z.v9)(e=>e.post),r=(0,Z.I0)(),[d,c]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[h,x]=(0,i.useState)([]);(0,i.useEffect)(()=>{function e(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-350&&n&&!t&&a){let e=o[o.length-1].id;r({type:W.EG,data:e})}}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[n,t,r,o,a]);let m=(0,i.useCallback)(()=>{r({type:W.kT}),r((0,W.HV)())},[r]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s(),{children:[(0,l.jsx)("title",{children:"Crump REF"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,l.jsx)(eu,{}),(0,l.jsxs)("div",{style:{margin:"auto",width:"80%"},children:[(0,l.jsx)("a",{onClick:m,children:(0,l.jsx)("h1",{id:"title",style:{cursor:"pointer"},children:"CRUMP REFERENCE"})}),(0,l.jsx)("div",{style:{marginBottom:"40px"},children:(0,l.jsx)(M,{userId:d,setUserId:c,userName:p,setUserName:u})}),(0,l.jsx)(ec,{}),t&&(0,l.jsx)("div",{id:"bottomloading",children:(0,l.jsx)("span",{style:{fontSize:"240%"},children:" 로딩중..."})})]})]})}}},function(e){e.O(0,[893,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);