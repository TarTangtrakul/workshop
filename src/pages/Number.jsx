import React from 'react'
import Axios from 'axios'

const url = 'http://localhost:3001'

export default function Number() {

    async function handleClick() {
        const res = await Axios.get(url)
        console.log(res.data)
    }
    return <div>
        <h1 className="title">Number</h1>
        <button className="button" onClick={handleClick}>Get Number</button>
    </div>
}