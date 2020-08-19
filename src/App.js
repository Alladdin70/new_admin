import React from 'react';
import {connect} from "react-redux";
import {Route,Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import EditorMenu from "./pages/EditorMenu";
import SelectName from "./pages/SelectName";
import SelectTable from './pages/SelectTable';
import Editor from "./pages/Editor";
import MyTable from  './pages/MyTable';
import StartTable from "./pages/StartTable";

function App() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/editor' component={EditorMenu}/>
          <Route path='/new' component={SelectName}/>
          <Route path='/edit/:tablename' component={Editor}/>
          <Route path='/open' component={SelectTable}/>
          <Route path='/mytable' component={MyTable}/>
          <Route parh='/protomaker' component={StartTable}/>
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
