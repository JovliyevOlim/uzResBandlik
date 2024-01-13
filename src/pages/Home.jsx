import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Category from "../component/Category/Category";
import Questions from "../component/Questions/Questions";
import MainPage from "../component/MainPage/MainPage";
import Footer from "../component/Footer/Footer";

function Home(props) {
    return (
        <div id={'home'}>
            <div style={{background: "#5654A4", padding: '1.25rem'}}>
                <Navbar/>
            </div>
            <div>
                <MainPage/>
            </div>
            <Category/>
            <Questions/>
            <Footer/>
        </div>
    );
}

export default Home;