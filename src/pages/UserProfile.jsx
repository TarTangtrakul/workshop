import React, { useState } from 'react'
import Axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users/'

export default function UserProfile(props) {

    const [ userId, setUserid ] = useState(props.match.params.id)
    const [ user, setUser ] = useState({});

    async function handleClick() {
        const res = await Axios.get(url+userId)
        setUser(res.data)
    }
    function handleChange(e) {
        const fieldName = e.target.name
        const value = e.target.value

        const newUser = {
            ...user,
            [fieldName]: value
        }
        setUser(newUser)
    }

    async function handleSave() {
        // insert
        //// const res = await Axios.post(url, user)
        //// console.log(res)

        // update
        //// const res = await Axios.put(url+userId, user)
        //// console.log(res)
        
        //delete 
        const res = await Axios.delete(url+userId)
        console.log(res)
    }

    return <div>
        <h1 className="title">User Profile</h1>
        <button className="button is-primary" onClick={handleSave}>Save</button>
        <button className="button" onClick={handleClick}>Get user id { userId }</button>
        <hr/>
        <pre>{ JSON.stringify(user) }</pre>
        <div className="field">
            <input defaultValue= { user.name } onChange={ handleChange } name="name" type="text" className="input"/>
        </div>
        <div className="field">
            <input defaultValue= { user.email } onChange={ handleChange } name="email" type="text" className="input"/>
        </div>
    </div>
}