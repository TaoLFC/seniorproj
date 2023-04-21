import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './StrategyManagement.css';

const StrategyManagement = () => {
  const [strategy, setStrategy] = useState({
    name: "Engulfing",
    lastSaved: "12/03/2023 18:20",
    lastExecuted: "14/03/2023 16:20",
    isActive: false,
  });

  const fetchStrategy = async () => {
    fetch("http://127.0.0.1:5000/strategy", {
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
    fetch("http://127.0.0.1:5000/strategy", {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{strategy.name}</td>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StrategyManagement;
