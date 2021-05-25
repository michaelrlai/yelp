import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
};

export default App;
