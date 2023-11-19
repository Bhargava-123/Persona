
import { useState, useEffect } from 'react'
import '../assets/css/InputArea.css'
import arrow from '../assets/arrow.svg'  
import axios from 'axios'  

const InputArea = (props) => {
    const HOST = "http://127.0.0.1:8000"
    // const [profileLink, setProfileLink] = useState("")
    var sendProfileLink = () => {
        axios.post(`${HOST}/get-persona-analytics`, {
            "text": props.inputLink
        })
            .then((response) => {
                props.setAnalytics(response.data.data)
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className='inputarea-container'>
            <input type="text" spellCheck="false" placeholder='Enter LinkedIn URL' className="profileLinkTextBox" id="" onChange={(e) => props.setInputLink(e.target.value)} />
            {/* <input type="button" className="predictButton"value="Predict" onClick={sendProfileLink} /> */}
            <div style={{ cursor: 'pointer' }} >
                <img src={arrow} className='arrow-logo' alt="React Logo" onClick={
                    () => {
                        sendProfileLink()
                    }
                } />
            </div>
        </div>
    )
}

export default InputArea