import {put,takeLatest,all} from 'redux-saga/effects'

function* rootSaga(){
   function* fetchPokemon({payload}) {

    console.log("fetch",payload)
    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${payload}`)
    const data = yield response.json()
    yield put({type:"DATA_RECEIVED",payload:data})
   }
  function*  actionWatcher(name) {
      yield takeLatest("fetch",fetchPokemon)
  }
  yield all([actionWatcher()]);
}
export default rootSaga;