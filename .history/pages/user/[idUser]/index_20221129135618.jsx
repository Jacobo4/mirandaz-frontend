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

    const { query } = useRouter();
    let id = query.idUser

    const [user, setUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
        const id = await query.idUser;
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
            body: JSON.stringify({query_string:`select * from users where username = 'Username' and contrasena = 'password 1'` , database_name: 'MateoG404/Ingesoft'})
        };
        const res = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
        const response = await res.json();
        setUser(response.data);
        console.log(response.data);
        const res2 = await fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options2)
        const response2 = await res2.json();
        console.log(response2.data);
        }
    
        try{
            fetchData();
            console.log(user)
        }
        catch(err){
            console.log(err)
        }
        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, [searchTerm]);

    const imagesDivs = images.map((image, i) => (
        <Card key={i} imageUrl={image} title={`Fiesta ${i}`} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos eveniet explicabo fuga placeat quidem repellat vero voluptates! Autem doloribus esse labore minus molestiae nam, nihil porro quas, quibusdam quod, reprehenderit ullam vero voluptas. Consectetur, deserunt eligendi error ipsum maiores mollitia neque perspiciatis quisquam reprehenderit sapiente similique tempore veniam vitae!"}
            actions={(
                <>
                    <Link href={`/user/persona${i}/fiesta${i}`}><a className="btn btn-secondary">Visitar</a></Link>
                </>
            )}
        />
    ));

    return <div className="container grid gap-8">
        <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4">
            <div className={"w-32 m-auto"}>
                <Image src={profileImage}  className={"rounded-full"} alt={""}/>
            </div>
            <figcaption className={"grid gap-2 content-start"}>
                <h6 className={"bold text-lg"}>{query.idUser}</h6>
                <h6 className={"text-xs font-light "}>jacobo</h6>
                <h6 className={"text-xs font-light "}>Ingeniería de Sistemas y Computación</h6>
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
                    {imagesDivs}
                </div>
            </div>
    </div>
}

export default UserProfilePage;