import { combineReducers } from 'redux';
import presidents from './presidentsReducer/';
import loading from './isLoadingReducer/';
import error from './errorReducer/';
import party from './partyReducer/';

const rootReducer = combineReducers({
  presidents,
  loading,
  error,
  party
})

export default rootReducer;