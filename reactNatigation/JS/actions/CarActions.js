import  * as types from  '../constant/ActionsTypes'
import Config from '../../Tool/Config'
import NetWorking from '../../Tool/NetWorking'
import {
    AsyncStorage,
}from 'react-native'
export  function  carActions() {
    return dispatch => {
      let url = `${Config.api.userToken}cart/goodsList.json` ;
      return NetWorking.get(url,(data)=>{


      },(error)=>{


      });

    }
    export  function  carDataSucces(data) {
        return{
           type:types.CAR_SUCCESS
        }
    }
    export  function  carDataError(error) {
        return{
            type:types.CAR_ERROR
        }
    }

}