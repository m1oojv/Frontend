import React from "react";

import { Box, Grid, Card } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BlogCardDemo from "./imported/Card";

import ContentWrapper from "./ContentWrapper";
import StoryCard from "./StoryCard";

function Stories(props) {
  return (
    <div>
      {/* <Grid container spacing={4}>
        <Grid item xs={4}></Grid>
        <Grid item xs={7}> */}
      <h1>Stories</h1>
      <ContentWrapper>
        <Grid container spacing={10} justifyContent="center">
          {props.stories.map((story) => {
            return (
              <Grid item sx={6}>
                <div key={story.id}>
                  {/* <StoryCard title={story.title} body={story.body} /> */}
                  <BlogCardDemo />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </ContentWrapper>
      {/* </Grid>
      </Grid> */}
    </div>
  );
}

export default Stories;
