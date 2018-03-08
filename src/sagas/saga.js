import {takeEvery, put} from 'redux-saga/effects'
import {addTracksSuccess} from '../actions/tracks.js'
import {playerSuccess} from '../actions/player.js'

const apiKey = 'AIzaSyD69e556BuyVHwUdgrA9H0buJtJqNhATIM'


function* newTracks(dispatch){
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=18&playlistId=PLgzTt0k8mXzEk586ze4BjvDXR7c-TUSnx&key=${apiKey}`
  const tracks = yield fetch(url)
  .then(res =>{ return res.json()})

  yield put(addTracksSuccess(tracks.items))
}

function* createPlayer({payload}){
  yield put(playerSuccess(payload.id))
}

export default function* rootSaga() {
  yield takeEvery('TRACKS_ADD_REQUESTED', newTracks)
  yield takeEvery('PLAYER_REQUESTED', createPlayer)
}
