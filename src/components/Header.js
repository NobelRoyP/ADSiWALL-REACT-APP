import React from 'react'
import logo from './favicon.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const Header = () => {

    const onSecClick = () => {
        var Menu = document.querySelector('.menu-content')
        var MenuSec = document.querySelector('.menu-sec')
        var MenuFirst = document.querySelector('.menu')

        Menu.style.visibility = "visible"
        MenuSec.style.visibility = "hidden"
        MenuFirst.style.display = "flex"
        MenuFirst.style.pointerEvents = "auto"
    }

    const onClick = () => {
        var Menu = document.querySelector('.menu-content')
        var MenuSec = document.querySelector('.menu-sec')
        var MenuFirst = document.querySelector('.menu')

        Menu.style.visibility = "hidden"
        MenuFirst.style.display = "none"
        MenuFirst.style.pointerEvents = "none"
        MenuSec.style.visibility = "visible"


    }

    const onLinkClick = () => {
        var Menu = document.querySelector('.menu-content')
        var MenuSec = document.querySelector('.menu-sec')
        var MenuFirst = document.querySelector('.menu')

        Menu.style.visibility = "hidden"
        MenuFirst.style.display = "none"
        MenuFirst.style.pointerEvents = "none"
        MenuSec.style.visibility = "visible"
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <h1><Link to="/" className="h2">ADSiWALL</Link></h1>
                <Link to="/about" className="h4 nav-items">About</Link>
                <Link to="/contact" className="h4 nav-items">Contact</Link>
                <a href="https://allaboutadsiwall.netlify.app/" className="h4 nav-items">Help ?</a>
                <Link to="/add-photo" className="btn btn-success">Add</Link>

                <input type="checkbox" className="menu" onClick={onClick} />
                <input type="checkbox" className="menu-sec" onClick={onSecClick} />

                <div className="menu-content">
                    <Link to="/" onClick={onLinkClick}><i className="fa fa-home">Home</i></Link>
                    <Link to="/about" onClick={onLinkClick}><i className="fa fa-circle-info">About</i></Link>
                    <Link to="/contact" onClick={onLinkClick}><i className="fa fa-user">Contact</i></Link>
                    <a href="https://allaboutadsiwall.netlify.app/" onClick={onLinkClick} className="fa">? Help</a>
                </div>
            </nav>
        </>
    )
}
export default Header

