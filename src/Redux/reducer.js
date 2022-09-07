//You can edit this reducer
import * as types from "./actionTypes"
const initialState = {
  news: [],
  isLoading:false,
  isError:false,
};

export const reducer = (state = initialState,action) => {
const {type,payload} = action
switch(type){
  case types.NEWS_DATA_REQUEST:
    return{
      ...state,
      isLoading:true,
    }
  case types.NEWS_DATA_SUCCESS:
    return{
      ...state,
      isLoading:false,
      news:payload
    }  
  case types.NEWS_DATA_FAILURE:
    return{
      ...state,
      isError:false
    } 
  default:
    return state
}
};

