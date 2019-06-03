import { combineReducers } from 'redux'
import presidents from './presidentsReducer'

const rootReducer = combineReducers({
  presidents
})

export default rootReducer