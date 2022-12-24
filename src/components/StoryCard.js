import React from "react";

import { Box, Grid, Card, TextField } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";

import ContentWrapper from "./ContentWrapper";

function StoryCard(props) {
  return (
    <Grid
      style={{
        marginBottom: "15px",
      }}
    >
      <Card raised>
        <Grid container alignItems="center">
          <Grid item xs={3} align="center">
            <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
              <AssignmentIcon />
            </Avatar>
          </Grid>
          <Grid item xs={9} align="left">
            {/* <h3>{props.title}</h3>
            <h5>{props.body}</h5> */}
            <Grid item xs={11}>
              <TextField
                disabled
                fullWidth
                inputProps={{
                  style: {
                    color: "#000",
                  },
                }}
                value="iOS badge counter shows unread messages, even when all chats are
              read"
              ></TextField>
            </Grid>
            <Grid item xs={11}>
              <TextField
                disabled
                fullWidth
                multiline
                minRows={2}
                maxRows={3}
                inputProps={{
                  style: {
                    color: "#000",
                  },
                }}
                value="All users are welcome to create new entries, view existing entries
              and vote on them. What is this for? This platform is a place where
              users can vote for feature suggestions for Telegram or report
              issues with our apps. You are welcome to check out the existing
              suggestions and bugs, vote, or add your comments. How can I report
              a bug or suggest a feature? Use the text field at the top of your
              screen – try to search first. Likely, the team or another user has
              already added the stuff you were going to report. If nothing is
              found among the existing cards, use the buttons 'REPORT A PROBLEM'
              – to submit an issue or 'SUGGEST A FEATURE' – to share your idea.
              Our friendly bot will help you with the rest. ⚠️ Attention: After
              you create a card, it will become public, never share any private
              data (phone numbers or other personal details), and make sure to
              edit the media you are going to attach with your report or
              suggestion. Everyone can see it. What should I do if I have
              something to add to an already existing card? Use the 'Add info
              about this suggestion/issue' below the relevant card to add a
              comment. Please don't suggest new features and don't report new
              bugs in the comments."
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default StoryCard;
