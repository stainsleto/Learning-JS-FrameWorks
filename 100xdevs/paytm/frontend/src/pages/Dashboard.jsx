import { useState, useEffect } from 'react'
import {Appbar} from '../components/Appbar'
import {Balance} from '../components/Balance'
import {Users} from '../components/Users'
import axios from 'axios'
const Dashboard = () => {

    const [balance,setBalance] = useState(0)

    useEffect(  () => {

        const fetch = async () => {

        const response =  await axios.get('http://localhost:3000/api/v1/account/balance',{
            headers: {
                 'Authorization' : `Bearer ${localStorage.getItem('token')}` 
            }
        })
        setBalance((response.data.balance).toFixed(2))
    }
    fetch()
    },[])

    return(
        <div className='base-font'>
            <Appbar />
            <div className='m-8'>
                <Balance value={balance} />
            </div>
            <Users />
        </div>
    )
}


export {Dashboard}