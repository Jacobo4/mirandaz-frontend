import Image from "next/image";

import profileImage from "@assets/images/dommies/profile.jpeg";
import useFetch from "@hooks/useFetch";
import image1 from "@assets/images/dommies/fiesta1.jpeg";
import image2 from "@assets/images/dommies/fiesta2.jpeg";
import image3 from "@assets/images/dommies/fiesta3.jpeg";
import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const images = [image3, image2, image1];



const CurrentUserProfilePage = () => {
    
    const { query } = useRouter();
    const [data, setData] = useState([]);
    const [myUser, setMyUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        function fetchData() {
        // envolve try function in a fetch function
        
            const options = {
                method: 'POST',
                headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
                },
                body: JSON.stringify({query_string:'select * from event_center order by event_center_id' , database_name: 'MateoG404/Ingesoft'})
            };
            
            fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.log(error));

         
        }

        function fetchData2() {
            // envolve try function in a fetch function
            
                const options = {
                    method: 'POST',
                    headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
                    },
                    body: JSON.stringify({query_string:'select * from users where isme = true' , database_name: 'MateoG404/Ingesoft'})
                };
                
                fetch('https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query', options)
                .then(response => response.json())
                .then(data => setMyUser(data.data[0]))
                .catch(error => console.log(error));
                
             
            }

        try{

            fetchData();
            fetchData2();
        }
        catch(error){
            console.log(error);
        }
  
 }, [searchTerm]);

    const imagesDivs = data.map((image, i) => (
        <Card key={image[0]} imageUrl={image[5]} title={image[3]} description={image[4]} 
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
                <h6 className={"bold text-lg"}>{myUser[4]}</h6>
                <h6 className={"text-xs font-light "}>juizquierdo@unal.edu.co</h6>
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

export default CurrentUserProfilePage;