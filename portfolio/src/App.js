import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Routess from './components/Routes';

//React Router
import {
  HashRouter as Router,
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routess />
    </Router>
  );
}

export default App;
