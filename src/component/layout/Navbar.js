import React from 'react'

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-light bg-dark ">
                <div className="container">
                  <div className="navbar-header">
                  <h1 className="navbar-brand text-white text-lg brand-text">MovesSeriesInfo</h1>
                </div>
                <div className="icon">
                    <ul className="navbar-nav text-light">
                        <li className="nav-item ">
                            <i className="fab fa-imdb fa-5x" id="imdl-logo"></i>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export  default Navbar;