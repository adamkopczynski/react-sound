import {takeEvery, put} from 'redux-saga/effects'
import {addTracksSuccess} from '../actions/tracks.js';
import SC from 'soundcloud'

SC.initialize({
  client_id: 'd02c42795f3bcac39f84eee0ae384b00'
});

function* newTracks(dispatch){
  const tracks = yield SC.get('/tracks', { limit: 20, genres: 'punk' })
  yield put(addTracksSuccess(tracks))
}

export default function* rootSaga() {
  yield takeEvery('TRACKS_ADD_REQUESTED', newTracks)
}
