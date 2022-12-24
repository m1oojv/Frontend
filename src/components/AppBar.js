import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import {
  Avatar,
  AppBar as MuiAppBar,
  Badge,
  Grid,
  ListItem,
  Toolbar,
  Tooltip,
  TextField,
} from "@material-ui/core";

import Image from "./PLBlackLogo.png";
import AvatarImage from "./avatar-blank.jpg";

const Brand = styled(ListItem)`
  min-height: 56px;
  max-height: 56px;
  justify-content: left;
  cursor: pointer;
  width: 200px;

  &:hover {
    background-color: white;
  }
`;

const FooterBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)}px;

  span {
    background-color: ${(props) =>
      props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

const AppBar = (props) => {
  return (
    <MuiAppBar position="fixed" style={{ background: "#ffffff" }}>
      <Toolbar>
        <Brand to="/home" button disableGutters={true}>
          <Tooltip title={"Logo"}>
            <img src={Image} alt="logo" style={{ width: "90%" }} />
          </Tooltip>
        </Brand>

        <Grid style={{ flexGrow: 1, textAlign: "center" }}></Grid>

        <Badge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            alt="Avatar"
            src={AvatarImage}
            style={{ height: "35px", width: "35px" }}
          />
        </Badge>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
