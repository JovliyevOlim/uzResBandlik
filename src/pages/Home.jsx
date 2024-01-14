import React from 'react';
import Category from "../component/Category/Category";
import Questions from "../component/Questions/Questions";
import MainPage from "../component/MainPage/MainPage";
import Footer from "../component/Footer/Footer";

function Home(props) {
    return (
        <div id={'home'}>
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