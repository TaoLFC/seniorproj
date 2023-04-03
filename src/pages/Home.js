import React from 'react';
import '/Users/taopuchong/Desktop/seniorproj/src';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="login-btn">
          <span className="login-name">Login</span>
        </button>
      </header>
      <div className="content">
        <div className="button-container">
            <Link to="/CodeEditorPage" >
                <button className="btn">
                    <img src="Code.png" alt="Code Editor Logo" />
                    <span className="btn-name">Code Editor</span>
                </button>
            </Link>
          <button className="btn">
            <img src="Portfolio.png" alt="Portfolio Logo" />
            <span className="btn-name">Portfolio</span>
          </button>
          <button className="btn">
            <img src="Chess.png" alt="Strategy Management Logo" />
            <span className="btn-name">Strategy Management</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
