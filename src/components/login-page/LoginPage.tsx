import React, { useState } from "react";
import "./LoginPage.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getAuthToken } from "../../api";
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function attemptToLogin(): void {
    getAuthToken({ userName, password })
      .then((authToken) => {
        login({ userName, authToken });
        navigate("/home");
      })
      .catch((e) => {
        console.error(e);
        return;
      });
  }

  return (
    <div className="login-page">
      <div className="section">
        <TextField
          required
          id="standard-required"
          label="User Name"
          variant="standard"
          onChange={(event) => {
            setUserName(event.target?.value);
          }}
        />
      </div>
      <div className="section">
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => {
            setPassword(event.target?.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              attemptToLogin();
            }
          }}
          variant="standard"
        />
      </div>
      <div className="section">
        <Button onClick={attemptToLogin} disabled={!password}>
          Login
        </Button>
      </div>
    </div>
  );
}
