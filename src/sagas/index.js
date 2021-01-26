import { call, put,takeLatest,all } from 'redux-saga/effects'
import {getStockDetailsFromApi} from './serverApi';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getStockDetails(action) {
    console.log(action.newInput);
    const {symbol} = action.newInput;

   try {
      const result = yield call(getStockDetailsFromApi, {symbol});

      if(result){
          console.log('successfully fetched the details');
        yield put({type: "STOCK_RECEIVED", payload: result});
      }else{
          console.log('Got empty result from the API');
      }
   } catch (e) {
       console.log('Stock fetch failed');
       console.log(e);
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* actionWatcher() {
  yield takeLatest("GET_STOCK", getStockDetails);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default function* rootSaga(){
    yield all([actionWatcher()]);
};