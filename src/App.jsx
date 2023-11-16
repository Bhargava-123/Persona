import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [profileLink, setProfileLink] = useState("")
  
  var sendProfileLink = () => {
  
    axios.post("http://localhost:8080/home",{
      "text" : profileLink
    })
      .then((response) => {
      console.log(response.data)
      })
      .catch((error) => {
      console.log(error)
    })
  
  }
  
  return (
    <>
      <input type="text" className="profileLinkTextBox" id="" onChange={(e) => setProfileLink(e.target.value)} />
      <h1>{profileLink}</h1>
      <input type="button" value="Predict" onClick={sendProfileLink}/>
      
    </>
  )
}

export default App
