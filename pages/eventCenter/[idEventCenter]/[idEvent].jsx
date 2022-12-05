import {useRouter} from "next/router";
import Image from "next/image";

import image from "@assets/images/dommies/fiestaWallpaper.jpeg";
import Link from "next/link";

import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())


const UserProyectPage = () => {

    const router = useRouter();
    const {data: partyInfo, error1} = useSwr(`/api/twitter/party/${router.query.idEvent}`, fetcher);

    const handleAttendants = async () => {
        const response = await fetch(`/api/twitter/party/increment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                partyId: partyInfo.party_id,
                attendants: `${partyInfo.asistentes + 1}`
            })
        });


        await router.back();

    }


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
                <button className="btn btn-primary" onClick={() => handleAttendants()}>Asistir</button>
            </div>

        </div>)

}

export default UserProyectPage;