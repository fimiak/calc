import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className={this.props.className} value={this.props.value}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
