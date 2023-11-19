import React from 'react'
import '../assets/css/Sidebar.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import icon from '../assets/icon.svg'
import plus from '../assets/plus.svg'
import person from '../assets/person-list-icon.svg'
import Dashboard from './Dashboard';

const Sidebar = (props) => {


    

    return (
        <div className='sidebar-container'>
            <div className='sidebar-heading-container'>
                <img className = "icon-svg"src={icon} alt="" />
                <h1 >Personà</h1>
            </div >
            <hr className='horizontal-line'/>
            <div className='new-prediction-button-container' onClick={
                () => {
                    props.setFileName("Predict Your Personality");
                    props.setInputLink("");
                    document.getElementsByClassName("profileLinkTextBox")[0].value = ""
                }
            } >
                <img src={plus} height={30} width={30} alt="" />
                <p className='new-prediction-label'>New Prediction</p>
            </div>
            
            <div className='recent-predictions-container'>
                <h5 className='recent-predictions-heading'>Recent</h5>
                <hr className='horizontal-line'/>
                <div className='recent-predictions-list'>
                    {
                        props.filesList.map((fileName) => (
                            <div className='recent-prediction-container'
                                onClick={() => {
                                    //fetch file details and predict analytics
                                    props.setFileName(fileName);
                                }}
                            >
                                <img src={person} height={40} width={40} alt="" />
                                <div style={{cursor: 'pointer'}}>{fileName}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
   
};

export default Sidebar;