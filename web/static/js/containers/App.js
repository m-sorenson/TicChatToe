import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavBar from '../components/Nav.js';
import Chat from '../components/Chat.js';
import * as MatchActions from '../actions/matches.js';

export default class AppContents extends Component {
  render() {
    const {store, dispatch} = this.props
    const actions = bindActionCreators(MatchActions, dispatch)
    console.log("state is => " + JSON.stringify(store));

    return (
      <div>
        < NavBar/>
        <div>
          <div className='row'>
            <div className='col-md-offset-1 col-md-7'>
              <div className='jumbotron'>
                <h1>Hello world</h1>
              </div>
            </div>
            <div className='col-md-offset-1 col-md-3'>
              <Chat/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()()
