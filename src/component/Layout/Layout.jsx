import React from 'react';
import Footer from "../Footer/Footer";
import Router from "../../router/Router";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
    return (
        <>
            <Navbar/>
            <Router/>
            <Footer/>
        </>
    );
}

export default Layout;