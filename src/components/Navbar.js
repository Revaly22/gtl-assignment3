import React from 'react'
import '../css/layout.css';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
      <div class="container">
        <a href="#">Hulk</a>
        {/* < Currently Active > */}
        <a href="#" class="logo is-active">Mavel</a>
        <a href="#">Venom</a>
      </div>
    </nav>
        </div>
    )
}
