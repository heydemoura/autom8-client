import { fromJS } from 'immutable';
import {
  FETCH_PINS_DATA,
  TOGGLE_PIN_STATE
} from './constants';

const initialState = fromJS({
  pending: false,
  fulfilled: false,
  rejected: false,
  data: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case `${FETCH_PINS_DATA}_PENDING`:
      return state
        .set('pending', true)
        .set('fulfilled', false)
        .set('rejected', false);

    case `${FETCH_PINS_DATA}_REJECTED`:
      return state
        .set('pending', false)
        .set('fulfilled', false)
        .set('rejected', true);

    case `${FETCH_PINS_DATA}_FULFILLED`:
      return state
        .set('pending', false)
        .set('fulfilled', true)
        .set('rejected', false)
        .set('data', action.payload.data);

    case `${TOGGLE_PIN_STATE}_PENDING`:
      return state;

    case `${TOGGLE_PIN_STATE}_REJECTED`:
      return state;

    case `${TOGGLE_PIN_STATE}_FULLFILED`:
      return state;

    default:
      return state;
  }
}
