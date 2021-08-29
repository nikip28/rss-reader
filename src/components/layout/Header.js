import React from "react";
import useStyles from "./styles";

const MainHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Feeds</h1>
    </header>
  );
};

export default MainHeader;
