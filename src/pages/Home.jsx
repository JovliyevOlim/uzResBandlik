import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Category from "../component/Category/Category";
import Questions from "../component/Questions/Questions";

function Home(props) {
    return (
        <div>
            Home page
            <Category/>
            <Questions/>
        </div>
    );
}

export default Home;