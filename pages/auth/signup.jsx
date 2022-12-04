import Image from 'next/image';
//Form
import {useForm} from "react-hook-form";
//Router
import {useRouter} from 'next/router';
//images
import bgImage from "@assets/images/login/bg-login.svg";

import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase.config";
import Link from "next/link";


const SignUpPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const onSubmit = async ({email, password}) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                if (user) router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className={`container relative pt-14 md:pt-24 overflow-hidden`}>
            <div className={"absolute -bottom-2 left-12 -scale-x-100 max-w-xl hidden md:block lg:max-w-xl -z-10"}>
                <Image className={""} src={bgImage} alt={""}></Image>
            </div>
            <h1 className={"text-center pb-4"}>Registrarse</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"max-w-lg m-auto"}>
                <div className={"relative"}>
                    <label htmlFor="username">Correo</label>
                    <input className={"pr-32"} id="email" type="text"
                           {...register("email", {
                               required: "Por favor ingresa tu correo electrónico",
                           })}
                    />
                    {errors.email && (<span>{errors.email.message}</span>)}
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

               <div className={"flex gap-4 justify-center  place-items-center"}>
                    <button type="submit">Enviar</button>
                </div>


            </form>


        </div>
    );
}

export default SignUpPage;