import React,{ useState } from 'react'
import Helmet from 'react-helmet'
import 'bulma/css/bulma.min.css'

import Routes from './components/Routes'
import Navbar from './components/Navbar'

export default function App(){
   return <div>
   <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet" />
   </Helmet>
    <section className="section">
      <div className="container" style= { {fontFamily: 'Kanit'} }>
        <h1 className="title">สวัสดี Hello World.</h1>
        <Navbar/>
        <hr/>
        <Routes />
      </div>
    </section>
  </div>
}