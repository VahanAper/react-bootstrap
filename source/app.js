import React from 'react';

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
            <a className="btn btn-primary" href="http://02geek.com" target="_blank">Discover.</a>
            </p>
        </div>
      </div>
    );
  }
}
