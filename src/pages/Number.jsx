import React, { useState } from 'react'
import Axios from 'axios'

const url = 'http://localhost:3001'
const number = 0

export default function Number() {

    const [ token,setToken ] = useState('')
    const [ username,setUsername ] = useState('')
    const [ data,setData ] = useState('')

    async function handleLogin(e) {
        const res = await Axios.post(url+'/login', { username: 'admin'})
        setToken(res.data.token)
        // alert(`User `+username)
    }

    async function handleClick() {
        const res = await Axios.get(url, {
            headers:{
                'authorization': token
            }
        })
        console.log(res.data)
        setData(res.data)
    }
    return <div>
        <button className="button" onClick={handleLogin}>Login</button>
        {/* <form onSubmit={handleLogin}>
            <input className="input" name="username" defaultValue={username} type="text"/>
            <button className="button is-primary" type="submit">Sign Up</button>
        </form> */}
        
        <pre>{ token ? "Pass":"Fail"}</pre>
        <hr/>
        <pre>{ token }</pre>
        <hr/>
        <h1 className="title">Number</h1>
        <button className="button" onClick={handleClick}>Get Number</button>
        <pre>{ data }</pre>
    </div>
}