//credits to siriwatknp's styles on the card

import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Typography,
  Avatar,
  Grid,
  CardActionArea,
  TextField,
  FormControlLabel,
  Checkbox,
  Chip,
} from "@material-ui/core";
import ContentWrapper from "./ContentWrapper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ScoreChipBlack = styled(Chip)`
  height: 24px;
  padding: 4px 0;
  font-size: 85%;
  background-color: #e0e0e0;
  color: #1d1d1d;
`;

function Filter() {
  return (
    <ContentWrapper>
      <Grid container justifyContent="center" alignItems="center">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* <SearchBox /> */}
        <Grid item xs={12} align="left">
          <Typography
            component="div"
            variant="body1"
            style={{ fontWeight: "900" }}
          >
            Filter
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="statusOpen"
                // checked={statusOpen}
                // onChange={handleTicketInfoFilterChange}
              />
            }
            label="Open"
          />
        </Grid>
        <Grid item xs={8} align="right">
          <ScoreChipBlack label="4" />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="statusOpen"
                // checked={statusOpen}
                // onChange={handleTicketInfoFilterChange}
              />
            }
            label="Open"
          />
        </Grid>
        <Grid item xs={8} align="right">
          <ScoreChipBlack label="4" />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="statusOpen"
                // checked={statusOpen}
                // onChange={handleTicketInfoFilterChange}
              />
            }
            label="Open"
          />
        </Grid>
        <Grid item xs={8} align="right">
          <ScoreChipBlack label="4" />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
}

export default Filter;
