import React from 'react';
import { HashRounter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <HashRounter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRounter>
  );
}

export default App;
