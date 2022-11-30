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
        setBar(response.data);
        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        setParty(response2.data);

    }
    
    useEffect(() => {
        getId().then((id) => {
            try {
                fetchData(id);
                console.log(party[0])
            } catch (error) {
                console.log(error);
            }
        })

        
        // const {parties, isParties} = useFetch(`select party_id, party_name, fecha, asistentes, recaudo, imagen_fiesta, descripcion_fiesta, nombre_centro from fiesta, event_center 
        // where fiesta.fiesta_list = event_center.fiestas_list and event_center_id = ${query.idEventCenter}
        // `);
        // const{ bar, isBar} = useFetch(`select * from event_center where event_center_id = ${query.idEventCenter}`);
    
    }, []);


    const imagesDivs = images.map((image, i) => (
        <Card key={i} imageUrl={image} title={`Fiesta ${i}`} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos eveniet explicabo fuga placeat quidem repellat vero voluptates! Autem doloribus esse labore minus molestiae nam, nihil porro quas, quibusdam quod, reprehenderit ullam vero voluptas. Consectetur, deserunt eligendi error ipsum maiores mollitia neque perspiciatis quisquam reprehenderit sapiente similique tempore veniam vitae!"}
            actions={(
                <Link href={`/eventCenter/${query.idEventCenter}/fiesta${i}`}><a className="btn btn-secondary">Visitar</a></Link>
            )}
        />
    ));

    return <div className="container grid gap-8">
        <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
            <div className={"w-32 m-auto"}>
                <Image src={profileImage}  className={"rounded-full"} alt={""}/>
            </div>
            <figcaption className={"grid gap-2 content-start"}>
                <h6 className={"bold text-lg"}>{query.idEventCenter}</h6>
                <h6 className={"text-xs font-light "}>Calle 53 #29-32</h6>
                <h6 className={"text-xs font-light "}>Bogotá</h6>
                <p className={"text-xs"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt enim ipsum itaque pariatur quasi quia sequi tenetur veniam veritatis? Aliquam aliquid aut deleniti dignissimos dolorem ex, facere fuga fugiat ipsa itaque laboriosam nesciunt, quae quam quasi quibusdam reprehenderit rerum. Ab aut commodi consectetur consequatur doloribus error excepturi harum voluptas.</p>
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

export default EventProfilePage;