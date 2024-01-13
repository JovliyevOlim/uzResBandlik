import React, {useState} from 'react';
import Logo from '../../assets/Logo.svg'
import "../../App.css"
import "./navbar.css"
import Search from "../../assets/SearchBlack.svg"
import {NavLink,useLocation} from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import {searchQuestion} from "../Questions/questionsList";
import {NavHashLink} from "react-router-hash-link";

function Navbar(props) {

    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const location = useLocation()
    function onSearch(e) {
        setSearch(e.target.value)
        const questions = searchQuestion(e.target.value)
        setResult(questions)
    }


    return (
        <div className="container">
            <div className="row px-5">
                <div className="col-md-12 p-4 rounded-5 bg-white">
                    <div className="row d-flex  align-items-center justify-content-between">
                        <div className="col-md-3">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="col-md-5">
                            <div className="navbar-items">
                                <NavHashLink className={`${location.pathname}${location.hash}` === "/main#home" ? "navbar-item-active" : "navbar-item"}  to="/main#home">Asosiy</NavHashLink>
                                <NavHashLink  className={`${location.pathname}${location.hash}` === "/main#category" ? "navbar-item-active" : "navbar-item"} to="/main#category">Bo'limlar</NavHashLink>
                                <NavHashLink  className={`${location.pathname}${location.hash}` === "/author" ? "navbar-item-active" : "navbar-item"} to="/author">Muallifning qarashlari</NavHashLink>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='navbar-right'>
                                <div className="navbar-search">
                                    <div className={'navbar-input'}>
                                        <img src={Search} alt=""/>
                                        <input onChange={onSearch} value={search} type="text" placeholder="Qidirish"/>
                                    </div>
                                    {
                                        search && <SearchCard maxHeight={'400px'} questions={result}/>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Navbar;
