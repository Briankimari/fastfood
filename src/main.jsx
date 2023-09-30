import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import reducers from "./reducers/Auth.jsx"

const store= createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <HashRouter>
      <App/>
  </HashRouter>
</Provider>
)
