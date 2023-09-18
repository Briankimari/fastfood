import React from "react";
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2'



const LineChart =()=>{
  
    const data={
        labels:[ 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday' ],
        datasets:[
            {
                label:'Sales',
                data:[110,204,156,250,400,170,135],
                borderColor:'orange',
                backgroundColor:'rgba(75,192,192,0.2)',
                borderWidth:2,
                  tension:0.5
                
                
            },
             {
                label:'Orders',
                data:[125,410,100,310,170,300,201],
                borderColor:'black',
                backgroundColor:'rgba(75,192,192,0.2)',
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
    
    return <Line data={data} options={options} />
};
export default LineChart