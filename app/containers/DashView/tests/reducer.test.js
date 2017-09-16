
import { fromJS } from 'immutable';
import dashViewReducer from '../reducer';

describe('dashViewReducer', () => {
  it('returns the initial state', () => {
    expect(dashViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
