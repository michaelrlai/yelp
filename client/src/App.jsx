import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import { RestaurantContextProvider } from './context/RestaurantContext';

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/restaurants/:id/update">
              <UpdatePage />
            </Route>
            <Route exact path="/restaurants/:id">
              <RestaurantDetailPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </RestaurantContextProvider>
  );
};

export default App;
