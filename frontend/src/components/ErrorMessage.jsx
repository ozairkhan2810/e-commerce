import { Alert } from "@mui/material";
import React from "react";

const ErrorMessage = ({ severity, children }) => {
  return (
    <div>
      <Alert variant="filled" severity={`${severity}`}>
        {children}
      </Alert>
    </div>
  );
};

export default ErrorMessage;
