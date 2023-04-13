// Portfolio.js (updates)

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './Portfolio.css';

const Portfolio = () => {
  const [tab, setTab] = useState('Portfolio');
  const history = useHistory(); // Add useHistory hook

  const profitLoss = (purchasePrice, marketPrice) => {
    const profit = ((marketPrice - purchasePrice) / purchasePrice) * 100;
    if (profit >= 0) {
      return <span className="profit">+{profit.toFixed(2)}%</span>;
    } else {
      return <span className="loss">{profit.toFixed(2)}%</span>;
    }
  };

  const goBack = () => {
    history.goBack(); // Add goBack function to handle back button click
  };

  return (
    <div className="container">
      <div >
        {/* <button className="back-button" onClick={goBack}>
          &larr; Back
        </button> */}
        <div className="tabs">
          <h2 className={`tab ${tab === 'Portfolio' ? 'active' : ''}`} onClick={() => setTab('Portfolio')}>
            Portfolio  |
          </h2>
          <h2 className={`tab ${tab === 'Orders' ? 'active' : ''}`} onClick={() => setTab('Orders')}>
            | Orders
          </h2>
        </div>
      </div>

      <div className="table-wrapper">
        {tab === 'Portfolio' ? (
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Amount</th>
                <th>Purchased Price</th>
                <th>Market Price</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AOT</td>
                <td>100</td>
                <td>66.50</td>
                <td>70.00</td>
                <td>{profitLoss(66.5, 70)}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Amount</th>
                <th>Ordered Price</th>
                <th>Strategy</th>
                <th>Executed Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AOT</td>
                <td>100</td>
                <td>66.50</td>
                <td>Engulfing</td>
                <td>14/03/2023 16:20</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
