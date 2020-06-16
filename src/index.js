import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import ReactDOM from 'react-dom'
import 'bootstrap/scss/bootstrap.scss'
import './index.scss'
import BsJumbotron from './components/BsJumbotron'
import CounterRedux from './containers'
import './images/snapshot.png'

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BsJumbotron>  <CounterRedux /></BsJumbotron>
  </Provider>, document.querySelector("#root"))