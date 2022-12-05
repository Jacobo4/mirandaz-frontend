import "@styles/global.scss";
import '@layout/AsideServicesNav/AsideServicesNav.scss';
import '@layout/AsideNav/AsideNav.scss';
import '@layout/Header/Header.scss';
import '@layout/Footer/Footer.scss';
import Layout from "@layout/index.layout";
import {AuthChecker} from "@components/AuthChecker/AuthCheker";
import { useRouter } from 'next/router'


function MyApp({Component, pageProps}) {
    const router = useRouter();

    return (
        <Layout>
            <AuthChecker>
                <Component {...pageProps} />
            </AuthChecker>
        </Layout>

    )
}

export default MyApp
