
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

    const openCategoriesMenu = () => {
        var CategoriesMenu = document.querySelector(".categories-menu");
        var CategoriesOpenBtn = document.querySelector(".open-btn");
        var CategoriesCloseBtn = document.querySelector('.close-btn');

        CategoriesMenu.style.opacity="1";
        CategoriesMenu.style.pointerEvents="auto";
        CategoriesOpenBtn.style.display="none";
        CategoriesCloseBtn.style.display="flex";
    }

    const closeCategoriesMenu = () => {
        var CategoriesMenu = document.querySelector('.categories-menu');
        var CategoriesCloseBtn = document.querySelector('.close-btn');
        var CategoriesOpenBtn = document.querySelector(".open-btn");

        CategoriesMenu.style.opacity="0";
        CategoriesMenu.style.pointerEvents="none";
        CategoriesCloseBtn.style.display="none";
        CategoriesOpenBtn.style.display="flex";
    }

    const CategoriesMenuClose = () => {
        var CategoriesMenu = document.querySelector('.categories-menu');
        var CategoriesCloseBtn = document.querySelector('.close-btn');
        var CategoriesOpenBtn = document.querySelector(".open-btn");

        CategoriesMenu.style.opacity="0";
        CategoriesMenu.style.pointerEvents="none";
        CategoriesCloseBtn.style.display="none";
        CategoriesOpenBtn.style.display="flex";
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
                <a href="https://allaboutadsiwall.netlify.app/" className="h4 nav-items">Help</a>
                <Link to="/add-photo" className="btn btn-success">Add</Link>

                <input type="checkbox" className="menu" onClick={onClick} />
                <input type="checkbox" className="menu-sec" onClick={onSecClick} />

                <div className="menu-content">
                    <Link to="/" onClick={onLinkClick}><i className="fa-solid fa-home">Home</i></Link>
                    <Link to="/about" onClick={onLinkClick}><i className="fa-solid fa-circle-info">About</i></Link>
                    <Link to="/contact" onClick={onLinkClick}><i className="fa-solid fa-user">Contact</i></Link>
                    <a href="https://allaboutadsiwall.netlify.app/" onClick={onLinkClick}><i className="fa-solid fa-circle-question">Help</i></a>
                </div>
                <button className="categories-btn open-btn" onClick={openCategoriesMenu}>Categories <i className="fa-solid fa-chevron-down"></i></button>
                <button className="categories-btn close-btn" onClick={closeCategoriesMenu}>Categories <i className="fa-solid fa-chevron-down"></i></button>
                <div className="categories-menu">
                    <Link to="/" onClick={CategoriesMenuClose}><i class="fa-brands fa-instagram"></i>Instagram</Link><br/>
                    <Link to="/youtube" onClick={CategoriesMenuClose}><i class="fa-brands fa-youtube"></i>Youtube</Link><br/>
                    <Link to="/website" onClick={CategoriesMenuClose}><i class="fa-solid fa-earth-asia"></i>Website</Link><br/>
                    <Link to="/shoppingsite" onClick={CategoriesMenuClose}><i class="fa-solid fa-bags-shopping"></i>Shopping Site</Link><br/>
                    <Link to="/facebook" onClick={CategoriesMenuClose}><i class="fa-brands fa-facebook"></i>Facebook</Link><br/>
                    <Link to="/twitter" onClick={CategoriesMenuClose}><i class="fa-brands fa-twitter"></i>Twitter</Link><br/>
                    <Link to="/blog" onClick={CategoriesMenuClose}><i class="fa-solid fa-book-open"></i>Blog</Link><br/>
                </div>
            </nav>
        </>
    )
}
export default Header
