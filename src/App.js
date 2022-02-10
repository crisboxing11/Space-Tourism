import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav';


const App = () =>  {
  return (
    <Router>
      < Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/technology" component={Technology} />
      </Switch>
    </Router>
  );
}

export default App;


//start test