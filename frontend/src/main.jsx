import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Web3Provider } from './Web3Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Web3Provider>
    <App />
  </Web3Provider>,
)
