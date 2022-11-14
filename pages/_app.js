import "@styles/global.scss";
import '@layout/AsideServicesNav/AsideServicesNav.scss';
import '@layout/AsideNav/AsideNav.scss';
import '@layout/Header/Header.scss';
import '@layout/Footer/Footer.scss';
import Layout from "@layout/index.layout";

function MyApp({Component, pageProps}) {
    return (
            <Layout>
                <Component {...pageProps} />
            </Layout>

    )
}

export default MyApp
