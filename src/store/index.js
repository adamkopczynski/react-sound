import {createStore, combineReducers} from 'redux';
import trackListReducer from '../reducers/tracklist';

const reducers = combineReducers({
  trackList: trackListReducer
})

const store = createStore(reducers)

export default store
