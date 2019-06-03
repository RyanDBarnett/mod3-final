const party = (state='', action) => {
  switch (action.type) {
    case 'SET_PARTY':
      return action.party;
    default:
      return state;
  }
}

export default party;