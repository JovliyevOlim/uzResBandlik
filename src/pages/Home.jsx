import React, {useEffect, useState} from 'react';
import Category from "../component/Category/Category";
import Questions from "../component/Questions/Questions";
import MainPage from "../component/MainPage/MainPage";
import Footer from "../component/Footer/Footer";
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import upDown from "../assets/Frame 50.svg";

function Home(props) {


    const [view, setView] = useState(false)
    const location = useLocation()


    useEffect(() => {
        window.addEventListener('scroll', function () {
            console.log(`scrolly= ${window.scrollY}`, `innerheight=${window.innerHeight*2}`)
            if (window.scrollY> (window.innerHeight*3.5)) {
                setView(true)
            } else {
                setView(false)
            }
        })
    },[location.pathname,location.hash])

    return (
        <div id={'home'} className={'position-relative'}>
            <div>
                <MainPage/>
            </div>
            <Category/>
            <Questions/>
            {
                view && <HashLink to={'/#category'}>
                    <div className={'upDown'}>
                        <img src={upDown} alt=""/>
                    </div>
                </HashLink>
            }
            <Footer/>
        </div>
    );
}

export default Home;