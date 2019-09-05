import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Form from '../pages/Form'
import User from '../pages/User'
import UserProfile from '../pages/UserProfile'
import Numbers from '../pages/Number'

export default function Routes(){
    return <div>
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route path='/about' component= {About}/>
            <Route path='/contact' component= {Contact}/>
            <Route path='/form' component= {Form}/>
            <Route exact path='/user' component= {User}/>
            <Route path='/user/:id' component= {UserProfile}/>
            <Route path='/numbers' component= {Numbers}/>
        </Switch>
    </div>
}