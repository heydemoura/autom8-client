import axios from 'axios';
import { api } from 'config';

import {
  FETCH_PINS_DATA,
  SET_PINS_DATA,
  TOGGLE_PIN_STATE,
} from './constants';

export function fetchPins() {
  return {
    type: FETCH_PINS_DATA,
    payload: axios(api.fetchPins()),
  };
}

export function setPins(payload) {
  return {
    type: SET_PINS_DATA,
    payload,
  };
}

export function togglePin(id) {
  return {
    type: TOGGLE_PIN_STATE,
    payload: axios(api.togglePin(id)),
  };
}
