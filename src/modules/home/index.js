import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Parser from "rss-parser";
import FeedList from "./FeedList";
import FeedForm from "./FeedForm";
import Spinner from "../../components/spinner";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const parser = new Parser();

const Home = ({ fetching }) => {
  const [feedData, setFeedData] = useState({});
  const [onLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFeed = async (event) => {
    event.preventDefault();
    setLoading((prev) => !prev);
    setFeedData({})

    const feedUrl = event.target.elements?.feedUrl?.value;
    if (feedUrl) {
      try {
        const feed = await parser.parseURL(CORS_PROXY + feedUrl);
        console.log("feed", feed);
        setFeedData({
          feedItems: feed.items,
          title: feed.title,
          image: feed.image.url,
          description: feed.description,
        });
        setLoading((prev) => !prev);
        return setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        return error;
      }
    } else {
      return;
    }
  };

  const handleClose = () => {
    setLoading(false);
    setError(false);
  };

  const addRemoveBookmark = (event, index) => {
    event.preventDefault();
    const feedItems = feedData.feedItems;
    feedItems[index]["hasBookmark"] = !feedItems[index]["hasBookmark"]
    setFeedData({
      ...feedData,
      feedItems
    });
  }

  const renderAlert = () => (
    <Dialog
      open={error}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Error!!!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Got an Error while parsing the Feed. Please try again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <FeedForm
        getFeed={getFeed}
        onClick={() => setLoading(true)}
      />
      {error ? renderAlert() : <div />}
      {onLoading && <Spinner />}

      <FeedList
        fetching={fetching}
        addRemoveBookmark={addRemoveBookmark}
        {...feedData}
      />
    </>
  );
};

export default Home;
