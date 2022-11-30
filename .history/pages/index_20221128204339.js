//Core
import {useEffect, useState} from "react";
import Head from 'next/head';
import Image from 'next/image';

import {BsSearch} from "react-icons/bs";

import image1 from "@assets/images/dommies/eventCenter1.png";
import image2 from "@assets/images/dommies/eventCenter2.jpeg";
import image3 from "@assets/images/dommies/eventCenter3.png";
import Card from "@components/Card/Card";
import Link from "next/link";

const images = [image1, image2, image3];




export default function Home() {
    function useFetch(query){
        const API_KEY = 'v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC';
     
        async function fetchData() {
           const options = {
              method: 'POST',
              headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
              },
              body: JSON.stringify({query_string: {query}, database_name: 'MateoG404/Ingesoft'})
            };
            
            fetch('https://api.bit.io/v2beta/query', options)
              .then(response => response.json())
              .then(response => console.log(response))
              .then(setData(response))
              .catch(err => console.error(err));
        }
     
        useEffect(() => {
           try {
              fetchData();
           } catch (error) {
              console.log(error.response);
           }
        }, []);
     
        return { data, isData };
     };
     
    

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {

        console.log('test : ');
        console.log(useFetch('SELECT * FROM users'));
        
        // const results = people.filter(person =>
        //     person.toLowerCase().includes(searchTerm)
        // );
        // setSearchResults(results);
    }, [searchTerm]);

    const imagesDivs = images.map((image, i) => (
        <Card key={i} imageUrl={image} title={`Ceasoijspostro de eventos ${i}`} description={"Lorjajlkjam dolor sit amet, consectetur adipisicing elit. Architecto eos eveniet explicabo fuga placeat quidem repellat vero voluptates! Autem doloribus esse labore minus molestiae nam, nihil porro quas, quibusdam quod, reprehenderit ullam vero voluptas. Consectetur, deserunt eligendi error ipsum maiores mollitia neque perspiciatis quisquam reprehenderit sapiente similique tempore veniam vitae!"}
            actions={(
                <Link href={`/eventCenter/event-center-${i}`}><a className="btn btn-secondary">Visitar</a></Link>
            )}
        />
    ));
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="container grid gap-8">
                <div className={"relative w-full max-w-2xl m-auto flex items-center"}>
                    <input className={"pl-12 w-full"} id="username" type="text" placeholder={"Buscar..."} onChange={handleChange}/>
                    <span className={"absolute text-base text-gray-500 left-4"}><BsSearch/></span>
                </div>
                <div className={"grid-cards"}>
                    {imagesDivs}
                    {imagesDivs}
                    {imagesDivs}
                </div>
            </div>
        </>
    )
}
