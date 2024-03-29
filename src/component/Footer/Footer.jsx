import React, {useState} from 'react';
import './footer.css'
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/SearchBlack.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import {searchQuestion} from "../Questions/questionsList";
import {NavHashLink} from "react-router-hash-link";

function Footer(props) {


    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])
    const location = useLocation()

    function onSearch(e) {
        setSearch(e.target.value)
        const questions = searchQuestion(e.target.value)
        setResult(questions)
    }

    return (
        <div className={'footer'} >
            <div className="container">
                <div className="row px-2 px-lg-5 pb-lg-5 mb-5">
                    <div className="col-md-12  rounded-5 bg-white">
                        <div className="row d-flex  align-items-center justify-content-center justify-content-lg-between">
                            <div className="col-12 col-md-12 col-lg-3">
                                <img className={'navbar-logo'} src={Logo} alt=""/>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5 d-flex justify-content-center">
                                <div className="navbar-items">
                                    <NavHashLink className={`${location.pathname}${location.hash}` === "/#home" ? "navbar-item-active" : "navbar-item"}  to="/#home">Асосий</NavHashLink>
                                    <NavHashLink  className={`${location.pathname}${location.hash}` === "/#category" ? "navbar-item-active" : "navbar-item"} to="/#category">Бўлимлар</NavHashLink>
                                    <NavHashLink  className={`${location.pathname}${location.hash}` === "/author" ? "navbar-item-active" : "navbar-item"} to="/author">Муаллифнинг қарашлари</NavHashLink>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className='navbar-right'>
                                    <div  className="navbar-search" onMouseLeave={()=>{
                                        setSearch('')
                                    }}>
                                        <div className={'navbar-input'}>
                                            <img src={Search} alt=""/>
                                            <input onChange={onSearch} value={search} type="text" placeholder="Қидириш"/>
                                        </div>
                                        {
                                            search && <SearchCard maxHeight={'200px'} questions={result}/>

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="row px-5 pt-3 pt-md-5">
                    <div className="col-md-12">
                        <div className="footer-items">
                            <Link target={'_blank'} className={'footerLink'} to={'https://www.undp.org/uzbekistan'}>©
                                ПРООН, 2023 (undp.org/uzbekistan)</Link>
                            <Link target={'_blank'} className={'footerLink'} to={'https://www.undp.org/uzbekistan'}>©
                                БМТТД, 2023 (undp.org/uzbekistan)</Link>
                            <Link target={'_blank'} className={'footerLink'} to={'https://www.undp.org/uzbekistan'}>©
                                UNDP, 2023 (undp.org/uzbekistan)</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;