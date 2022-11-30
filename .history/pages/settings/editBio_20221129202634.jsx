//Core
import {useCallback, useState} from "react";
//Form
import {useForm} from "react-hook-form";
//Dropzone
import {useDropzone} from 'react-dropzone';
//Icons
import {BsFillTrashFill} from "react-icons/bs";


const EditBioPage = () => {

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
    const onSubmit = async (data) => {
        console.log(data)
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                query_string: `UPDATE users SET username = '${data.username}', bio = '${data.description}' where isMe = true`,
                 database_name: 'MateoG404/Ingesoft'
            }),
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer v2_3w9b7_rFhC5nQyWzW2QNgFEVaL9hC'
            }
        };
        const userCreated = await fetch(`https://enigmatic-escarpment-24863.herokuapp.com/https://api.bit.io/v2beta/query`, requestOptions);
    };


    return (
        <div className="container">
            <div className={"grid gap-4 justify-center"}>
                <h1 className={"text-center text-purple-700"}>Editar la biografía sasiuoiaoauo</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={"w-full md:grid md:grid-cols-2 p-4"}>
                    <div>
                        <label htmlFor="username">Usuario</label>
                        <input id="description" type="text"
                               {...register("username")}
                        />
                    </div>

                    <div>
                        <label htmlFor="username">Descripción</label>
                        <input id="linkPortfolio" type="text"
                               {...register("description")}
                        />
                    </div>

                    <div>
                        <label htmlFor="username">Correo</label>
                        <input id="linkPortfolio" type="text"
                               {...register("email")}
                        />
                    </div>

                    <div className={"md:col-span-2"}>
                        <label>Imagen de perfíl</label>
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