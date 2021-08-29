import React from "react";
import { Tooltip, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import useStyles from "./styles";

const FeedList = (props) => {
  const classes = useStyles();
  const {
    feedItems,
    addRemoveBookmark
  } = props;

  return (
    <>
      {feedItems?.map((item, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className={classes.feedInfo}>
                <div className={classes.publish} >
                  <div>Published By: {item.creator}</div>
                  <div>Date: {item.pubDate}</div>
                </div>
                <Tooltip
                  title={item.hasBookmark ? "Remove Bookmark" : "Add Bookmark"}
                  className={classes.bookmarkIcon}
                >
                  <BookmarkIcon
                    className={item.hasBookmark ? classes.bookmarked : classes.noBookmark}
                    onClick={(event) => addRemoveBookmark(event, i)}
                  />
                </Tooltip>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item["content:encoded"],
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

export default FeedList;
