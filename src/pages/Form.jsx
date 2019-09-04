import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('John')
    const [surname, setSurname] = useState('Doe')
    const [age, setAge] = useState('0')
    const [gender, setGender] = useState('M')
    const [isSingle, setisSingle] = useState(true)

    const [rnd,setRnd] = useState(0)
    setTimeout(() => {
        setRnd(Math.floor(Math.random() * (50 - 10 + 1)) + 10)
    }, 1000);


    function handleChange(e){
        const value = e.target.value
        switch (e.target.name) {
            case 'name':
                setName(value)
                break;
            case 'surname':
                setSurname(value)
                break;
            case 'age':
                setAge(parseInt(value))
                break;
            case 'gender':
                setGender(value)
                break;
            case 'single':
                setisSingle(e.target.checked)
                break;
            default:
                break;
        } 
    }
    return <div>
        <h1 className="title">Form</h1>
        <pre>{JSON.stringify({name,surname,age,gender,isSingle,rnd})}</pre>
        <div className="field">
            <input name="single" onChange={handleChange} type="checkbox" defaultChecked={ isSingle } /> Single?
        </div>
        <div className="field">
            <input name="name" defaultValue={ name } onChange={ handleChange } type="text" className="input"/>
        </div>
        <div className="field">
            <input name="surname" defaultValue={ surname } onChange={ handleChange} type="text" className="input"/>
        </div>
        <div className="field">
            <input name="age" defaultValue={ age } onChange={ handleChange} type="number" className="input"/>
        </div>
        <div className="field">
            <input name="gender" onChange={handleChange} value="M" type="radio" defaultChecked={ gender ==='M' }/> Male
            <input name="gender" onChange={handleChange} value="F" type="radio" defaultChecked={ gender ==='F' }/> Female
        </div>
    </div>
}