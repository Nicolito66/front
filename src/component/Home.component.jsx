import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import styles from './Home.module.css';
import axios from 'axios';


export function HomeComponent() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");


    function sendRegistration() {
        let jsonRegistration = {
            login: login,
            password: password,
            mail: mail
        }
        console.log(jsonRegistration);
        try {
            axios.put("http://localhost:2222/", jsonRegistration)
        } catch (error) {
            console.error("Une erreur est survenue lors de l'envoie", error);
        }
    }


    return (
        <div className={styles.page}>

            <div className={styles.center}>
                <div className={styles.registration}>
                    <TextField
                        id="standard-login-input"
                        label="Login"
                        autoComplete="current-login"
                        variant="standard"
                        onChange={(e) => {
                            setLogin(e.target.value)
                        }}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <TextField
                        id="standard-mail-input"
                        label="Mail"
                        autoComplete="current-mail"
                        variant="standard"
                        onChange={(e) => {
                            setMail(e.target.value)
                        }}
                    />
                    <Button variant="outlined" onClick={sendRegistration}>Envoyer</Button>
                </div>
            </div>
        </div>
    );
}