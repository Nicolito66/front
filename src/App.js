/* eslint-disable */
import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {LoginComponent} from "./component/Login.component";
import {RegisterComponent} from "./component/Register.component";
import {MenuBarComponent} from "./menu/menu-bar.component";
import styles from './App.css';
import AccueilComponent from "./component/Accueil.component";


function App() {
    return (
        <div id="root">
            <BrowserRouter>
                <MenuBarComponent></MenuBarComponent>
                <Routes>
                    <Route index element={<AccueilComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/register" element={<RegisterComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

// function App() {
//     return (
//         <ResponsiveAppBar></ResponsiveAppBar>
//     );
// }

export default App;
