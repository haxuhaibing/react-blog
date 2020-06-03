 import {
     combineReducers
 } from 'redux'
 const ininState = {
     value: 'default'
 }
 const rootReducer = (state = ininState, action) => {
     switch (action.type) {
         case "send_type":
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