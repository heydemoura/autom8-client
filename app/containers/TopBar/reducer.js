/*
 *
 * TopBar reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
} from './constants';

const initialState = fromJS({
  connected: false,
});

function topBarReducer(state = initialState, action) {
  switch (action.type) {
    case SOCKET_CONNECTED:
      return state.set('connected', fromJS(true));
    case SOCKET_DISCONNECTED:
      return state.set('connected', fromJS(false));
    default:
      return state;
  }
}

export default topBarReducer;
