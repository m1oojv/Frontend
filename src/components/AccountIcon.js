import React, { useState } from "react";

import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useAuth } from "./GAuth.jsx";
import { Text } from "../utils/Typography.jsx";
import Snackbar from "./Snackbar.jsx";

function AccountIcon() {
  const { userInfo, loggedIn, login, logout, snackbars } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    {
      text: "Orders",
      link: "/orders",
    },
  ];

  if (loggedIn) {
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Snackbar
          snackbarOpen={snackbars.showLoginSnackbar}
          setSnackbarOpen={snackbars.setShowLoginSnackbar}
          message={`Logged in as ${userInfo}`}
        />
        <div>
          <IconButton
            id="basic-button"
            variant="outlined"
            color="secondary"
            onClick={handleClick}
            sx={{
              mr: "1em",
            }}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuItems.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <Text>{item.text}</Text>
                </MenuItem>
              );
            })}
            <MenuItem
              onClick={() => {
                logout(true);
                handleClose();
              }}
            >
              <Text>Logout</Text>
            </MenuItem>
          </Menu>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Snackbar
          snackbarOpen={snackbars.showLogoutSnackbar}
          setSnackbarOpen={snackbars.setShowLogoutSnackbar}
          message="Logged out"
        />
        <Button
          onClick={login}
          variant="outlined"
          color="secondary"
          sx={{
            mr: "1.5em",
            borderWidth: "2px",
            "&:hover": {
              borderWidth: "2px",
              backgroundColor: "secondary.main",
              color: "secondary.contrastText",
            },
          }}
        >
          <Text color="inherit">Login</Text>
        </Button>
      </>
    );
  }
}

export default AccountIcon;
