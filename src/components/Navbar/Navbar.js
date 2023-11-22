import React from 'react'

import { GiQueenCrown } from "react-icons/gi";


export default function Navbar() {
  return (

    <nav className="navbar navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <a className="py-2 text-white text-decoration-none fs-5" href="/">
        <GiQueenCrown  className="fs-3"/> Simple Conversion
        </a>
        
      </div>

    </nav>



  )
}
