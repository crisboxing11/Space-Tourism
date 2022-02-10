import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';


const App = () =>  {
  return (
    <Router>
      < Nav />
      <Switch>
        <Route exact path="/" />
    </Router>
  );
}

export default App;


//start test