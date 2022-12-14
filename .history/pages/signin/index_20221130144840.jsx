//Core
import {useEffect, useState} from "react";
import cookie from "js-cookie";

import Image from 'next/image';
//Form
import {useForm} from "react-hook-form";
//Router
import { useRouter } from 'next/router';
//images
import bgImage from "@assets/images/login/bg-login.svg";
import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";


const LoginPage = () => {
    const[isMe, setIsMe] = useState([[1], ['si'], [1], [3], ['nombre de ususrio'], ['correo@correo.com'], ['estudiante'], [false], ['https://ph-files.imgix.net/81c8176a-1b00-4f10-b60f-2ab2729d0a14.png?auto=format']]);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        let auth = false
        const options = {
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
        console.log(response)
        if(response){
            auth = true;
            cookie.set('id_user', isMe[0]);
            router.push(`/user/${isMe[0]}`)

        }
                
             

        // const auth = await signIn("credentials", {redirect: false, ...data});
        // if(!auth.error) await router.push("/");
    };

    return (
            <div className={`container relative pt-14 md:pt-24 overflow-hidden`}>
                <div className={"absolute -bottom-2 right-12 max-w-xl hidden md:block lg:max-w-xl -z-10"}>
                    <Image className={""} src={bgImage} alt={""}></Image>
                </div>
                <h1 className={"text-center pb-4"}>Iniciar sesi??n</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"max-w-lg m-auto"}>
                    <div className={"relative"}>
                        <label htmlFor="username">Usuario</label>
                        <input className={"pr-32"} id="username" type="text"
                               {...register("username", {
                                   required: "Por favor ingresa tu usuario institucional",
                               })}
                        />
                        {errors.username && (<span>{errors.username.message}</span>)}
                    </div>
                    <div>
                        <label htmlFor="password">
                            Contrase??a
                        </label>

                        <input id="password" type="password"
                               {...register("password", {
                                   required: "Por favor ingresa tu contrase??a",
                               })}
                        />
                        {errors.password && (<span>{errors.password.message}</span>)}
                    </div>
                    <div>
                        <button type="submit" >Iniciar sesi??n</button>
                    </div>
                </form>
            </div>
    );
}

export default LoginPage;