import {useRouter} from "next/router";
import Image from "next/image";

import image from "@assets/images/dommies/fiestaWallpaper.jpeg";
import Link from "next/link";


const UserProyectPage = () => {
    
    const { query } = useRouter();

    const fetchData = async () => {
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            },
            body: JSON.stringify({query_string:`select party_id, party_name, fecha, asistentes, recaudo, imagen_fiesta, descripcion_fiesta, nombre_centro from fiesta, event_center 
            where fiesta.fiesta_list = event_center.fiestas_list
            and event_center_id = '${query.idEvent}' ` , database_name: 'MateoG404/Ingesoft'})
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

    return <div className="container grid gap-8 max-w-screen-lg">
        <div className={"rounded-t-3xl overflow-hidden"}>
            <Image src={image}></Image>
        </div>
        <h2>{query.idEvent}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet at consectetur, cupiditate, deserunt distinctio dolore dolorem ducimus est excepturi expedita explicabo facere fugit harum id in, ipsa ipsam iste laborum magnam magni maiores nobis non perspiciatis qui quia quibusdam quod repellendus sint unde velit veniam voluptas voluptate! Animi deleniti dolores dolorum eaque eligendi eos, eveniet excepturi impedit necessitatibus non nulla numquam perspiciatis placeat quidem reprehenderit sapiente suscipit totam velit voluptates voluptatibus! Aperiam consequuntur dicta laborum reiciendis? A amet autem cum dolores explicabo harum pariatur quae quod ut voluptate! Architecto aut consequuntur distinctio dolores doloribus eius eligendi et expedita fugiat hic id illo illum incidunt, inventore laborum molestiae nam nihil numquam possimus praesentium rem reprehenderit repudiandae sint voluptas voluptatibus. Eaque labore laudantium magnam, officia quaerat quas rem temporibus totam! Accusamus debitis dignissimos fugiat minima nemo odit provident reprehenderit repudiandae rerum ut? A accusantium assumenda, atque consequatur cumque cupiditate distinctio doloremque dolores ducimus ea earum eius error exercitationem facere fugiat fugit illo illum ipsam iste laborum magnam modi, nam nobis, officia pariatur possimus quae quas quasi reprehenderit repudiandae sint sit sunt ullam ut vel velit veritatis! A asperiores, aspernatur atque autem eum minus molestiae totam veritatis! Aperiam assumenda culpa dolorem hic incidunt ipsum maiores, nostrum obcaecati placeat praesentium quae quas recusandae voluptatum? Atque consequuntur cum dolor eveniet laboriosam neque possimus rem sunt ullam veritatis! Ab aut cum esse quae velit! Amet aspernatur consequatur, dolorum earum fugiat ipsum laborum libero minus molestiae molestias odit omnis quis sapiente sint tempora velit voluptatem voluptatum.</p>
        <div>
             <button className="btn btn-primary">Asistir</button>
        </div>

    </div>
}

export default UserProyectPage;