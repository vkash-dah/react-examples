import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'


/**
 * The first configuration is telling our react app to use react router 
 * is by wrapping the root component with BrowserRouter
 */
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
