import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  tracks: [],
  tracksFetching: false,
  tracksFetched: false,
  fetchingError: ''
}

export default function trackListsReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.TRACKS_ADD_REQUESTED:
      return {...state, tracksFetching: true}
    case types.TRACKS_ADD_SUCCESS:
      return {...state, tracksFetching: false, tracksFetched: true, tracks: action.payload.tracks}
    default:
      return state;
  }
}
