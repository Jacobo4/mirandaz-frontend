import Image from "next/image";

import profileImage from "@assets/images/dommies/profile.png";

import image1 from "@assets/images/dommies/fiesta1.jpeg";
import image2 from "@assets/images/dommies/fiesta2.jpeg";
import image3 from "@assets/images/dommies/fiesta3.jpeg";
import Card from "@components/Card/Card";
import {BsSearch} from "react-icons/bs";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import useAuth from "@hooks/useAuth";

const images = [image3, image2, image1];


const CurrentUserProfilePage = () => {

    const {query} = useRouter();
    const {isLoggedIn, user} = useAuth();
    console.log(user)


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

    const imagesDivs = images.map((image, i) => (
        <Card key={i} imageUrl={image} title={`Fiesta ${i}`}
              description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos eveniet explicabo fuga placeat quidem repellat vero voluptates! Autem doloribus esse labore minus molestiae nam, nihil porro quas, quibusdam quod, reprehenderit ullam vero voluptas. Consectetur, deserunt eligendi error ipsum maiores mollitia neque perspiciatis quisquam reprehenderit sapiente similique tempore veniam vitae!"}
              actions={(
                  <>
                      <Link href={`/user/persona${i}/fiesta${i}`}><a className="btn btn-secondary">Visitar</a></Link>
                  </>
              )}
        />
    ));

    return <div className="container grid gap-8">
        {user &&
            <div className="rounded overflow-hidden shadow-md grid grid-flow-col gap-4 max-w-2xl m-auto p-4 place-items-center">

                <div className={"w-16 m-auto relative h-16"}>
                    <Image src={user.photoURL ? user.photoURL : profileImage} layout={"fill"} className={"rounded-full"}
                           alt={""}/>
                </div>
                <figcaption className={"grid gap-2 content-start"}>
                    <h6 className={"bold text-lg"}>{user.displayName}</h6>
                    <h6 className={"text-xs font-light "}>{user.email}</h6>
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
                {imagesDivs}
            </div>
        </div>
    </div>
}

export default CurrentUserProfilePage;