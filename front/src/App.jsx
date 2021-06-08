import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReportProblemScreen from "./views/ReportProblemScreen";
import Home from "./views/Home";
import Login from "./views/Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/report">
            <ReportProblemScreen />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
