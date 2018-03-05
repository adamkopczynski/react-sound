import SC from 'soundclound'

function* getTracks(){
  yield console.log('track')
}

export default function* rootSaga() {
  yield takeEvery('FETCH_USERS', fetchUsers)
  yield takeEvery('CREATE_USER', createUser)
}
