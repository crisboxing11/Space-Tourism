import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home'


const App = () =>  {
  return (
    <Router>
      < Nav />
      <Home/>
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/crew" component={Crew} />
        <Route exact path="/technology" component={Technology} />
      </Routes> */}
    </Router>
  );
}

export default App;


//start test