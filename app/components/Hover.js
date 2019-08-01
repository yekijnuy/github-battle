import React from 'react';

export default class Hover extends React.Component {
  state = {
    hovering: false,
  };

  // id will be hoveringLocation or hoveringCompany
  mouseOver = () => {
    this.setState({
      hovering: true,
    });
  };

  // id will be hoveringLocation or hoveringCompany
  mouseOut = () => {
    this.setState({
      hovering: false,
    });
  };

  // biggest question is what is Hover going to render?
  // look at props being passed to Hover.js
  // you can make a 'render' prop or use prop.children
  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {/* what does this function expect to receive?  the hovering state */}
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
