import {useRouter} from "next/router";
import Image from "next/image";
import useFetch from "@hooks/useFetch";

import image from "@assets/images/dommies/fiestaWallpaper.jpeg";
import Link from "next/link";
import {useEffect, useState} from "react";


const UserProyectPage = () => {


    const router = useRouter();
    const [event, setEvent] = useState();

    const handleAttend = async () => {

        const query = `update fiesta
                       set asistentes = asistentes + 1
                       where party_id = ${router.query.idEvent}`;

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({
                query_string: query, database_name: 'MateoG404/Ingesoft'
            })
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options).then(response => response.json())
        if (res) router.push('/')

    }


    useEffect(() => {

        const fetchData = async () => {
            const query = `select *
                           from fiesta,
                                event_center
                           where fiestas_list = fiesta_list
                             and event_center_id = ${router.query.idEventCenter}
                             and party_id = ${router.query.idEvent}`;
            console.log(query);
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
                },
                body: JSON.stringify({
                    query_string: query, database_name: 'MateoG404/Ingesoft'
                })
            };
            const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options).then(response => response.json())
            setEvent(res.data[0])


        }
        if (router.asPath !== router.route) {
            try {
                fetchData();
                console.log(party)

            } catch (err) {
                console.log(err)
            }
        }


        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, []);

    return event && <div className="container grid gap-8 max-w-screen-lg">
        <div className={"rounded-t-3xl overflow-hidden relative w-screen h-96"}>
            <Image src={event[6]} layout='fill' objectFit='contain'></Image>
        </div>
        <h2>{event[1]}</h2>
        <h3>{event[2]}</h3>
        <p>{event[12]}</p>
        <div>
            <button onClick={() => handleAttend()} className="btn btn-primary">Asistir</button>
        </div>

    </div>


}

export default UserProyectPage;