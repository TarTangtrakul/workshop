import React, { useState } from 'react'
import Axios from 'axios'
import Qrcode from 'qrcode'

const url = 'http://localhost:3001'
const number = 0

export default function Number() {

    const [ token,setToken ] = useState('')
    const [ dataUrl,setdataUrl ] = useState('')
    const [ data,setData ] = useState('')

    async function handleLogin(e) {
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
        setData(res.data)
    }
    
    async function handleRegister() {
        const res = await Axios.post(url+'/register')
        console.log(res.data)
        Qrcode.toDataURL(res.data.url, (err,dataUrl) => {
            setdataUrl(dataUrl)
        })
    }

    return <div>
        <button className="button" onClick={handleLogin}>Login</button>
        
        <button className="button is-primary" onClick={handleRegister} type="submit">Sign Up</button>
        
        <pre>{ token ? "Pass":"Fail"}</pre>
        {
            dataUrl && <img src={dataUrl} alt="qrcode"/>
        }
        
        <hr/>
        <pre>{ token }</pre>
        <hr/>
        <h1 className="title">Number</h1>
        <button className="button" onClick={handleClick}>Get Number</button>
        <pre>{ data }</pre>
    </div>
}