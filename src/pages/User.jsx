import React, {useState} from 'react'
import Axios from 'axios'


const url = 'https://jsonplaceholder.typicode.com/users/'

export default function User() {

    const [users, setUsers] = useState([])

    async function handleClick() {
    
        //    Axios.get(url)
        //         .then((res)=>{
        //             console.log(res.data)
        //         })

        const res = await Axios.get(url)
        setUsers(res.data)
        //console.log(res.data)
        //console.log('ok') 
    }
    return <div>
        <h1 className="title">User</h1>
        <button className="button is-primary" onClick={handleClick}>Get Users</button>
        <pre> { JSON.stringify(users) }</pre>
        { users.map((each) => {
            return <p key= { each.id } >{ each.name }</p>
        }) }
    </div>
    
}