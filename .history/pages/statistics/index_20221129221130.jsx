

import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Chart from 'chart.js/auto';



const Statistic = () => {
    const [eventCenter, setEventCenter] = useState([]);
    const [party, setParty] = useState([]);

    const fetchData = async () => {
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select fecha, asistentes from fiesta` , database_name: 'MateoG404/Ingesoft'})
        };
        const options2 = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select COUNT(ranking) nombre_centro, ranking from event_center group by ranking` , database_name: 'MateoG404/Ingesoft'})
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
        const response = await res.json();
        setEventCenter(response.data);
        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        setParty(response2.data);
        console.log(party)
        

        }

    const canvasEl = useRef(null);
    const canvasEl2 = useRef(null);

    const colors = {
      purple: {
        default: "rgba(149, 76, 233, 1)",
        half: "rgba(149, 76, 233, 0.5)",
        quarter: "rgba(149, 76, 233, 0.25)",
        zero: "rgba(149, 76, 233, 0)"
      },
      indigo: {
        default: "rgba(80, 102, 120, 1)",
        quarter: "rgba(80, 102, 120, 0.25)"
      }
    };
  
    useEffect(() => {

      try{
         fetchData();
         console.log(party)
     }
     catch(err){
         console.log(err)
     }
     const ctx = canvasEl.current.getContext("2d");
     // const ctx = document.getElementById("myChart");
     const gradient = ctx.createLinearGradient(0, 16, 0, 600);
     gradient.addColorStop(0, colors.purple.half);
     gradient.addColorStop(0.65, colors.purple.quarter);
     gradient.addColorStop(1, colors.purple.zero);


     var labels = party.map((item) => {
      return item[1];
     })
     var weight = party.map((item) => {
      return item[0];
     })
     const data = {
      labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: weight,
          fill: true,
          backgroundColor: [
            colors.purple.default,
            colors.purple.half,
            colors.purple.quarter,
            colors.indigo.default,
            colors.indigo.quarter

            ],
        }
      ]
    };
    const config = {
      type: 'pie',
      data: data
    };
     const myLineChart = new Chart(ctx, config);
 

   

     const ctx2 = canvasEl2.current.getContext("2d");
     const gradient2 = ctx2.createLinearGradient(0, 16, 0, 600);
     gradient2.addColorStop(0, colors.purple.half);
     gradient2.addColorStop(0.65, colors.purple.quarter);
     gradient2.addColorStop(1, colors.purple.zero);

     var labels2 = eventCenter.map((item) => {
      return item[0];
     })
     var weight2 = eventCenter.map((item) => {
      return item[1];
     })
     const data2 = {
      labels: labels2,
      datasets: [
        {
          label: "N??mero de Asistentes", 
          data: weight2,
          fill: true,
          backgroundColor: [
            colors.purple.default,
            colors.purple.half,
            colors.purple.quarter,
            colors.indigo.default,
            colors.indigo.quarter

            ],
        }
      ]
    };
    const config2 = {
      type: 'line',
      data: data2
    };
     const myChart = new Chart(ctx2, config2);
 
     return function cleanup() {
      myLineChart.destroy();
       myChart.destroy();
     };
   
   
     
     
     }, []);

    return(
      <div style={{ display: 'flex'}} >
         <div style={{ width:'30vw', height:'30vw'  }}>
            <h2 className="text-center pb-4" >Ranking</h2>
            <p className="text-center pb-4" > bares por n??mero de estrellas</p>
            <canvas id="myChart" ref={canvasEl} height="100" />
         </div>
         <div  style={{ width:'60vw', height:'30vw'  }}>
         <h2 className="text-center pb-4" >Ranking</h2>
            <p className="text-center pb-4" > bares por n??mero de estrellas</p>
            <canvas id="myChart" ref={canvasEl2} height="100" />
         </div>
    </div>
    );
    }
   
export default Statistic;