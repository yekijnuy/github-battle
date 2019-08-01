import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default class Loading extends React.Component {
  // note that you can initially set state
  state = {
    content: this.props.text,
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 300,
  };

  // when you set interval it returns an object
  componentDidMount() {
    // let users have the ability to custom, USE PROPS!
    const { speed, text } = this.props;
    // set instance properties to access them in other places
    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }));
    }, speed);
  }

  // accessing the interval from componentdidmount LC
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}
