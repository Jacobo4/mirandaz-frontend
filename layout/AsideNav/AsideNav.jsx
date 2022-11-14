import Link from 'next/link';
import Image from "next/image";
//Styles (Are imported globally in _app.tsx file due to next js rules
// import './AsideNav.scss';
//Images
import profileImage from "@assets/images/dommies/profile.jpeg";
import {BsArrowRight, BsTools, BsFillBrightnessHighFill} from "react-icons/bs";
import {IoCloseCircle} from "react-icons/io5";
import {useToggle} from "@utils/index";
import {useEffect} from "react";


const AsideNav = () => {

    const [isAsideNavOpen, toggleAsideNav] = useToggle(false);


    return <>
        <button className={"AsideNav-toggleBtn"} onClick={toggleAsideNav}>
            <BsTools/>
        </button>
        {isAsideNavOpen &&
            <div className="AsideNav min-h-screen fixed left-0 z-50 bg-purple-700 text-white">
                <button className="absolute right-2 top-2 text-white text-2xl" onClick={toggleAsideNav}>
                    <IoCloseCircle/>
                </button>
                <div className={"p-8 gap-4 grid place-items-center"}>
                    <figure>
                        <div className={"m-auto w-32"}>
                            <Image src={profileImage} className={"rounded-full"} alt={""}/>
                        </div>
                        <figcaption className={"grid gap-2 pt-4 text-center"}>
                            <h6 className={"bold text-lg"}>Juan Jacobo Izquierdo Becerra</h6>
                            <h6 className={"text-xs font-light "}>juizquierdo@unal.edu.co</h6>
                            <h6 className={"text-xs font-light "}>Ingeniería de Sistemas y Computación</h6>
                        </figcaption>
                    </figure>
                    <Link href={"/settings/editBio"}><a className={"btn btn-primary"} onClick={toggleAsideNav}>Editar</a></Link>

                </div>
                <nav className={"p-4"}>
                    <ul className={"grid gap-2"} onClick={toggleAsideNav}>
                        <li>
                            <Link href="/user/">
                                <a className={"flex pb-2 gap-2 justify-between items-center border-b border-solid hover:text-purple-300"}><span>Mis eventos</span><BsArrowRight/></a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        }
    </>

}

export default AsideNav;