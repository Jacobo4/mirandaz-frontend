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
                <Image src='data:image/jpeg;base64,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' width={100} height={100}
                 className={"rounded-full"} alt={""}/>
            </div>
            <figcaption className={"grid gap-2 content-start"}>
                <h6 className={"bold text-lg"}>{myUser[4]}</h6>
                <h6 className={"text-xs font-light "}>{myUser[5]}</h6>
                <h6 className={"text-xs font-light "}>{myUser[6]}</h6>
                <p className={"text-xs"}>{myUser[7]}</p>
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