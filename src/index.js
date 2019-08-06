import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

// TODO: Create store
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

serviceWorker.unregister();
