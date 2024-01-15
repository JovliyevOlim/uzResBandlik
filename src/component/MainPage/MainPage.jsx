import React, {useState} from 'react';
import './mainPage.css'
import {Link, useNavigate} from "react-router-dom";
import Search from "../../assets/SearchBlack.svg";
import ArrowDown from "../../assets/ArrowDownWhite.svg"
import MainPicture from '../../assets/Group 28.svg'
import ArrowRight from '../../assets/ArrowRightWhite.svg'
import SearchCard from "../SearchCard/SearchCard";
import {searchQuestion} from "../Questions/questionsList";
import Navbar from "../Navbar/Navbar";

function MainPage(props) {


    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    function onSearch(e) {
        setSearch(e.target.value)
        const questions = searchQuestion(e.target.value)
        setResult(questions)
    }


    return (
        <div className={'mainPage'} >
            <Navbar/>
            <div className="container">
                <div  className="row px-2 px-lg-5 mb-5">
                    <div className="col-lg-6">
                        <h4 style={{color: '#ffffff'}} className={'mainPage-text'}>Меҳнат ва бандлик масалалари бўйича 460 саволга жавоб</h4>
                        <p style={{color: '#ffffff'}} className={'mainPage-text2'}>
                            Меҳнат ва бандлик масалалари бўйича 460 саволга жавоб берадиган амалий қўлланма
                        </p>
                        <div className={'row gap-lg-2 d-flex'}>
                            <div className="col-md-6 col-lg-6 col-xxl-4">
                                <div className='navbar-right'>
                                    <div className="navbar-search" onMouseLeave={()=>{
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
                            <div className="col-md-3 col-lg-3 col-xxl-4">
                                <a href={'#category'} className="mainPage-btn">
                                    Бўлимлар
                                    <img src={ArrowDown} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-flex justify-content-end">
                        <div className={'mainPage-img'}>
                            <img src={MainPicture} alt="mainPicture"/>
                        </div>
                    </div>
                </div>
                <div  className="row p-2 p-lg-5 my-5">
                    <Link to={'/author'} className={'mainPageLink'}>
                        <p style={{color:'#ffffff'}}>Муаллифнинг Изоҳи</p>
                        <img src={ArrowRight} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
