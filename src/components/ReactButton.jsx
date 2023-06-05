import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

export const ReactButton = () => {
  return (
    <Fragment>
      <div>this is html button </div>
      <button>Click Me</button>

      <div>this is react bootstrap button</div>
      <Button> click me 2</Button>
    </Fragment>
  );
};
