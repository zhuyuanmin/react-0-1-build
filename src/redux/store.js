import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import counter from './reducers/counter'

const store = createStore(
  combineReducers({
    counter,
  }),
  applyMiddleware(thunkMiddleware)
)

export default store
