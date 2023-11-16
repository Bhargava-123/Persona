import React from 'react'
import '../assets/css/Sidebar.css'
import { useState, useEffect } from 'react';
import axios from 'axios'

const Sidebar = () => {
    const [filesList, setFilesList] = useState([])
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/get-recents").then((res) => {
            console.log(res.data.data)
            setFilesList(res.data.data)
        }).catch((err) => console.log(err) )

    },[1])
    return (
        <div className='sidebar-container'>
            <input type="button" value="+ New Prediction" className='new-prediction-button' />
            <h5>Recent</h5>
            <ul>
            {
                filesList.map((fileName) => (
                    <li>{fileName}</li>
                ))
            }
                </ul>

        </div>
    )
   
};

export default Sidebar;