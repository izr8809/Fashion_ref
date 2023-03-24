(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3716);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_uploadfiles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3802);
/* harmony import */ var _styles_uploadfiles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_uploadfiles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_configureStore__WEBPACK_IMPORTED_MODULE_3__]);
_store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
};
// export default App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__/* ["default"].withRedux */ .Z.withRedux(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6572);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(491);




const rootReducer = (state, action)=>{
    switch(action.type){
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
            console.log("HYDRATE", action);
            return action.payload;
        default:
            {
                const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
                    user: _user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
                    post: _post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP
                });
                return combinedReducer(state, action);
            }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);


/***/ }),

/***/ 6583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3481);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__]);
([_post__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function* rootSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//addpost
function addPostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/addPost", data);
}
function* addPost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "ADD_POST_REQUEST",
            data: result.data
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "ADD_POST_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "ADD_POST_FAILURE",
            data: err.response.data
        });
    }
}
function* watchAddPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)("ADD_POST_REQUEST", addPost);
}
function* postSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7460:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ userSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//login
function loginAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/login", data);
}
function* logIn(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loginAPI, action.data);
        // yield put({
        //   type: "LOG_IN_REQUEST",
        //   data: result.data,
        // });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "LOG_IN_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "LOG_IN_FAILURE",
            data: err.response.data
        });
    }
}
//logout
function logoutAPI() {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/logout");
}
function* logOut() {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logoutAPI);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "LOG_OUT_REQUEST",
            data: result.data
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "LOG_OUT_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: "LOG_OUT_FAILURE",
            data: err.response.data
        });
    }
}
function* watchLogin() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)("LOG_IN_REQUEST", logIn);
}
function* watchLogout() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)("LOG_OUT_REQUEST", logOut);
}
function* userSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogin),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogout)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7290);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4549);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__]);
([_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const loggerMiddleware = ({ dispatch , getState  })=>(next)=>(action)=>{
            // if(typeof action ==='function'){
            //   return action(dispatch, getState, extraArgument)
            // }
            console.log(action);
            return next(action);
        };
const configureStore = ()=>{
    const sagaMiddleware = (0,_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const middlewares = [
        sagaMiddleware,
        loggerMiddleware
    ];
    const enhancer =  true ? (0,redux__WEBPACK_IMPORTED_MODULE_1__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares)) : 0;
    const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, enhancer);
    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
    debug: "production" === "development"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 3802:
/***/ (() => {



/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6477:
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ 4549:
/***/ ((module) => {

"use strict";
module.exports = import("@redux-saga/core");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();