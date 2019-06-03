const presidents = (state=[], action) => {
  switch (action.type) {
    case 'SET_PRESIDENTS':
      return action.presidents;
    default:
      return state;
  }
}

export default presidents;