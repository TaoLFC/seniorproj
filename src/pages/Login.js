import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, redirect to home page
        history.push("/");
      } else {
        // Login failed, show error message
        setErrorMessage("Incorrect username or password");
      }
    } catch (error) {
      // Network or server error, show error message
      setErrorMessage("Error: Could not log in. Please try again later.");
    }
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <div className="register-link">
          Not having an account yet?{" "}
          <button type="button" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
