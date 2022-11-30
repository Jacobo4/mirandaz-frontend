//Core
import {useEffect} from "react";

import Image from 'next/image';
//Form
import {useForm} from "react-hook-form";
//Router
import { useRouter } from 'next/router';
//images
import bgImage from "@assets/images/login/bg-login.svg";


const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        // const auth = await signIn("credentials", {redirect: false, ...data});
        // if(!auth.error) await router.push("/");
    };

    return (
            <div className={`container relative pt-14 md:pt-24 overflow-hidden`}>
                <div className={"absolute -bottom-2 right-12 max-w-xl hidden md:block lg:max-w-xl -z-10"}>
                    <Image className={""} src={bgImage} alt={""}></Image>
                </div>
                <h1 className={"text-center pb-4"}>Iniciar sesión</h1>
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
                            Contraseña
                        </label>

                        <input id="password" type="password"
                               {...register("password", {
                                   required: "Por favor ingresa tu contraseña",
                               })}
                        />
                        {errors.password && (<span>{errors.password.message}</span>)}
                    </div>
                    <div>
                        <button type="submit">Iniciar sesión</button>
                    </div>
                </form>
            </div>
    );
}

export default LoginPage;