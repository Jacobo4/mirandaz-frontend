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
import { getMiddlewareManifest } from "next/dist/client/route-loader";

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

    const getId = () => {
        return query.idEventCenter;}

    
  
    useEffect(() => {
      if(!query.idEventCenter) {
        return;
      }

      const options = {
        method: 'POST',
        headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
        },
        body: JSON.stringify({query_string: `select party_id, party_name, fecha, asistentes, recaudo, imagen_fiesta, descripcion_fiesta, nombre_centro from fiesta, event_center 
         where fiesta.fiesta_list = event_center.fiestas_list and event_center_id = ${query.idEventCenter}
        ` , database_name: 'MateoG404/Ingesoft'})
    };
    const options2 = {
        method: 'POST',
        headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
        },
        body: JSON.stringify({query_string:`select * from event_center where event_center_id = ${query.idEventCenter}` , database_name: 'MateoG404/Ingesoft'})
    };

      const fetchData = async () => {
        const id = await getId();
        const res = (await Promise.all ([fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options), fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)])).map((r) => r.json());
        const [partyResult, barResult] = await Promise.all(res);
        setParty(partyResult.data);
        setBar(barResult.data);
      }
        
        fetchData();
      
    }, [query.idEventCenter])


    if(!query.idEventCenter) return;
      
    if(!bar) return;

 
}

export default EventProfilePage;