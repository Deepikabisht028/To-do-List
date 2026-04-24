import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TodoProvider } from './context/Context.jsx'

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </TodoProvider>
  </StrictMode>,
)
