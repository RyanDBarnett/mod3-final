import * as actions from './';

describe('actions', () => {
  it('should have a type of SET_PRESIDENTS', () => {
    const presidents = [{'president': 'Bill Clinton'}, {'president': 'Dwight D. Eisenhower'}];
    const expectedAction = {
      type: 'SET_PRESIDENTS',
      presidents
    }
    const result = actions.setPresidents(presidents);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const isLoading = true;
    const expectedAction = {
      type: 'IS_LOADING',
      boolean: isLoading
    }
    const result = actions.isLoading(isLoading)
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of HAS_ERRORED', () => {
    const error = 'error message';
    const expectedAction = {
      type: 'HAS_ERRORED',
      error
    }
    const result = actions.hasErrored(error)
    expect(result).toEqual(expectedAction)
  });

});