import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function CodeEditorPage() {
  const [code, setCode] = useState("");
  const [folder, setFolder] = useState(null);

  function handleCodeChange(event) {
    setCode(event.target.value);
  }

  function handleFolderOpen() {
    // code to open the folder explorer
  }

  return (
    <div className="code-editor-page">
        <Link to="/" >
                <button className="btn">
                    <img src="Code.png" alt="Code Editor Logo" />
                    <span className="btn-name">Back</span>
                </button>
            </Link>
      <div className="folder-explorer">
        <button className="folder-open-button" onClick={handleFolderOpen}>
          <FaFolderOpen />
        </button>
        {folder ? (
          <ul className="folder-list">
            {/* code to display the folder contents */}
          </ul>
        ) : (
          <p className="no-folder-selected">No folder selected</p>
        )}
      </div>
      <div className="text-editor">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-input"
        />
        <div className="code-output">
          {/* code to display the output of the code */}
        </div>
      </div>
    </div>
  );
}

export default CodeEditorPage;
