/*
 *
 * TopBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTopBar, { connectionSelector } from './selectors';

export class TopBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderStatusIcon(status) {
    let classes = 'mdi ';
    if (status.fulfilled === true) {
      classes += 'mdi-cast-connected active';
    } else if (status.rejected === true) {
      classes += 'mdi-cast-off';
    } else {
      classes += 'mdi-cast-connected active';
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
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
