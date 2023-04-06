import React, { useState } from 'react';
import '/Users/taopuchong/Desktop/seniorproj/src/StrategyManagement.css';

const StrategyManagementPage = () => {
  const [strategies, setStrategies] = useState([
    {
      name: 'Engulfing',
      lastSaved: '12/03/2023 18:20',
      lastExecuted: '14/03/2023 16:20',
      active: false,
    },
  ]);

  const toggleActive = (index) => {
    const updatedStrategies = [...strategies];
    updatedStrategies[index].active = !updatedStrategies[index].active;
    setStrategies(updatedStrategies);
  };

  return (
    <div className="strategy-management-page">
      <div className="tab">Strategy Management</div>
      <table className="table">
        <thead>
          <tr>
            <th>Strategy</th>
            <th>Last Saved</th>
            <th>Last Executed</th>
            <th>Activation</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy, index) => (
            <tr key={index}>
              <td>{strategy.name}</td>
              <td>{strategy.lastSaved}</td>
              <td>{strategy.lastExecuted}</td>
              <td>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    className="toggle-switch-checkbox"
                    id={`toggleSwitch${index}`}
                    checked={strategy.active}
                    onChange={() => toggleActive(index)}
                  />
                  <label
                    className="toggle-switch-label"
                    htmlFor={`toggleSwitch${index}`}
                  >
                    <span className="toggle-switch-inner" />
                    <span className="toggle-switch-switch" />
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="back-button">Back</div>
    </div>
  );
};

export default StrategyManagementPage;
