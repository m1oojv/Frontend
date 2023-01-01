import React from "react";

import { Box, Grid } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BlogCardDemo from "./imported/Card";

import ContentWrapper from "./ContentWrapper";
import BlogCard from "./Card";
import Filter from "./Filter";

function Stories(props) {
  return (
    <Grid
      container
      spacing={10}
      justifyContent="center"
      style={{ paddingTop: "40px" }}
    >
      <Grid item xs={2}>
        <Filter />
      </Grid>
      <Grid item xs={6}>
        <h1>Stories</h1>
        <Grid container spacing={3} justifyContent="center">
          {props.stories.map((story) => {
            return (
              <Grid item xs={12}>
                <Box key={story.id}>
                  <BlogCard title={story.title} body={story.body} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Stories;
