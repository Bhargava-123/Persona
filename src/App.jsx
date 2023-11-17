import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Sidebar from './pages/Sidebar'
import InputArea from './pages/InputArea'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  
  const [fileName, setFileName] = useState(null)
  const [inputLink, setInputLink] = useState("")
  const [analytics, setAnalytics] = useState([])

  return (
    <div className='master-container'>

      <Sidebar className="sidebar-container" fileName={fileName} setFileName={setFileName}
      inputLink={inputLink} setInputLink={setInputLink}></Sidebar>
      <div className='mainpage-container'>
        <Dashboard
          analytics={analytics} setAnalytics={setAnalytics}
          fileName={fileName} setFileName={setFileName} inputLink={inputLink} setInputLink={setInputLink}></Dashboard>
        <InputArea analytics={analytics} setAnalytics={setAnalytics} className="inputarea-container" inputLink={inputLink} setInputLink = {setInputLink} ></InputArea>
      </div>
      
    </div>
  )
}

export default App
