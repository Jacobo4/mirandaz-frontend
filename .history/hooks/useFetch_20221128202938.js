

const useFetch = (query) => {
   const API_KEY = 'v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC';

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
         .then(response => {return response})
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
