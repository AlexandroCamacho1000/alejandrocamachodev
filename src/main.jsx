import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

const storedTheme = localStorage.getItem('theme')
const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches
document.documentElement.setAttribute('data-theme', storedTheme || (prefersLight ? 'light' : 'dark'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
