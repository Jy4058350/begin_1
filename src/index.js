import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import MyApp from './App.js'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <MyApp />
  </StrictMode>
)
