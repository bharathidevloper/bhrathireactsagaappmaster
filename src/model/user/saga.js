import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchdata } from './fetchdata';
import { storeData } from './storage';
import { fetchToken } from './fetchtoken';
import { removeToken } from './removeToken';




function* handler() {
  console.log('handler');
  yield takeEvery('FETCH_TOKEN', restoreToken);
  yield takeEvery('USER-LOGIN', loginUser);
  yield takeEvery('REMOVE-USER', logOutUser);

}

function* restoreToken(action) {
  try {
    // API call
    const userToken = yield call(fetchToken);
    console.log("userasynctoken:" + userToken);
    yield put({
      type: 'RESTORE_TOKEN',
      payload: {
        token: userToken,
      },
    });
  } catch (err) {
    // Handle error
  }
}

function* loginUser(action) {
  try {
    // API call
    console.log('coming userlogin or not');
    // console.log(action.paylod);
    const userlogin = yield call(fetchdata, action.paylod);
    console.log(userlogin);

    yield call(storeData, userlogin.UserUniqueId);


    yield put({
      type: 'LOGIN-SUCCESS',
      payload: {
        token: userlogin.UserUniqueId,
      },
    });

  } catch (err) {
    // Handle error
  }


}
function* logOutUser(action) {
  try {

    yield call(removeToken);
    yield put({
      type: 'SIGN_OUT',
      payload: {
        token: null,
      },
    });

  } catch (err) {
    // Handle error
  }


}


export { handler };
