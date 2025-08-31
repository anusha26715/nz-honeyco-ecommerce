import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <img src="public/new-zealand-honey-logo.png" className='d-inline-block d-lg-none' alt="Newzealand Honeyco." />
            <div className="header-icon-container d-lg-none">
                <i className="bi bi-person"></i>
                <i className="bi bi-search"></i>
                <i className="bi bi-bag cart"></i>
            </div>
            <span className="navbar-brand d-none d-lg-inline-block" href="#">WHICH MANUKA IS FOR ME?</span>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mb-lg-0" style={{maxWidth:"20%"}}>
                <li className="nav-item">
                <Link to="">Shop</Link>
                </li>
                <li className="nav-item">
                <Link to="">Explore</Link>
                </li>
            </ul>
            <img src="public/new-zealand-honey-logo.png" className='d-none d-lg-block' alt="Newzealand Honeyco." />

            <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                <Link to="">About</Link>
                </li>
                <li className="nav-item">
                <Link to="">Rewards</Link>
                </li>
                <li className="nav-item">
                <Link to="">Contact</Link>
                </li>
            </ul>
            <div className="header-icon-container d-none d-lg-flex">
                <i className="bi bi-person"></i>
                <i className="bi bi-search"></i>
                <i className="bi bi-bag cart"></i>
            </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
