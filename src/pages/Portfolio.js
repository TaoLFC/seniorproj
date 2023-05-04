import React, { useState, useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [tab, setTab] = useState('Portfolio');
  const [portfolioData, setPortfolioData] = useState([]); // Add a state for storing fetched data

  const profitLoss = (purchasePrice, marketPrice) => {
    const profit = ((marketPrice - purchasePrice) / purchasePrice) * 100;
    if (profit >= 0) {
      return <span className="profit">+{profit.toFixed(2)}%</span>;
    } else {
      return <span className="loss">{profit.toFixed(2)}%</span>;
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/portfolio');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  /*const goBack = () => {
    navigate(-1); // Add goBack function to handle back button click
  };*/

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
              {portfolioData.map((item) => ( // Loop through the fetched data
                <tr key={item.stock}>
                  <td>{item.stock}</td>
                  <td>{item.amount}</td>
                  <td>{item.purchased_price}</td>
                  <td>{item.market_price}</td>
                  <td>{profitLoss(item.purchased_price, item.market_price)}</td>
                </tr>
              ))}
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
