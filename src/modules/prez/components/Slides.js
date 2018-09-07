import React from "react";
import { SlideDeck } from "mdx-deck";

import slides from "deck/index.mdx";
import theme from "deck/theme";

export default class Slides extends React.Component {
  deckRef = React.createRef();

  constructor(...args) {
    super(...args);

    const orig = window.history.pushState;
    const callback = (...args) => this.handleHashChange(...args);
    this.orig = orig;

    window.history.pushState = function() {
      const ret = orig.apply(this, arguments);
      callback();
      return ret;
    };
  }

  componentWillUnmount() {
    window.history.pushState = this.orig;
  }

  handleHashChange = () => {
    const { hash } = window.location;
    const [index_, step_] = hash.replace(/^#/, "").split(".");
    const index = parseInt(index_, 10);
    const step = parseInt(step_, 10);
    if (isNaN(index)) return;

    const { onSlideChange = () => {} } = this.props;
    onSlideChange(index, step);
  };

  updateSlidesIndex(index, step) {
    this.deckRef.current.setState({ index, step });
  }

  render() {
    return (
      <SlideDeck
        ref={this.deckRef}
        slides={slides}
        theme={theme}
        width="100vw"
        height="100vh"
      />
    );
  }
}
