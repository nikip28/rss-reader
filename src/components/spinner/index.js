import React from 'react';
import { CircularProgress } from '@material-ui/core';

const Spinner = (props) => {
    return (
      <div
        style={{
          marginTop: '50px',
          ...props.wrapperStyle
        }}
      >
        <CircularProgress color="secondary" {...props.spinner} />
        {props.children}
      </div>
    );
  }

export default Spinner;