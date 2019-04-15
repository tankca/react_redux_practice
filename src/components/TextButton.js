import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

class TextButton extends Component {

  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    type: 'button',
    onClick: () => {
      console.log('Button Pressed!');
    },
  }

  render() {
    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        onClick={event => {
          this.props.onClick && this.props.onClick(event)
          this.props.history.push(this.props.to)
        }}
      >
        {this.props.children}
      </button>
    )
  }
}

export default withRouter(TextButton);