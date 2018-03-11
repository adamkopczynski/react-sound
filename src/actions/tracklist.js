import * as types  from '../constants/ActionTypes'

export const clearTrackList = () => ({
  type: types.CLEAR_TRACK_LIST
})

export const addTrack = (track) => ({
  type: types.FETCH_TRACK_SUCCESS,
  payload: {track}
})

export const addTrackRequest = (id) => ({
  type: types.FETCH_TRACK_REQUESTED,
  payload: {id}
})
