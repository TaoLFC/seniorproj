import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CodeEditorPage from "./pages/CodeEditorPage";
import Portfolio from "./pages/Portfolio";
import StrategyManagement from "./pages/StrategyManagement";
import Login from "./pages/Login"
import Register from "./pages/Register"
import BackendLogPage from "./pages/Backendlog";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/code-editor">Code Editor</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/strategy-management">Strategy Management</Link>
          <Link to="/backendlog">Backend Log</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/code-editor" component={CodeEditorPage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/strategy-management" component={StrategyManagement} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/backendlog" component={BackendLogPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
