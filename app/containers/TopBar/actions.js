/*
 *
 * TopBar actions
 *
 */

import {
  SOCKET_CONNECTED,
  SOCKET_DISCONNECTED,
} from './constants';

export function socketConnected() {
  return {
    type: SOCKET_CONNECTED,
  };
}

export function socketDisconnected() {
  return {
    type: SOCKET_DISCONNECTED,
  };
}
