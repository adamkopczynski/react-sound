import {createStore, combineReducers, applyMiddleware} from 'redux'
import trackListReducer from '../reducers/tracklist'
import createSagaMiddleware from 'redux-saga'

import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  trackList: trackListReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

export default store
