import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  player: false,
  playerUrl: '',
  playerActive: false,
  visible: false,
  isPlaying: false
}

export default function playerReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.PLAYER_REQUESTED:
      return {...state, playerSongId: action.payload.id}
    case types.PLAYER_SUCCESS:
      return {...state, playerUrl: action.payload.playerUrl,
              playerActive: true, visible: true, isPlaying: true}
    case types.SET_PLAYER:
      return {...state, player: action.payload.player}
    case types.HIDE_PLAYER:
      return {...state,  visible: false}
    case types.SHOW_PLAYER:
      return {...state,  visible: true}
    case types.PLAY:
      return {...state, isPlaying: true}
    case types.PAUSE:
      return {...state, isPlaying: false}
    default:
      return state;
  }
}
