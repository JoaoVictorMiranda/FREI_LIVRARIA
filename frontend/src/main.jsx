import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navegar from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegar />
  </StrictMode>,
)
