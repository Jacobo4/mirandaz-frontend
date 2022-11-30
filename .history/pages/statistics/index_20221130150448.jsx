

import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Chart from 'chart.js/auto';



const Statistic = () => {
    const [eventCenter, setEventCenter] = useState([]);
    const [party, setParty] = useState([]);
    const [isDone, setIsDone] = useState(false);

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
        setIsDone(true);

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


     if(isDone){
         var labels = party.map((item) => {
            return item[1];
         })
         var weight = party.map((item) => {
            return item[0];
         })

         var labels2 = eventCenter.map((item) => {
            return item[0];
         })
         var weight2 = eventCenter.map((item) => {
            return item[1];
         })
     }
     var labels =[
      "1 ",
      "2 ",
      "4",
      "3",
      "5"
     ]
     const weight =[
      4,
      42,
      7,
      28,
      19
     ]
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


      var labels2= [
         "2022-12-01",
         "2022-12-02",
         "2022-12-03",
         "2022-12-04",
         "2022-12-05",
         "2022-12-06",
         "2022-12-07",
         "2022-12-08",
         "2022-12-09",
         "2022-12-10",
         "2022-12-11",
         "2022-12-12",
         "2022-12-13",
         "2022-12-14",
         "2022-12-15",
         "2022-12-16",
         "2022-12-17",
         "2022-12-18",
         "2022-12-19",
         "2022-12-20",
         "2022-12-21",
         "2022-12-22",
         "2022-12-23",
         "2022-12-24",
         "2022-12-25",
         "2022-12-26",
         "2022-12-27",
         "2022-12-28",
         "2022-12-29",
         "2022-12-30",
         "2022-12-31",
         "2023-01-01",
         "2023-01-02",
         "2023-01-03",
         "2023-01-04",
         "2023-01-05",
         "2023-01-06",
         "2023-01-07",
         "2023-01-08",
         "2023-01-09",
         "2023-01-10",
         "2023-01-11",
         "2023-01-12",
         "2023-01-13",
      ]

      var weight2=[
         41,
         85,
         4,
         120,
         154,
         15,
         89,
         54,
         23,
         25,
         4,
         25,
         56,
         87,
         90,
         56,
         56,
         34,
         14,
         56,
         67,
         65,
         3,
         64,
         134,
         160,
         24,
         64,
         75,
         87,
         98,
         74,
         60,
         2,
         4,
         64,
         23,
         34,
         75,
         65,
         75,
         86,
         81,
         99,
      ]

     const data2 = {
      labels: labels2,
      datasets: [
        {
          label: "Número de Asistentes", 
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
     const router = useRouter()

     

    return(
      <div style={{ display: 'flex'}} >
         <div style={{ width:'20vw', height:'30vw', marginRight:'10vw' }}>
            <h2 className="text-center pb-4" >Ranking</h2>
            <p className="text-center pb-4" > bares por número de estrellas</p>
            <canvas id="myChart" ref={canvasEl} height="100" />
         </div>
         <div  style={{ width:'65vw', height:'30vw'  }}>
         <h2 className="text-center pb-4" >Asistentes</h2>
            <p className="text-center pb-4" > número de asistentes por fecha</p>
            <canvas id="myChart" ref={canvasEl2} height="100" />
         </div>
    </div>
    );
    }
   
export default Statistic;