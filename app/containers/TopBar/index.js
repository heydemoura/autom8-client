/*
 *
 * TopBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTopBar, { connectionSelector } from './selectors';
import { socketConnected, socketDisconnected } from './actions';
import { socketUrl } from 'config';

var socket = io(socketUrl);
window.socket = socket;

export class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderStatusIcon(connection) {
    console.log(connection)
    let classes = 'mdi ';
    if (connection) {
      classes += 'mdi-cast-connected active';
    } else {
      classes += 'mdi-cast-off';
    }

    return <i className={classes} />;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="navbar-left">
          <i className="mdi mdi-menu"></i>
        </div>
        <h3 className="navbar-brand">
          My Bed Room
        </h3>
        <div className="navbar-right">
          {this.renderStatusIcon(this.props.connection)}
        </div>
      </nav>
    );
  }
}

TopBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TopBar: makeSelectTopBar(),
  connection: connectionSelector(),
});

function mapDispatchToProps(dispatch) {
  socket.on('connect', (client) => {
    console.log('Socket conencted')
    dispatch(socketConnected())


    socket.on('disconnect', () => {
      dispatch(socketDisconnected())
    })

    socket.on('pins', (obj) => {
      console.log('Recebido teste', obj)
    })
  })
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
