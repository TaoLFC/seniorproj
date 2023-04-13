import React, { useState } from "react";
import "./CodeEditorPage.css";

function CodeEditorPage() {
  const [theme, setTheme] = useState("dark");
  const [code, setCode] = useState("// Type your code here...");

  const handleSaveCode = async () => {
    try {
      const response = await fetch("https://your-api-url.com/save-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
  
      if (!response.ok) {
        throw new Error("Error saving code");
      }
  
      const result = await response.json();
      console.log("Code saved successfully", result);
      // Redirect to the new page or perform other actions
    } catch (error) {
      console.error("Error saving code:", error.message);
    }
  };
  

  return (
    <div className={`CodeEditorPage ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <div className="settings">
        <label>
          Theme:
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Pink</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div className="code-editor">
        <div className="toolbar">
          <button onClick={handleSaveCode}>
            <img src='save-icon.png' alt="Save" />
            <span className="btn-name"> Save</span>
          </button>
        </div>
        <textarea
          className="code-textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default CodeEditorPage;
