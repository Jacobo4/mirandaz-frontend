import axios from 'axios';
import cookie from 'js-cookie';
import { useEffect, useState } from 'react';

const useFetch = (endpoint) => {
   const token = cookie.get('token');
   const [data, setData] = useState([]);
   const [isData, setIsData] = useState(false);

   async function fetchData() {
      const response = await axios.get(endpoint, {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      console.log('test : ');
      console.log(response.data.data);
      setData(response.data.data);
      setIsData(true);
   }

   useEffect(() => {
      try {
         fetchData();
      } catch (error) {
         console.log(error.response);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return { data, isData };
};

export default useFetch;
