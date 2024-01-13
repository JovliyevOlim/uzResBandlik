import React from 'react';
import './mainPage.css'
import {Link} from "react-router-dom";
import Search from "../../assets/SearchBlack.svg";
import ArrowDown from "../../assets/ArrowDownWhite.svg"
import MainPicture from '../../assets/Group 28.svg'
import ArrowRight from '../../assets/ArrowRightWhite.svg'

function MainPage(props) {
    return (
        <div className={'mainPage'}>
            <div className="container">
                <div style={{marginBottom:'8rem'}} className="row px-5">
                    <div className="col-md-6">
                        <h4 style={{color: '#ffffff'}} className={'mainPage-text'}>Mehnat va bandlik masalalari bo’yicha
                            460 savolga Javob</h4>
                        <p style={{color: '#ffffff'}} className={'mainPage-text2'}>
                            Mehnat va bandlik masalalari bo’yicha 460 savolga javob beradigan amaliy qo’llanma
                        </p>
                        <div className={'row d-flex '}>
                            <div className="col-md-4">
                                <div className="mainPage-search">
                                    <img src={Search} alt=""/>
                                    <input type="text" placeholder="Qidirish"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <buton className="mainPage-btn">
                                    Bo’limlar
                                    <img src={ArrowDown} alt=""/>
                                </buton>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div>
                            <img src={MainPicture} alt="mainPicture"/>
                        </div>
                    </div>
                </div>
                <div  className="row p-5 my-5">
                    <Link to={'/author'} className={'mainPageLink'}>
                        <p style={{color:'#ffffff'}}>Muallifning Izohi</p>
                        <img src={ArrowRight} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
