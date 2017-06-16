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
              className="btn-primary"
              href="http://02geek.com"
              target="_blank"
            />
            <Button
              className="btn-default"
            />
          </p>
        </div>
      </div>
    );
  }
}
