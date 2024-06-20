import { Button } from "./Button"
import { useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 font-bold">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 font-bold text-lg">
                Hello  {username.toUpperCase()} 👋
            </div>
            <div className=" flex justify-center mt-2 mr-2">
                <Button onClick={ () => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    navigate('/')
                
                }} label="Logout" />
            </div>
        </div>
    </div>
}