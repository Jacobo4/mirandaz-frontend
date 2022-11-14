import Image from 'next/image';
import Link from 'next/link';

//Styles (Are imported globally in _app.tsx file due to next js rules
// import './Footer.scss';
//Images
import logoOrgullo from '@assets/images/layout/log_orgullo.png';
import logoOrgulloBlack from '@assets/images/layout/log_orgullo_black.png';
import logoGobierno from '@assets/images/layout/log_gobiern.png';
import logoAgencia from '@assets/images/layout/log_agenc.png';
import logoAgenciaBlack from '@assets/images/layout/log_agenc_black.png';
import logoContraloria from '@assets/images/layout/log_contra.png';

const Footer = () => {
    return (
        <footer className={"Footer"}>
            <nav className="Footer-nav">
                <ul className="Footer-nav__list print--notPrintable">
                    <Link href="https://www.legal.unal.edu.co"><a className={"Footer-nav__link"} target="_top">Régimen
                        Legal</a></Link>
                    <Link href="https://contratacion.unal.edu.co"><a className={"Footer-nav__link"}
                                                                     target="_top">Contratación</a></Link>
                    <Link href="https://launalcuenta.unal.edu.co/"><a className={"Footer-nav__link"} target="_top">Rendición
                        de cuentas</a></Link>
                    <Link href="https://www.pagovirtual.unal.edu.co/"><a className={"Footer-nav__link"} target="_top">Pago
                        Virtual</a></Link>
                    <Link href="https://siga.unal.edu.co"><a className={"Footer-nav__link"}
                                                             target="_top">Calidad</a></Link>

                </ul>
                <ul className="Footer-nav__list print--notPrintable">
                    <Link href="https://personal.unal.edu.co"><a className={"Footer-nav__link"} target="_top">Talento
                        humano</a></Link>
                    <Link href="https://personal.unal.edu.co"><a className={"Footer-nav__link"} target="_top">Ofertas de
                        empleo</a></Link>
                    <Link href="https://docentes.unal.edu.co/concurso-profesoral/"><a className={"Footer-nav__link"}
                                                                                      target="_top">Concurso docente</a></Link>
                    <Link href="https://controlinterno.unal.edu.co/"><a className={"Footer-nav__link"} target="_top">Control
                        interno</a></Link>
                    <Link href="https://unal.edu.co/buzon-de-notificaciones/"><a className={"Footer-nav__link"}
                                                                                 target="_self">Buzón de
                        notificaciones</a></Link>
                </ul>

                <ul className="Footer-nav__list print--notPrintable">
                    <Link href="https://correo.unal.edu.co"><a className={"Footer-nav__link"} target="_top">Correo
                        institucional</a></Link>
                    <Link href="https://redessociales.unal.edu.co"><a className={"Footer-nav__link"} target="_top">Redes
                        Sociales</a></Link>
                    <Link href="https://unal.edu.co/quejas-y-reclamos/"><a className={"Footer-nav__link"}
                                                                           target="_self">Quejas
                        y reclamos</a></Link>
                    <Link href="https://unal.edu.co/encuesta/"><a className={"Footer-nav__link"}
                                                                  target="_self">Encuesta</a></Link>
                    <Link href="https://estadisticas.unal.edu.co/"><a className={"Footer-nav__link"}
                                                                      target="_top">Estadísticas</a></Link>
                </ul>
                <ul className="Footer-nav__list print--notPrintable">
                    <Link href="/"><a className={"Footer-nav__link"}>Mapa del sitio</a></Link>
                    <Link href="/"><a className={"Footer-nav__link"}>FAQ</a></Link>
                    <Link href="https://unal.edu.co/atencion-en-linea/"><a className={"Footer-nav__link"}
                                                                           target="_self">Atención
                        en línea</a></Link>
                    <Link href="/"><a className={"Footer-nav__link"}>Contáctenos</a></Link>
                    <Link href="/"><a className={"Footer-nav__link"}>Glosario</a></Link>
                </ul>
            </nav>
            <div className="Footer-info">
                <ul className="Footer-info__list">
                    <li className="Footer-info__item"><b>Contacto página web:</b></li>
                    <li className="Footer-info__item">Dirección ...</li>
                    <li className="Footer-info__item">Edificio ...</li>
                    <li className="Footer-info__item">Bogotá D.C., Colombia</li>
                    <li className="Footer-info__item">(+57 1) 316 5000 Ext.</li>
                </ul>
                <ul className="Footer-info__list">
                    <li className="Footer-info__item"><Link
                        href="https://unal.edu.co/fileadmin/user_upload/docs/legal.pdf"><a rel="noreferrer"
                                                                                           target="_blank">&copy; Copyright
                        2019</a></Link></li>
                    <li className="Footer-info__item">Algunos derechos reservados.</li>
                    <li className="Footer-info__item"><Link href="mailto:EMAIL@unal.edu.co"><a
                        title="Comuníquese con el administrador de este sitio web"
                    >EMAIL@unal.edu.co</a></Link></li>
                    <li className="Footer-info__item"><Link href="/"><a>Acerca de este sitio web</a></Link></li>
                    <li className="Footer-info__item">Actualización:14/05/21</li>

                </ul>
            </div>
            <div className="Footer-sponsors print--notPrintable">
                <ul className="Footer-sponsors__list">
                    <li className="Footer-sponsors__item">
                        <Link href="https://orgullo.unal.edu.co/"><a className={"Footer-sponsor"}>
                            <Image className="Footer-sponsor__img" alt="Orgullo UN"
                                   src={logoOrgullo}/>
                            {/*NOTE: No sé porque esta imagen está si no se muestra nunca*/}
                            <div className={"print print--onlyOnPrint"}>
                                <Image
                                className="Footer-sponsor__img Footer-sponsor__img--printable "
                                alt="Orgullo UN"
                                src={logoOrgulloBlack}/>
                            </div>

                        </a></Link>
                    </li>
                    <li className="Footer-sponsors__item">
                        <Link href="https://www.gov.co/"><a className={"Footer-sponsor"} >
                            <Image
                                className=""
                                alt="Portal Único del Estado Colombiano"
                                src={logoGobierno}/>
                        </a></Link>
                    </li>
                    <li className="Footer-sponsors__item">
                        <Link href="https://agenciadenoticias.unal.edu.co"><a className={"Footer-sponsor"}>
                            <Image className="Footer-sponsor__img" alt="Agencia de Notwicias"
                                   src={logoAgencia}/>
                            {/*NOTE: No sé porque esta imagen está si no se muestra nunca*/}
                            <div className={"print print--onlyOnPrint"}>
                                <Image
                                className="Footer-sponsor__img Footer-sponsor__img--printable print print--onlyOnPrint"
                                alt="Agencia de Noticias"
                                src={logoAgenciaBlack}/>
                            </div>

                        </a></Link>
                    </li>
                    <li className="Footer-sponsors__item">
                        <Link href="https://www.contaduria.gov.co/"><a className={"Footer-sponsor"}>
                            <Image
                                className=""
                                alt="Contaduría General de la República"
                                src={logoContraloria}/>
                        </a></Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
