export const initialState ={
    postArray :[{
    id: 0,
    name :"",
    category:"",
    brand:"",
    Images: [{
      src :"",
    }],
    Hashtags : [{ //어떻게 오는지 모르겠네
      PostHashtag:{
        HashtagId:1,
      },
      name:"",

    }],
    reason:"",
    season:"",
    link:"",
  },],
  pagecount :0,
  postAdded : false,
};


const ADD_POST_REQUEST = 'ADD_POST_REQUEST';


const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';


export const addPost = (data) => {
  return{
    type: ADD_POST_REQUEST,
    data,
  }
}



export const loadPost = (data) =>{
  return {
    type : LOAD_POST_REQUEST,
    data,
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
      
    case LOAD_POST_REQUEST:
      console.log("action.data" + action.data)
      return{
          ...state,
          postArray: action.data,
      }
    case ADD_POST_REQUEST:
      return{
        ...state,
        postArray: [action.data, ...state.postArray],
        postadded : true,
      }

    default:
      return state;
  }
}

export default reducer;