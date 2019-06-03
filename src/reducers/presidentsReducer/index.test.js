import presidents from './';

describe('presidentsReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = presidents(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an array of presidents', () => {
    const initialState = [];
    const expected = [{president: 'Donald Duck'}]
    let result = presidents(initialState, {type: 'SET_PRESIDENTS', presidents: expected});
    expect(result).toEqual(expected);
  });
});