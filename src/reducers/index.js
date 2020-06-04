 import {
     combineReducers
 } from 'redux'
 const ininState = {
     userInfo: {}
 }
 const rootReducer = (state = ininState, action) => {
     switch (action.type) {
         case "send_action":
             console.log('qq:',state, action);
             
             return Object.assign({}, state, action);
         default:
             return state;
     }
 };
 
//  module.exports = {
//      rootReducer
//  }
export default combineReducers({
 rootReducer
})