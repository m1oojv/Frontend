//credits to siriwatknp's styles on the card

import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
// import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography, Avatar, Grid, CardActionArea } from "@material-ui/core";
import { red } from "@mui/material/colors";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    marginLeft: "auto",
    overflow: "initial",
    background: "#ffffff",
    alignItems: "center",
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "19%",
    borderRadius: spacing(2),
    backgroundColor: "#fff",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "30%",
      marginLeft: spacing(3),
      marginTop: spacing(-2),
      transform: "translateX(-8px)",
    },
    "&:hover": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
  avatar: {
    backgroundColor: red[500],
    height: 45,
    width: 45,
  },
  title: {
    color: "#ffb09f",
    fontWeight: "bold",
    align: "left",
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  // const { button: buttonStyles, ...contentStyles } =
  //   useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <CardActionArea className={cx(styles.root, shadowStyles.root)}>
      <Grid container spacing={1}>
        <Grid item xs={2} align="center">
          <Avatar className={styles.avatar}>R</Avatar>
        </Grid>
        <Grid item xs={8} align="left">
          <Typography component="div" variant="body1">
            Megan Loo
          </Typography>
          <Typography variant="body2" component="div">
            September 14, 2016
          </Typography>
        </Grid>
        <Grid item xs={2} style={{ paddingTop: "15px" }}>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={1}>
              <FavoriteBorderIcon />
            </Grid>
            <Grid item xs={6} style={{ paddingBottom: "9px" }}>
              <Typography component="div" variant="subtitle1">
                15
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CardContent className={styles.content}>
        <Grid item align="left">
          <Typography component="div" variant="h6" className={styles.title}>
            What is Git ?
          </Typography>
          <Typography variant="body2" component="div">
            A paragraph is a series of sentences that are organized and
            coherent, and are all related to a single topic.This is because
            paragraphs show a reader where the subdivisions of an essay begin
            and end, and thus help the reader see the organization of the essay
            and grasp its main points. Git is a distributed version control
            system. Every dev has a working copy of the code and...
          </Typography>
        </Grid>
        {/* <CardMedia
          className={styles.media}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png"
          }
        />
        <TextInfoContent
          classes={contentStyles}
          // overline={"28 MAR 2019"}
          body={
            "Git is a distributed version control system. Git is a distributed version control system. Git is a distributed version control system. Git is a distributed version control system. Every dev has a working copy of the code and..."
          }
        />
        <Button className={buttonStyles}>Read more</Button> */}
      </CardContent>
    </CardActionArea>
  );
});

export default BlogCardDemo;
