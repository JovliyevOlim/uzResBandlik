import React from 'react';
import Logo from '../../assets/Logo.svg'
import "../../App.css"
import "./navbar.css"
import Search from "../../assets/SearchBlack.svg"
function Navbar(props) {
    return (
        <div className="container mt-2 mb-3">
            <div className="navbar">
                <img src={Logo} alt=""/>
                <div className="sections">
                    <a href="Main">Asosiy</a>
                    <a href="Section">Bo'limlar</a>
                    <a href="Autor">Muallifning-qarashlari</a>
                </div>
                <div className="search d-flex">
                    <img src={Search} alt=""/>
                    <input type="text" placeholder="Qidirish"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
