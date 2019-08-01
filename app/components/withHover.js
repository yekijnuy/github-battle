import React from 'react';

export default function withHover(Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false,
      };

      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
    }

    // id will be hoveringLocation or hoveringCompany
    mouseOver() {
      this.setState({
        hovering: true,
      });
    }

    // id will be hoveringLocation or hoveringCompany
    mouseOut() {
      this.setState({
        hovering: false,
      });
    }

    // remember you need to pass props THROUGH
    render() {
      const { hovering } = this.state;
      const props = {
        ...this.props,
        [propName]: this.state.hovering,
      };

      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
}
