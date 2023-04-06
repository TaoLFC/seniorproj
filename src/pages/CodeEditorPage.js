import React, { useState } from "react";
import '/Users/taopuchong/Desktop/seniorproj/src/App.css';
import { FaFolder, FaSearch, FaCog, FaFileCode } from "react-icons/fa";

const CodeEditorPage = () => {
  const [isFileExplorerSelected, setIsFileExplorerSelected] = useState(false);
  const [isSearchSelected, setIsSearchSelected] = useState(false);
  const [isExtensionSelected, setIsExtensionSelected] = useState(false);
  const [isSettingsSelected, setIsSettingsSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFileExplorerClick = () => {
    setIsFileExplorerSelected(true);
    setIsSearchSelected(false);
    setIsExtensionSelected(false);
    setIsSettingsSelected(false);
  };

  const handleSearchClick = () => {
    setIsFileExplorerSelected(false);
    setIsSearchSelected(true);
    setIsExtensionSelected(false);
    setIsSettingsSelected(false);
  };

  const handleExtensionClick = () => {
    setIsFileExplorerSelected(false);
    setIsSearchSelected(false);
    setIsExtensionSelected(true);
    setIsSettingsSelected(false);
  };

  const handleSettingsClick = () => {
    setIsFileExplorerSelected(false);
    setIsSearchSelected(false);
    setIsExtensionSelected(false);
    setIsSettingsSelected(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <div
        className={`tab ${isFileExplorerSelected ? "selected" : ""}`}
        onClick={handleFileExplorerClick}
      >
        <FaFolder size={30} />
        {/* <span>Explorer</span> */}
        {/* <span className="file-name">filename.js</span> */}
      </div>
      <div
        className={`tab ${isSearchSelected ? "selected" : ""}`}
        onClick={handleSearchClick}
      >
        <FaSearch size={30} />
        {/* <span>Search</span> */}
      </div>
      <div
        className={`tab ${isExtensionSelected ? "selected" : ""}`}
        onClick={handleExtensionClick}
      >
        <FaFileCode size={30} />
        {/* <span>Extensions</span> */}
      </div>
      <div
        className={`tab ${isSettingsSelected ? "selected" : ""}`}
        onClick={handleSettingsClick}
      >
        <FaCog size={30} />
        {/* <span>Settings</span> */}
      </div>
      <div className="editor-container">
        <div className="line-numbers-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="line-number">
              {index + 1}
            </div>
          ))}
        </div>
        {/* <div className="code-editor-zone">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="line">
              {index + 1}
              {` const hello = "world";`}
            </div>
          ))}
        </div> */}
      </div>
      {isSearchSelected && (
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button>Find</button>
        </div>
      )}
      {isExtensionSelected && (
        <div className="extension-container">
        <h2>Available Extensions:</h2>
        <ul>
          <li>Extension 1</li>
          <li>Extension 2</li>
          <li>Extension 3</li>
        </ul>
        </div>
      )}
    </div>
    );
}
export default CodeEditorPage;
