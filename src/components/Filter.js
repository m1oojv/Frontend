//credits to siriwatknp's styles on the card

import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Typography, Avatar, Grid, CardActionArea } from "@material-ui/core";
import ContentWrapper from "./ContentWrapper";
import { red } from "@mui/material/colors";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Filter() {
  return (
    <ContentWrapper>
      <h1>SUMMARY</h1>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <h5>STATUSES</h5>
        </Grid>
        <Grid item xs={8} align="right">
          <h5>4</h5>
        </Grid>
        <Grid item xs={4}>
          <h5>STATUSES</h5>
        </Grid>
        <Grid item xs={8} align="right">
          <h5>4</h5>
        </Grid>
        <Grid item xs={4}>
          <h5>STATUSES</h5>
        </Grid>
        <Grid item xs={8} align="right">
          <h5>4</h5>
        </Grid>
        <Grid item xs={4}>
          <h5>STATUSES</h5>
        </Grid>
        <Grid item xs={8} align="right">
          <h5>4</h5>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

export default Filter;
