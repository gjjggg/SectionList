/**
 * Created by guohongan on 2017/8/1.
 */
import  * as types from '../constant/ActionsTypes'
const initialState = {
    data:null,
    error:null,
}
export  default  function carReducer (state = initialState,action) {
     switch (action.type){
         case types.CAR_SUCCESS:
             return Object.assign({},state,{

                 data:action.data
             });
         case  types.CAR_ERROR:
             return Object.assign({},state,{
                 error:action.error
             });
         default:
              return state;

     }

}