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
            id: "",
            username: username,
            password: password,
            mail: mail
        }
        try {
            axios.put(`http://localhost:8080/api/register`, user).then((response) => {
                console.log(response.data);
            });
        } catch (error) {
            // Gérer les erreurs de requête
            if (error.response) {
                // Réponse reçue avec un code d'erreur HTTP
                const errorMessage = error.response.data.message;
                console.error(errorMessage);
            } else if (error.request) {
                // Aucune réponse reçue du serveur
                console.error('Pas de réponse du serveur');
            } else {
                // Erreur lors de la requête
                console.error('Erreur lors de la requête', error.message);
            }
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