import React, {useState} from "react";
import {TextField} from "@mui/material";
import styles from './Home.module.css';
import axios from 'axios';
import type {User} from "../interfaces/User.interface";
import VerificationComponent from "./Verification.component";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingButton from "@mui/lab/LoadingButton";
import {LABELS} from "../labels/interface-labels";


export function RegisterComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [showVerificationPage, setShowVerificationPage] = useState(false);
    const [registerUserId,setRegisterUserId] = useState("");
    const [loading,setLoading] = useState(false);

    let user: User = {
        id: "",
        username: username,
        password: password,
        mail: mail
    }

    const register = async () => {
        setLoading(true);
        try {
            axios.put(`http://localhost:8080/api/register`, user)
                .then((response) => {
                    if (response) {
                        setRegisterUserId(response.data.object.id)
                        setShowVerificationPage(true);
                    }
                }).catch(error => {
                    console.error(error);
            }).finally(() => {
                setLoading(false);
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
            {showVerificationPage ?
                (<VerificationComponent
                id={registerUserId}
                />) :
                (
                    <div className={styles.center}>
                        <div className={styles.registration}>
                            <TextField
                                id="standard-mail-input"
                                label="Mail"
                                autoComplete="current-mail"
                                variant="standard"
                                onChange={(e) => {
                                    setMail(e.target.value)
                                }}
                            />
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
                            <LoadingButton
                                onClick={register}
                                loading={loading}
                                loadingIndicator={<CircularProgress size={20} />}
                            >
                                {loading ? LABELS.LOADING : LABELS.REGISTER}
                            </LoadingButton>
                        </div>
                    </div>)
            }
        </div>
    );
}