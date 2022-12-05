//Core
import {useCallback, useEffect, useState} from "react";
//Form
import {useForm} from "react-hook-form";
//Dropzone
import {useDropzone} from 'react-dropzone';
//Icons
import {BsFillTrashFill} from "react-icons/bs";
import useAuth from "@hooks/useAuth";
import {getAuth, updateProfile, updateEmail, updatePassword} from "firebase/auth";

import {useRouter} from 'next/router';


const EditBioPage = () => {

    const {isLoggedIn, user} = useAuth();
    const router = useRouter();


    // ------------------- Dropzone ---------------------
    const [avatarFile, setAvatarFile] = useState(null);
    //Avatar dropzone
    const {getRootProps: getRootAvatarProps, getInputProps: getInputAvatarProps} = useDropzone({
        maxFiles: 1,
        accept: {'image/*': []},
        onDrop: useCallback(acceptedFile => {
            console.log(acceptedFile)
            setAvatarFile(acceptedFile);
        }, [setAvatarFile])
    });


    //Remove files from dropzone

    const removeAcceptedAvatarFile = () => {
        setAvatarFile(null);
    };

    // ------------------- Form ---------------------
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async ({email, displayName, password, photoURL}) => {



        try {
            if (email) await updateEmail(user, email);
            if (displayName && photoURL) await updateProfile(user, {displayName, photoURL});
            if (displayName) await updateProfile(user, {displayName});
            if (photoURL) await updateProfile(user, {photoURL});
            if (password) await updatePassword(user, password);
            await  router.push("/");
        } catch (e) {
            console.log(e)
        }

    };


    return (
        <div className="container">
            <div className={"grid gap-4 justify-center"}>
                <h1 className={"text-center text-purple-700"}>Editar biografía</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"w-full md:grid md:grid-cols-2 p-4"}>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" type="text"
                               {...register("email")}
                        />

                    </div>

                    <div>
                        <label htmlFor="password">Constraseña</label>
                        <input id="password" type="password"
                               {...register("password")}
                        />

                    </div>

                    <div>
                        <label htmlFor="displayName">Nombre completo</label>
                        <input id="displayName" type="text"
                               {...register("displayName")}
                        />

                    </div>

                    <div>
                        <label htmlFor="photoURL">Url de la imagen de perfíl</label>
                        <input id="photoURL" type="text"
                               {...register("photoURL")}
                        />

                    </div>

                    <div className={"md:col-span-2 pointer-events-none opacity-50"}>
                        <label>Imagen de perfíl (en construcción) </label>
                        <div {...getRootAvatarProps({className: 'dropzone'})}>
                            <input {...getInputAvatarProps()} />
                            <p>Arrastra y suelta la imagen que quieres subir</p>
                        </div>
                        <ul className={"md:col-span-2"}>{avatarFile &&
                            <li className={"flex align-center"}>
                                {avatarFile[0].path} - {avatarFile[0].size} bytes <button type="button"
                                                                                          onClick={() => removeAcceptedAvatarFile()}>
                                <BsFillTrashFill
                                    className={"text-orange-700"}/></button>
                            </li>}
                        </ul>
                    </div>

                    {/*<div className={"md:col-span-2"}>*/}
                    {/*    <label>Portafolio (opcional) </label>*/}
                    {/*    <div {...getRootProps({className: 'dropzone'})}>*/}
                    {/*        <input {...getInputProps()} />*/}
                    {/*        <p>Arrastra y suelta el archivo que quieres subir</p>*/}
                    {/*    </div>*/}
                    {/*    <ul className={"md:col-span-2"}>{filesElements}</ul>*/}
                    {/*</div>*/}

                    <div className={"md:col-span-2"}>
                        <button className={"max-w-max"} type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditBioPage;