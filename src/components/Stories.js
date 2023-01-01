import React from "react";

import { Box, Grid } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BlogCardDemo from "./imported/Card";

import ContentWrapper from "./ContentWrapper";
import BlogCard from "./Card";

function Stories(props) {
  return (
    <div>
      {/* <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={7}> */}
      <h1>Stories</h1>
      {/* <ContentWrapper> */}

      {props.stories.map((story) => {
        return (
          <Grid container spacing={6} justifyContent="center" key={story.id}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box>
                <BlogCard title={story.title} body={story.body} />
              </Box>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        );
      })}

      {/* </ContentWrapper> */}
      {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default Stories;
