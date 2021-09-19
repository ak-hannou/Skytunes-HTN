import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import { Player } from './Player';

function App() {
  
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/welcome"/>}/>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/player" component={Player} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
