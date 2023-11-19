import { useState, useEffect } from 'react'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import '../assets/css/Dashboard.css'



const Dashboard = (props) => {

    const [INTJ, setINTJ] = useState([])
    const [ESFP, setESFP] = useState([])
    const [type,setType] = useState()

    const ieData = {
        labels: ['Introversion', 'Extroversion'],
        datasets: [{
            data: [INTJ[0], ESFP[0]],
            backgroundColor: ['#333333', '#FFFFFF',]
        }]
    };
    const nsData = {
        labels: ['Intuition', 'Sensing'],
        datasets: [{
            data: [INTJ[1], ESFP[1]],
            backgroundColor: ['#333333', '#FFFFFF',]
        }]
    };

    const tfData = {
        labels: ['Thinking', 'Feeling'],
        datasets: [{
            data: [INTJ[2], ESFP[2]],
            backgroundColor: ['#333333', '#FFFFFF',]
        }]
    };

    const jpData = {
        labels: ['Judging', 'Perceiving'],
        datasets: [{
            data: [INTJ[3], ESFP[3]],
            backgroundColor: ['#333333', '#FFFFFF',]
        }]
    };
    const options = {
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        plugins: {
            legend: {
                display: false
            }
        },
            responsive: true,
            maintainAspectRatio: false,
        }

    useEffect(() => {
        axios.post("http://127.0.0.1:8000/get-analytics", {
            "fileName": props.fileName,
        }).then((res) => {
            setINTJ(res.data.intj);
            setESFP(res.data.esfp);
            setType(res.data.type[0] + res.data.type[1] + res.data.type[2] + res.data.type[3]);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }, [props.fileName])

    return (
        <div className='dashboard-container'>
            <div className='dashboard-contents-container'>
                <h1 className='dashboard-heading' >
                    {
                    props.fileName == null ? props.fileName : props.fileName
                    }
                </h1>
                <h5>
                    {props.inputLink}
                </h5>
                
                <div className="personality-charts-container">
                    <h2> Your Type is {type}</h2>
                    <div className='personality-charts'>
                        <div className="chart">
                            <Pie data={ieData} options={options}></Pie>
                            <div className='percentage-label'>Introversion: {INTJ[0]}%</div>
                            <div className='percentage-label'>Extroversion: {ESFP[0]}%</div>
                        </div>
                        <div className="chart">
                            <Pie data={nsData} options={options}></Pie>
                            <div className='percentage-label'>Intuition: {INTJ[1]}%</div>
                            <div className='percentage-label'>Sensing: {ESFP[1]}%</div>
                        </div>
                        <div className="chart">
                            <Pie data={tfData} options={options}></Pie>
                            <div className='percentage-label'>Thinking: {INTJ[2]}%</div>
                            <div className='percentage-label'>Feeling: {ESFP[2]}%</div>
                        </div>
                        <div className="chart">
                            <Pie data={jpData} options={options}></Pie>
                            <div className='percentage-label'>Judging: {INTJ[3]}%</div>
                            <div className='percentage-label'>Perceiving: {ESFP[3]}%</div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard