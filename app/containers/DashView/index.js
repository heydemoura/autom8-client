/*
 *
 * DashView
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDashView from './selectors';

export class DashView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="dash">
        <ul className="sensors-list">
          <li className="sensors-list-item">
            <i className="mdi mdi-lock-open"></i>
            &nbsp; Room Door
          </li>
          <li className="sensors-list-item active">
            <i className="mdi mdi-lock-open"></i>
            &nbsp; Secret Drawer
          </li>
        </ul>
      </div>
    );
  }
}

DashView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DashView: makeSelectDashView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashView);
