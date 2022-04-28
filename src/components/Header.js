import React from 'react'
import logo from './favicon.png';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = () => {

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
                <a href="/" className="h2">ADSiWALL</a>
                <a href="/about" className="h4 nav-items">About</a>
                <a href="/contact" className="h4 nav-items">Contact</a>

                <input type="checkbox" className="menu" onClick={onClick} />
                <input type="checkbox" className="menu-sec" onClick={onSecClick} />

                <div className="menu-content">
                    <a href="/"><i className="fa fa-home">Home</i></a>
                    <a href="/about"><i className="fa fa-circle-info">About</i></a>
                    <a href="/contact"><i className="fa fa-user">Contact</i></a>
                </div>
            </nav>
        </>
    )
}

