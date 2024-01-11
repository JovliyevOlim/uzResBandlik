import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Category from "../component/Category/Category";
import Questions from "../component/Questions/Questions";
import MainPage from "../component/MainPage/MainPage";

function Home(props) {
    return (
        <div>
            <div>
                <MainPage/>
            </div>
            <Category/>
            <Questions/>
        </div>
    );
}

export default Home;