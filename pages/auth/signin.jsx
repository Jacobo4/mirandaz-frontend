import Image from 'next/image';
//Form
import {useForm} from "react-hook-form";
//Router
import {useRouter} from 'next/router';
//images
import bgImage from "@assets/images/login/bg-login.svg";

import {signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase.config";
import Link from "next/link";
// import {FcGoogle} from "react-icons/fc";


const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                if (user) router.push("/");
                // ...
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    const onSubmit = async ({email, password}) => {
        const {user} = await signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error(error.message);
            });

        if (user) await router.push("/");
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
                    <button type="submit">Iniciar sesión</button>
                    {/*<span className={"font-bold text-lg  text-gray-700"}> ó </span>*/}

                    <Link href="/auth/signup"><a className={"btn btn-primary"}>Regístrate</a></Link>


                </div>

                <div className={"grid gap-4 place-items-center"}>
                    <button className={"btn btn-primary border border-slate-300 text-slate-400 font-normal text-base"}
                            type="button" onClick={() => handleAuth()}>
                        {/*<FcGoogle/>*/}
                        Inicia sesión con Google
                    </button>
                </div>


            </form>


        </div>
    );
}

export default LoginPage;