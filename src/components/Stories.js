import React from "react";

import { Box, Grid, Paper } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
        <Grid container spacing={3} justifyContent="center">
          {props.stories.map((story) => {
            return (
              <Grid item xs={12} key={story.id}>
                <BlogCard title={story.title} body={story.body} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

// function Hit(props) {
//   return (
//     <Grid item xs={12} key={props.hit.id}>
//       <BlogCard title={props.hit.title} body={props.hit.body} />
//     </Grid>
//   );
// }

export default Stories;
