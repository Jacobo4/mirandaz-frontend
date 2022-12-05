import Link from 'next/link';
import Image from "next/image";
//Styles (Are imported globally in _app.tsx file due to next js rules
// import './AsideNav.scss';
//Images
import profileImage from "@assets/images/dommies/profile.png";
import {BsArrowRight, BsTools, BsFillBrightnessHighFill} from "react-icons/bs";
import {IoCloseCircle} from "react-icons/io5";
import {useToggle} from "@utils/index";
import {useEffect} from "react";
import useAuth from "@hooks/useAuth";


const AsideNav = () => {

    const [isAsideNavOpen, toggleAsideNav] = useToggle(false);
    const {isLoggedIn, user} = useAuth();



    return  isLoggedIn &&  <>
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
                        <div className={"m-auto w-32 relative w-32 h-32"}>
                            <Image src={user.photoURL ? user.photoURL: profileImage } layout={"fill"} className={"rounded-full"} alt={""}/>
                        </div>
                        <figcaption className={"grid gap-2 pt-4 text-center"}>
                            <h6 className={"bold text-lg"}>{user.displayName}</h6>
                            <h6 className={"text-xs font-light "}>{user.email}</h6>
                        </figcaption>
                    </figure>
                    <Link href={"/settings/editBio"}><a className={"btn btn-primary"} onClick={toggleAsideNav}>Editar</a></Link>

                </div>
                <nav className={"p-4"}>
                    <ul className={"grid gap-2"} onClick={toggleAsideNav}>
                        <li>
                            <Link href="/statistic/">
                                <a className={"flex pb-2 gap-2 justify-between items-center border-b border-solid hover:text-purple-300"}><span>Estadísticas</span><BsArrowRight/></a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        }
    </>

}

export default AsideNav;