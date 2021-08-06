import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { DataQualityReport } from './pages/DataQualityReport';
import { Protal } from './pages/Protal';

let App = () => {
  return <>
    <Router>
      <Switch>
        <Route exact path="/ppd-mtp"><Protal /></Route>
      </Switch>
    </Router>
  </>;
}
export default App;