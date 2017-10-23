import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Title title={ this.props.title }/>
      </div>
    );
  }
}
