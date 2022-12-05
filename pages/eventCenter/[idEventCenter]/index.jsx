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
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())


const EventProfilePage = () => {

    const {query} = useRouter();

    const {data: profileInfo, error1} = useSwr(`/api/twitter/event-centers/${query.idEventCenter}`, fetcher);

    const {
        data: parties,
        error2
    } = useSwr(profileInfo ? `/api/twitter/parties/${profileInfo.fiestas_list}` : null, fetcher);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {

        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, [searchTerm]);

    const imagesDivs = !parties ? [] : parties.map(({
                                                        party_id,
                                                        imagen_fiesta,
                                                        party_name,
                                                        asistentes,
                                                        descripcion_fiesta,
                                                        fecha,
                                                    }
        , i) => (
        <Card key={i} imageUrl={imagen_fiesta} title={party_name}
              description={descripcion_fiesta}
              moreInfo={
                  <>
                      <h6 className={"text-xs bold "}>Fecha: {fecha}</h6>
                      <h6 className={"text-xs bold mb-2"}>Asistentes: {asistentes}</h6>
                  </>
              }
              actions={(
                  <Link href={`/eventCenter/${query.idEventCenter}/${party_id}`}><a
                      className="btn btn-secondary">Visitar</a></Link>
              )}
        />
    ));

    return <div className="container grid gap-8">
        {profileInfo &&
            <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
                <div className={"w-32 h-32 m-auto relative"}>
                    <Image layout={"fill"} src={profileInfo.imagen_centro} className={"rounded-full"} alt={""}/>
                </div>
                <figcaption className={"grid gap-2 content-start"}>
                    <h6 className={"bold text-lg"}>{profileInfo.nombre_centro}</h6>
                    <h6 className={"text-xs font-light "}>Ranking: {profileInfo.ranking}</h6>
                    <p className={"text-xs"}>{profileInfo.descripcion_centro}</p>
                </figcaption>
            </div>
        }

        <div className="grid gap-8">
            <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
                <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."}
                       onChange={handleChange}/>
                <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
            </div>
            <div className={"grid-cards"}>
                {imagesDivs}
            </div>
        </div>
    </div>
}

export default EventProfilePage;