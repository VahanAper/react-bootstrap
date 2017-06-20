import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Jumbotron from './bootstrap/jumbotron';
import Button from './bootstrap/button';
import './appsource.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0,
      labels: [],
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    let labels = this.state.labels.concat([this.state.click]);
    this.setState({
      labels,
      click: ++this.state.click
    });
  }

  render() {
    let buttons = this.state.labels.map((value, index) => {
      console.log('value', value);
      return (
        <Button
          className="-primary"
          key={value}>
          {value}
        </Button>
      );
    });

    return (
      <ReactCSSTransitionGroup
        transitionName="app"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
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
          </p>
          <Button
            className="-primary-outline -lg -block"
            onClick={this.onClick}
            >
            {this.state.click}
          </Button>
          <ReactCSSTransitionGroup
            transitionName="app"
            transitionEnterTimeout={5000}
            transitionLeaveTimeout={500}
          >
            {buttons}
          </ReactCSSTransitionGroup>
        </Jumbotron>
      </ReactCSSTransitionGroup>
    );
  }
}
