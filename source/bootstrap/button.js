import React from 'react';

export default class Button extends React.Component {
  render() {
    const Tag = this.props.href ? 'a' : 'button';

    return (
      <Tag
        {...this.props}
      >
        Discover
      </Tag>
    );
  }
}
