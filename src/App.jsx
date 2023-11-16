import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Sidebar from './pages/Sidebar'
import InputArea from './pages/InputArea'

function App() {

  
  
  return (
    <div className='master-container'>
      <Sidebar className = "sidebar-container"></Sidebar>
      <InputArea className = "inputarea-container"></InputArea>
    </div>
  )
}

export default App
