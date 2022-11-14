import {useRouter} from "next/router";
import Image from "next/image";

import image from "@assets/images/dommies/fiestaWallpaper.jpeg";
import Link from "next/link";


const UserProyectPage = () => {
    const { query } = useRouter();


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