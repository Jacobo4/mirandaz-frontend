import Image from "next/image";

import profileImage from "@assets/images/dommies/partyProfile.jpeg";

import image1 from "@assets/images/dommies/fiesta1.jpeg";
import image2 from "@assets/images/dommies/fiesta2.jpeg";
import image3 from "@assets/images/dommies/fiesta3.jpeg";
import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import useFetch from "@hooks/useFetch";

const images = [image1, image2, image3];




const EventProfilePage = () => {

    const { query } = useRouter();
    const router = useRouter();
    const [bar, setBar] = useState([]);
    const [isBar, setIsBar] = useState([]);
    const [party, setParty] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const getId = async() => {
        const id = await query.idEventCenter;
        console.log(id);
        return id;
    }
    const fetchData = async (id) => {
        console.log(`select party_id, party_name, fecha, asistentes, recaudo, imagen_fiesta, descripcion_fiesta, nombre_centro from fiesta, event_center 
        where fiesta.fiesta_list = event_center.fiestas_list and event_center_id = ${id}
       `)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string: `select party_id, party_name, fecha, asistentes, recaudo, imagen_fiesta, descripcion_fiesta, nombre_centro from fiesta, event_center 
             where fiesta.fiesta_list = event_center.fiestas_list and event_center_id = ${id}
            ` , database_name: 'MateoG404/Ingesoft'})
        };
        const options2 = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select * from event_center where event_center_id = ${id}` , database_name: 'MateoG404/Ingesoft'})
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
        const response = await res.json();
        setParty(response.data);

        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        setBar(response2.data);
        setIsBar(true);
    }
    
  
    useEffect(() => {
      if(!query.idEventCenter) {
        return;
      }
      const fetchSomethingById = () => {
        fetchData(query.idEventCenter)
        console.log(bar)
      }
      fetchSomethingById()
    }, [query.idEventCenter])


    if(!bar) return;

    if(party!= undefined|| party.length != 0){
    
    const imagesDivs = party.map((image, i) => (
        <Card key={image[0]} imageUrl={image[5]} title={`Fiesta ${image[1]}`} description={image[6]}
            actions={(
                <Link href={`/eventCenter/${query.idEventCenter}/fiesta${image[0]}`}><a className="btn btn-secondary">Visitar</a></Link>
            )}
        />
    ));
    return <div className="container grid gap-8">
        <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
            <div className={"w-32 m-auto"}>
                
                {(bar) ?  <Image src={bar}  width={100} height={100} className={"rounded-full"} alt={""}/> : <div className={"w-32 h-32 rounded-full bg-gray-300"}/>}
            </div>
            <figcaption className={"grid gap-2 content-start"}>
                {(bar!= undefined) ? <h6 className={"bold text-lg"}>{query.idEventCenter}</h6> : <h6 className={"bold text-lg"}/>}
                {(bar!= undefined) ? <h6 className={"text-xs font-light "}>{bar[0][3]}</h6> : <h6 className={"text-xs font-light "}/>}
                <h6 className={"text-xs font-light "}>Bogotá</h6>
                {(bar!= undefined) ? <p className={"text-xs"}>{bar[0][4]}</p> : <p className={"text-xs"}/>}
    
            </figcaption>
        </div>
        <div className="grid gap-8">
                <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
                    <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."} onChange={handleChange}/>
                    <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
                </div>
                <div className={"grid-cards"}>
                    {imagesDivs}
                </div>
            </div>
    </div>

    }
    else{
        const imagesDivs = <div className="text-center"/>
        return <div className="container grid gap-8">
        <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
            <div className={"w-32 m-auto"}>
                
                {(isBar) ?  <Image src={bar[0][5]}  width={100} height={100} className={"rounded-full"} alt={""}/> : <div className={"w-32 h-32 rounded-full bg-gray-300"}/>}
            </div>
           
            <figcaption className={"grid gap-2 content-start"}>
                {(bar!= undefined) ? <h6 className={"bold text-lg"}>{query.idEventCenter}</h6> : <h6 className={"bold text-lg"}/>}
                {(bar!= undefined) ? <h6 className={"text-xs font-light "}>{bar[0][3]}</h6> : <h6 className={"text-xs font-light "}/>}
                <h6 className={"text-xs font-light "}>Bogotá</h6>
                {(bar!= undefined) ? <p className={"text-xs"}>{bar[0][4]}</p> : <p className={"text-xs"}/>}
    
            </figcaption>
        </div>
        <div className="grid gap-8">
                <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
                    <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."} onChange={handleChange}/>
                    <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
                </div>
                <div className={"grid-cards"}>
                    no hay fiestas  de este bar
                </div>
            </div>
    </div>

    }
}

export default EventProfilePage;