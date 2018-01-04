import React, { Component } from 'react';
import TableView from './Tableview';
import { Route, BrowserRouter} from 'react-router-dom';
import MoneyApp from './MoneyApp';
import Header from './Header';
import Home from './Home';

const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route component={MoneyApp} path="/expenses" />
          <Route component={Home} exact path="/" />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;