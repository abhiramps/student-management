import './App.css';
import React from 'react';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/Register'>
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
