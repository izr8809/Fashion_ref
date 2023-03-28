"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cardpost)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3188);
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(734);
/* harmony import */ var _mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7372);
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(491);
/* harmony import */ var _mui_icons_material_FavoriteBorderTwoTone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(854);
/* harmony import */ var _mui_icons_material_FavoriteBorderTwoTone__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FavoriteBorderTwoTone__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3589);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_15__, _LoginForm__WEBPACK_IMPORTED_MODULE_17__, _Upload__WEBPACK_IMPORTED_MODULE_18__]);
([_reducers_post__WEBPACK_IMPORTED_MODULE_15__, _LoginForm__WEBPACK_IMPORTED_MODULE_17__, _Upload__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





















const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
const StyledCardAction = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.experimentalStyled)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardActions)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;
function Cardpost(props) {
    // const isLoggedIn = false;
    const [like, setLike] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [likeClick, setLikeClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.likers?.length || 0);
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.user);
    const { logInDone  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.user);
    const [loginModalOpen, setIsLoginFormOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUploadFormOpen, setIsUploadFormOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useDispatch)();
    const HASHAPI = `${process.env.NEXT_PUBLIC_API}/hashtagsearch`;
    const DELAPI = `${process.env.NEXT_PUBLIC_API}/deletpost/${props.id}`;
    const [modalOpen, setModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [ImagePath, setImagePath] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const closeModal = ()=>{
        setModalOpen(false);
    };
    const onToggleLike = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (user) {
            setLike((prev)=>!prev);
            if (!like) {
                dispatch({
                    type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__/* .LIKE_POST_REQUEST */ .xD,
                    data: props.id
                });
                setLikeClick((prev)=>prev + 1);
            } else {
                dispatch({
                    type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__/* .UNLIKE_POST_REQUEST */ .VT,
                    data: props.id
                });
                setLikeClick((prev)=>prev - 1);
            }
        } else {
            alert("로그인 해주세요");
            setIsLoginFormOpen(true);
        //로그인 모달 띄우기 넣어야
        }
    }, [
        user,
        like,
        props.id
    ]);
    const delClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (user) {
            setModalOpen(true);
        } else {
            alert("로그인 해주세요");
            setIsLoginFormOpen(true);
        //로그인 모달 띄우기 넣어야
        }
    }, [
        user
    ]);
    const duplicateClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!user) {
            return alert("로그인이 필요합니다.");
        }
        return dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__/* .DUPLICATE_POST_REQUEST */ .RR,
            data: props.id
        });
    }, [
        dispatch,
        props.id,
        user
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            return alert("로그인이 필요합니다.");
        }
        return dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__/* .DELETE_POST_REQUEST */ .sV,
            data: props.id
        });
    }, [
        dispatch,
        props.id,
        user
    ]);
    const editClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // if (!user) {
        //   return alert("로그인이 필요합니다.");
        // }
        // setIsUploadFormOpen(true);
        alert("준비중입니다.");
    }, [
        props.id,
        user,
        setIsUploadFormOpen
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.Images[0] == undefined) {} else {
            // console.log("props")
            // console.log(props)
            setImagePath(`../${props.Images[0].src}`);
        }
    }, [
        props.Images
    ]);
    const TagClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((e, hashname)=>{
        e.preventDefault();
        e.stopPropagation();
        dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_15__/* .HASHTAG_SEARCH_REQUEST */ .fS,
            data: {
                hashtags: "#" + hashname
            }
        });
    }, [
        dispatch,
        props
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //like 눌렀는지
        if (user?.data && props.likers) {
            const isUserLiked = props.likers.find((v)=>v.id === user?.data.id);
            if (isUserLiked) setLike(true);
            else setLike(false);
        }
    }, [
        props.likers,
        user,
        props.id,
        logInDone
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isUploadFormOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Upload__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                setuploadModalOpen: setIsUploadFormOpen,
                uploadModalOpen: isUploadFormOpen,
                edit: true,
                postId: props.id
            }),
            loginModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                loginModalOpen: loginModalOpen,
                setloginModalOpen: setIsLoginFormOpen
            }),
            modalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_10___default()), {
                open: true,
                onClose: closeModal,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_11___default()), {
                    component: "form",
                    noValidate: true,
                    autoComplete: "off",
                    onSubmit: onSubmit,
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            component: "h2",
                            variant: "h5",
                            sx: {
                                textAlign: "center",
                                marginBottom: "15px"
                            },
                            children: "정말 삭제하시겠습니까?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {
                            type: "submit",
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2,
                                width: "40%",
                                marginLeft: "5%",
                                marginRight: "10%"
                            },
                            size: "large",
                            children: "삭제"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2,
                                width: "40%"
                            },
                            size: "large",
                            onClick: closeModal,
                            children: "취소"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                    maxWidth: "15",
                    marginTop: "20px",
                    // borderRadius: "24px",
                    boxShadow: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.CardActionArea, {
                        href: `${props.link}`,
                        target: "_blank",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_5___default()), {
                            component: "img",
                            height: "400",
                            image: ImagePath
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    marginBottom: "3%",
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FileCopy__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        id: "copyicon",
                                        onClick: duplicateClick,
                                        sx: {
                                            ":hover": {
                                                opacity: "50%"
                                            },
                                            cursor: "pointer",
                                            marginRight: "17px",
                                            opacity: "25%",
                                            width: "0.9em"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        id: "editicon",
                                        onClick: editClick,
                                        sx: {
                                            ":hover": {
                                                opacity: "50%"
                                            },
                                            cursor: "pointer",
                                            opacity: "25%",
                                            width: "0.9em"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        id: "delicon",
                                        onClick: delClick,
                                        sx: {
                                            ":hover": {
                                                opacity: "50%"
                                            },
                                            cursor: "pointer",
                                            marginLeft: "17px",
                                            opacity: "25%",
                                            width: "0.9em"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        fontWeight: 900,
                                        fontSize: "130%",
                                        marginBottom: "4%"
                                    },
                                    children: `${props.brand}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                sx: {
                                    fontWeight: 900,
                                    marginBottom: "2%"
                                },
                                variant: "subtitle2",
                                color: "text.secondary",
                                children: "참고할 부분"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                                sx: {
                                    marginBottom: "1%"
                                },
                                variant: "body2",
                                color: "text.secondary",
                                children: props.reason
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCardAction, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "100%",
                                    display: "inline-block",
                                    marginBottom: "5px"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        width: "20%",
                                        marginBottom: "3%",
                                        verticalAlign: "center",
                                        display: "inline-block",
                                        float: "left"
                                    },
                                    children: [
                                        like ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            onClick: onToggleLike,
                                            sx: {
                                                cursor: "pointer",
                                                opacity: "80%",
                                                color: "#FF3040"
                                            }
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FavoriteBorderTwoTone__WEBPACK_IMPORTED_MODULE_16___default()), {
                                            onClick: onToggleLike,
                                            sx: {
                                                cursor: "pointer",
                                                opacity: "40%"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            style: {
                                                position: "relative",
                                                top: "-7px",
                                                marginLeft: "5px",
                                                color: "#A6A6A6"
                                            },
                                            children: likeClick ? likeClick : 0
                                        })
                                    ]
                                })
                            }),
                            props.hashtags.map((hashtag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        margin: "2px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `Tag${hashtag.PostHashtag.HashtagId % 8} Tag`,
                                            style: {
                                                display: "inline-block",
                                                margin: "2px"
                                            },
                                            onClick: (e)=>{
                                                TagClick(e, hashtag.name);
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "",
                                                children: [
                                                    "#",
                                                    hashtag.name
                                                ]
                                            })
                                        }),
                                        " ",
                                        "\xa0"
                                    ]
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    style: {
                                        float: "left",
                                        color: "#A6A6A6",
                                        fontSize: "80%",
                                        marginTop: "10px"
                                    },
                                    children: [
                                        "작성자 : ",
                                        props.name
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1557);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6072);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_lab__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_user__WEBPACK_IMPORTED_MODULE_9__]);
_reducers_user__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function LoginForm({ setloginModalOpen , loginModalOpen  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const [isInitialOpen, setIsInitialOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { logInLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user);
    const { logInError  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.user);
    const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const closeModal = ()=>{
        setloginModalOpen(false);
    };
    const onSubmitForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        event.preventDefault();
        if (email == "") {
            alert("이메일을 입력해주세요");
        } else if (password == "") {
            alert("비밀번호를 입력해주세요");
        } else {
            dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_9__/* .loginRequestAction */ .tP)({
                email,
                password
            }));
        // setloginModalOpen(false);
        // axios
        //   .post(
        //     LOGINAPI,
        //     // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
        //     // 회원가입창에서 클라이언트가 입력하는 데이터
        //     {
        //       email: email,
        //       password: password, // 숫자, 영어 대문자, 소문자, 특수기호, 8-20자  1234567#Aaa
        //     },
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //         // 'Accept': 'application/json',
        //       },
        //     }
        //   )
        //   .then((result) => {
        //     setUser(result.data.data);
        //     console.log("dispatch");
        //     dispatch(loginRequestAction("usersample"));
        //     // setIsLoggedIn(true);
        //     setUserId(result.data.data.id);
        //     setUserName(result.data.data.name);
        //     setloginModalOpen(false);
        //     console.log(result.data.data);
        //     // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        //     // history.replace('/login');
        //   })
        //   .catch((error) => {
        //     alert("로그인 정보가 일치하지 않습니다.");
        //     setloginModalOpen(false);
        //     console.log(error);
        //   });
        }
    }, [
        email,
        password,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!logInLoading && !isInitialOpen) {
            console.log("change");
            setloginModalOpen(false);
        }
        setIsInitialOpen(false);
    }, [
        logInLoading
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_3___default()), {
        open: true,
        onClose: closeModal,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
            component: "form",
            noValidate: true,
            autoComplete: "off",
            onSubmit: onSubmitForm,
            sx: style,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                    component: "h1",
                    variant: "h5",
                    children: "로그인"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
                    label: "이메일",
                    name: "user-email",
                    fullWidth: true,
                    type: "email",
                    value: email,
                    required: true,
                    variant: "standard",
                    onChange: onChangeEmail
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_6___default()), {
                    label: "비밀번호",
                    name: "user-nick",
                    type: "password",
                    fullWidth: true,
                    value: password,
                    required: true,
                    variant: "standard",
                    onChange: onChangePassword
                }),
                logInError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        marginTop: "10px",
                        color: "#F73334"
                    },
                    children: " 로그인 정보가 일치하지 않습니다."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_lab__WEBPACK_IMPORTED_MODULE_4__.LoadingButton, {
                    type: "submit",
                    fullWidth: true,
                    variant: "contained",
                    sx: {
                        mt: 3,
                        mb: 2
                    },
                    size: "large",
                    loading: logInLoading,
                    children: "로그인"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8125);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_Signup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6073);
/* harmony import */ var _Components_Upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4150);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_LoginForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3589);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6572);
/* harmony import */ var _Searchbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2837);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Signup__WEBPACK_IMPORTED_MODULE_12__, _Components_Upload__WEBPACK_IMPORTED_MODULE_13__, _Components_LoginForm__WEBPACK_IMPORTED_MODULE_16__, _reducers_user__WEBPACK_IMPORTED_MODULE_18__, _Searchbar__WEBPACK_IMPORTED_MODULE_19__, _reducers_post__WEBPACK_IMPORTED_MODULE_21__]);
([_Components_Signup__WEBPACK_IMPORTED_MODULE_12__, _Components_Upload__WEBPACK_IMPORTED_MODULE_13__, _Components_LoginForm__WEBPACK_IMPORTED_MODULE_16__, _reducers_user__WEBPACK_IMPORTED_MODULE_18__, _Searchbar__WEBPACK_IMPORTED_MODULE_19__, _reducers_post__WEBPACK_IMPORTED_MODULE_21__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const style = {
    background: "#0092ff",
    padding: "8px 0",
    margin: "16px auto",
    height: "54px"
};
const modalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function Navbar({ userId , setUserId , userName , setUserName  }) {
    // const navigate = useNavigate();
    //redux
    const { logInDone  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useSelector)((state)=>state.user);
    // const {userInfo} = useSelector((state : any) => state.user)  
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useSelector)((state)=>state.user);
    const { logOutLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useSelector)((state)=>state.user);
    const { hashtags  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useSelector)((state)=>state.post);
    // const isLoggedIn = false;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();
    const GETHASHAPI = `${process.env.NEXT_PUBLIC_API}/getHash`;
    const [uploadModalOpen, setuploadModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [loginModalOpen, setloginModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [isModalOpen, setIsModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [showHashModalOpen, setShowHashModalOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const closehashtagsModal = ()=>{
        setShowHashModalOpen(false);
    };
    const showModal = ()=>{
        setIsModalOpen(true);
    };
    const showLoginModal = ()=>{
        setloginModalOpen(true);
    };
    const showUploadModal = ()=>{
        setuploadModalOpen(true);
    };
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = ()=>{
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const Logout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_18__/* .logoutRequestAction */ .vR)());
        //왜인지 모르겠는데 로그아웃 후 모달 켜짐
        setloginModalOpen(false);
    // const LOGOUTAPI = `${process.env.NEXT_PUBLIC_API}/logout`;
    // axios
    //   .get(LOGOUTAPI)
    //   .then((result) => {
    //     if (result.data.message == "ok")
    //       //dispatch 
    //     // setloginModalOpen(false);
    //   })
    //   .catch((err) => {alert("서버와 연결 끊겼네요. 새로고침.!")});
    }, [
        dispatch
    ]);
    const uploadClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (user) {
            setuploadModalOpen(true);
        } else {
            setloginModalOpen(true);
        }
    }, [
        user
    ]);
    const handleMobileMenuOpen = (event)=>{
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const onReady = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        alert("준비중입니다.");
    }, []);
    const getHashtags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        //dispatch
        dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_21__/* .GET_HASHTAGS_REQUEST */ .tG
        });
        setShowHashModalOpen(true);
    // axios
    // .get(GETHASHAPI)
    // .then((result) => {
    //   setShowHashModalOpen(true);
    //   setHashTags(result)
    //   // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
    //   // history.replace('/login');
    // })
    // .catch((error) => {
    //   alert("포스팅 불러오기 정상적으로 되지 않았습니다.");
    // });
    }, [
        dispatch
    ]);
    const menuId = "primary-search-account-menu";
    const renderMenu = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {
        anchorEl: anchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: menuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMenuOpen,
        onClose: handleMenuClose,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                onClick: handleMenuClose,
                children: "Profile"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
                onClick: handleMenuClose,
                children: "My account"
            })
        ]
    });
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {
        anchorEl: mobileMoreAnchorEl,
        anchorOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        id: mobileMenuId,
        keepMounted: true,
        transformOrigin: {
            vertical: "top",
            horizontal: "right"
        },
        open: isMobileMenuOpen,
        onClose: handleMobileMenuClose,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default()), {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "만드는 중입니다"
            })
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
        sx: {
            flexGrow: 1
        },
        children: [
            !user && isModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Signup__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                isModalOpen: isModalOpen,
                setIsModalOpen: setIsModalOpen,
                userId: userId,
                setUserId: setUserId,
                userName: userName,
                setUserName: setUserName
            }),
            user && uploadModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Upload__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                uploadModalOpen: uploadModalOpen,
                setuploadModalOpen: setuploadModalOpen,
                edit: false,
                postId: null
            }),
            !user && loginModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_LoginForm__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                loginModalOpen: loginModalOpen,
                setloginModalOpen: setloginModalOpen
            }),
            showHashModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_14___default()), {
                open: true,
                onClose: closehashtagsModal,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
                    component: "form",
                    noValidate: true,
                    autoComplete: "off",
                    sx: modalstyle,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hashlistdiv",
                            style: {
                                height: "300px",
                                overflow: "overlay"
                            },
                            children: hashtags && hashtags.map((hashtag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    id: "hashlist",
                                    style: {
                                        listStyle: "none",
                                        marginBottom: "5px"
                                    },
                                    children: [
                                        " #",
                                        hashtag.name
                                    ]
                                }, hashtag.id))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2
                            },
                            size: "large",
                            onClick: closehashtagsModal,
                            children: "확인"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {
                position: "static",
                style: {
                    backgroundColor: "#FFF",
                    color: "#000"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                            variant: "contained",
                            sx: {
                                // height: "60%",
                                whiteSpace: "nowrap",
                                marginRight: "5px",
                                fontWeight: "bold",
                                display: "inline-block"
                            },
                            size: "small",
                            onClick: getHashtags,
                            children: "#목록"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                            noWrap: true,
                            component: "div",
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "block"
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Searchbar__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        size: "large",
                                        edge: "end",
                                        sx: {
                                            marginRight: "10px"
                                        },
                                        "aria-label": "account of current user",
                                        "aria-haspopup": "false",
                                        color: "primary",
                                        onClick: uploadClick,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                    })
                                }),
                                !user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            type: "submit",
                                            fullWidth: true,
                                            variant: "contained",
                                            sx: {
                                                // height: "60%",
                                                width: "40%",
                                                marginRight: "5px",
                                                fontWeight: "bold",
                                                display: "inline-block"
                                            },
                                            size: "small",
                                            onClick: showLoginModal,
                                            children: "로그인"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            type: "submit",
                                            fullWidth: true,
                                            variant: "contained",
                                            sx: {
                                                // height: "60%",
                                                width: "40%",
                                                fontWeight: "bold",
                                                display: "inline-block"
                                            },
                                            onClick: showModal,
                                            size: "small",
                                            children: "가입"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_20___default()), {
                                            type: "submit",
                                            fullWidth: true,
                                            variant: "contained",
                                            sx: {
                                                // height: "60%",
                                                width: "100%",
                                                marginRight: "5px",
                                                fontWeight: "bold",
                                                display: "inline-block",
                                                whiteSpace: "nowrap"
                                            },
                                            size: "small",
                                            onClick: Logout,
                                            loading: logOutLoading,
                                            children: "로그아웃"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            size: "large",
                                            edge: "end",
                                            "aria-label": "account of current user",
                                            "aria-controls": menuId,
                                            "aria-haspopup": "true",
                                            color: "primary",
                                            onClick: onReady,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_10___default()), {})
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_15___default()), {
                            sx: {
                                display: {
                                    xs: "flex",
                                    md: "none"
                                },
                                float: "right"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4___default()), {
                                size: "large",
                                "aria-label": "show more",
                                "aria-controls": mobileMenuId,
                                "aria-haspopup": "true",
                                onClick: handleMobileMenuOpen,
                                color: "primary",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_11___default()), {})
                            })
                        })
                    ]
                })
            }),
            renderMobileMenu,
            renderMenu
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResponsiveGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Cardpost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4743);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cardpost__WEBPACK_IMPORTED_MODULE_5__]);
_Cardpost__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Item = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default()))(({ theme  })=>({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }));
function ResponsiveGrid({}) {
    const { postArray  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.post);
    const [Imagesrc, setImagesrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(postArray);
    }, [
        postArray
    ]);
    //check if I like
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: {
                flexGrow: 1
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                container: true,
                spacing: {
                    xs: 2,
                    md: 3
                },
                columns: {
                    xs: 4,
                    sm: 8,
                    md: 12
                },
                children: postArray && postArray.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6___default()), {
                        item: true,
                        xs: 6,
                        sm: 4,
                        md: 3,
                        lg: 4,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                style: {
                                    maxWidth: "320px",
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cardpost__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        index: index,
                                        name: post.name,
                                        posts: postArray,
                                        id: post.id,
                                        likers: post.Likers,
                                        category: post.category,
                                        brand: post.brand,
                                        Images: post.Images,
                                        link: post.link,
                                        season: post.season,
                                        hashtags: post.Hashtags,
                                        reason: post.reason
                                    }),
                                    " "
                                ]
                            })
                        })
                    }, post.id))
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Searchbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8017);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1557);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(491);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers_post__WEBPACK_IMPORTED_MODULE_6__]);
_reducers_post__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Searchbar({}) {
    const [value, onChangeValue] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const searchBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchBar.current) {
            searchBar.current.focus();
        }
    }, []);
    const TagSearch = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((e)=>{
        // e.preventDeafult();
        // e.stopPropagation();
        if (value == "") {
            dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_6__/* .loadPost */ .HV)());
        } else if (value.split("#").length < 2) {
            alert("태그 앞에 #를 붙여주세요");
        } else {
            let upperCaseValue = value.toUpperCase();
            e.preventDefault();
            e.stopPropagation();
            dispatch({
                type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__/* .HASHTAG_SEARCH_REQUEST */ .fS,
                data: {
                    hashtags: "#" + upperCaseValue
                }
            });
        }
    }, [
        dispatch,
        value
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: TagSearch,
            style: {
                width: "70%",
                flex: "auto",
                marginLeft: "15%"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5___default()), {
                    type: "submit",
                    "aria-label": "search",
                    sx: {
                        display: {
                            xs: "none",
                            md: "inline-block"
                        }
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_2___default()), {
                        style: {
                            fill: "#9A9A9A"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                    id: "search-bar",
                    className: "text",
                    sx: {
                        display: "inline-block",
                        width: "80%"
                    },
                    value: value,
                    onChange: onChangeValue,
                    label: "#상의 #검정",
                    variant: "outlined",
                    placeholder: "Search...",
                    size: "small",
                    inputRef: searchBar
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1557);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6572);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__]);
([axios__WEBPACK_IMPORTED_MODULE_3__, _reducers_user__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function Signup({ setIsModalOpen , isModalOpen , userId , setUserId , userName , setUserName  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
    const API = `${process.env.NEXT_PUBLIC_API}/signups`;
    const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [passwordCheck, setPasswordCheck] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [
        password,
        setPasswordCheck
    ]);
    const checkEmail = (email)=>{
        let res = false;
        if (!email) {
            res = false;
        } else {
            const check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/.test(email);
            check ? res = true : res = false;
        }
        return res;
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (password !== passwordCheck) {
            setPasswordError(true);
        } else if (!checkEmail(email)) {
            setEmailError(true);
        } else {
            axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(API, // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
            // 회원가입창에서 클라이언트가 입력하는 데이터
            {
                email: email,
                name: nickname,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })// 그러면 서버에서 클라이언트로 response(응답)으로
            // {ok: true} 아니면 {ok: false}가 온다.
            // .then((response) => {
            //   console.log(response); // response.data로 해야?
            // })
            .then((result)=>{
                dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_10__/* .loginRequestAction */ .tP)());
                setUserId(result.data.userId);
                setUserName(result.data.userName);
                closeModal();
            // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
            // history.replace('/login');
            }).catch((error)=>{
                if (error.response.data.message == "already exist") {
                    alert("이미 존재하는 이메일입니다.");
                } else {
                    alert("회원가입이 정상적으로 되지 않았습니다.");
                }
            });
        }
    // if (!term) {
    //   return setTermError(true);
    // }
    }, [
        API,
        dispatch,
        setUserId,
        setUserName,
        email,
        password,
        passwordCheck,
        nickname
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_6___default()), {
        open: true,
        onClose: closeModal,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_7___default()), {
            component: "form",
            noValidate: true,
            autoComplete: "off",
            onSubmit: onSubmit,
            sx: style,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {
                    component: "h1",
                    variant: "h5",
                    sx: {
                        textAlign: "center"
                    },
                    children: "회원가입"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "이메일",
                    name: "user-email",
                    sx: {
                        marginTop: 3
                    },
                    fullWidth: true,
                    type: "email",
                    value: email,
                    required: true,
                    // error={checkEmail(email)}
                    onChange: onChangeEmail
                }),
                emailError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: "red"
                    },
                    children: "Email 형식이 잘못되었습니다"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "이름",
                    name: "user-nick",
                    sx: {
                        marginTop: 3
                    },
                    fullWidth: true,
                    value: nickname,
                    required: true,
                    onChange: onChangeNickname
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "비밀번호",
                    fullWidth: true,
                    name: "user-password",
                    sx: {
                        marginTop: 3
                    },
                    type: "password",
                    value: password,
                    required: true,
                    onChange: onChangePassword
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                    label: "비밀번호체크",
                    fullWidth: true,
                    name: "user-password-check",
                    sx: {
                        marginTop: 3
                    },
                    type: "password",
                    value: passwordCheck,
                    required: true,
                    onChange: setPasswordCheck
                }),
                passwordError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    style: {
                        color: "red"
                    },
                    children: "비밀번호가 일치하지 않습니다"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
                    type: "submit",
                    fullWidth: true,
                    variant: "contained",
                    sx: {
                        mt: 3,
                        mb: 2
                    },
                    size: "large",
                    children: "확인"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6829);
/* harmony import */ var _mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1557);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(491);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _reducers_post__WEBPACK_IMPORTED_MODULE_16__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _reducers_post__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const fileTypes = (/* unused pure expression or super */ null && ([
    "JPG",
    "PNG",
    "GIF",
    "JPEG"
]));
const modalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
function Upload(props) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useDispatch)();
    const [isInitialOpen, setIsInitialOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.user);
    const { postArray  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.post);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: ""
    });
    const API = `${process.env.NEXT_PUBLIC_API}/addPost`;
    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isImage, setIsImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [highlight, setHighlight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [reason, onChangeReason, setReason] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)("");
    const [brand, onChangeBrand, setBrand] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)("");
    const [link, onChangeLink, setLink] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)("");
    const [showHashModalOpen, setShowHashModalOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const GETHASHAPI = `${process.env.NEXT_PUBLIC_API}/getHash`;
    const { addPostLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.post);
    const { addPostDone  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_15__.useSelector)((state)=>state.post);
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        desc: "",
        photos: [
            null
        ]
    });
    const closeModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        props.setuploadModalOpen(false);
    }, []);
    const { title , desc , photos  } = post;
    const closehashtagsModal = ()=>{
        setShowHashModalOpen(false);
    };
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [category, setCategory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("상의");
    const [season, setSeason] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("23SS");
    const [text, onChangeText, setText] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)("");
    const handleCategoryChange = (event)=>{
        setCategory(event.target.value);
    };
    const handleSeasonChange = (event)=>{
        setSeason(event.target.value);
    };
    const handlefilechange = (e)=>{
        let files = e.target.files;
        handfiles(files);
    };
    const handfiles = (files)=>{
        let photosArr = [];
        if (files != undefined) {
            if (files.length > 1) {
                alert("이미지는 1개만 넣어주세요");
            } else {
                setIsImage(true);
                for(let i = 0; i < files.length; i++){
                    let file = files[i];
                    setImageFile(files[i]);
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.addEventListener("load", ()=>{
                        let fileobj = {
                            name: file.name,
                            type: file.type,
                            size: file.size,
                            src: reader.result
                        };
                        photosArr.push(fileobj);
                        setPost({
                            ...post,
                            photos: [
                                ...photos,
                                ...photosArr
                            ]
                        });
                    });
                }
            }
        }
    };
    const handeldelete = (e)=>{
        let target = e.target.parentElement;
        let targetindex = 1;
        setPost({
            ...post,
            photos: [
                ...photos.slice(0, targetindex),
                ...photos.slice(targetindex + 1)
            ]
        });
        setIsImage(false);
    };
    const handlehighlight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    }, []);
    const handleunhighlight = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
    }, []);
    const handledrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let dt = e.dataTransfer;
        let files = dt?.files;
        setHighlight(false);
        handfiles(files);
    };
    // const USERINFOAPI = `${process.env.NEXT_PUBLIC_API}/USERINFO`;
    // const [userInfo, setUserInfo] = useState({ name: "" });
    // useEffect(() => {
    //   axios
    //     .get(USERINFOAPI, {})
    //     .then((result) => {
    //       setUserInfo(result.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, [props.userId, USERINFOAPI]);
    const [hashTags, setHashTags] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        data: [
            {
                name: ""
            }
        ]
    });
    const getHashtags = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(GETHASHAPI).then((result)=>{
            setShowHashModalOpen(true);
            setHashTags(result);
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
        }).catch((error)=>{
            alert("해시태그가 제대로 처리되지 않았습니다.");
        });
    }, [
        GETHASHAPI
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (brand == "") {
            e.preventDefault();
            e.stopPropagation();
            alert("브랜드입력 필수");
        } else if (imageFile == undefined) {
            e.preventDefault();
            e.stopPropagation();
            alert("이미지 필수");
        } else {
            e.preventDefault();
            e.stopPropagation();
            const formData = new FormData();
            formData.append("image", imageFile);
            formData.append("userId", user.id);
            formData.append("userName", user.userName);
            formData.append("brand", brand);
            formData.append("link", link);
            formData.append("category", category);
            formData.append("season", season);
            formData.append("hashtag", text);
            formData.append("reason", reason);
            // dispatch({
            //   type: ADD_POST_REQUEST,
            //   data : formData
            // });
            dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_16__/* .addPost */ .q2)(formData));
        // axios
        //   .post(API, formData)
        //   .then((result) => {
        //     dispatch(addPost(result));
        //     console.log(result);
        //     location.reload();
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     location.reload();
        //   });
        }
    }, [
        brand,
        category,
        season,
        text,
        reason,
        link,
        user,
        dispatch,
        imageFile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (addPostDone && !isInitialOpen) {
            closeModal();
        }
        setIsInitialOpen(false);
    }, [
        addPostDone,
        dispatch,
        closeModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.edit) {
            const targetPost = postArray.find((post)=>post.id === props.postId);
            let postHashtags = "";
            if (targetPost.Hashtags) {
                targetPost.Hashtags.map((hashtag)=>postHashtags = postHashtags.concat("#" + hashtag?.name));
            }
            for(let i = 0; i < targetPost.Hashtags.length; i++){
                postHashtags.concat(`#${targetPost.Hashtags[i].name} `);
            }
            setCategory(targetPost.category);
            setSeason(targetPost.season);
            setText(postHashtags);
            setBrand(targetPost.brand);
            setReason(targetPost.reason);
            setLink(targetPost.link);
            console.log(targetPost);
            setIsImage(true);
            setPost({
                ...post,
                photos: photos.concat(targetPost.Images[0])
            });
        }
    }, [
        props.edit,
        postArray
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            showHashModalOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
                open: true,
                onClose: closehashtagsModal,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                    component: "form",
                    noValidate: true,
                    autoComplete: "off",
                    sx: modalstyle,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hashlistdiv",
                            style: {
                                height: "300px",
                                overflow: "overlay"
                            },
                            children: hashTags.data.map((hashtag, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    id: "hashlist",
                                    style: {
                                        listStyle: "none"
                                    },
                                    children: [
                                        " ",
                                        "#",
                                        hashtag.name
                                    ]
                                }, index))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2
                            },
                            size: "large",
                            onClick: closehashtagsModal,
                            children: "확인"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_7___default()), {
                open: true,
                onClose: closeModal,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
                    component: "form",
                    noValidate: true,
                    autoComplete: "off",
                    onSubmit: onSubmit,
                    sx: style,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {
                            sx: {
                                textAlign: "center"
                            },
                            component: "h1",
                            variant: "h5",
                            children: "업로드"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                            required: true,
                            label: "브랜드",
                            fullWidth: true,
                            sx: {
                                marginTop: "5px"
                            },
                            name: "user-brand",
                            type: "text",
                            value: brand,
                            variant: "standard",
                            onChange: onChangeBrand
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                            label: "Link",
                            fullWidth: true,
                            sx: {
                                marginTop: "5px"
                            },
                            name: "user-link",
                            type: "text",
                            value: link,
                            required: true,
                            variant: "standard",
                            onChange: onChangeLink
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                            label: "선정이유",
                            fullWidth: true,
                            sx: {
                                marginTop: "5px"
                            },
                            name: "user-link",
                            type: "text",
                            value: reason,
                            required: true,
                            variant: "standard",
                            onChange: onChangeReason
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                width: "40%",
                                marginRight: "10%",
                                marginTop: "25px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "demo-simple-select-label",
                                    children: "상의"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    labelId: "demo-simple-select-label",
                                    id: "demo-simple-select",
                                    defaultValue: "상의",
                                    value: category,
                                    label: "카테고리",
                                    required: true,
                                    onChange: handleCategoryChange,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "상의",
                                            children: "상의"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "하의",
                                            children: "하의"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "아우터",
                                            children: "아우터"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "디테일",
                                            children: "디테일"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "이미지",
                                            children: "이미지"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "악세사리",
                                            children: "악세사리"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3___default()), {
                            sx: {
                                width: "40%",
                                marginTop: "25px"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    id: "demo-simple-select-label",
                                    children: "23SS"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Select__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    labelId: "demo-simple-select-label",
                                    id: "demo-simple-select",
                                    defaultValue: "23SS",
                                    value: season,
                                    label: "시즌",
                                    required: true,
                                    onChange: handleSeasonChange,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "23SS",
                                            children: "23SS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            value: "23FW",
                                            children: "23FW"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {
                            id: "standard-basic",
                            sx: {
                                marginTop: "30px"
                            },
                            value: text,
                            onChange: onChangeText,
                            fullWidth: true,
                            label: "해시태그입력 #검정 #반팔 ",
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_12___default()), {
                            variant: "contained",
                            sx: {
                                // height: "60%",
                                whiteSpace: "nowrap",
                                marginRight: "5px",
                                marginTop: "5px",
                                fontWeight: "bold",
                                display: "inline-block"
                            },
                            size: "small",
                            onClick: getHashtags,
                            children: "#목록"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "file-upload",
                            style: {
                                marginTop: "10px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "custom-form-group",
                                children: [
                                    !isImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: highlight ? "custom-file-drop-area highlight" : "custom-file-drop-area",
                                        onDragEnter: handlehighlight,
                                        onDragOver: handlehighlight,
                                        onDragLeave: handleunhighlight,
                                        onDrop: handledrop,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "file",
                                                name: "photos",
                                                placeholder: "Enter photos",
                                                multiple: false,
                                                id: "filephotos",
                                                onChange: handlefilechange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "filephotos",
                                                children: "이미지를 드래그해서 넣어주세요"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "custom-file-preview",
                                        children: photos.length > 0 && photos.map((item, index)=>index != 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "prev-img",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        onClick: handeldelete,
                                                        children: "\xd7"
                                                    }),
                                                    item && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        src: item.src,
                                                        alt: item.name
                                                    })
                                                ]
                                            }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            id: "submit_bt",
                            style: {
                                display: "none"
                            },
                            type: "submit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LoadingButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                            type: "submit",
                            loading: addPostLoading,
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                mt: 3,
                                mb: 2
                            },
                            size: "large",
                            children: "확인"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInput = (initValue)=>{
    const [value, setter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initValue);
    const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        setter(e.target.value);
    }, []);
    return [
        value,
        handler,
        setter
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1986);
/* harmony import */ var _Components_ResponsiveGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2385);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(491);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6572);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9959);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__, _Components_ResponsiveGrid__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, _reducers_post__WEBPACK_IMPORTED_MODULE_6__, _reducers_user__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__]);
([_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__, _Components_ResponsiveGrid__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_4__, _reducers_post__WEBPACK_IMPORTED_MODULE_6__, _reducers_user__WEBPACK_IMPORTED_MODULE_8__, _store_configureStore__WEBPACK_IMPORTED_MODULE_9__, redux_saga__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const getServerSideProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_9__/* ["default"].getServerSideProps */ .Z.getServerSideProps(async (context)=>{
    const cookie = context.req ? context.req.headers.cookie : "";
    axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.Cookie = "";
    if (context.req && cookie) {
        axios__WEBPACK_IMPORTED_MODULE_4__["default"].defaults.headers.Cookie = cookie;
    }
    context.store.dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_6__/* .loadPost */ .HV)());
    context.store.dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_8__/* .loadUser */ .II)());
    context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_10__.END);
    await context.store.sagaTask.toPromise();
});
function Home() {
    // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user);
    const { loadPostLoading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.post);
    const { hasMorePost  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.post);
    const { postArray  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.post);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("");
    const [resultStore, setResultStore] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    var sliceCount = 24;
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 350) {
                if (hasMorePost && !loadPostLoading) {
                    const lastId = postArray[postArray.length - 1].id;
                    dispatch({
                        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__/* .LOAD_POST_REQUEST */ .EG,
                        data: lastId
                    });
                }
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, [
        hasMorePost,
        loadPostLoading,
        dispatch,
        postArray
    ]);
    const loadPosts = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(()=>{
        dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_6__/* .loadPost */ .HV)());
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Crump REF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    margin: "auto",
                    width: "80%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: loadPosts,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            id: "title",
                            style: {
                                cursor: "pointer"
                            },
                            children: "CRUMP REFERENCE"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            marginBottom: "40px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            userId: userId,
                            setUserId: setUserId,
                            userName: userName,
                            setUserName: setUserName
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_ResponsiveGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    loadPostLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                fontSize: "240%"
                            },
                            children: " 로딩중"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1883:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 3188:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Delete");

/***/ }),

/***/ 1664:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorderTwoTone");

/***/ }),

/***/ 734:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileCopy");

/***/ }),

/***/ 6952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 6072:
/***/ ((module) => {

module.exports = require("@mui/lab");

/***/ }),

/***/ 6829:
/***/ ((module) => {

module.exports = require("@mui/lab/LoadingButton");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 2651:
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ 4549:
/***/ ((module) => {

module.exports = import("@redux-saga/core");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9810:
/***/ ((module) => {

module.exports = import("immer");;

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,959], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();