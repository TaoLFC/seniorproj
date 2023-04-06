import React from 'react';
import '/Users/taopuchong/Desktop/seniorproj/src';
import { Link, useHistory } from "react-router-dom";


function Home() {
    // const navigate = useNavigate();
    const history = useHistory()
    const navigateToCode = () => {
        // 👇️ navigate to /contacts
        // navigate('/CodeEditorPage');
        history.push('/CodeEditorPage')
      };
    const navigateToPort = () => {
        // 👇️ navigate to /contacts
        // navigate('/CodeEditorPage');
        let path = `/portfolio`;
        history.push(path)
      };
    const navigateToStra = () => {
        // 👇️ navigate to /contacts
        // navigate('/CodeEditorPage');
        let path2 = `/strategy-management`;
        history.push(path2)
      };
  return (
    <div className="App">
      <header className="App-header">
        <button className="login-btn" >
          <span className="login-name">Login</span>
        </button>
      </header>
      <div className="content">
        <div className="button-container">
            <button className="btn" onClick={navigateToCode}>
                <img src="Code.png" alt="Code Editor Logo" />
                <span className="btn-name">Code Editor</span>
            </button>
          <button className="btn" onClick={navigateToPort}>
            <img src="Portfolio.png" alt="Portfolio Logo" />
            <span className="btn-name">Portfolio</span>
          </button>
          <button className="btn" onClick={navigateToStra}>
            <img src="Chess.png" alt="Strategy Management Logo" />
            <span className="btn-name">Strategy Management</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
