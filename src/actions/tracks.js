import * as types  from '../constants/ActionTypes'

export const addTracks = () => ({
  type: types.TRACKS_ADD_REQUESTED
})

export const addTracksSuccess = tracks => ({
  type: types.TRACKS_ADD_SUCCESS,
  payload: {
    tracks
  }
})
