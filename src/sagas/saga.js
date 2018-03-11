import {takeEvery, put} from 'redux-saga/effects'
import {addTracksSuccess} from '../actions/tracks'
import {playerSuccess} from '../actions/player'
import {addTrack} from '../actions/tracklist'
import {searchTracksSuccess} from '../actions/search'

const apiKey = 'AIzaSyD69e556BuyVHwUdgrA9H0buJtJqNhATIM'


function* newTracks(){
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=24&playlistId=PLgzTt0k8mXzEk586ze4BjvDXR7c-TUSnx&key=${apiKey}`
  const tracks = yield fetch(url)
  .then(res =>{ return res.json()})

  console.log('new', tracks.items)
  yield put(addTracksSuccess(tracks.items))
}

function* createPlayer({payload}){
  yield put(playerSuccess(payload.id))
}


function* searchTracks({payload}){
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=24&q=${payload.query}&key=${apiKey}`
  const tracks = yield fetch(url)
  .then(res =>{ return res.json()})

  console.log(tracks.items)
  yield put(searchTracksSuccess(tracks.items))
}

function* updateTrackList({payload}){
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${payload.id}&part=snippet&key=${apiKey}`
  const track = yield fetch(url)
  .then(res =>{ return res.json()})

  yield put(addTrack(track))
}

export default function* rootSaga() {
  yield takeEvery('TRACKS_ADD_REQUESTED', newTracks)
  yield takeEvery('PLAYER_REQUESTED', createPlayer)
  yield takeEvery('FETCH_TRACK_REQUESTED', updateTrackList)
  yield takeEvery('SEARCH_TRACKS_REQUESTED', searchTracks)
}
