import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import SettingsProvider from './context/settingContext/SettingProviderContext.jsx'
import AuthContextProvider from './context/authContext/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <SettingsProvider>
      <App />
    </SettingsProvider>
    </AuthContextProvider>
  </StrictMode>,
)
