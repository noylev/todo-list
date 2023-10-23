import React, { useState } from "react";
import "./LoginPage.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");

  function login(): void {
    navigate("/home");
  }

  return (
    <div className="login-page">
      <div className="section">
        <TextField
          required
          id="standard-required"
          label="User Name"
          variant="standard"
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
              login();
            }
          }}
          variant="standard"
        />
      </div>
      <div className="section">
        <Button onClick={login} disabled={!password}>
          Login
        </Button>
      </div>
    </div>
  );
}
