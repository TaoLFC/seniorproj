import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToCode = () => {
    navigate('/code-editor');
  };

  const navigateToPort = () => {
    navigate('/portfolio');
  };

  const navigateToStra = () => {
    navigate('/strategy-management');
  };
    /*const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        // navigate('/CodeEditorPage');
        let path3 = `/login`;
        history.push(path3)
      };*/
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <button className="login-btn" onClick={navigateToLogin} >
          <span className="login-name">Login</span>
        </button>
        */}
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
