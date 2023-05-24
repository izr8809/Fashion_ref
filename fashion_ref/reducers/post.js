import produce from "immer";

export const initialState = {
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
  getLikesortedPostLoading: false,
  getLikesortedPostDone: false,
  getLikesortedPostError: null,
  onInfiniteScroll: true,
  isEdit: false,
  hashtags: [],
  hasMorePost: true,
};

export const RESET_POST_REQUEST = "RESET_POST_REQUEST";

export const TOGGLE_SCROLL_REQUEST = "TOGGLE_SCROLL_REQUEST";
export const TOGGLE_ISEDIT_REQUEST = "TOGGLE_ISEDIT_REQUEST";

export const TOGGLE_ADD_POST_DONE_REQUEST = "TOGGLE_ADD_POST_DONE_REQUEST";
export const TOGGLE_EDIT_POST_DONE_REQUEST = "TOGGLE_EDIT_POST_DONE_REQUEST";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const GET_HASHTAGS_REQUEST = "GET_HASHTAGS_REQUEST";
export const GET_HASHTAGS_SUCCESS = "GET_HASHTAGS_SUCCESS";
export const GET_HASHTAGS_FAILURE = "GET_HASHTAGS_FAILURE";

export const HASHTAG_SEARCH_REQUEST = "HASHTAG_SEARCH_REQUEST";
export const HASHTAG_SEARCH_SUCCESS = "HASHTAG_SEARCH_SUCCESS";
export const HASHTAG_SEARCH_FAILURE = "HASHTAG_SEARCH_FAILURE";

export const DUPLICATE_POST_REQUEST = "DUPLICATE_POST_REQUEST";
export const DUPLICATE_POST_SUCCESS = "DUPLICATE_POST_SUCCESS";
export const DUPLICATE_POST_FAILURE = "DUPLICATE_POST_FAILURE";

export const EDIT_POST_REQUEST = "EDIT_POST_REQUEST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

export const GET_USER_POST_REQUEST = "GET_USER_POST_REQUEST";
export const GET_USER_POST_SUCCESS = "GET_USER_POST_SUCCESS";
export const GET_USER_POST_FAILURE = "GET_USER_POST_FAILURE";

export const GET_USER_LIKED_POST_REQUEST = "GET_USER_LIKED_POST_REQUEST";
export const GET_USER_LIKED_POST_SUCCESS = "GET_USER_LIKED_POST_SUCCESS";
export const GET_USER_LIKED_POST_FAILURE = "GET_USER_LIKED_POST_FAILURE";

export const POST_SORT_REQUEST = "POST_SORT_REQUEST";

export const GET_LIKESORTED_REQUEST = "GET_LIKESORTED_REQUEST";
export const GET_LIKESORTED_SUCCESS = "GET_LIKESORTED_SUCCESS";
export const GET_LIKESORTED_FAILURE = "GET_LIKESORTED_FAILURE";

export const addPost = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data: data,
  };
};

export const loadPost = (data) => {
  return {
    type: LOAD_POST_REQUEST,
    data: data,
  };
};

export const gethashtagsRequestAction = (data) => {
  return {
    type: GET_HASHTAGS_REQUEST,
    data,
  };
};

export const gethashtagsSuccessAction = (data) => {
  return {
    type: GET_HASHTAGS_SUCCESS,
    data,
  };
};

export const gethashtagsFailureAction = (data) => {
  return {
    type: GET_HASHTAGS_FAILURE,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.postArray = draft.postArray.concat(action.data.posts);
        draft.loadPostDone = false;
        draft.loadPostLoading = false;
        draft.hasMorePost = action.data.posts.length === 24; 
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
        draft.postArray = draft.postArray.filter(
          (v) => v.id !== action.data.PostId
        );
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
        draft.hashtags = action.data.hashtags;
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
        draft.postArray = action.data.posts;
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
        const editedPost = state.postArray.find(
          (v) => v.id === action.data.id
        );
        const editedPostindex = state.postArray.indexOf(editedPost);

        draft.postArray[editedPostindex] = action.data;
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

      case RESET_POST_REQUEST:
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
        draft.onInfiniteScroll = false;
        break;

      case GET_LIKESORTED_REQUEST:
        draft.getLikesortedPostLoading = true;
        draft.getLikesortedPostDone = false;
        draft.getLikesortedPostError = null;
        break;

      case GET_LIKESORTED_SUCCESS:
        draft.postArray = action.data.posts;
        draft.getLikesortedPostLoading = true;
        draft.getLikesortedPostDone = true;
        break;
        
      case GET_LIKESORTED_FAILURE:
        draft.getLikesortedPostLoading = false;
        draft.getLikesortedPostError = action.error;
        break;

      default:
        return state;
    }
  });
};

export default reducer;
