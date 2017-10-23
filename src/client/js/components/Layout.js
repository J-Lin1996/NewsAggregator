import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "News_Aggregator",
      sub_title: "News all in one place."
    }
  }

  render () {
    return (
      <div>
        <Header title={ this.state.title }/>
        <Footer />
      </div>
    );
  }
}
