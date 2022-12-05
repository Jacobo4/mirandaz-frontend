import {useRouter} from "next/router";
import Image from "next/image";

import image from "@assets/images/dommies/fiestaWallpaper.jpeg";
import Link from "next/link";

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())


const UserProyectPage = () => {

    const {query} = useRouter();
    const {data: partyInfo, error1} = useSwr(`/api/twitter/party/${query.idEvent}`, fetcher);


    return partyInfo &&
        (<div className="container grid gap-4 max-w-screen-lg">

            <div className={"rounded-t-3xl overflow-hidden relative w-[62rem] h-[62rem]"}>
                <Image layout='fill' src={partyInfo.imagen_fiesta}></Image>
            </div>
            <h2>{partyInfo.party_name}</h2>
            <h4>Asistentes: {partyInfo.asistentes}</h4>
            <h4>Fecha: {partyInfo.fecha}</h4>
            <p>{partyInfo.descripcion_fiesta}</p>
            <div>
                <button className="btn btn-primary">Asistir</button>
            </div>

        </div>)

}

export default UserProyectPage;