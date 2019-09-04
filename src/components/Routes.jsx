import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Form from '../pages/Form'

export default function Routes(){
    return <div>
        <Switch>
            <Route exact path='/' component= {Home}/>
            <Route path='/about' component= {About}/>
            <Route path='/contact' component= {Contact}/>
            <Route path='/form' component= {Form}/>
        </Switch>
    </div>
}