import React from "react";
import "./LoadingPage.css";
import CircularProgress from "@mui/material/CircularProgress";
export function LoadingPage() {
  return (
    <div className="loading-page">
      <CircularProgress className="spinner" color="secondary" />
    </div>
  );
}
