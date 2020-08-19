import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import './index.css';
import Root from "./pages/Root";


const initialState = {rows:[], tables:[], tablename:''};

const myReducer = (state=initialState,action) => {
    if(action.type === 'ADD_NEW_TABLE'){return action.payload;}
    if(action.type === 'ADD_NEW_TABLENAME'){return action.payload;}
    if(action.type === 'CLEAR_DATA'){return action.payload;}
    if(action.type === 'ADD_ROW'){return {
        rows: [...state.rows, action.payload],
        tablename: state.tablename,
        tables: state.tables
    };}
    if(action.type === 'SAVE_CHANGES'){return {
        rows: action.payload.rows,
        tablename: state.tablename,
        tables: state.tables
    };}
    if(action.type === 'GET_TABLES'){return{
        rows: state.rows,
        tablename: state.tablename,
        tables: action.payload.tables
    };}
    if(action.type === 'CHANGE_RADIO'){return{
        rows: state.rows,
        tablename: action.payload.tablename,
        tables: state.tables
    };}
    if(action.type === 'SELECT_TABLE'){return{
        rows: action.payload.rows,
        tablename: state.tablename,
        tables: state.tables
    };}
    if(action.type === 'DELETE_TABLE'){return{
        rows: state.rows,
        tablename: state.tablename,
        tables: action.payload.tables
    };}
    if(action.type === 'DENY_NEW'){
        return {
            rows: state.rows,
            tablename: state.tablename,
            tables: state.tables
        };
    }
    else{return state;}

};

const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Root store={store}/>,document.getElementById('root')
);
