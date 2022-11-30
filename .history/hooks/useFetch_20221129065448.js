import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
   const API_KEY = 'v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC';
   const [data, setData] = useState([]);
   const [isData, setIsData] = useState(false);

   async function fetchData() {
      const response = await axios.post(endpoint, data, {
         headers: {
            Authorization: `Bearer ${API_KEY}`,
         },
      });

      console.log('test : ');
      console.log(response.data);
      setData(response.data);
      setIsData(true);
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
