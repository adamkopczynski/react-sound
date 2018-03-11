import {createStore, combineReducers, applyMiddleware} from 'redux'
import trackListReducer from '../reducers/tracklist'
import tracksReducer from '../reducers/tracks'
import playerReducer from '../reducers/player'
import searchReducer from '../reducers/search'
import createSagaMiddleware from 'redux-saga'

import saga from '../sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  trackList: trackListReducer,
  tracks: tracksReducer,
  player: playerReducer,
  search: searchReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(saga)

export default store
