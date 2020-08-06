import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import EditorMenu from "./pages/EditorMenu";
import SelectName from "./pages/SelectName";
import Editor from "./pages/Editor";
import {connect} from "react-redux";
import MyTable from  './pages/MyTable';

function App() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/editor' component={EditorMenu}/>
          <Route path='/new' component={SelectName}/>
          <Route path='/edit/:tablename' component={Editor}/>
          <Route path='/mytable' component={MyTable}/>
        </Switch>
      </div>
    );
  }

export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(App);
