import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'

// import { LangProvider } from './context/langContext';
import { Background, ThemeProvider } from './context/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
)
