import {createStore, combineReducers, applyMiddleware} from 'redux'
import trackListReducer from '../reducers/tracklist'
import createSagaMiddleware from 'redux-saga'

import saga from '../sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  trackList: trackListReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(saga)

export default store
