import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {handler as userSaga} from './src/model/user/saga';
import {reducer} from './src/model/root-reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(userSaga);
export {store};
