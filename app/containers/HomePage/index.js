/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';

import PinCard from 'components/PinCard';
import messages from './messages';

import { fetchPins, togglePin } from './actions';

import TopBar from '../TopBar';
import DashView from '../DashView';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchPins()
  }

  renderPinList(pins) {
    if (pins.rejected === true) {
      return <h1>Failed!</h1>;
    }

    const { props } = this;
    return pins.data.map((pin) => {
      return (
        <PinCard name={pin.name} power={pin.value} onClick={() => props.togglePin(pin.id)} key={pin.id} />
      );
    });
  }

  render() {
    return (
      <div>
        <TopBar />
        <div className="content">
          <DashView />
          <div className="container">
            <div className="pin-list">
              { this.renderPinList(this.props.pins) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  pins: store.get('pins').toJS(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  fetchPins: () => dispatch(fetchPins()),
  togglePin: (id) => dispatch(togglePin(id)).then(() => dispatch(fetchPins())),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

