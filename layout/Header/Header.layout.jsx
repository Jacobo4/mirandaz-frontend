//Core
import React, {useState, useEffect} from 'react';
//Utils
import {usePrevious} from "../../utils/";
//Nextjs
import Image from 'next/image';
import Link from 'next/link';


//Styles (Are imported globally in _app.tsx file due to next js rules
// import './Header.scss';

//Images - logos
import logoBg from '@assets/images/layout/sealBck.png';
import logoBlackUnal from '@assets/images/layout/escudoUnal_black.png';
import colombianShieldLogo from '@assets/images/layout/sealColombia.png';
import escudoUnal from "@assets/images/layout/escudoUnal.svg";
//Images - Servicios
import correoIcon from '@assets/images/layout/icnServEmail.png';
import siaIcon from '@assets/images/layout/icnServSia.png';
import bibliotecasIcon from '@assets/images/layout/icnServLibrary.png';
import convocatoriasIcon from '@assets/images/layout/icnServCall.png';
import identidadIcon from '@assets/images/layout/icnServIdentidad.png';
//Social media
import socialMediaBg from '@assets/images/layout/icnSocial.png';
//icons
import locationIcon from '@assets/images/layout/icon-location.svg';
import iconAccesibility from '@assets/images/layout/access-icon.png';
import iconAccesibilityBlue from '@assets/images/layout/access-icon.jpg';
import useAuth from "@hooks/useAuth";
import {auth} from "../../firebase.config";

const Header = () => {

    const {isLoggedIn, user} = useAuth();



    const languages = [
        {acronym: "EN", name: "EN - English"},
        {acronym: "GUC", name: "GUC - Wayuunaiki"},
        {acronym: "PBB", name: "PBB - Nasa yuwe"},
    ]
    const [language, setLanguage] = useState(languages[0]);
    const [menuMobileDisplay, setMenuMobileDisplay] = useState(false);

    //Accessibility menu
    const [accessibilityPanelDisplay, setAccessibilityPanelDisplay] = useState(false);
    const [fontSize, setFontSize] = useState(0);
    const [colorInvert, setColorInvert] = useState(false);
    const [theme, setTheme] = useState(0);

    const prevFont = usePrevious(fontSize);
    const prevTheme = usePrevious(theme);


    useEffect(() => {
        const htmlElementClasses = document.querySelector('html').classList;

        // NOTE: This implementations with use effect to add/remove classes are made here cuz i cant access to HTML tag from a file besides pages/_app.txt
        //Add remove fontsize
        htmlElementClasses.remove(`font-size--${prevFont}`);
        htmlElementClasses.add(`font-size--${fontSize}`);
        //Invert Colors
        colorInvert ? htmlElementClasses.add('colors--invert') : htmlElementClasses.remove('colors--invert');
        //Set Theme
        htmlElementClasses.remove(`theme--${prevTheme}`);
        htmlElementClasses.add(`theme--${theme}`);
    });

    const languageElements = languages.map((language, i) =>
        (<li key={i} className="Header-dropdown__item">
            <button onClick={() => setLanguage(language)} className="Header-dropdown__link">{language.name}</button>
        </li>)
    );

    const toggleMenuMobile = () => {
        setMenuMobileDisplay(!menuMobileDisplay);
    };

    const toggleAccessibilityPanel = () => {
        setAccessibilityPanelDisplay(!accessibilityPanelDisplay);
    }


    //Accessibility options
    const setHtmlFontSize = (newFontSize) => {
        if (newFontSize >= 0 && newFontSize <= 10) {
            setFontSize(newFontSize);
            localStorage.setItem('fontSize', newFontSize);
        }
    }

    const setHtmlColorInvert = (newColor) => {
        setColorInvert(newColor);
        localStorage.setItem('colorInvert', newColor);
    }

    const setHtmlTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    const restartSettings = () => {
        setHtmlTheme(0);
        setHtmlFontSize(0);
        setHtmlColorInvert(false);
    }

    const setSavedSettings = () => {
        const savedTheme = localStorage.getItem('theme');
        const savedFontSize = localStorage.getItem('fontSize');
        const savedColorInvert = localStorage.getItem('colorInvert');
        if (savedTheme) setHtmlTheme(JSON.parse(savedTheme));
        if (savedFontSize) setHtmlFontSize(JSON.parse(savedFontSize));
        if (savedColorInvert) setHtmlColorInvert(JSON.parse(savedColorInvert));
    }

    //Dropdown
    const toggleDropdown = (event) => {
        const itemlistELement = event.target.nextSibling;
        const targetClass = itemlistELement.classList[0];
        itemlistELement.classList.toggle(`${targetClass}--show`);
    }


    useEffect(() => {
        //Set accessibility's settings from localstorage
        setSavedSettings();

        //TO close an opened dropdown when the user clicks outside the dropdown
        const checkIfClickedOutside = e => {
            const dropdownOpened = document.querySelector('.Header-dropdown__list--show');
            if (dropdownOpened) dropdownOpened.classList.remove('Header-dropdown__list--show');
        }
        document.addEventListener("mouseup", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mouseup", checkIfClickedOutside)
        }
    })


    return (
        <header className={"Header"}>
            <a href="https://unal.edu.co" className="Header-logo">
                <div className="Header-logo__decor">
                    <Image src={logoBg} alt="" />
                </div>
                <div className="Header-logo__img">
                    <Image src={escudoUnal}
                       alt="Escudo de la Universidad Nacional de Colombia"/>
                </div>
                <div className="Header-logo__img print--onlyOnPrint">
                    <Image src={logoBlackUnal}
                       alt="Escudo de la Universidad Nacional de Colombia"/>
                </div>
            </a>

            {/* Nav mobile - starts*/}
            <nav className={"Header-navMobile"}>
                <button className="Header-navMobile__accessibilityToggleBtn" onClick={() => toggleAccessibilityPanel()}>
                    <Image className={"Header-navMobile__accessibilityToggleBtn-icon"} src={iconAccesibility} alt=""/>
                </button>
                <Image src={colombianShieldLogo} alt="Escudo de la República de Colombia"
                       className="Header-navMobile__img print--notPrintable"/>
                <button className="Header-navMobile__menuToggleBtn" onClick={() => toggleMenuMobile()}>
                    <span className="Header-navMobile__menuToggleBtn-icon"/>
                </button>
                <div className={"Header-dropdown Header-dropdown--languages print--notPrintable"}>
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}> {language.acronym} </button>
                    <ul className="Header-dropdown__list">
                        {languageElements}
                    </ul>
                </div>
            </nav>
            {/* Nav mobile - ends*/}


            {/* Nav Desktop - starts*/}
            <nav className={"Header-navDesktop"}>
                <div className="Header-navDesktop__wrapper-secondaryNav">
                    <ul className="Header-navDesktop-profiles">
                        <li className="Header-navDesktop-profiles__item">
                            <Link href="http://aspirantes.unal.edu.co">
                                <a className="Header-navDesktop-profiles__link"
                                >Aspirantes</a></Link>
                        </li>
                        <li className="Header-navDesktop-profiles__item">
                            <Link href="http://estudiantes.unal.edu.co">
                                <a className="Header-navDesktop-profiles__link"
                                >Estudiantes</a></Link>
                        </li>
                        <li className="Header-navDesktop-profiles__item">
                            <Link href="http://egresados.unal.edu.co">
                                <a className="Header-navDesktop-profiles__link"
                                >Egresados</a></Link>
                        </li>
                        <li className="Header-navDesktop-profiles__item">
                            <Link href="http://docentes.unal.edu.co">
                                <a className="Header-navDesktop-profiles__link"
                                >Docentes</a></Link>
                        </li>
                        <li className="Header-navDesktop-profiles__item">
                            <Link href="http://administrativos.unal.edu.co">
                                <a className="Header-navDesktop-profiles__link"
                                >Administrativos</a></Link>
                        </li>
                    </ul>
                    <ul className="Header-navDesktop-socialMedia">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a
                            href="https://www.facebook.com/UNALOficial"
                            style={{backgroundImage: `url(${socialMediaBg})`}}
                            className="Header-navDesktop-socialMedia__link"/>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a href="https://twitter.com/UNALOficial"
                                                                               style={{backgroundImage: `url(${socialMediaBg})`}}
                                                                               className="Header-navDesktop-socialMedia__link"/>
                        </li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <li className="Header-navDesktop-socialMedia__item"><a
                            href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
                            style={{backgroundImage: `url(${socialMediaBg})`}}
                            className="Header-navDesktop-socialMedia__link"/>
                        </li>
                    </ul>
                    <div className={"Header-dropdown Header-dropdown--languages print--notPrintable"}>
                        <button className="Header-dropdown__button"
                                onClick={(e) => toggleDropdown(e)}> {language.acronym} </button>
                        <ul className="Header-dropdown__list">
                            {languageElements}
                        </ul>
                    </div>
                </div>
                <div className="Header-navDesktop__wrapper-mainNav">
                    <div className="Header-navDesktop__title-wrapper">
                        <span className="Header-navDesktop__title-icon"><Image src={locationIcon} alt=""/></span>
                        <h1 className="Header-navDesktop__title">subdominio.unal.edu.co</h1>
                    </div>
                    <ul className="Header-navDesktop-menu">
                        <li className="Header-menuBurguer__link">
                            <Link href="/"><a>Home</a></Link>
                        </li>

                        {/*{isLoggedIn  &&*/}
                        {/*    <li className="Header-menuBurguer__link">*/}
                        {/*        <Link to="/dashboard">Dashboard</Link>*/}
                        {/*    </li>*/}
                        {/*}*/}

                        <li className={"ml-auto flex"}>
                            {/*{isLoggedIn ? <button className={"text-xs btn btn-primary"} onClick={()=> handleLogout()}>Cerrar sesión</button>: <Link className={"text-xs btn btn-primary"} to="/signin">Inicia sesión</Link>}*/}
                            {isLoggedIn ?
                                <button onClick={() => auth.signOut()} className={"text-xs btn btn-primary"}>Cerrar sesión</button> :
                                <Link href="/auth/signin"><a className={"text-xs btn btn-primary"}>Iniciar sesión</a></Link>
                            }

                        </li>

                    </ul>
                    <div className="Header-dropdown">
                        <button className="Header-dropdown__button"
                                onClick={(e) => toggleDropdown(e)}>SEDES
                        </button>
                        <ul className="Header-dropdown__list">
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://amazonia.unal.edu.co"
                                                                     className="Header-dropdown__link">Amazonia</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://bogota.unal.edu.co"
                                                                     className="Header-dropdown__link">Bogotá</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://caribe.unal.edu.co"
                                                                     className="Header-dropdown__link">Caribe</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://delapaz.unal.edu.co"
                                                                     className="Header-dropdown__link">De La Paz</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://www.manizales.unal.edu.co"
                                                                     className="Header-dropdown__link">Manizales</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://medellin.unal.edu.co"
                                                                     className="Header-dropdown__link">Medellín</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://orinoquia.unal.edu.co"
                                                                     className="Header-dropdown__link">Orinoquia</a>
                            </li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://www.palmira.unal.edu.co"
                                                                     className="Header-dropdown__link">Palmira</a></li>
                            <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                     href="http://tumaco-pacifico.unal.edu.co"
                                                                     className="Header-dropdown__link">Tumaco</a></li>
                        </ul>
                    </div>

                    <div className={"Header-navDesktop__img print--notPrintable"}>
                        <Image src={colombianShieldLogo} alt="Escudo de la República de Colombia"
                           className=""/>
                    </div>
                </div>

                <button
                    className={`Header-navDesktop-accessibilityToggleBtn Header-navDesktop-accessibilityToggleBtn--${accessibilityPanelDisplay ? 'show' : 'hidden'}`}
                    onClick={() => toggleAccessibilityPanel()}>
                    <Image className={"Header-navDesktop-accessibilityToggleBtn__icon"} src={iconAccesibilityBlue}
                           alt=""/>
                    <span className={"Header-navDesktop-accessibilityToggleBtn__title"}>Panel de accesibilidad</span>
                </button>

            </nav>
            {/* Nav Desktop - ends*/}

            {/* Menu burguer - starts*/}
            <ul className={`Header-menuBurguer Header-menuBurguer--${menuMobileDisplay ? 'show' : 'hidden'}`}>
                <li className="Header-menuBurguer__item">
                    {/*<a href="/" className="Header-menuBurguer__link">Item menú ejemplo 1</a>*/}
                </li>
                <li className="Header-dropdown">
                    <button className="Header-menuBurguer__link Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>Item menú ejemplo 2
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><Link href="/"><a className="Header-dropdown__link">1</a></Link>
                        </li>
                        <li className="Header-dropdown__item"><Link href="/"><a className="Header-dropdown__link">2</a></Link>
                        </li>
                        <li className="Header-dropdown__item"><Link href="/"><a className="Header-dropdown__link">3</a></Link>
                        </li>
                    </ul>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>SEDES
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item">
                            <Link href="http://amazonia.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Amazonia</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://bogota.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Bogotá</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://caribe.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Caribe</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://delapaz.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">De La Paz</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://www.manizales.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Manizales</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://medellin.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Medellín</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://orinoquia.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Orinoquia</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://www.palmira.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Palmira</a>
                            </Link>
                        </li>
                        <li className="Header-dropdown__item">
                            <Link href="http://tumaco-pacifico.unal.edu.co">
                                <a target="_blank" rel="noreferrer"

                                   className="Header-dropdown__link">Tumaco</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>PERFILES
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><a target="_blank" href="http://aspirantes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Aspirantes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://estudiantes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Estudiantes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://egresados.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Egresados</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" href="http://docentes.unal.edu.co"
                                                                 rel="noreferrer"
                                                                 className="Header-dropdown__link">Docentes</a></li>
                        <li className="Header-dropdown__item"><a target="_blank" rel="noreferrer"
                                                                 href="http://administrativos.unal.edu.co"
                                                                 className="Header-dropdown__link">Administrativos</a>
                        </li>
                    </ul>
                </li>
                <li className="Header-menuBurguer__item Header-dropdown">
                    <button className="Header-dropdown__button"
                            onClick={(e) => toggleDropdown(e)}>SERVICIOS
                    </button>
                    <ul className="Header-dropdown__list">
                        <li className="Header-dropdown__item"><Link href="/"><a target="_blank"
                                                                                className="Header-dropdown__link">

                            <Image src={correoIcon}
                                   alt=""
                                   width="32"
                                   height="32" className="Header-dropdown__icon"/>
                            Correo Electrónico

                        </a></Link></li>
                        <li className="Header-dropdown__item"><Link href="/"><a target="_blank"
                                                                                className="Header-dropdown__link">

                            <Image src={siaIcon}
                                   width="32"
                                   height="32"
                                   alt="Dirección Nacional de Información Académica" className="Header-dropdown__icon"/>
                            DNINFOA - SIA

                        </a></Link></li>
                        <li className="Header-dropdown__item"><Link href="/"><a target="_blank"
                                                                                className="Header-dropdown__link">

                            <Image src={bibliotecasIcon}
                                   width="32" height="32"
                                   alt="Biblioteca" className="Header-dropdown__icon"/>
                            Bibliotecas

                        </a></Link></li>
                        <li className="Header-dropdown__item"><Link href="/"><a target="_blank"
                                                                                className="Header-dropdown__link">

                            <Image src={convocatoriasIcon}
                                   width="32" height="32"
                                   alt="Convocatorias" className="Header-dropdown__icon"/>
                            Convocatorias

                        </a></Link></li>
                        <li className="Header-dropdown__item"><Link href="/"><a target="_blank"
                                                                                className="Header-dropdown__link">

                            <Image src={identidadIcon}
                                   width="32"
                                   height="32"
                                   alt="Identidad UNAL" className="Header-dropdown__icon"/>
                            Identidad UNAL

                        </a></Link></li>
                    </ul>
                </li>
            </ul>


            <div
                className={`Header-accessibilityPanel Header-accessibilityPanel--${accessibilityPanelDisplay ? 'show' : 'hidden'}`}>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Tamaño letra</h4>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlFontSize(fontSize - 1)}>A<sup>-</sup></button>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlFontSize(fontSize + 1)}>A<sup>+</sup></button>
                    <label className="Header-accessibilityPanel__label">{100 + fontSize * 5}%</label>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Cambiar Contrastes</h4>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(1)}>1</button>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(2)}>2</button>
                    <button className="Header-accessibilityPanel__button" onClick={() => setHtmlTheme(3)}>3</button>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Invertir colores</h4>
                    <button className="Header-accessibilityPanel__button"
                            onClick={() => setHtmlColorInvert(!colorInvert)}>Aplicar
                    </button>
                </div>
                <div className="Header-accessibilityPanel__item">
                    <h4 className="Header-accessibilityPanel__title">Restablecer ajustes</h4>
                    <button className="Header-accessibilityPanel__button" onClick={() => restartSettings()}>Aplicar
                    </button>
                </div>
            </div>


        </header>
    );
}

export default Header;
