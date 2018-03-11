import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  tracks: [],
  tracksFetching: false,
  tracksFetched: false
}

export default function searchReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.SEARCH_TRACKS_REQUESTED:
      return {...state, tracksFetching: true}
    case types.SEARCH_TRACKS_SUCCESS:
      return {...state, tracksFetching: false, tracksFetched: true, tracks: action.payload.tracks}
    default:
      return state;
  }
}
