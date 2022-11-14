import AsideServicesNav from './AsideServicesNav/AsideServicesNav';
import Header from './Header/Header.layout';
import Footer from './Footer/Footer.layout';
import AsideNav from "@layout/AsideNav/AsideNav";



const Layout = ({children}) => {


    return (
        <>
            <div className="App">
                <Header/>
                <AsideServicesNav/>
                <AsideNav/>
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
};


export default Layout;