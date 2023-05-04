import React, { useState, useEffect } from "react";
import './Backendlog.css';

const BackendLogPage = () => {

  const [logs, setLogs] = useState('');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('https://seniorproj-back-flask.herokuapp.com/logs');
        if (!response.ok) {
          throw new Error('Error fetching logs');
        }
        const logsData = await response.text();
        setLogs(formatLogs(logsData));
      } catch (error) {
        setLogs('Error fetching logs.');
      }
    };

    fetchLogs();

    const intervalId = setInterval(fetchLogs, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatLogs = (logsText) => {
    return logsText
      .split('<br>')
      .map((entry) => entry.trim())
      .filter((entry) => entry !== "")
      .join("\n");
  };

  return (
    <div className="BackendLogPage">
      <textarea
        readOnly
        value={logs}
        style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}
      />
    </div>
  );
}

export default BackendLogPage;
