import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users/'

export default function UserProfile(props) {

    const [ userId, setUserid ] = useState(props.match.params.id)
    const [ user, setUser ] = useState({});
    //const [ test, setTest ] = useState(0);

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
        //setTest(test+1)
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

    //ไว้ก่อน รีเทิร์น แล้วให้มันเรียกใช้ฟังชันตอนโหลดหน้า
    useEffect(()=>{
        console.log(test)
        handleClick()
    },[]) // []<- ใส่แบบนี้เพื่อเรียกครั้งเดียว หรือ ถ้าใส่เพื่อเรียกเมื่อมีค่าบางค่าเปลี่ยนแปลง [test], [tset,test,testse]

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