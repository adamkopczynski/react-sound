import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  list: []
}

export default function trackListsReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.CLEAR_TRACK_LIST:
      return {...state, list: []}
    case types.FETCH_TRACK_SUCCESS:
      return {...state, list: state.list.concat(action.payload)}
    default:
      return state;
  }
}
