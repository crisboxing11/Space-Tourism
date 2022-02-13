import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
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
          </Route>
      </Routes>
    </Router>
  );
}

export default App;


