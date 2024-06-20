
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

useEffect(() => {
    token ? navigate('/dashboard') : navigate('/signin')
},[])

    return(
        <> 
        
        </>
    )

}


export { Home }
