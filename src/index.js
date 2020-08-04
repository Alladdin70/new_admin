import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import Root from "./pages/Root";

const initialState = [];

const myReducer = (state=initialState,action) => {
    return [...state,action.payload];
};

const store = createStore(myReducer);

ReactDOM.render(
    <Root store={store}/>, document.getElementById('root')
);
