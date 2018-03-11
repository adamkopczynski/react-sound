import * as types  from '../constants/ActionTypes'

export const playerRequest = (id, title) => ({
  type: types.PLAYER_REQUESTED,
  payload: {
    id,
    title
  }
})

export const playerSuccess = playerUrl => ({
  type: types.PLAYER_SUCCESS,
  payload: {
    playerUrl
  }
})

export const setPlayer = player => ({
  type: types.SET_PLAYER,
  payload: {
    player
  }
})

export const hidePlayer = () => ({
  type: types.HIDE_PLAYER
})

export const showPlayer = () => ({
  type: types.SHOW_PLAYER
})

export const play = () => ({
  type: types.PLAY
})

export const pause = () => ({
  type: types.PAUSE
})
