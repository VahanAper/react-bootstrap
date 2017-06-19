import React from 'react';

export default class Button extends React.Component {
  classify(key, value) {
    if (value[0] === '-') {
      value = key + value;
    }

    return key + " " + value.split(' -').join(' ' + key + '-');
  }

  render() {
    const Tag = this.props.href ? 'a' : 'button';
    const className = this.classify('btn', this.props.className)
      + (this.props.disabled ? 'disabled' : '');

    return (
      <Tag
        {...this.props}
        className={className}
      >
        Discover
      </Tag>
    );
  }
}
