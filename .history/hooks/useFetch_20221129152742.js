import { useEffect, useState } from 'react';

const useFetch = (query) => {
   const [data, setData] = useState([]);
   const [isData, setIsData] = useState(false);
   function fetchData() {

      const options = {
         method: 'POST',
         headers: {
         accept: 'application/json',
         'content-type': 'application/json',
         authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
         },
         body: JSON.stringify({query_string:{query} , database_name: 'MateoG404/Ingesoft'})
      };
      
      fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.log(error));

       
      }

   useEffect(() => {
      try {
         fetchData();
         console.log(data)
      } catch (error) {
         console.log(error.response);
      }
   }, []);

   return { data, isData };
};

export default useFetch;
