import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import user from './reducers/user'

const store = createStore(
  combineReducers({ user }),
  applyMiddleware(logger, thunk)
)

export default store
