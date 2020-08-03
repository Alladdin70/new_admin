import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Empty from "./pages/Empty";

function App() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/editor' component={Empty}/>
        </Switch>
      </div>
    );
  }

export default App;
