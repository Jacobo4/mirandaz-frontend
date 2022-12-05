import Image from 'next/image';
//Form
import {useForm} from "react-hook-form";
//Router
import {useRouter} from 'next/router';
//images
import bgImage from "@assets/images/login/bg-login.svg";

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase.config";


const SignUpPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const router = useRouter();

    const onSubmit = async ({email, password, displayName, photoURL}) => {

        const {user} = await createUserWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error(error.message);
            });

        await updateProfile(user, {displayName, photoURL})
            .then(() => router.push("/"))
            .catch((error) => {
        });
    };

    return (
        <div className={`container relative pt-14 md:pt-24 overflow-hidden`}>
            <div className={"absolute -bottom-2 left-12 -scale-x-100 max-w-xl hidden md:block lg:max-w-xl -z-10"}>
                <Image className={""} src={bgImage} alt={""}></Image>
            </div>
            <div className="grid gap-4 justify-center">
                <h1 className={"text-center pb-4"}>Registrarse</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"w-full md:grid md:grid-cols-2 p-4"}>
                    <div>
                        <label htmlFor="username">Correo</label>
                        <input id="email" type="text"
                               {...register("email")}
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
                    <div>
                        <label htmlFor="displayName">
                            Nombre completo
                        </label>

                        <input id="displayName" type="text"
                               {...register("displayName", {
                                   required: "Por favor ingresa tu nombre completo",
                               })}
                        />
                        {errors.displayName && (<span>{errors.displayName.message}</span>)}
                    </div>

                    <div>
                        <label htmlFor="photoURL">
                            Url de la foto de perfil
                        </label>

                        <input id="photoURL" type="text"{...register("photoURL")}/>
                    </div>

                    <div className={" md:col-span-2 grid gap-4 justify-center place-items-center"}>
                        <button type="submit">Enviar</button>
                    </div>


                </form>
            </div>


        </div>
    );
}

export default SignUpPage;