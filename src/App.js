import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import {Crew,Destination,Technology} from './pages';
import Home from './Components/Home'


const App = () =>  {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
          </Route>
        <Route path="/crew">
          <Crew />
          </Route>
        <Route path="/technology">
          <Technology />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;


