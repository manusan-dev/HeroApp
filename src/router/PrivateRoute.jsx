import { useContext } from "react"
import { AuthContext } from "../authentication/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    
    // para recordar la ultima pagina visita al dar logout
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    // para recordar la ultima pagina visita al dar logout

  return (logged)
            ? children
            : <Navigate to={"/login"}/>
        }
