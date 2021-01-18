import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import root from './reducer/combineReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    root,
    applyMiddleware(sagaMiddleware)
    );
sagaMiddleware.run(rootSaga)