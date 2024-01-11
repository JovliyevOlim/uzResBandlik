import React from 'react';
import Footer from "../Footer/Footer";
import Router from "../../router/Router";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
    return (
        <>
            <div style={{background: "#559EEC", padding: '1.25rem'}}>
                <Navbar/>
            </div>
            <Router/>
            <Footer/>
        </>
    );
}

export default Layout;