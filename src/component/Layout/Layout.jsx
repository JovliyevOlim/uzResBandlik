import React from 'react';
import Footer from "../Footer/Footer";
import Router from "../../router/Router";
import Navbar from "../Navbar/Navbar";

function Layout(props) {
    return (
        <>
            <div style={{background: "#5654A4", padding: '1.25rem'}}>
                <Navbar/>
            </div>

            
            <Router/>
            <div style={{paddingTop:'5rem'}}>
                <Footer/>
            </div>
        </>
    );
}

export default Layout;