import React from 'react';
import Logo from '../../assets/Logo.svg'
import "../../App.css"
import "./navbar.css"
import Search from "../../assets/SearchBlack.svg"
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="container">
            <div className="row px-4">
                <div className="col-md-12 p-4 rounded-5 bg-white">
                    <div  className="row d-flex  align-items-center justify-content-between">
                        <div className="col-md-3">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="col-md-5">
                            <div className="navbar-items">
                                <a href="home">Asosiy</a>
                                <a href="Section">Bo'limlar</a>
                                <a href="Autor">Muallifning Qarashlari</a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="navbar-search">
                                <img src={Search} alt=""/>
                                <input type="text" placeholder="Qidirish"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Navbar;
