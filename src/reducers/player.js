import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  player: {}
  playerActive: false,
  playerSongId: 57645202
}

export default function playerReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.PLAYER_REQUESTED:
      return {...state, playerSongId: action.payload.id}
    case types.PLAYER_SUCCESS:
      return {...state, player: action.payload.player, playerActive: true}
    default:
      return state;
  }
}
