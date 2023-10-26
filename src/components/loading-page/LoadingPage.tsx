import React from "react";
import "./LoadingPage.css";
import CircularProgress from "@mui/material/CircularProgress";
export default function LoadingPage() {
  return (
    <div className="loading-page">
      <CircularProgress
        className="spinner"
        data-testid="spinner"
        color="secondary"
      />
    </div>
  );
}
