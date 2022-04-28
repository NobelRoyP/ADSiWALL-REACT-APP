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

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <Link to="/" className="h2">ADSiWALL</Link>
                <Link to="/about" className="h4 nav-items">About</Link>
                <Link to="/contact" className="h4 nav-items">Contact</Link>

                <input type="checkbox" className="menu" onClick={onClick} />
                <input type="checkbox" className="menu-sec" onClick={onSecClick} />

                <div className="menu-content">
                    <Link to="/"><i className="fa fa-home">Home</i></Link>
                    <Link to="/about" ><i className="fa fa-circle-info">About</i></Link>
                    <Link to="/contact" ><i className="fa fa-user">Contact</i></Link>
                </div>
            </nav>
        </>
    )
}
export default Header

