import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchdata } from './fetchdata';


function* handler() {
  console.log('handler');
  yield takeEvery('FETCH_TOKEN', fetchToken);
  yield takeEvery('USER-LOGIN', loginUser);
  yield takeEvery('REMOVE-USER', logOutUser);
}

function* fetchToken(action) {
  try {
    // API call
    console.log('in genfun');
    console.log(action.paylod);
    const { } = action.paylod;

    yield put({
      type: 'RESTORE_TOKEN',
      payload: {
        token: null,
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
