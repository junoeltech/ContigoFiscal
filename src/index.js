import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/globals.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)


// src/app/App.jsx
import React from 'react'
import HomePage from '../features/home/pages/HomePage'

export default function App() {
  return (
    <div>
      <HomePage />
    </div>
  )
}