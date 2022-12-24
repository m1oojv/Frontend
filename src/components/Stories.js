import React from "react";

import { Box, Grid, Card } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

import ContentWrapper from "./ContentWrapper";
import StoryCard from "./StoryCard";

function Stories(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}></Grid>
      <Grid item xs={7}>
        <h1>Stories</h1>
        <ContentWrapper>
          {props.stories.map((story) => {
            return (
              <div key={story.id}>
                <StoryCard title={story.title} body={story.body} />
              </div>
            );
          })}
        </ContentWrapper>
      </Grid>
    </Grid>
  );
}

export default Stories;
