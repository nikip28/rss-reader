import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const FeedForm = ({ getFeed }) => {
  const classes = useStyles();
  const [enabled, setEnabled] = useState(true);
  const [feeds, setFeeds] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;

    if (value === "") return setEnabled(true);

    setEnabled(false);
    setFeeds([...feeds, value]);
  };

  return (
    <form className={classes.form} onSubmit={getFeed}>
      <Input
        placeholder="Enter RSS Feed URL"
        type="text"
        name="feedUrl"
        onChange={handleSearchChange}
        className={classes.formInput}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={enabled}
        className={classes.formButton}
      >
        Go
      </Button>
    </form>
  );
};

export default FeedForm;
