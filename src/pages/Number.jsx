import React, { useState } from 'react'
import Axios from 'axios'

const url = 'http://localhost:3001'

export default function Number() {

    const [ token,setToken ] = useState('')
    async function handleLogin() {
        const res = await Axios.post(url+'/login', { username: 'admin'})
        setToken(res.data.token)
    }

    async function handleClick() {
        const res = await Axios.get(url, {
            headers:{
                'authorization': token
            }
        })
        console.log(res.data)
    }
    return <div>
        <button className="button" onClick={handleLogin}>Login</button>
        <hr/>
        <h1 className="title">Number</h1>
        <button className="button" onClick={handleClick}>Get Number</button>
    </div>
}