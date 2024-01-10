import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";


function Router(props) {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/home'}/>}/>
            <Route path={'/home'} element={<Home/>}/>
        </Routes>
    );
}

export default Router;