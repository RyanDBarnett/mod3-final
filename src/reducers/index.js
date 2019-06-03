import { combineReducers } from 'redux';
import presidents from './presidentsReducer';
import isLoading from './isLoadingReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  presidents,
  isLoading,
  error
})

export default rootReducer;