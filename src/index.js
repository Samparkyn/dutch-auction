import React from 'react'
import { render } from 'react-dom'
import App from './App'
import AppState from './AppState'

import './index.css'

const target = document.querySelector('#root')

render(
  <AppState>
    <App />
  </AppState>,
  target
)