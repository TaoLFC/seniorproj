import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-editor" element={<CodeEditorPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/strategy-management" element={<StrategyManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/backendlog" element={<BackendLogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
