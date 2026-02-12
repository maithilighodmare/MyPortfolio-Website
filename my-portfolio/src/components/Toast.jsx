import React from "react";
import "../styles/Toast.css";

const Toast = ({ message, type = "success", onClose }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      <button type="button" onClick={onClose} aria-label="Close notification">
        x
      </button>
    </div>
  );
};

export default Toast;
