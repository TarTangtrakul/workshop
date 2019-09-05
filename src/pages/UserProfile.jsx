import React, { useState } from 'react'
import Axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users/'

export default function UserProfile(props) {

    const [ userId, setUserid ] = useState(props.match.params.id)
    const [ user, setUser ] = useState({});

    async function handleClick() {
        const data = await Axios.get(url+userId)
        setUser(data)
    }
    return <div>
        <h1 className="title">User Profile</h1>
        <p><button className="button is-primary" onClick={handleClick}>Get user id { userId }</button></p>
        <pre>{ JSON.stringify(user.data) }</pre>
    </div>
}