import { combineReducers } from 'redux'
import applicationInfo  from './application-reducer'

export default combineReducers({
  applicationInfo: applicationInfo,
})