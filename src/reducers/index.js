import { combineReducers } from 'redux';
import presidents from './presidentsReducer';
import loading from './isLoadingReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  presidents,
  loading,
  error
})

export default rootReducer;