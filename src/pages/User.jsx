import React, {useState} from 'react'
import { Link } from 'react-router-dom'
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
        <div className="container columns">
            <table className="table column">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>fdfs</th>
                    </tr>
                </thead>
                <tbody>
                { users.map((each) => {
                    return <tr key= { each.id } >
                        <td>{ each.id }</td>
                        <td><Link to={'/user/'+each.id}>{ each.name }</Link></td>
                        <td>{ each.email }</td>
                        <td>{ each.address.geo.lat }</td>
                    </tr>
                }) }
                </tbody>
            </table>
        </div>
    </div>
    
}