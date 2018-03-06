import * as types  from '../constants/ActionTypes'

export const playerRequest = id => ({
  type: types.PLAYER_REQUESTED,
  payload: {
    id
  }
})

export const playerSuccess = player => ({
  type: types.PLAYER_SUCCESS,
  payload: {
    player
  }
})
