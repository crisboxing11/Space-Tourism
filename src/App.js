import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Crew,Destination,Technology,Error, Home,Nav} from './pages';


const App = () =>  {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );  
}

export default App;


