import React from 'react'
import { render } from 'react-dom'
import App from './app'
import AppState from './app-state'

import './index.css'

const target = document.querySelector('#root')

render(
  <AppState>
    <App />
  </AppState>,
  target
)