import useAuth from "@hooks/useAuth";
import {useRouter} from "next/router";

const publicPaths = ["/","/auth/signin", "/auth/signup"];

export const AuthChecker = ({children}) => {
  const router = useRouter();
  const { user, isLoggedIn } = useAuth();


  if (publicPaths.includes(router.pathname)) return children

  if (typeof window !== 'undefined' && user === null ) router.push('/auth/signin');

  if(!isLoggedIn) return <h1>Cargando ... </h1> // a loading component that prevents the page from rendering

  return children;
}