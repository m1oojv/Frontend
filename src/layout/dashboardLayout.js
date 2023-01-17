import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import {
  Hidden,
  CssBaseline,
  Paper as MuiPaper,
  withWidth,
  Container,
} from "@material-ui/core";

import AppBar from "../components/AppBar";
import NavBar from "../components/NavBar";

const Dashboard = ({ children, routes, width }) => {
  return (
    <div>
      <NavBar />
      <MuiPaper>{children}</MuiPaper>
    </div>
  );
};

export default withWidth()(Dashboard);
