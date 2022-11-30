import Image from "next/image";

import profileImage from "@assets/images/dommies/profile.jpeg";

import image1 from "@assets/images/dommies/fiesta1.jpeg";
import image2 from "@assets/images/dommies/fiesta2.jpeg";
import image3 from "@assets/images/dommies/fiesta3.jpeg";
import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const images = [image3, image2, image1];



const UserProfilePage = () => {
    const router = useRouter();
    const { query } = useRouter();
    let id = query.idUser

    const [user, setUser] = useState([[1], ['si'], [1], [3], ['nombre de ususrio'], ['correo@correo.com'], ['estudiante'], [false], ['https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14.png?auto=format']]);
    const [party, setParty] = useState([[1], ['nombre jakja'],['2022-02-12'], [24], [10], [42], ['https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14.png?auto=format'], ['la fiesta fue una cosa horrible, lo mejor fue irme']]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const fetchData = async () => {
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select * from users where username_id = '${query.idUser}' ` , database_name: 'MateoG404/Ingesoft'})
        };
        const options2 = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select * from fiesta order by party_id ` , database_name: 'MateoG404/Ingesoft'})
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
        const response = await res.json();
        setUser(response.data[0]);
        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        setParty(response2.data);

        }

    useEffect(() => {
        if (router.asPath !== router.route) {
            try{
                fetchData();
                console.log(party)

            }
            catch(err){
                console.log(err)
            }
         }

        
        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, [searchTerm]);

    const imagesDivs = party.map((image, i) => (
        <Card key={image[0]} imageUrl='https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14.png?auto=format' layout='fill' title={`Fiesta ${image[2]}`} description={image[7]}
            actions={(
                <>
                    <Link href={`/user/eventCenter/${i}`}><a className="btn btn-secondary">Visitar</a></Link>
                </>
            )}
        />
    ));

    return <div className="container grid gap-8">
        <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
            <div className={"w-32 m-auto"}>
                {(user!= undefined) ?  <Image src='https://support.content.office.net/es-es/media/2c8399b3-5194-4b4a-ad9c-04405673f8c2.jpg' width={100} height={100}  className={"rounded-full"} alt={""}/> : <div className={"w-32 h-32 rounded-full bg-gray-300"}/>}
               
            </div>
            <figcaption className={"grid gap-2 content-start"}>
                <h6 className={"bold text-lg"}>{query.idUser}</h6>
                <h6 className={"text-xs font-light "}>{user[4]}</h6>
                <h6 className={"text-xs font-light "}>{user[6]}</h6>
                <p className={"text-xs"}>{user[7]}</p>
            </figcaption>
        </div>
        <div className="grid gap-8">
                <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
                    <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."} onChange={handleChange}/>
                    <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
                </div>
                <div className={"grid-cards"}>
                    {imagesDivs}
                    {imagesDivs}
                </div>
            </div>
    </div>
}

export default UserProfilePage;