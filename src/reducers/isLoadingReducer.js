const isLoading = (state=false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.boolean;
    default:
      return state;
  }
}

export default isLoading;