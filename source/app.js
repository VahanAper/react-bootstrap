import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Jumbotron from './bootstrap/jumbotron';
import Button from './bootstrap/button';
import './appsource.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="app"
        transitionAppear={true}
        transitionAppearTimout={500}
      >
        <Jumbotron
          className="-fluid custom"
          containerFluid={true}
        >
          <h1>Building React user interfces</h1>
          <p>with bootstrap and SASS</p>
          <p>
            <Button
              className="-primary"
              href="http://02geek.com"
              target="_blank"
              label="ADD"
            />
            <Button
              className="-danger-outline -sm"
              label="EDIT"
            />
            <Button
              className="-primary-outline -lg -block"
              onClick={this.onClick}
            >
              DELETE as children
            </Button>
          </p>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    );
  }
}
