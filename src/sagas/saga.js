import {takeEvery, put} from 'redux-saga/effects'
import {addTracksSuccess} from '../actions/tracks.js'
import {playerSuccess} from '../actions/player.js'
import SC from 'soundcloud'

SC.initialize({
  client_id: 'd02c42795f3bcac39f84eee0ae384b00'
});

function* newTracks(dispatch){
  const tracks = yield SC.get('/tracks', { limit: 20, genres: 'rock' })
  yield put(addTracksSuccess(tracks))
}

function* createPlayer({payload}){
  const track = `/tracks/${payload.id}`
  const player = yield SC.stream(track)
  console.log('ok ',player)
  yield put(playerSuccess(player))
}

export default function* rootSaga() {
  yield takeEvery('TRACKS_ADD_REQUESTED', newTracks)
  yield takeEvery('PLAYER_REQUESTED', createPlayer)
}
