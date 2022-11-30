
import { useEffect, useState } from 'react';

const useFetch = (query) => {
   const API_KEY = 'v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC';
   const [data, setData] = useState([]);
   const [isData, setIsData] = useState(false);

   async function fetchData() {
      const options = {
         method: 'POST',
         headers: {
           accept: 'application/json',
           'content-type': 'application/json',
           authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
         },
         body: JSON.stringify({query_string: {query}, database_name: 'MateoG404/Ingesoft'})
       };
       
       fetch('https://api.bit.io/v2beta/query', options)
         .then(response => response.json())
         .then(response => console.log(response))
         .then(setData(response))
         .catch(err => console.error(err));
   }

   useEffect(() => {
      try {
         fetchData();
      } catch (error) {
         console.log(error.response);
      }
   }, []);

   return { data, isData };
};

export default useFetch;



// useEffect(() => {
//    // envolve try function in a fetch function
//    function fetchData() {

//        try {
//            async () => {
//            const options = {
//                method: 'POST',
//                headers: {
//                accept: 'application/json',
//                'content-type': 'application/json',
//                authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
//                },
//                body: JSON.stringify({query_string: 'select * from users', database_name: 'MateoG404/Ingesoft'})
//            };
           
//            fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
//                .then(response => response.json())
//                .then(response => console.log('normi'+ response.data))
//                .then(setData(response.data))
//                .then(console.log('data'+data))
//                .catch(err => console.error(err))
//        } catch (error) {
//            console.log(error.response);
//        }
//        }

//    }


    
    
    
// }, [searchTerm]);