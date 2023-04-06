import React, { useState } from 'react';
import '/Users/taopuchong/Desktop/seniorproj/src/Portfolio.css';

function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('portfolio');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const profitLoss = (purchasedPrice, marketPrice) => {
    const pl = ((marketPrice - purchasedPrice) / purchasedPrice) * 100;
    if (pl > 0) {
      return (
        <span className="profit">
          {pl.toFixed(2)}%
        </span>
      );
    }
    return (
      <span className="loss">
        {pl.toFixed(2)}%
      </span>
    );
  };

  const renderPortfolioTable = () => (
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
          <td>{profitLoss(66.50, 70.00)}</td>
        </tr>
      </tbody>
    </table>
  );

  const renderOrdersTable = () => (
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
  );

  return (
    <div className="portfolio-page">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'portfolio' ? 'active' : ''}`}
            onClick={() => handleTabClick('portfolio')}
          >
            Portfolio
          </button>
          <button
            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => handleTabClick('orders')}
          >
            Orders
          </button>
        </div>
      </div>
      <div className="table">
        {activeTab === 'portfolio' && renderPortfolioTable()}
        {activeTab === 'orders' && renderOrdersTable()}
      </div>
    </div>
  );
}

export default PortfolioPage;
