import * as types  from '../constants/ActionTypes'

export const clearTrackList = () => ({
  type: types.CLEAR_TRACK_LIST
})

export const addTracks = (tracks) => ({
  type: types.FETCH_TRACKS_FULLFILED,
  payload: tracks
})
