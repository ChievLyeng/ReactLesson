import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
// import { Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
  </Provider>,
)
