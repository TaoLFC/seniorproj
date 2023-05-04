import React, { useState, useEffect, useRef } from "react";
import './Backendlog.css';

const BackendLogPage = () => {

  const [logs, setLogs] = useState('');
  const [hasFetchedLogs, setHasFetchedLogs] = useState(false); // Add a new state variable to track if logs have been fetched
  const textareaRef = useRef(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('https://seniorproj-back-flask.herokuapp.com/logs');
        if (!response.ok) {
          throw new Error('Error fetching logs');
        }
        const logsData = await response.text();
        setLogs(formatLogs(logsData));
        if (!hasFetchedLogs) { // Only scroll to bottom if logs have not been fetched before
          scrollToBottom();
          setHasFetchedLogs(true); // Mark logs as fetched
        }
      } catch (error) {
        setLogs('Error fetching logs.');
      }
    };

    fetchLogs();

    const intervalId = setInterval(fetchLogs, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [hasFetchedLogs]); // Add hasFetchedLogs to the dependency array

  const formatLogs = (logsText) => {
    return logsText
      .split('<br>')
      .map((entry) => entry.trim())
      .filter((entry) => entry !== "")
      .join("\n");
  };

  const scrollToBottom = () => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  };

  return (
    <div className="BackendLogPage">
      <textarea
        ref={textareaRef}
        readOnly
        value={logs}
        style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}
      />
    </div>
  );
}

export default BackendLogPage;
