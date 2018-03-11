import * as types  from '../constants/ActionTypes'

export const searchTracks = query => ({
  type: types.SEARCH_TRACKS_REQUESTED,
  payload: {
    query
  }
})

export const searchTracksSuccess = tracks => ({
  type: types.SEARCH_TRACKS_SUCCESS,
  payload: {
    tracks
  }
})
