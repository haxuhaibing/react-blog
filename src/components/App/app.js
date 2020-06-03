import Home from '../../pages/home/home'
import Login from '../Login/login'
import Header from '../Header/header'
import React from "react";
import Detail from '../../pages/detail/detail'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default function BasicExample() {
  return (<Router>
    <div>
      <Login/>
      <Header/>
      <Switch>
        <Route exact={true} path="/">
          <Home/>
        </Route>
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  </Router>);
  
}
