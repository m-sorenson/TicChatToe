import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>Tic-Chat-Toe</a>
          </div>
        </nav>
    );
  }
}
