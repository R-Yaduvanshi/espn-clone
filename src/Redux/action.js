import axios from "axios"
import * as types from "./actionTypes"

const news_data = () =>dispatch=>{
   dispatch({type:types.NEWS_DATA_REQUEST})
   axios.get(`http://localhost:8080/news`)
   .then((r)=>dispatch({type:types.NEWS_DATA_SUCCESS,payload:r.data}))
   .catch((e)=>dispatch({type:types.NEWS_DATA_FAILURE,payload:e}))
}



export {news_data}