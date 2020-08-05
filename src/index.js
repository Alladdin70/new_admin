import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import Root from "./pages/Root";


const initialState = ['reducer_element'];

const myReducer = (state=initialState,action) => {
    if(action.type === 'ADD_NEW_TABLE'){return [...state,action.payload];}
    else{return state;}

};

const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Root store={store}/>,document.getElementById('root')
);
