

import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";




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

    useEffect(() => {
      try{
         fetchData();
         console.log(party)

     }
     catch(err){
         console.log(err)
     }

        
        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, []);

    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: eventCenter,
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });

    const imagesDivs = party.map((image, i) => (
        <Card key={image[0]} imageUrl={image[6]} layout='fill' title={`Fiesta ${image[2]}`} description={image[7]}
            actions={(
                <>
                    <Link href={`/user/eventCenter/${i}`}><a className="btn btn-secondary">Visitar</a></Link>
                </>
            )}
        />
    ));

    return<canvas id="bar-chart" width="800" height="450"></canvas>

   //  return <div className="container grid gap-8">
   //      <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
   //          <div className={"w-32 m-auto"}>
   //              {(user!= undefined) ?  <Image src={profileImage}  className={"rounded-full"} alt={""}/> : <div className={"w-32 h-32 rounded-full bg-gray-300"}/>}
               
   //          </div>
   //          <figcaption className={"grid gap-2 content-start"}>
   //              <h6 className={"bold text-lg"}>{query.idUser}</h6>
   //              <h6 className={"text-xs font-light "}>{user[4]}</h6>
   //              <h6 className={"text-xs font-light "}>{user[6]}</h6>
   //              <p className={"text-xs"}>{user[7]}</p>
   //          </figcaption>
   //      </div>
   //      <div className="grid gap-8">
   //              <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
   //                  <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."} onChange={handleChange}/>
   //                  <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
   //              </div>
   //              <div className={"grid-cards"}>
   //                  {imagesDivs}
   //                  {imagesDivs}
   //              </div>
   //          </div>
   //  </div>
}

export default Statistic;