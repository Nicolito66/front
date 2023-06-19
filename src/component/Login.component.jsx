import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import type {User} from "../interfaces/User.interface";
import axios from "axios";

export function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let user: User = {
        id: "",
        username: username,
        password: password,
        mail: ""
    }

    const login = () => {
        axios.post(`http://localhost:8080/api/login`, user,{ withCredentials: false })
            .then((response) => {
                //FIXME: Passer le cookie dans le header au lieu du body
                const cookies = response.data;
                console.log(cookies); // Affiche les cookies dans l'en-tête

                document.cookie=`auth=${cookies}; expires=Thu, 19 Jun 2023 20:12:00 UTC; path=/`;

            })
    }
    return (
        <div><TextField
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
            <Button variant="outlined" onClick={login}>Envoyer</Button>
        </div>);
}