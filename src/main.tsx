import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

// Remove StrictMode in production for better performance
const root = ReactDOM.createRoot(document.getElementById('root')!);

if (import.meta.env.PROD) {
  root.render(
    <HeroUIProvider>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  );
} else {
  root.render(
    <React.StrictMode>
      <HeroUIProvider>
        <ToastProvider />
        <App />
      </HeroUIProvider>
    </React.StrictMode>
  );
}
