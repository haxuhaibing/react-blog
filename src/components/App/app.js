import Home from '../../pages/home/home'
import Header from '../Header/header'
import React from "react";
import Detail from '../../pages/detail/detail'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
export default function BasicExample() {
  return (<Router>
    <div>
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
