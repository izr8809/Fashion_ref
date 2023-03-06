"use strict";
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 6095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Upload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1557);








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
function Upload({ setuploadModalOpen  }) {
    const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("");
    const [brand, onChangeBrand] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("");
    const [link, onChangeLink] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("");
    const closeModal = ()=>{
        setuploadModalOpen(false);
    };
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
        open: true,
        onClose: closeModal,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
            component: "form",
            noValidate: true,
            autoComplete: "off",
            onSubmit: onSubmit,
            sx: style,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
                    component: "h1",
                    variant: "h5",
                    children: "업로드"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                    label: "nickname",
                    name: "user-nickname",
                    fullWidth: true,
                    type: "text",
                    value: nickname,
                    required: true,
                    variant: "standard",
                    onChange: (e)=>{
                        onChangeNickname(e.target.value);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                    label: "이름",
                    name: "user-nick",
                    fullWidth: true,
                    value: nickname,
                    required: true,
                    variant: "standard",
                    onChange: (e)=>{
                        onChangeNickname(e.target.value);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                    label: "비밀번호",
                    fullWidth: true,
                    name: "user-brand",
                    type: "text",
                    value: brand,
                    required: true,
                    variant: "standard",
                    onChange: (e)=>{
                        onChangeBrand(e.target.value);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2___default()), {
                    label: "link",
                    fullWidth: true,
                    name: "user-link",
                    type: "text",
                    value: link,
                    required: true,
                    variant: "standard",
                    onChange: (e)=>{
                        onChangeLink(e.target.value);
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
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


/***/ })

};
;