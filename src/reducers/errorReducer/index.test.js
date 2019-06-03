import error from './';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = error(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error message if error passed as argument', () => {
    const expected = 'Error message';
    const result = error('', {type: 'HAS_ERRORED', error: 'Error message'});
    expect(result).toEqual(expected);
  });
});