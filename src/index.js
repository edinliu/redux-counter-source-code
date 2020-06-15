import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { CounterRedux } from './containers'
import reducer from './reducers'
import ReactDOM from 'react-dom'
import 'bootstrap/scss/bootstrap.scss'
import './index.scss'

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <CounterRedux />
  </Provider>, document.querySelector("#root"))