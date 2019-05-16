import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put as dispatch} from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

function* watcherSaga(){
    console.log('saga is always watching');
}

const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH'){
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        searchReducer,
    }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
