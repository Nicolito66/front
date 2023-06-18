import React, {useState} from "react";
import {TextField, Button} from "@mui/material";
import styles from './Home.module.css';
import axios from 'axios';


export function HomeComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");


    const register = async () => {
        let user = {
            id:"",
            username: username,
            password: password,
            mail: mail
        }
        try {
            console.log()
            const response = await axios.put(`http://localhost:8080/api/register`, user);
            console.log(response.data); // Optional: Handle the response data
        } catch (error) {
            console.error(error); // Optional: Handle the error
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
                            setUsername(e.target.value)
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
                    <Button variant="outlined" onClick={register}>Envoyer</Button>
                </div>
            </div>
        </div>
    );
}