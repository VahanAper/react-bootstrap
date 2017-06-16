import React from 'react';

import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return (
      <div
        className="jumbotron jumbotron-fluid text-xs-center"
        style={{
          backgroundImage: 'url(img/forest.jpg)',
          color: 'white'
        }}
      >
        <div className="container">
          <h1>Building React user interfces</h1>
          <p>with bootstrap and SASS</p>
          <p>
            <Button
              className="-primary"
              href="http://02geek.com"
              target="_blank"
            />
            <Button
              className="-danger-outline -sm"
            />
            <Button
              className="-primary-outline -lg -block"
            />
          </p>
        </div>
      </div>
    );
  }
}
