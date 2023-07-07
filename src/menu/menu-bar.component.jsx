/* eslint-disable */
import React from "react";
import styles from './menu-bar.module.css';
import {useNavigate} from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";


interface MenuProps {
}

export function MenuBarComponent(props :MenuProps) {
const navigate = useNavigate();

const handleNavigation = (path:string) => {
    navigate(path)
}
    return (
        <div className={styles.menubar}>
            <div className={styles.list}>
                <div onClick={():void =>handleNavigation("/")}>Accueil</div>
                <div onClick={():void =>handleNavigation("/login")}>Se connecter</div>
                <div onClick={():void =>handleNavigation("/register")}>S'inscrire</div>
            </div>
        </div>
    );
}