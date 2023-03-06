"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 1557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((initValue)=>{
    const [value, setter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initValue);
    const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        setter(e);
    }, []);
    return [
        value,
        handler,
        setter
    ];
});


/***/ }),

/***/ 3599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signup)
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









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
function Signup({ setModalOpen  }) {
    const API = "http://localhost:3065/signups";
    const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [password, onChangePassword] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [passwordCheck, setPasswordCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoggedIn, setisLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [
        password
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
        setModalOpen(false);
    };
    // const modalRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //   // 이벤트 핸들러 함수
    //   const handler = (event: any) => {
    //     // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    //     if (modalRef.current && !modalRef.current.contains(event.target)) {
    //       setModalOpen(false);
    //     }
    //   };
    //   // 이벤트 핸들러 등록
    //   document.addEventListener("mousedown", handler);
    //   // document.addEventListener('touchstart', handler); // 모바일 대응
    //   return () => {
    //     // 이벤트 핸들러 해제
    //     document.removeEventListener("mousedown", handler);
    //     // document.removeEventListener('touchstart', handler); // 모바일 대응
    //   };
    // }, []);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        e.preventDefault();
        // if (!term) {
        //   return setTermError(true);
        // }
        console.log(email, nickname, password);
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
            console.log(result);
            console.log("singupDB!");
            console.log(result.data);
            setisLoggedIn(true);
        // window.alert('회원가입이 되었습니다! 로그인 해주세요.');
        // history.replace('/login');
        }).catch((error)=>{
            alert("회원가입이 정상적으로 되지 않았습니다.");
            console.log(error);
        });
    }, [
        email,
        password,
        passwordCheck
    ]);
    if (!isLoggedIn) {
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
                        children: "회원가입"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                        label: "이메일",
                        name: "user-email",
                        fullWidth: true,
                        type: "email",
                        value: email,
                        required: true,
                        error: checkEmail(email),
                        onChange: (e)=>{
                            onChangeEmail(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                        label: "이름",
                        name: "user-nick",
                        fullWidth: true,
                        value: nickname,
                        required: true,
                        onChange: (e)=>{
                            onChangeNickname(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                        label: "비밀번호",
                        fullWidth: true,
                        name: "user-password",
                        type: "password",
                        value: password,
                        required: true,
                        onChange: (e)=>{
                            onChangePassword(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_4___default()), {
                        label: "비밀번호체크",
                        fullWidth: true,
                        name: "user-password-check",
                        type: "password",
                        value: passwordCheck,
                        required: true,
                        onChange: (e)=>{
                            setPasswordCheck(e.target.value);
                        }
                    }),
                    passwordError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "비밀번호가 일치하지 않습니다."
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
                        children: "회원가입"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;