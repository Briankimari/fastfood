import React from "react";
import Chart from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'



const BarChart =()=>{

    const data={
        labels:[ 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday' ],
        datasets:[
            {
                label:'New Customers',
                data:[300,332,176,420,160,302,135],
                borderColor:'orange',
                backgroundColor:'black',
                borderWidth:2,
                  tension:0.5
                
                
            },
             {
                label:'New Orders',
                data:[225,437,203,305,250,100,115],
                borderColor:'black',
                backgroundColor:'orange',
                borderWidth:2,
                tension:0.5
                
                
            },
        ],
    };
    const options={
        responsive:true,
         
            scales:{
                y:{
                    beginAtZero:true,
                },
               
              
            }
    };
    
    return <Bar data={data} options={options} />
};
export default BarChart