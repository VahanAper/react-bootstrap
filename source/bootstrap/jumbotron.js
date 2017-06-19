import React from 'react';

import { classify } from './utils';
import Container from './container';

export default class Jumbotron extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    const containerFluid = props.containerFluid;
    delete props.containerFluid;

    const CSS_NAME = 'jumbotron';
    props.className = classify(CSS_NAME, this.props.className);
    const body = props.className.includes(CSS_NAME+'-fluid')
      ?
        <Container fluid={containerFluid}>
          {this.props.children}
        </Container>
      :
        this.props.children;

    return (
      <div { ...props }>
        {body}
      </div>
    );
  }
}
