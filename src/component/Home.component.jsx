import React from "react";
import {RegisterComponent} from "./Register.component";
import {LoginComponent} from "./Login.component";
import styles from './Home.module.css';

export function HomeComponent() {


    return (<div style={styles.page}>
            <RegisterComponent/>
            <LoginComponent/>
    </div>);
}