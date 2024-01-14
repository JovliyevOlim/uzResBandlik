import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import AuthorPage from "../component/AuthorPage/AuthorPage";


function Router(props) {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/author'} element={<AuthorPage/>}/>
        </Routes>
    );
}

export default Router;