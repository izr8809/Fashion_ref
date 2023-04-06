"use strict";
exports.id = 107;
exports.ids = [107];
exports.modules = {

/***/ 5924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3011);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__]);
([_user__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const rootReducer = (state, action)=>{
    switch(action.type){
        case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
            // console.log('HYDRATE', action);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cv": () => (/* binding */ EDIT_POST_SUCCESS),
/* harmony export */   "EG": () => (/* binding */ LOAD_POST_REQUEST),
/* harmony export */   "Gz": () => (/* binding */ DUPLICATE_POST_SUCCESS),
/* harmony export */   "HR": () => (/* binding */ DELETE_POST_FAILURE),
/* harmony export */   "HV": () => (/* binding */ loadPost),
/* harmony export */   "NY": () => (/* binding */ EDIT_POST_FAILURE),
/* harmony export */   "Nr": () => (/* binding */ DELETE_POST_SUCCESS),
/* harmony export */   "PS": () => (/* binding */ TOGGLE_SCROLL_REQUEST),
/* harmony export */   "PY": () => (/* binding */ GET_USER_LIKED_POST_SUCCESS),
/* harmony export */   "RR": () => (/* binding */ DUPLICATE_POST_REQUEST),
/* harmony export */   "SI": () => (/* binding */ LIKE_POST_SUCCESS),
/* harmony export */   "V": () => (/* binding */ GET_HASHTAGS_FAILURE),
/* harmony export */   "V4": () => (/* binding */ DUPLICATE_POST_FAILURE),
/* harmony export */   "VT": () => (/* binding */ UNLIKE_POST_REQUEST),
/* harmony export */   "X$": () => (/* binding */ GET_USER_LIKED_POST_FAILURE),
/* harmony export */   "XD": () => (/* binding */ UNLIKE_POST_SUCCESS),
/* harmony export */   "YQ": () => (/* binding */ LOAD_POST_SUCCESS),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_s": () => (/* binding */ ADD_POST_SUCCESS),
/* harmony export */   "cT": () => (/* binding */ LIKE_POST_FAILURE),
/* harmony export */   "ce": () => (/* binding */ POST_SORT_REQUEST),
/* harmony export */   "ey": () => (/* binding */ GET_USER_POST_SUCCESS),
/* harmony export */   "fS": () => (/* binding */ HASHTAG_SEARCH_REQUEST),
/* harmony export */   "gq": () => (/* binding */ UNLIKE_POST_FAILURE),
/* harmony export */   "ir": () => (/* binding */ HASHTAG_SEARCH_FAILURE),
/* harmony export */   "j0": () => (/* binding */ HASHTAG_SEARCH_SUCCESS),
/* harmony export */   "kT": () => (/* binding */ RELOAD_POST_REQUEST),
/* harmony export */   "mN": () => (/* binding */ TOGGLE_ADD_POST_DONE_REQUEST),
/* harmony export */   "q2": () => (/* binding */ addPost),
/* harmony export */   "qN": () => (/* binding */ GET_USER_POST_REQUEST),
/* harmony export */   "qb": () => (/* binding */ TOGGLE_EDIT_POST_DONE_REQUEST),
/* harmony export */   "qn": () => (/* binding */ GET_USER_LIKED_POST_REQUEST),
/* harmony export */   "rl": () => (/* binding */ LOAD_POST_FAILURE),
/* harmony export */   "s4": () => (/* binding */ EDIT_POST_REQUEST),
/* harmony export */   "sT": () => (/* binding */ GET_USER_POST_FAILURE),
/* harmony export */   "sV": () => (/* binding */ DELETE_POST_REQUEST),
/* harmony export */   "sg": () => (/* binding */ GET_HASHTAGS_SUCCESS),
/* harmony export */   "tG": () => (/* binding */ GET_HASHTAGS_REQUEST),
/* harmony export */   "tP": () => (/* binding */ ADD_POST_FAILURE),
/* harmony export */   "xD": () => (/* binding */ LIKE_POST_REQUEST),
/* harmony export */   "xM": () => (/* binding */ TOGGLE_ISEDIT_REQUEST),
/* harmony export */   "z9": () => (/* binding */ ADD_POST_REQUEST)
/* harmony export */ });
/* unused harmony exports initialState, gethashtagsRequestAction, gethashtagsSuccessAction, gethashtagsFailureAction */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
    postArray: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    deletePostLoading: false,
    deletePostDone: false,
    deletePostError: null,
    getHashTagsLoading: false,
    getHashTagsDone: false,
    getHashTagsError: null,
    hashtagSearchLoading: false,
    hashtagSearchDone: false,
    hashtagSearchError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    duplicatePostLoading: false,
    duplicatePostDone: false,
    duplicatePostError: null,
    editPostLoading: false,
    editPostDone: false,
    editPostError: null,
    getUserPostLoading: false,
    getUserPostDone: false,
    getUserPostError: null,
    getUserLikedPostLoading: false,
    getUserLikedPostDone: false,
    getUserLikedPostError: null,
    onInfiniteScroll: true,
    isEdit: false,
    hashtags: [],
    hasMorePost: true
};
const RELOAD_POST_REQUEST = "RELOAD_POST_REQUEST";
const TOGGLE_SCROLL_REQUEST = "TOGGLE_SCROLL_REQUEST";
const TOGGLE_ISEDIT_REQUEST = "TOGGLE_ISEDIT_REQUEST";
const TOGGLE_ADD_POST_DONE_REQUEST = "TOGGLE_ADD_POST_DONE_REQUEST";
const TOGGLE_EDIT_POST_DONE_REQUEST = "TOGGLE_EDIT_POST_DONE_REQUEST";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
const GET_HASHTAGS_REQUEST = "GET_HASHTAGS_REQUEST";
const GET_HASHTAGS_SUCCESS = "GET_HASHTAGS_SUCCESS";
const GET_HASHTAGS_FAILURE = "GET_HASHTAGS_FAILURE";
const HASHTAG_SEARCH_REQUEST = "HASHTAG_SEARCH_REQUEST";
const HASHTAG_SEARCH_SUCCESS = "HASHTAG_SEARCH_SUCCESS";
const HASHTAG_SEARCH_FAILURE = "HASHTAG_SEARCH_FAILURE";
const DUPLICATE_POST_REQUEST = "DUPLICATE_POST_REQUEST";
const DUPLICATE_POST_SUCCESS = "DUPLICATE_POST_SUCCESS";
const DUPLICATE_POST_FAILURE = "DUPLICATE_POST_FAILURE";
const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";
const GET_USER_POST_REQUEST = "GET_USER_POST_REQUEST";
const GET_USER_POST_SUCCESS = "GET_USER_POST_SUCCESS";
const GET_USER_POST_FAILURE = "GET_USER_POST_FAILURE";
const GET_USER_LIKED_POST_REQUEST = "GET_USER_LIKED_POST_REQUEST";
const GET_USER_LIKED_POST_SUCCESS = "GET_USER_LIKED_POST_SUCCESS";
const GET_USER_LIKED_POST_FAILURE = "GET_USER_LIKED_POST_FAILURE";
const POST_SORT_REQUEST = "POST_SORT_REQUEST";
const addPost = (data)=>{
    return {
        type: ADD_POST_REQUEST,
        data: data
    };
};
const loadPost = (data)=>{
    return {
        type: LOAD_POST_REQUEST,
        data
    };
};
const gethashtagsRequestAction = (data)=>{
    return {
        type: GET_HASHTAGS_REQUEST,
        data
    };
};
const gethashtagsSuccessAction = (data)=>{
    return {
        type: GET_HASHTAGS_SUCCESS,
        data
    };
};
const gethashtagsFailureAction = (data)=>{
    return {
        type: GET_HASHTAGS_FAILURE,
        data
    };
};
const reducer = (state = initialState, action)=>{
    return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, (draft)=>{
        switch(action.type){
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                draft.postArray = draft.postArray.concat(action.data);
                draft.loadPostDone = true;
                draft.loadPostLoading = false;
                draft.hasMorePost = action.data.length === 24; //나중에 바꿔줘야함.
                draft.onInfiniteScroll = true;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.postArray.unshift(action.data);
                draft.addPostLoading = false;
                draft.addPostDone = true;
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case DELETE_POST_REQUEST:
                draft.deletePostLoading = true;
                draft.deletePostDone = false;
                draft.deletePostError = null;
                break;
            case DELETE_POST_SUCCESS:
                draft.postArray = draft.postArray.filter((v)=>v.id !== action.data.PostId);
                draft.deletePostDone = true;
                draft.deletePostLoading = false;
                break;
            case DELETE_POST_FAILURE:
                draft.deletePostLoading = false;
                draft.deletePostError = action.error;
                break;
            case GET_HASHTAGS_REQUEST:
                draft.getHashTagsLoading = true;
                draft.getHashTagsError = null;
                draft.getHashTagsDone = false;
                break;
            case GET_HASHTAGS_SUCCESS:
                draft.getHashTagsLoading = true;
                draft.hashtags = action.data;
                draft.getHashTagsDone = true;
                break;
            case GET_HASHTAGS_FAILURE:
                draft.getHashTagsLoading = false;
                draft.getHashTagsError = action.error;
                break;
            case HASHTAG_SEARCH_REQUEST:
                draft.hashtagSearchLoading = true;
                draft.hashtagSearchDone = false;
                draft.hashtagSearchError = null;
                break;
            case HASHTAG_SEARCH_SUCCESS:
                draft.postArray = action.data;
                draft.hashtagSearchDone = true;
                draft.hashtagSearchLoading = false;
                draft.onInfiniteScroll = true;
                break;
            case HASHTAG_SEARCH_FAILURE:
                draft.hashtagSearchLoading = false;
                draft.hashtagSearchError = action.error;
                break;
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS:
                draft.likePostLoading = false;
                draft.likePostDone = true;
                break;
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;
            case UNLIKE_POST_REQUEST:
                draft.unlikePostLoading = true;
                draft.unlikePostDone = false;
                draft.unlikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS:
                draft.unlikePostLoading = false;
                draft.unlikePostDone = true;
                break;
            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError = action.error;
                break;
            case DUPLICATE_POST_REQUEST:
                draft.duplicatePostLoading = true;
                draft.duplicatePostDone = false;
                draft.duplicatePostError = null;
                break;
            case DUPLICATE_POST_SUCCESS:
                draft.postArray.unshift(action.data);
                draft.duplicatePostLoading = false;
                draft.duplicatePostDone = true;
                break;
            case DUPLICATE_POST_FAILURE:
                draft.duplicatePostLoading = false;
                draft.duplicatePostError = action.error;
                break;
            case EDIT_POST_REQUEST:
                draft.editPostLoading = true;
                draft.editPostDone = false;
                draft.editPostError = null;
                break;
            case EDIT_POST_SUCCESS:
                //바뀐 포스팅 인덱스 찾아서 그것만 바꿔서 postArray 다시 업뎃
                const editedPost = state.postArray.find((v)=>v.id === action.data.postId);
                const editedPostindex = state.postArray.indexOf(editedPost);
                draft.postArray[editedPostindex] = action.data.postInfo;
                draft.editPostLoading = false;
                draft.editPostDone = true;
                break;
            case EDIT_POST_FAILURE:
                draft.editPostLoading = false;
                draft.editPostError = action.error;
                break;
            case GET_USER_POST_REQUEST:
                draft.getUserPostLoading = true;
                draft.getUserPostDone = false;
                draft.getUserPostError = null;
                break;
            case GET_USER_POST_SUCCESS:
                draft.postArray = action.data;
                draft.getUserPostLoading = false;
                draft.getUserPostDone = true;
                break;
            case GET_USER_POST_FAILURE:
                draft.getUserPostLoading = false;
                draft.getUserPostError = action.error;
                break;
            case GET_USER_LIKED_POST_REQUEST:
                draft.getUserLikedPostLoading = true;
                draft.getUserLikedPostDone = false;
                draft.getUserLikedPostError = null;
                break;
            case GET_USER_LIKED_POST_SUCCESS:
                draft.postArray = action.data;
                draft.getUserLikedPostLoading = false;
                draft.getUserLikedPostDone = true;
                break;
            case GET_USER_LIKED_POST_FAILURE:
                draft.getUserLikedPostLoading = false;
                draft.getUserLikedPostError = action.error;
                break;
            case RELOAD_POST_REQUEST:
                draft.postArray = [];
                break;
            case TOGGLE_SCROLL_REQUEST:
                draft.onInfiniteScroll = false;
                break;
            case TOGGLE_ADD_POST_DONE_REQUEST:
                draft.addPostDone = false;
                break;
            case TOGGLE_EDIT_POST_DONE_REQUEST:
                draft.editPostDone = false;
                break;
            case TOGGLE_ISEDIT_REQUEST:
                draft.isEdit = action.data;
                break;
            case POST_SORT_REQUEST:
                draft.postArray = action.data;
                break;
            default:
                return state;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Q": () => (/* binding */ TOGGLE_SIGNUP_DONE),
/* harmony export */   "DU": () => (/* binding */ LOAD_USER_SUCCESS),
/* harmony export */   "I": () => (/* binding */ SIGN_UP_SUCCESS),
/* harmony export */   "II": () => (/* binding */ loadUser),
/* harmony export */   "Ls": () => (/* binding */ LOAD_USER_FAILURE),
/* harmony export */   "RZ": () => (/* binding */ LOG_IN_SUCCESS),
/* harmony export */   "Xd": () => (/* binding */ LOG_OUT_REQUEST),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bP": () => (/* binding */ SIGN_UP_FAILURE),
/* harmony export */   "dQ": () => (/* binding */ LOAD_USER_REQUEST),
/* harmony export */   "dy": () => (/* binding */ TOGGLE_LOGIN_DONE),
/* harmony export */   "kV": () => (/* binding */ LOG_OUT_SUCCESS),
/* harmony export */   "mD": () => (/* binding */ LOG_OUT_FAILURE),
/* harmony export */   "pK": () => (/* binding */ SIGN_UP_REQUEST),
/* harmony export */   "tP": () => (/* binding */ loginRequestAction),
/* harmony export */   "uF": () => (/* binding */ LOG_IN_REQUEST),
/* harmony export */   "vR": () => (/* binding */ logoutRequestAction),
/* harmony export */   "y1": () => (/* binding */ signupRequestAction),
/* harmony export */   "yK": () => (/* binding */ LOG_IN_FAILURE)
/* harmony export */ });
/* unused harmony exports initialState, loginSuccessAction, loginFailureAction, logoutSuccessAction, logoutFailureAction, signupSuccessAction, signupFailureAction */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_0__]);
immer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const initialState = {
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    user: null,
    signUpData: {},
    loginData: {},
    posts: []
};
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const TOGGLE_SIGNUP_DONE = "TOGGLE_SIGNUP_DONE";
const TOGGLE_LOGIN_DONE = "TOGGLE_LOGIN_DONE";
const loadUser = (data)=>{
    return {
        type: LOAD_USER_REQUEST,
        data
    };
};
const loginRequestAction = (data)=>{
    return {
        type: LOG_IN_REQUEST,
        data
    };
};
const loginSuccessAction = (data)=>{
    return {
        type: LOG_IN_SUCCESS,
        data
    };
};
const loginFailureAction = (data)=>{
    return {
        type: LOG_IN_FAILURE,
        data
    };
};
const logoutRequestAction = (data)=>{
    return {
        type: LOG_OUT_REQUEST,
        data
    };
};
const logoutSuccessAction = (data)=>{
    return {
        type: LOG_OUT_SUCCESS,
        data
    };
};
const logoutFailureAction = (data)=>{
    return {
        type: LOG_OUT_FAILURE,
        data
    };
};
const signupRequestAction = (data)=>{
    return {
        type: SIGN_UP_REQUEST,
        data
    };
};
const signupSuccessAction = (data)=>{
    return {
        type: SIGN_UP_SUCCESS,
        data
    };
};
const signupFailureAction = (data)=>{
    return {
        type: SIGN_UP_FAILURE,
        data
    };
};
const reducer = (state = initialState, action)=>{
    return (0,immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, (draft)=>{
        switch(action.type){
            case LOAD_USER_REQUEST:
                draft.loadUserLoading = true;
                draft.loadUserError = null;
                draft.loadUserDone = false;
                break;
            case LOAD_USER_SUCCESS:
                draft.loadUserLoading = true;
                draft.user = action.data;
                draft.loadUserDone = true;
                break;
            case LOAD_USER_FAILURE:
                draft.loadUserLoading = false;
                draft.loadUserError = action.error;
                break;
            case LOG_IN_REQUEST:
                draft.logInLoading = false;
                draft.logInError = null;
                draft.user = action.data;
                break;
            case LOG_IN_SUCCESS:
                draft.logInDone = true;
                draft.logInLoading = false;
                draft.user = action.data;
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                draft.user = null;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutDone = false;
                draft.logOutLoading = false;
                draft.logOutError = null;
                draft.user = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpError = null;
                draft.signUpDone = false;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.user = action.data;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            case TOGGLE_SIGNUP_DONE:
                draft.signUpDone = false;
                break;
            case TOGGLE_LOGIN_DONE:
                draft.logInDone = false;
                break;
            default:
                return state;
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4301);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_post__WEBPACK_IMPORTED_MODULE_1__, _user__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.baseURL = "http://15.164.224.172:8080/";
// axios.defaults.baseURL = 'http://localhost:8080/';
axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.withCredentials = true;
function* rootSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(_user__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ postSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1062);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _reducers_post__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _reducers_post__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//addpost
function addPostAPI(data) {
    console.log(data.image);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/post/addPost", data);
}
function* addPost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(addPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_SUCCESS */ ._s,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_FAILURE */ .tP,
            error: err.response.data
        });
    }
}
//addpost
function deletePostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/post/deletpost/${data}`, data);
}
function* deletePost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(deletePostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_POST_SUCCESS */ .Nr,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_POST_FAILURE */ .HR,
            error: err.response.data
        });
    }
}
//addpost
function loadPostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/post/loadPost?lastId=${data}`);
}
function* loadPost(action) {
    try {
        console.log(action.data);
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_SUCCESS */ .YQ,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_FAILURE */ .rl,
            error: err.response.data
        });
    }
}
//getHashtags
function getHashtagsAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/post/getHashtags`);
}
function* getHashtags(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(getHashtagsAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_HASHTAGS_SUCCESS */ .sg,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_HASHTAGS_FAILURE */ .V,
            error: err.response.data
        });
    }
}
//hashtag Search
function hashtagSearchAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/post/hashtagSearch`, data);
}
function* hashtagSearch(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(hashtagSearchAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .HASHTAG_SEARCH_SUCCESS */ .j0,
            data: result.data
        });
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .TOGGLE_SCROLL_REQUEST */ .PS
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .HASHTAG_SEARCH_FAILURE */ .ir,
            error: err.response.data
        });
    }
}
//like
function likePostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(likePostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_SUCCESS */ .SI,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_FAILURE */ .cT,
            error: err.response.data
        });
    }
}
//unlike
function unlikePostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`/post/${data}/unlike`);
}
function* unlikePost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(unlikePostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_SUCCESS */ .XD,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_FAILURE */ .gq,
            error: err.response.data
        });
    }
}
//duplicate
function duplicatePostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`/post/${data}/duplicate`);
}
function* duplicatePost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(duplicatePostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DUPLICATE_POST_SUCCESS */ .Gz,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DUPLICATE_POST_FAILURE */ .V4,
            error: err.response.data
        });
    }
}
//editpost
function editPostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/post/editPost`, data);
}
function* editPost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(editPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .EDIT_POST_SUCCESS */ .Cv,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .EDIT_POST_FAILURE */ .NY,
            error: err.response.data
        });
    }
}
//getuserpost
function getUserPostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/post/user`, data);
}
function* getUserPost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(getUserPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_POST_SUCCESS */ .ey,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_POST_FAILURE */ .sT,
            error: err.response.data
        });
    }
}
//getuserLikedpost
function getUserLikedPostAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/post/userLiked`, data);
}
function* getUserLikedPost(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(getUserLikedPostAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_LIKED_POST_SUCCESS */ .PY,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_LIKED_POST_FAILURE */ .X$,
            error: err.response.data
        });
    }
}
function* watchAddPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .ADD_POST_REQUEST */ .z9, addPost);
}
function* watchLoadPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.throttle)(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_POST_REQUEST */ .EG, loadPost);
}
function* watchDeletePost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DELETE_POST_REQUEST */ .sV, deletePost);
}
function* watchGetHashtags() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_HASHTAGS_REQUEST */ .tG, getHashtags);
}
function* watchHashtagSearch() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .HASHTAG_SEARCH_REQUEST */ .fS, hashtagSearch);
}
function* watchLikePost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .LIKE_POST_REQUEST */ .xD, likePost);
}
function* watchUnLikePost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .UNLIKE_POST_REQUEST */ .VT, unlikePost);
}
function* watchDuplicatePost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .DUPLICATE_POST_REQUEST */ .RR, duplicatePost);
}
function* watchEditPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .EDIT_POST_REQUEST */ .s4, editPost);
}
function* watchGetUserPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_POST_REQUEST */ .qN, getUserPost);
}
function* watchGetUserLikedPost() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_2__/* .GET_USER_LIKED_POST_REQUEST */ .qn, getUserLikedPost);
}
function* postSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchAddPost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadPost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchDeletePost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchGetHashtags),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchHashtagSearch),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLikePost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchUnLikePost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchDuplicatePost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchEditPost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchGetUserPost),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchGetUserLikedPost)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ userSaga)
/* harmony export */ });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3011);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _reducers_user__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _reducers_user__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



//load user
function loadUserAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/user/user`);
}
function* loadUser(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loadUserAPI, action.data);
        // console.log('loadUserData', result.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_SUCCESS */ .DU,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_FAILURE */ .Ls,
            error: err.response.data
        });
    }
}
//login
function loginAPI(data) {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/user/login", data);
}
function* logIn(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(loginAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_IN_SUCCESS */ .RZ,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_IN_FAILURE */ .yK,
            error: err.response.data
        });
    }
}
//logout
function logoutAPI() {
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/user/logout");
}
function* logOut() {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(logoutAPI);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_OUT_SUCCESS */ .kV,
            data: result.data
        });
    } catch (err) {
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_OUT_FAILURE */ .mD,
            error: err.response.data
        });
    }
}
//signup
function signupAPI(data) {
    console.log("data", data);
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/user/signup", data);
}
function* signUp(action) {
    try {
        const result = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.call)(signupAPI, action.data);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .SIGN_UP_SUCCESS */ .I,
            data: result.data
        });
    } catch (err) {
        console.log(err);
        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .SIGN_UP_FAILURE */ .bP,
            error: err.response.data
        });
    }
}
function* watchLoadUser() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOAD_USER_REQUEST */ .dQ, loadUser);
}
function* watchLogIn() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_IN_REQUEST */ .uF, logIn);
}
function* watchLogOut() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .LOG_OUT_REQUEST */ .Xd, logOut);
}
function* watchSignUp() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_2__/* .SIGN_UP_REQUEST */ .pK, signUp);
}
function* userSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogIn),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLogOut),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchSignUp),
        (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.fork)(watchLoadUser)
    ]);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5924);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4549);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7967);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducers__WEBPACK_IMPORTED_MODULE_2__, _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__]);
([_reducers__WEBPACK_IMPORTED_MODULE_2__, _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__, _sagas__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const loggerMiddleware = ({ dispatch , getState  })=>(next)=>(action)=>{
            // if(typeof action ==='function'){
            //   return action(dispatch, getState, extraArgument)
            // }
            // console.log(action);
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

/***/ })

};
;