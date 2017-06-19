import React from 'react';

import Jumbotron from './bootstrap/jumbotron';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return (
      <Jumbotron
        className="-fluid text-xs-center"
        style={{
          backgroundImage: 'url(img/forest.jpg)',
          color: 'white'
        }}
        containerFluid={true}
      >
        <h1>Building React user interfces</h1>
        <p>with bootstrap and SASS</p>
        <p>
          <Button
            className="-primary"
            href="http://02geek.com"
            target="_blank"
            disabled
          />
          <Button
            className="-danger-outline -sm"
            disabled
          />
          <Button
            className="-primary-outline -lg -block"
          />
        </p>
      </Jumbotron>
    );
  }
}
