import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/style.css"
import App from './componentes/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
