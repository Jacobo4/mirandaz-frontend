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
import {FcGoogle} from "react-icons/all";


const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                if (user) router.push("/");
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const onSubmit = async ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
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
                        <FcGoogle/> Inicia sesión con Google
                    </button>
                </div>


            </form>


        </div>
    );
}

export default LoginPage;