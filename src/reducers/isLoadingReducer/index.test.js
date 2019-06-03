import loading from './';

describe('isLoadingReducer', () => {
  it('should return the initial state', () => {
    const expected = false;
    const result = loading(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the boolean that is passed as an argument', () => {
    let initialState = false;
    let result = loading(initialState, {type: 'IS_LOADING', boolean: true});
    expect(result).toEqual(true);
  });
});