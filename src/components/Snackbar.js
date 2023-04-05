import React from "react";

import { Snackbar as SnackbarMUI, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import { Text } from "../utils/Typography";

function Snackbar({ snackbarOpen, setSnackbarOpen, message, error = false }) {
  // console.log(snackbarOpen);
  const snackbarHandleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
    sessionStorage.removeItem("redirectSnackbar");
  };

  const snackbarAction = (
    <IconButton size="small" aria-label="close" onClick={snackbarHandleClose}>
      <Close fontSize="small" sx={{ color: "text.secondary" }} />
    </IconButton>
  );

  return (
    <SnackbarMUI
      open={snackbarOpen}
      autoHideDuration={2000}
      message={<Text color="secondary">{message}</Text>}
      onClose={snackbarHandleClose}
      action={snackbarAction}
      ContentProps={{
        sx: { backgroundColor: error ? "error.main" : "primary.main" },
      }}
    />
  );
}

export default Snackbar;
