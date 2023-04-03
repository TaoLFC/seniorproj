import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import CodeEditorPage from "./pages/CodeEditorPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/CodeEditorPage">
          <CodeEditorPage />
        </Route>
        {/* <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/strategy-management">
          <StrategyManagementPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;