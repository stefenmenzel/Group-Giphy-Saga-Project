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
    yield takeEvery('GET_SEARCH', getSearchImages);
    yield takeEvery('GET_FAV', getFavImages);
    yield takeEvery('GET_CAT', getCategories);

    yield takeEvery('SET_NEW_FAV', setNewFav);
    yield takeEvery('SET_NEW_CAT', setNewCategory);
}

function* getSearchImages(action){
    try{
        const elementsResponse = yield axios.get(`/api/search?search=${action.payload.query}`);
        yield dispatch({ type: 'SET_SEARCH', payload: elementsResponse.data });
    }catch(err){
        console.log('Error in GET search request:', err);
    };
}

function* getFavImages(){
    try{
        const elementsResponse = yield axios.get('/api/favorite');
        yield dispatch({type: 'SET_FAV', payload: elementsResponse.data})
    }catch(err){
        console.log('Error in GET favs request:', err);
    };
}

function* getCategories(){
    try{
        const elementsResponse = yield axios.get('/api/category');
        yield dispatch({type: 'SET_CAT', payload: elementsResponse});
    }catch(err){
        console.log('Error in GET categories request:', err);
    }
}

function* setNewFav(action){
    try{
        yield axios.post('/api/favorite', action.payload);
        yield dispatch({type:'GET_FAV'});
    }catch(err){
        console.log('Error in POST fav request:', err);
    };
}

function* setNewCategory(action){
    try{
        yield axios.put('/api/category', action.payload);
        yield dispatch({type: 'GET_CAT'});
    }catch(err){
        console.log('Error in PUT cat request:', err);
    }
}

const searchReducer = (state = [], action) => {
    if(action.type === 'SET_SEARCH'){
        return action.payload;
    }
    return state;
}

const favoritesReducer = (state = [], action) => {
    if(action.type === 'SET_FAV'){
        return action.payload;
    }
    return state;
}

const categoryReducer = (state = [], action) => {
    if(action.type === 'SET_CAT'){
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        searchReducer,
        favoritesReducer,
        categoryReducer,
    }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
