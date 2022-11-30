

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
            body: JSON.stringify({query_string:`select * from fiesta ` , database_name: 'MateoG404/Ingesoft'})
        };
        const options2 = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select nombre_centro, ranking from event_center ` , database_name: 'MateoG404/Ingesoft'})
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
        const response = await res.json();
        setEventCenter(response.data);
        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        setParty(response2.data);
        

        }

   //  useEffect(() => {
   //    try{
   //       fetchData();
   //       console.log(party)

   //   }
   //   catch(err){
   //       console.log(err)
   //   }

        
   //      // const results = people.filter(person =>
   //      //     person.toLowerCase().includes(searchTerm)
   //      // );
   //      // setSearchResults(results);
   //  }, []);

    const canvasEl = useRef(null);

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

     party.map((item) => {

      const data = {
              x: item[0],
              y: item[1]
              }
     }),
  
     const config = {
       type: "line",
       data: [],
     const myLineChart = new Chart(ctx, config);
 
     return function cleanup() {
       myLineChart.destroy();
     };
   };
   
     
     
     }, []);

    return(
      <div className="App">
      <span>Chart.js Demo</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
    );
    }
   
export default Statistic;