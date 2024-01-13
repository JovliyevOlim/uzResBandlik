import React, {useState} from 'react';
import './footer.css'
import Logo from "../../assets/Logo.svg";
import Search from "../../assets/SearchBlack.svg";
import {Link} from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import {searchQuestion} from "../Questions/questionsList";

function Footer(props) {


    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    function onSearch(e) {
        setSearch(e.target.value)
        const questions = searchQuestion(e.target.value)
        setResult(questions)
    }

    return (
        <div className={'footer'}>
            <div className="container">
                <div className="row px-5 mb-5">
                    <div className="col-md-12  rounded-5 bg-white">
                        <div className="row d-flex  align-items-center justify-content-between">
                            <div className="col-md-3">
                                <img src={Logo} alt=""/>
                            </div>
                            <div className="col-md-5 d-flex justify-content-center">
                                <div className="navbar-items">
                                    <a href="home">Asosiy</a>
                                    <a href="Section">Bo'limlar</a>
                                    <a href="Autor">Muallifning Qarashlari</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className='navbar-right'>
                                    <div  className="navbar-search">
                                        <div className={'navbar-input'}>
                                            <img src={Search} alt=""/>
                                            <input onChange={onSearch} value={search} type="text" placeholder="Qidirish"/>
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
                <div style={{paddingTop:'6.25rem'}} className="row px-5">
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