import React from "react";
import Header from "./Header";
import useStyles from "./styles";

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Header>Header</Header>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default MainLayout;