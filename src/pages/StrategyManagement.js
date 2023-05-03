import React, { useState, useEffect } from "react";
import './StrategyManagement.css';
import { Link } from "react-router-dom";


const StrategyManagement = () => {
  const [strategy, setStrategy] = useState({
    name: "Engulfing",
    lastSaved: "12/03/2023 18:20",
    lastExecuted: "14/03/2023 16:20",
    isActive: false,
  });

  const manuallyRun = async () => {
    await fetch("https://seniorproj-back-flask.herokuapp.com/bot_execute")
    console.log("Manually running the strategy...");
    // Add your code to manually run the strategy here
  };

  const fetchStrategy = async () => {
    fetch("https://seniorproj-back-flask.herokuapp.com/strategy", {
      method: "GET"
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStrategy({
          name: data['name'],
          lastSaved: data['last_saved'],
          lastExecuted: data['last_executed'],
          isActive: data['activation']
      })
      console.log("fetch strategy successful", data)
      })
  }

  useEffect(() => {
    fetchStrategy()
  }, [])

  const toggleActivation = () => {
    setStrategy({
      ...strategy,
      isActive: !strategy.isActive,
    });
    fetch("https://seniorproj-back-flask.herokuapp.com/strategy", {
      method: "POST",
    });
  };


  return (
    <div className="container">
      {/* <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button> */}
      <h1 className="title">Strategy Management</h1>
      <table className="strategy-table">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Last Saved</th>
            <th>Last Executed</th>
            <th>Activation</th>
            <th>Manual Run</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/code-editor">{strategy.name}</Link></td>
            <td>{strategy.lastSaved}</td>
            <td>{strategy.lastExecuted}</td>
            <td>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={strategy.isActive}
                  onChange={toggleActivation}
                />
                <span className="slider round"></span>
              </label>
            </td>
            <td>
              <button className="manually-run-btn"onClick={manuallyRun}>
                <img src='run-icon.png' alt="Run" />
                {/* <span className="btn-name"> Manually Run</span> */}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StrategyManagement;
