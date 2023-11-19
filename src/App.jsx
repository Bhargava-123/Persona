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

  const [filesList, setFilesList] = useState([]);

  useEffect(() => {
    //get lists of texts available
    axios.get("http://127.0.0.1:8000/get-recents")
      .then((res) => {
        setFilesList(res.data.data);
        setFileName(res.data.data[0]);
      })
      .catch((err) => console.log(err))
    }, [1])

  return (
    <div className='master-container'>

      <Sidebar className="sidebar-container" fileName={fileName} setFileName={setFileName}
        inputLink={inputLink} setInputLink={setInputLink}

      filesList={filesList} setFileList = {setFilesList}></Sidebar>
      <div className='mainpage-container'>
        <Dashboard
          analytics={analytics} setAnalytics={setAnalytics}
          fileName={fileName} setFileName={setFileName} inputLink={inputLink} setInputLink={setInputLink}
  ></Dashboard>
        <InputArea analytics={analytics} setAnalytics={setAnalytics} className="inputarea-container" inputLink={inputLink} setInputLink = {setInputLink} ></InputArea>
      </div>
      
    </div>
  )
}

export default App
