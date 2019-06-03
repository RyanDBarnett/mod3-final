import party from './';

describe('partyReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = party(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the given party passed as argument', () => {
    const expected = 'Democrat';
    const result = party('', {type: 'SET_PARTY', party: 'Democrat'});
    expect(result).toEqual(expected);
  });
});