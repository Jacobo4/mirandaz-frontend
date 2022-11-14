import React, {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

//Styles (Are imported globally in _app.tsx file due to next js rules
// import './AsideServicesNav.scss';
//Images
import correoIcon from '@assets/images/layout/icnServEmail.png';
import siaIcon from '@assets/images/layout/icnServSia.png';
import bibliotecasIcon from '@assets/images/layout/icnServLibrary.png';
import convocatoriasIcon from '@assets/images/layout/icnServCall.png';
import identidadIcon from '@assets/images/layout/icnServIdentidad.png';

const AsideServicesNav = () => {

    const [display, setDisplay] = useState(false);

    const toggle = () => {
        setDisplay(!display);
    }



    return (
        <aside className={`AsideServicesNav AsideServicesNav--${display ? 'show' : 'hidden'}`}>

            <button onClick={() => toggle()} className="AsideServicesNav-toggleBtn" style={{backgroundImage: `url(/backServices.png)`}}/>

            {/*<div id="main" class="hsidebar">*/}
            {/*    <div class="openbtn" id="openbtnId" onclick="toggleNav() "></div>*/}
            {/*</div>*/}
            <ul className={"AsideServicesNav__list"}>

                <li className="AsideServicesNav__item">
                    <Link href="http://correo.unal.edu.co"><a className="AsideServicesNav-option"  target="_blank" rel="noreferrer">
                        <Image src={correoIcon}
                             alt=""
                             width="32"
                             height="32" className="AsideServicesNav-option__icon"/>
                        <span className="Aside-option__description">Correo Electrónico</span>
                    </a></Link>
                </li>

                <li className="AsideServicesNav__item">
                    <Link href="https://dninfoa.unal.edu.co"><a className="AsideServicesNav-option" target="_blank" rel="noreferrer">
                        <Image src={siaIcon}
                             width="32"
                             height="32"
                             alt="Dirección Nacional de Información Académica" className="AsideServicesNav-option__icon"/>
                        <span className="Aside-option__description">DNINFOA - SIA</span>
                    </a></Link>
                </li>
                <li className="AsideServicesNav__item">
                    <Link href="http://bibliotecas.unal.edu.co"><a className="AsideServicesNav-option" target="_blank" rel="noreferrer">
                        <Image src={bibliotecasIcon}
                             width="32" height="32"
                             alt="Biblioteca" className="AsideServicesNav-option__icon"/>
                        <span className="Aside-option__description">Bibliotecas</span>
                    </a></Link>
                </li>
                <li className="AsideServicesNav__item">
                    <Link href="http://personal.unal.edu.co"><a className="AsideServicesNav-option" target="_blank" rel="noreferrer">
                        <Image src={convocatoriasIcon}
                             width="32" height="32"
                             alt="Convocatorias" className="AsideServicesNav-option__icon"/>
                        <span className="Aside-option__description">Convocatorias</span>
                    </a></Link>
                </li>

                <li className="AsideServicesNav__item">
                    <Link href="http://identidad.unal.edu.co"><a className="AsideServicesNav-option" target="_blank" rel="noreferrer">
                        <Image src={identidadIcon}
                             width="32"
                             height="32"
                             alt="Identidad UNAL" className="AsideServicesNav-option__icon"/>
                        <span className="Aside-option__description">Identidad UNAL</span>
                    </a></Link>
                </li>
            </ul>
        </aside>
    );
}

export default AsideServicesNav;
