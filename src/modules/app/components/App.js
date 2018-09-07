import React from "react";

import Router from "./Router";
import FullscreenButton from "./FullscreenButton";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <FullscreenButton />
      </React.Fragment>
    );
  }
}
