import * as types  from '../constants/ActionTypes'

const INITIAL_STATE = {
  list: [
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    },
    {
      title: 'Song',
      author: 'Smith',
      album: 'First'
    }
  ]
}

export default function trackListsReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case types.CLEAR_TRACK_LIST:
      return {...state, list: []}
    default:
      return state;
  }
}
