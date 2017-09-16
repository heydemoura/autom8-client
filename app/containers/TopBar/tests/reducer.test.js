
import { fromJS } from 'immutable';
import topBarReducer from '../reducer';

describe('topBarReducer', () => {
  it('returns the initial state', () => {
    expect(topBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
