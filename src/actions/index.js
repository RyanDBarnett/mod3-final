export const setPresidents = (presidents) => {
  return {
    type: 'SET_PRESIDENTS',
    presidents
  }
}

export const setParty = (party) => {
  return {
    type: 'SET_PARTY',
    party
  }
}

export const isLoading = (boolean) => {
  return {
    type: 'IS_LOADING',
    boolean
  }
}

export const hasErrored = (error) => {
  return {
    type: 'HAS_ERRORED',
    error
  }
}