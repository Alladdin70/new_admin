import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import {myReducer} from "./reducers";
import Root from "./pages/Root";


const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Root store={store}/>,document.getElementById('root')
);
